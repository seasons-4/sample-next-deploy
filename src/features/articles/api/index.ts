import { QueryClient, useQuery } from '@tanstack/react-query'
import {
  GetArticlesQuery,
  GetArticlesQueryVariables,
  InsertArticleMutationVariables,
} from '~/src/graphql/generated'
import { createHasuraClient, getTokenHeader } from '~/src/libs/HasuraClient'

const fetchArticles = (token?: string, option?: GetArticlesQueryVariables) => {
  // TODO: tokenのたらい回しを避ける方法を考える
  return createHasuraClient(token ? getTokenHeader(token) : undefined)
    .GetArticles(option)
    .then((res) => res.articles)
}

export const useFetchArticles = (
  queryClient: QueryClient,
  token?: string,
  option?: GetArticlesQueryVariables,
) => {
  return queryClient.fetchQuery(['articles'], () => fetchArticles(token, option))
}

export const useArticlesQuery = () => {
  return useQuery<GetArticlesQuery>(['articles'], {
    enabled: false,
  })
}

export const insertArticle = (val: InsertArticleMutationVariables, token?: string) => {
  return createHasuraClient(token ? getTokenHeader(token) : undefined).InsertArticle(val)
}
