import type { ReactNode, FC } from 'react'

type Props = {
  readonly children: ReactNode
}

const CenterContents: FC<Props> = ({ children }) => {
  return (
    <main className='flex h-full w-full flex-col items-center justify-center'>
      <div className='h-full w-2/3 sp:w-[100%]'>{children}</div>
    </main>
  )
}

export default CenterContents
