import type { User, Session } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import type { DefaultJWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface Session {
    user: JWT
  }

  interface User {
    id: string
  }
}

// MEMO: src/pages/api/auth/[...nextauth].ts の firebaseAdmin.auth().verifyIdToken()で取得した値となるが、簡易的に以下のみ記載
declare module 'next-auth/jwt' {
  type JWT = {
    id: string
  } & DefaultJWT
}
