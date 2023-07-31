'use client'

import { FC, ReactNode, useRef, useState } from 'react'
import { useOnClickOutside } from '~/src/hooks/useOnClickOutside'

type Props = {
  children: ReactNode
}

const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const modalRef = useRef<HTMLDivElement>(null)
  useOnClickOutside(modalRef, () => setIsOpen(false))

  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }

  const Modal: FC<Props> = ({ children }) => {
    if (!isOpen) {
      return null
    }

    return (
      <div className='fixed inset-0 z-50 flex items-center justify-center'>
        <div className='fixed inset-0 bg-gray-400 opacity-50' />
        <div
          ref={modalRef}
          className='relative flex min-h-[40%] min-w-[600px] flex-col rounded-xl bg-white px-2 py-1 sp:min-w-[90%]'
        >
          {children}
        </div>
      </div>
    )
  }

  return {
    openModal,
    closeModal,
    Modal,
  }
}

export default useModal
