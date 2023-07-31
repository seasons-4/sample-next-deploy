import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FormProvider, useForm } from 'react-hook-form'
import { InputHookForm } from './index'

const user = userEvent.setup()

describe('InputHookForm', () => {
  test('label text without children', () => {
    const TestComponent = () => {
      const form = useForm()
      return (
        <FormProvider {...form}>
          <InputHookForm stateKey='hoge'>{{}}</InputHookForm>
        </FormProvider>
      )
    }

    render(<TestComponent />)
    expect(screen.getByLabelText('hoge')).toBeInTheDocument()
  })

  test('input event', async () => {
    const TestComponent = () => {
      const form = useForm()
      return (
        <FormProvider {...form}>
          <InputHookForm stateKey='hoge' placeholder='placeholder'>
            {{ label: <span>test label</span> }}
          </InputHookForm>
        </FormProvider>
      )
    }
    render(<TestComponent />)
    const input = screen.getByPlaceholderText('placeholder')
    const value = 'input 1234'
    await user.type(input, value)
    expect(screen.getByDisplayValue(value)).toBeInTheDocument()
  })
})
