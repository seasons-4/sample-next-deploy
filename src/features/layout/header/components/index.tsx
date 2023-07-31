'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { memo } from 'react'

import { StyledLink } from '~/src/components/elements/Link'
import UserIcon from '~/src/features/layout/header/components/Icon/User'
import { APP_TITLE } from '~/src/features/layout/header/constants'
import { useWindowSize } from '~/src/hooks/useWindowSize'

const HeaderContents: React.FC = () => {
  const { isMobile } = useWindowSize()
  const { data, status } = useSession()
  const pathname = usePathname()

  return (
    <nav className='flex h-full w-full items-center justify-between border-b bg-white px-6 py-2 shadow sp:px-3 sp:py-1'>
      <Link href='/' className='font-Potta text-5xl text-black sp:text-3xl'>
        {APP_TITLE}
      </Link>

      {status === 'authenticated' ? (
        <div className='flex items-center sp:flex-row sp:items-center sp:gap-2'>
          {!isMobile && data.user.name}
          <UserIcon />
        </div>
      ) : (
        <StyledLink href={pathname === '/user/login' ? undefined : '/user/login'}>login</StyledLink>
      )}
    </nav>
  )
}

export default HeaderContents
export const MemoHeaderContents = memo(HeaderContents)
