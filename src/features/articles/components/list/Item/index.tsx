'use client'

import Image from 'next/image'
import { useState } from 'react'
import Mail from '~/public/mail.svg'
import type { ArticleState } from '~/src/features/articles'

type Props = {
  content: ArticleState
}

export const ArticleFC: React.FC<Props> = ({ content }) => {
  const [isOpen, setIsOpen] = useState(content.punch_line.isOpen)

  return (
    <article className='flex max-w-full flex-row items-start rounded border-2 border-gray-300 bg-gray-100 px-2 py-1 sp:flex-col sp:px-0 [&:not(:last-of-type)]:mb-4'>
      <section className='flex h-full w-[20%] flex-col items-center sp:mb-1 sp:w-full sp:flex-row sp:border-b-2'>
        <Image
          src={Mail}
          alt='contributor'
          className='sp:h-4'
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
        <p className='sp:text-xs'>{content.articles_user.name}</p>
      </section>
      <section className='flex w-full flex-col items-start pl-6 sp:pl-3'>
        <h2 className='truncate whitespace-pre-wrap text-xl sp:text-lg'>{content.lead_line}</h2>
        <section className='relative mt-2' onClick={() => setIsOpen(true)}>
          <span className='text-2xl'>&#129292;</span>
          <h2
            className={`
            ml-2 inline whitespace-pre-wrap text-4xl font-bold
            before:absolute before:h-full before:w-full before:rounded before:border-0 before:bg-blue-300 before:p-1
            ${isOpen ? 'before:animate-puff-out-hor' : 'animate-pulse before:cursor-pointer'}
          `}
          >
            {content.punch_line.value}
          </h2>
        </section>
      </section>
    </article>
  )
}
