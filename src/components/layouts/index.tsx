import type { ReactNode, FC } from 'react'
import { MemoHeaderContents } from '~/src/features/layout/header/components'
import CenterContents from '~/src/features/layout/main/CenterContents'

type Props = {
  readonly children: ReactNode
}

export const TopLayout: FC<Props> = ({ children }) => {
  return (
    <div className='h-screen w-screen font-mono text-base'>
      <header className='sticky top-0 z-10 h-[4rem] w-full sp:h-[3rem]'>
        <MemoHeaderContents />
      </header>
      <div className='flex h-[calc(100%-4rem)] w-full flex-col sp:h-[calc(100%-3rem)]'>
        <CenterContents>{children}</CenterContents>
      </div>
    </div>
  )
}
