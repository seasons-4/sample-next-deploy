'use client'

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { Fragment } from 'react'
import PostIcon from '~/public/post.svg'
import { StyledLink } from '~/src/components/elements/Link'
import useStyledModal from '~/src/components/elements/Modal/Styled'
import { PostArticleFormFC } from '../Form'

export const PostArticleModalFC: React.FC = () => {
  const { StyledModal, openModal } = useStyledModal()
  const { status } = useSession()

  return (
    <Fragment>
      <button
        type='button'
        onClick={openModal}
        className="
          fixed bottom-[5vh] right-[10%] inline-block rounded-[50%] border-2 before:absolute
          before:bottom-0 before:left-[30%] before:whitespace-nowrap before:bg-white
          before:leading-3 before:text-yellow-500 before:content-['投稿'] hover:bg-yellow-200
          hover:before:text-black sp:right-[5%]
        "
      >
        <Image
          src={PostIcon}
          alt='post icon'
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </button>

      <StyledModal title={status === 'authenticated' ? '投稿フォーム' : 'ログイン画面へ'}>
        <div className='p-2'>
          {status === 'authenticated' ? (
            <PostArticleFormFC />
          ) : (
            <p className='pt-1'>
              投稿機能はログイン後のみ利用できます。
              <br />
              ログインをお願いします。
              <br />→<StyledLink href='/user/login'>ログイン画面へ</StyledLink>
            </p>
          )}
        </div>
      </StyledModal>
    </Fragment>
  )
}
