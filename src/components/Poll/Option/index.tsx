// Icons
import { Cancel } from 'iconoir-react'

// Components
import { Input } from '@components/Form'

// Types & Constants
import type { PollOptionProps } from '@lib/types/poll'

function PollOption({
  index,
  register,
  remove,
  value,
  disableRemove
}: PollOptionProps) {
  return (
    <div className='relative flex items-center mb-2'>
      <Input
        key={index}
        id={`option-${index}`}
        placeholder={`Option ${index + 1}`}
        defaultValue={value}
        {...register(`options.${index}.text`, { required: true })}
      />

      {!disableRemove && (
        <button className='absolute right-4' type='button' onClick={() => remove(index)}>
          <Cancel />
        </button>
      )}
    </div>
  )
}

export default PollOption
