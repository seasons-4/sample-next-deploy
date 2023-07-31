import { getServerSession } from 'next-auth'
import { getToken } from 'next-auth/jwt'
import { cookies, headers } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { insertArticle } from '~/src/features/articles'
import { authOptions } from '~/src/libs/next-auth'

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return new Response('no session', {
      status: 400,
    })
  }

  const { lead, punch } = await req.json()
  if (!lead || !punch) {
    return new Response('invalid arguments', {
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
    const content = { lead: lead, punch: punch, userId: session.user.id }
    const insert = await insertArticle(content, token)

    return NextResponse.json(insert.insert_articles_one)
  } catch {
    return new Response('error occurred', {
      status: 400,
    })
  }
}
