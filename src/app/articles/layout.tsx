import { TopLayout } from '~/src/components/layouts'

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  return (
    <TopLayout>
      <div className='py-4 sp:px-4'>{children}</div>
    </TopLayout>
  )
}
