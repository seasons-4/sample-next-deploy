import Image from 'next/image'
import Close from '~/public/close.svg'
import useModal from '..'

type Props = {
  title: React.ReactNode
  children: React.ReactNode
}

const useStyledModal = () => {
  const { Modal, openModal, closeModal } = useModal()

  const StyledModal: React.FC<Props> = ({ title, children }) => {
    return (
      <Modal>
        <div className='flex flex-row justify-between border-b-2 text-2xl'>
          <p className='ml-1'>{title}</p>
          <button type='button' onClick={closeModal} className=''>
            <Image
              src={Close}
              alt='close icon'
              className='inline-block h-8 w-8 rounded-[50%] hover:bg-gray-200'
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </button>
        </div>
        {children}
      </Modal>
    )
  }

  return {
    openModal,
    closeModal,
    StyledModal,
  }
}

export default useStyledModal
