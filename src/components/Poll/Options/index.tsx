// Icons
import { Plus } from 'iconoir-react'

// Components
import Button from '@/components/Button'
import Stack from '@/components/Stack'
import PollOption from '../Option'

// Types & Constants
import type { PollOptionsProps } from '@lib/types/poll'

// External Libraries
import { useFieldArray } from 'react-hook-form'

function PollOptions({ control, register, maxOptions = 5, errors }: PollOptionsProps) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'options'
  })

  return (
    <>
      <Stack>
        <p className='text-lg font-semibold text-brand-subtext'>Options</p>
        {fields?.map((field: any, index: number) => {
          return (
            <PollOption
              index={index}
              key={field.id}
              remove={remove}
              value={field.text}
              register={register}
              errors={errors}
              disableRemove={fields.length <= 2}
            />
          )
        })}
      </Stack>

      {fields?.length < maxOptions && (
        <Button
          variant='gray'
          onClick={() => {
            append({ text: '' })
          }}
        >
          <Plus /> Add option
        </Button>
      )}
    </>
  )
}

export default PollOptions
