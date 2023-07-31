'use client'

import Image from 'next/image'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import NavigateBefore from '~/public/navigate-before.svg'
import NavigateNext from '~/public/navigate-next.svg'

type LinkableTextTagName = 'Link' | 'span'
type LinkableTextFC = (arg: {
  children: React.ReactNode
  TagName: LinkableTextTagName
  props: Parameters<LinkableTextFC>[0]['TagName'] extends LinkableTextTagName[0]
    ? LinkProps
    : React.ComponentProps<'span'>
}) => React.ReactNode

type Props = {
  aggregate: number
  page: number
}

export const PagingFC: React.FC<Props> = ({ aggregate, page }) => {
  const path = usePathname()

  const LinkableText: LinkableTextFC = ({ children, TagName, props }) => {
    if (TagName === 'Link') {
      return <Link {...props}>{children}</Link>
    }
    return <TagName {...props}>{children}</TagName>
  }

  return (
    <div className='flex w-full flex-row justify-center'>
      <LinkableText
        TagName={page < 2 ? 'span' : 'Link'}
        props={{ href: `${path}?page=${page - 1}` }}
      >
        <Image
          src={NavigateBefore}
          alt='go to previous page'
          className={`${page < 2 ? 'opacity-20' : ''}`}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </LinkableText>

      <LinkableText
        TagName={page >= aggregate / 10 ? 'span' : 'Link'}
        props={{ href: `${path}?page=${page + 1}` }}
      >
        <Image
          src={NavigateNext}
          alt='go to next page'
          className={`${page >= aggregate / 10 ? 'opacity-20' : ''}`}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </LinkableText>
    </div>
  )
}
