import { HasuraAdapter } from '@skillrecordings/next-auth-hasura-adapter'
import * as jsonwebtoken from 'jsonwebtoken'
import NextAuth, { NextAuthOptions } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import CredentialsProvider from 'next-auth/providers/credentials'
import { firebaseAdmin } from '~/src/libs/FirebaseAdmin'
import { createHasuraClient } from '~/src/libs/HasuraClient'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        idToken: { label: 'Token', type: 'text' },
      },
      authorize: async (credentials) => {
        if (!credentials || !('idToken' in credentials)) return null
        const { idToken } = credentials

        try {
          const decoded = await firebaseAdmin.auth().verifyIdToken(idToken)
          if (!('uid' in decoded)) return null
          const user = await firebaseAdmin.auth().getUser(decoded.uid)
          const name = user.displayName || user.email?.replace(/@.*$/, '') || ''
          // TODO: HASURAのPermissionを適切に設定し、それに合わせてここの更新方針を変更すること
          await createHasuraClient().UpsertUser({
            auth_id: user.uid || '',
            name,
          })

          return {
            id: user.uid,
            name,
            email: user.email,
          }
        } catch (error) {
          console.error('Failed to verify ID token:', error)
        }

        return null
      },
    }),
  ],
  adapter: HasuraAdapter({
    endpoint: process.env.HASURA_GRAPHQL_ENDPOINT || '',
    adminSecret: process.env.HASURA_ADMIN_SECRET || '',
  }),
  session: {
    maxAge: 60 * 60, // 1 hour
    strategy: 'jwt',
  },
  jwt: {
    encode: ({ secret, token }) => {
      const encodedToken = jsonwebtoken.sign(token || '', secret, {
        algorithm: 'HS256',
      })
      return encodedToken
    },
    decode: async ({ secret, token }) => {
      const decodedToken = jsonwebtoken.verify(token || '', secret, {
        algorithms: ['HS256'],
      })
      return decodedToken as JWT
    },
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id
      }
      return {
        ...token,
        'https://hasura.io/jwt/claims': {
          'x-hasura-allowed-roles': ['user'],
          'x-hasura-default-role': 'user',
          'x-hasura-role': 'user',
          'x-hasura-user-id': token.id,
        },
      }
    },
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.id
      }
      return session
    },
  },
  secret: process.env.HASURA_GRAPHQL_JWT_SECRET,
}

export default NextAuth(authOptions)
