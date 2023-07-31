import { TopLayout } from '~/src/components/layouts'

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <TopLayout>
      <div className='px-[10%] pt-3 sp:px-[5%]'>{children}</div>
    </TopLayout>
  )
}
