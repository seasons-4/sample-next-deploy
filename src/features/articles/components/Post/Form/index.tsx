'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FormProvider, RegisterOptions, useForm } from 'react-hook-form'
import { StyledButton } from '~/src/components/elements/Button'
import { InputHookForm } from '~/src/components/elements/InputForm'
import { TextareaHookForm } from '~/src/components/elements/TextareaForm'

import type { PostArticleState } from '~/src/features/articles/types'
import { LoadingComponent } from '~/src/features/layout/loading'

export const PostArticleFormFC: React.FC = () => {
  const formMethods = useForm<PostArticleState>({
    mode: 'onSubmit',
  })

  const { data: session } = useSession()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (data: PostArticleState) => {
    setIsLoading(true)
    await fetch('/api/articles', {
      method: 'POST',
      body: JSON.stringify({ ...data }),
    })
      .then(() => router.refresh())
      .catch(() => setIsLoading(false))
  }

  const validationRules: Record<keyof PostArticleState, RegisterOptions> = {
    lead: {
      required: '必須です!',
    },
    punch: {
      required: '必須です!',
    },
  }

  return (
    <FormProvider {...formMethods}>
      <form className='flex flex-col px-2' onSubmit={formMethods.handleSubmit(onSubmit)}>
        <div>
          <p className='w-max border-b-2 px-4'>ラジオネーム</p>
          <div className='ml-[10%] mt-1'>{session?.user.name || ''}</div>
        </div>

        <div className='mt-3'>
          <TextareaHookForm
            stateKey='lead'
            validation={validationRules}
            rows={3}
            placeholder='A「駐車場のネコはあくびをしな〜が〜ら〜」&#13;&#10;B「何言ってんだ〜！」'
          >
            {{ label: 'ボケ を入力' }}
          </TextareaHookForm>
        </div>

        <div className='mt-3'>
          <InputHookForm stateKey='punch' validation={validationRules} placeholder='野党！！'>
            {{ label: 'ツッコミ を入力' }}
          </InputHookForm>
        </div>

        <div className='mt-4 flex justify-center'>
          <StyledButton
            color='blue'
            disabled={!formMethods.formState.isDirty || isLoading}
            type='submit'
            className='font-bold'
          >
            {isLoading ? <LoadingComponent /> : '投稿する'}
          </StyledButton>
        </div>
      </form>
    </FormProvider>
  )
}
