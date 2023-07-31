import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth'
import Image from 'next/image'
import { useState } from 'react'
import { FormProvider, RegisterOptions, useForm } from 'react-hook-form'
import VisibilityOff from 'public/visibility-off.svg'
import Visibility from 'public/visibility.svg'
import { StyledButton } from '~/src/components/elements/Button'
import { InputHookForm } from '~/src/components/elements/InputForm'

type User = {
  name: string
  email: string
  password: string
}

const SignupForm = () => {
  const formMethods = useForm<User>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  })

  const [isShowPassword, setIsShowPassword] = useState(false)

  const validationRules: Record<keyof User, RegisterOptions> = {
    name: {
      required: '必須です!',
    },
    email: {
      required: '必須です!',
      pattern: {
        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        message: '形式が不正です!',
      },
    },
    password: {
      required: '必須です!',
      minLength: { value: 6, message: '6文字以上です!' },
    },
  }

  const onSubmit = async (data: User) => {
    const auth = getAuth()
    await createUserWithEmailAndPassword(auth, data.email, data.password).catch((e) => {
      console.error(e)
    })
  }

  return (
    <FormProvider {...formMethods}>
      <form className='w-full' onSubmit={formMethods.handleSubmit(onSubmit)}>
        <fieldset>
          <legend className='mb-3'>ユーザー登録</legend>
          <InputHookForm stateKey='name' validation={{ ...validationRules }}>
            {{ label: 'ラジオネーム' }}
          </InputHookForm>

          <InputHookForm
            stateKey='email'
            validation={{ ...validationRules }}
            type='email'
            autoComplete='email'
            required={true}
          >
            {{ label: 'メールアドレス' }}
          </InputHookForm>

          <InputHookForm
            stateKey='password'
            validation={{ ...validationRules }}
            type={isShowPassword ? 'text' : 'password'}
            autoComplete='new-password'
            required={true}
          >
            {{ label: <span>パスワード</span> }}
          </InputHookForm>
          <div className='text-right'>
            <Image
              src={isShowPassword ? VisibilityOff : Visibility}
              alt='visibility icon'
              className='inline-block h-8 w-8 rounded-[50%] hover:bg-gray-200'
              onClick={() => setIsShowPassword((c) => !c)}
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </div>
        </fieldset>

        <div className='mt-4 flex justify-center'>
          <StyledButton
            color='blue'
            disabled={!formMethods.formState.isDirty}
            type='submit'
            className='font-bold'
          >
            sign up
          </StyledButton>
        </div>
      </form>
    </FormProvider>
  )
}

export default SignupForm
