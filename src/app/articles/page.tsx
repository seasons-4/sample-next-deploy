import { getToken } from 'next-auth/jwt'
import { cookies, headers } from 'next/headers'
import { Fragment } from 'react'
import { ArticleListFC, PostArticleModalFC } from '~/src/features/articles'
import { GetArticlesQueryVariables } from '~/src/graphql/generated'
import { createHasuraClient, getTokenHeader } from '~/src/libs/HasuraClient'

async function getArticles({ page }: { page: number } = { page: 1 }) {
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

  const { GetArticles } = createHasuraClient(token ? getTokenHeader(token) : undefined)
  const offset = page - 1 > 0 ? (page - 1) * 10 : 0
  const articlesOption: GetArticlesQueryVariables = {
    offset,
  }

  return GetArticles(articlesOption)
}

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: Partial<{ page: string }>
}) {
  const page = Number(searchParams.page || 1)
  const { articles, articles_aggregate } = await getArticles({ page })

  return (
    <Fragment>
      <ArticleListFC
        contents={articles || []}
        aggregate={articles_aggregate?.aggregate?.count || 0}
        page={page}
      />
      <PostArticleModalFC />
    </Fragment>
  )
}
