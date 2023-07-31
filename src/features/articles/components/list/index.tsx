import { Fragment } from 'react'
import { ArticleState } from '~/src/features/articles'
import type { GetArticlesQuery } from '~/src/graphql/generated'
import { ArticleFC } from './Item'
import { PagingFC } from './Page'

type Props = {
  contents: GetArticlesQuery['articles']
  aggregate: number
  page: number
}

export const ArticleListFC: React.FC<Props> = ({ contents, aggregate, page }) => {
  const articles = contents.map<ArticleState>((article) => {
    return { ...article, punch_line: { value: article.punch_line, isOpen: false } }
  })

  return (
    <Fragment>
      {articles.map((article) => {
        return <ArticleFC key={`article-${article.id}`} content={article} />
      })}
      <nav className='mt-6'>
        <PagingFC aggregate={aggregate} page={page} />
      </nav>
    </Fragment>
  )
}

/*
type ArticleStateAction = {
  type: 'open-pl'
  payload: ArticleState
}
// MEMO: List全体を状態管理した際のロジック
const useArticleListState = (contents: Articles[]) => {
  const state = contents.map<ArticleState>((article) => {
    return { ...article, punch_line: { value: article.punch_line, isOpen: false } }
  })

  const reducer = (state: ArticleState[], action: ArticleStateAction): ArticleState[] => {
    switch (action.type) {
      case 'open-pl': {
        return state.map((v) => ({
          ...v,
          punch_line: { ...v.punch_line, isOpen: v.id === action.payload.id || v.punch_line.isOpen },
        }))
      }
      default:
        return state
    }
  }

  const [articles, dispatch] = useReducer(reducer, state)

  return {
    articles,
    dispatch,
  }
}
*/
