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

function Create() {
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

  const onSubmit = (data: CreatePollType) => {
    console.log(data)
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
            {...(register('title'), { required: true, maxLength: 200 })}
          />
        </Stack>

        <Stack>
          <Label id='description' optional>
            Description
          </Label>
          <TextArea id='description' {...register('description')} />
        </Stack>

        <PollOptions control={control} errors={errors} register={register} />

        <Button variant='pink' className='w-full mt-4' type='submit'>
          Create Poll
        </Button>
      </form>
    </div>
  )
}

export default Create
