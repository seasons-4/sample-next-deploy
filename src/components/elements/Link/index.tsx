import Link from 'next/link'

type Props = {
  children: React.ReactNode
  href?: string
}

export const StyledLink = ({ children, href }: Props) => {
  if (href === undefined) {
    return <span className='text-gray-500 underline'>{children}</span>
  }

  return (
    <Link href={href}>
      <span className='text-blue-700 underline hover:cursor-pointer'>{children}</span>
    </Link>
  )
}
