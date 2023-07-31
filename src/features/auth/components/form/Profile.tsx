'use client'

import { getAuth, updateProfile } from '@firebase/auth'
import { isArray } from 'lodash'
import { signIn, signOut, useSession } from 'next-auth/react'
import { FormProvider, useForm } from 'react-hook-form'

import type { RegisterOptions } from 'react-hook-form'

import { StyledButton } from '~/src/components/elements/Button'
import { InputHookForm } from '~/src/components/elements/InputForm'

type User = {
  name: string
  email: string
  password: string
}

export const ProfileForm = () => {
  const formMethods = useForm<User>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  })

  const auth = getAuth()
  const { data } = useSession()

  const validationRules: Partial<Record<keyof User, RegisterOptions>> = {
    name: {
      required: '必須です!',
    },
  }

  const onSubmit = async (data: User) => {
    if (!auth.currentUser) {
      return
    }

    const sameNameUsers = await fetch(`/api/users?name=${data.name}`, {
      method: 'GET',
    }).then((res) => res.json())
    if (!isArray(sameNameUsers) || sameNameUsers.length > 0) {
      return
    }

    await updateProfile(auth.currentUser, {
      displayName: data.name,
    })
      .then(() => auth.currentUser?.getIdToken(false))
      .then(async (idToken) => {
        await signOut({ redirect: false })
        await signIn('credentials', { idToken, redirect: false })
      })
  }

  return (
    <FormProvider {...formMethods}>
      <form className='w-full' onSubmit={formMethods.handleSubmit(onSubmit)}>
        <fieldset>
          <legend className='mb-3 text-2xl sp:text-xl'>ユーザー情報変更</legend>
          <InputHookForm
            stateKey='email'
            type='text'
            disabled={true}
            value={data?.user.email || ''}
          >
            {{ label: 'メールアドレス' }}
          </InputHookForm>

          <InputHookForm
            stateKey='name'
            validation={{ ...validationRules }}
            defaultValue={data?.user.name || ''}
          >
            {{ label: 'ラジオネーム' }}
          </InputHookForm>
        </fieldset>

        <div className='mt-4 flex justify-center'>
          <StyledButton
            color='blue'
            disabled={!formMethods.formState.isDirty}
            type='submit'
            className='font-bold'
          >
            変更する
          </StyledButton>
        </div>
      </form>
    </FormProvider>
  )
}
