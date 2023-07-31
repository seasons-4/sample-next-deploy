import type { Articles, GetArticlesQuery } from '~/src/graphql/generated'

export type PunchLine = { value: Articles['punch_line']; isOpen: boolean }

export type ArticleState = Omit<GetArticlesQuery['articles'][number], 'punch_line'> & {
  punch_line: PunchLine
}

export type PostArticleState = Record<'lead' | 'punch', string | null>
