'use client'

import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from '@firebase/auth'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Fragment, useState } from 'react'

import GoogleIcon from '~/public/icons-google.svg'
import { StyledButton } from '~/src/components/elements/Button'
// import EntryForm from '~/src/features/auth/components/EntryForm'
import { LoadingComponent } from '~/src/features/layout/loading'
import { firebaseApp } from '~/src/libs/Firebase'

const LoginForm: React.FC = () => {
  const router = useRouter()
  const googleProvider = new GoogleAuthProvider()
  const auth = getAuth(firebaseApp)
  const [isLoading, setIsLoading] = useState(false)

  const onClickPopup = () => {
    setIsLoading(true)
    return signInWithPopup(auth, googleProvider)
      .then(({ user }) => user.getIdToken(true))
      .then((idToken) => signIn('credentials', { idToken, redirect: false }))
      .then(() => router.push('/'))
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false))
  }

  const onClickSub = () => {
    setIsLoading(true)
    const sub = {
      email: 'hoge@hoge.hoge',
      password: 'hogehoge',
    }
    return signInWithEmailAndPassword(auth, sub.email, sub.password)
      .then((credential) => credential.user.getIdToken(true))
      .then((idToken) => signIn('credentials', { idToken, redirect: false }))
      .then(() => router.push('/'))
      .catch((e) => console.error(e))
      .finally(() => setIsLoading(false))
  }

  return (
    <div className='flex flex-col items-center justify-center py-4'>
      <StyledButton
        onClick={onClickPopup}
        type='button'
        className='flex min-w-[12rem] flex-row items-center justify-center'
        color='yellow'
        disabled={isLoading}
      >
        {isLoading ? (
          <LoadingComponent />
        ) : (
          <Fragment>
            <Image
              src={GoogleIcon}
              alt='google icon'
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
            <span className='ml-2 font-bold italic text-gray-500'>Googleアカウントを使用</span>
          </Fragment>
        )}
      </StyledButton>

      <StyledButton
        onClick={onClickSub}
        type='button'
        className='mt-4 flex min-w-[12rem] flex-row items-center justify-center'
        color='yellow'
        disabled={isLoading}
      >
        {isLoading ? (
          <LoadingComponent />
        ) : (
          <span className='font-bold italic text-gray-500'>Subアカウントを使用</span>
        )}
      </StyledButton>

      {/* <div className="relative my-8 w-full text-center">
        <hr
          className={`border-gray-400
          after:absolute
          after:top-1/2 after:-translate-y-2/4 after:-translate-x-2/4 after:bg-white
          after:px-2
          after:text-gray-400 after:content-[attr(attr-content)]`}
        />
      </div>

      <EntryForm submitHandler={onSubmit}>login</EntryForm> */}
    </div>
  )
}

export default LoginForm
