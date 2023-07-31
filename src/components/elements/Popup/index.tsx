'use client'

import { isEmpty } from 'lodash'
import { FC, ReactNode, memo, useRef, useState } from 'react'
import { useOnClickOutside } from '~/src/hooks/useOnClickOutside'

export type PopupProps = {
  children: {
    icon: ReactNode
    popup: {
      key: symbol
      content?: ReactNode
    }[]
  }
}

const Popup: FC<PopupProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const menuRef = useRef<HTMLUListElement>(null)
  useOnClickOutside(menuRef, () => setIsOpen(false))

  return (
    <div className='relative'>
      <button aria-label='user-menu' type='button' onClick={() => setIsOpen(true)}>
        {children.icon}
      </button>
      {isOpen && (
        <ul
          className={`
              absolute right-0 top-auto
              rounded border-2 border-yellow-400 shadow-2xl before:absolute before:bottom-full
              before:right-0 before:-translate-x-1/2 before:border-8
							before:border-transparent before:border-b-yellow-400 before:content-['']
            `}
          ref={menuRef}
        >
          {children.popup.map(({ key, content }) => {
            return (
              <li
                className='z-10 h-full w-full bg-white [&:not(:last-child)]:border-b-2 [&:not(:last-child)]:border-yellow-400'
                key={String(key)}
                onClick={() => setIsOpen(false)}
              >
                {isEmpty(content) ? String(key) : content}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default Popup
export const MemoPopup = memo(Popup)
