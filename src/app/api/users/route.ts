import { QueryClient } from '@tanstack/react-query'
import { getServerSession } from 'next-auth'
import { getToken } from 'next-auth/jwt'
import { cookies, headers } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { createHasuraClient, getTokenHeader } from '~/src/libs/HasuraClient'
import { authOptions } from '~/src/libs/next-auth'

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return new Response('no session', {
      status: 400,
    })
  }

  try {
    const token = await getToken({
      req: {
        headers: Object.fromEntries(headers()),
        cookies: Object.fromEntries(
          cookies()
            .getAll()
            .map((c) => [c.name, c.value]),
        ),
      } as any,
      secret: process.env.HASURA_GRAPHQL_JWT_SECRET,
      raw: true,
    })
    const queryClient = new QueryClient()
    const { GetUsersByName } = createHasuraClient(token ? getTokenHeader(token) : undefined)
    const contents = await queryClient.fetchQuery(['users'], () =>
      GetUsersByName({ name: String(req.nextUrl.searchParams.get('name') || '') }),
    )

    return NextResponse.json(contents.users)
  } catch {
    return new Response('error occurred', {
      status: 400,
    })
  }
}
