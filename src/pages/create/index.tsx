// Components
import Button from '@/components/Button'
import { Input, Label, TextArea } from '@components/Form'
import Stack from '@/components/Stack'
import { PollOptions } from '@components/Poll'

// React
import { useSession } from 'next-auth/react'

// Lib
import type { CreatePollType } from '@lib/types/poll'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useState } from 'react'
import { useRouter } from 'next/router'

function Create() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()
  useSession({ required: true })

  const {
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CreatePollType>({
    defaultValues: {
      options: [{ text: '' }, { text: '' }]
    }
  })

  const onSubmit = async (data: CreatePollType) => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/poll/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      const id = await response.json()

      router.push(`/poll/${id}`)
    } catch (error) {
      console.error(error)
      toast.error('An error occurred while creating the poll')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='sm:px-4'>
      <h1 className='max-w-xl px-4 mx-auto my-12 text-2xl font-semibold leading-tight text-center'>
        Complete the fields to create your poll.
      </h1>
      <form
        className='max-w-3xl p-4 mx-auto space-y-4 border border-brand-surface bg-brand-mantle sm:rounded sm:p-6'
        onSubmit={handleSubmit(onSubmit)}
      >
        <Stack>
          <Label id='title'>Title</Label>
          <Input
            id='title'
            placeholder='Type your question here'
            aria-invalid={errors.title ? 'true' : 'false'}
            {...register('title', {
              required: 'You must include a title.',
              maxLength: {
                value: 200,
                message: 'Title must contain a maximum of 200 characters'
              }
            })}
          />
          {errors.title?.type === 'required' && (
            <p className='text-red-500 text-bold'>{errors.title?.message}</p>
          )}

          {errors.title?.type === 'maxLength' && (
            <p className='text-red-500 text-bold'>{errors.title?.message}</p>
          )}
        </Stack>

        <Stack>
          <Label id='description' optional>
            Description
          </Label>
          <TextArea id='description' {...register('description')} />
        </Stack>

        <PollOptions control={control} errors={errors} register={register} />

        <Button variant='pink' className='w-full mt-4' type='submit' isLoading={isLoading}>
          Create Poll
        </Button>
      </form>
    </div>
  )
}

export default Create
