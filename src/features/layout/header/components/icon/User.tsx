import { getAuth, signOut } from '@firebase/auth'
import { signOut as signOutAuth } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import User from '~/public/user.svg'
import { StyledLink } from '~/src/components/elements/Link'
import { MemoPopup, type PopupProps } from '~/src/components/elements/Popup'
import { firebaseApp } from '~/src/libs/Firebase'

const UserIcon: React.FC = () => {
  const router = useRouter()
  const auth = getAuth(firebaseApp)

  const logout = () => {
    return signOut(auth)
      .then(() => signOutAuth({ redirect: false }))
      .then(() => router.push('/user/login'))
      .catch((e) => console.error(e))
  }

  const menus = [
    {
      key: Symbol('My Page'),
      content: <StyledLink href='/user/profile'>my page</StyledLink>,
    },
    {
      key: Symbol('Sign Out'),
      content: (
        <button onClick={logout} className='text-red-700'>
          sign out
        </button>
      ),
    },
  ]

  const popupProps: PopupProps = {
    children: {
      icon: (
        <Image
          src={User}
          alt='user image'
          className='sp:h-8 sp:w-8'
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      ),
      popup: menus.map(({ key, content }) => {
        return {
          key,
          content: <div className='whitespace-nowrap px-8 py-2'>{content}</div>,
        }
      }),
    },
  }

  return <MemoPopup>{popupProps.children}</MemoPopup>
}

export default UserIcon
