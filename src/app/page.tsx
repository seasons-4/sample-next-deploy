import { StyledLink } from '~/src/components/elements/Link'
import { TopLayout } from '~/src/components/layouts'

export default function TopPage() {
  return (
    <TopLayout>
      <article className='flex h-full flex-col items-center justify-center px-2'>
        <h1 className='text-2xl'>野党.appとは</h1>
        <p>霜降り明星のオールナイトニッポンの名物企画「野党」をユーザー投稿型のアプリ化したもの</p>
        <StyledLink href='/articles'>→投稿をみる</StyledLink>
      </article>
    </TopLayout>
  )
}
