import { ComponentProps } from 'react'

type Props = {
  color?: 'blue' | 'yellow'
} & Partial<ComponentProps<'button'>>

export const StyledButton = (props: Props) => {
  const { color, children, disabled, className, ...res } = props
  const colorClass = ((): string => {
    switch (color) {
      case 'blue': {
        return 'bg-blue-200 hover:bg-blue-300'
      }
      case 'yellow': {
        return 'bg-yellow-200 hover:bg-yellow-100'
      }
      default: {
        return ''
      }
    }
  })()

  return (
    <button
      {...res}
      disabled={!!disabled}
      className={`
        rounded
				border
        border-blue-500
				p-2
				hover:cursor-pointer
				disabled:cursor-default
				disabled:border-blue-200
				disabled:bg-gray-200
				disabled:text-gray-300
        ${colorClass}
        ${className}
			`}
    >
      {children}
    </button>
  )
}
