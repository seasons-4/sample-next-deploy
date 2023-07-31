import { Fragment } from 'react'
import { useFormContext } from 'react-hook-form'

import type { RegisterOptions } from 'react-hook-form'

type Props = Partial<Omit<React.ComponentProps<'textarea'>, 'children'>> & {
  stateKey: string
  children: Partial<Record<'label', React.ReactNode>>
  validation?: Record<Props['stateKey'], RegisterOptions>
}
type State = Record<Props['stateKey'], React.ComponentProps<'textarea'>['value']>

export const TextareaHookForm: React.FC<Props> = ({ stateKey, validation, children, ...args }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<State>()

  return (
    <Fragment>
      <label className='w-max border-b-2 px-4' htmlFor={`textarea-${stateKey}`}>
        {children?.label || stateKey}
      </label>

      <div className='mt-3 flex flex-col pl-[10%]'>
        <textarea
          {...args}
          id={`textarea-${stateKey}`}
          className={`whitespace-pre-wrap rounded bg-yellow-100 px-2 py-1
            ${args.disabled ? 'text-gray-400' : ''}
            ${errors[stateKey] ? 'border border-solid border-red-400' : ''}`}
          {...register(stateKey, { ...(validation ? validation[stateKey] : {}) })}
        />
        {errors[stateKey] && <p className='text-red-400'>{errors[stateKey]?.message}</p>}
      </div>
    </Fragment>
  )
}
