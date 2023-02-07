import type {
  Control,
  FieldErrors,
  UseFieldArrayRemove,
  UseFormRegister
} from 'react-hook-form'

export type CreatePollType = {
  description?: string | undefined
  title: string
  options: {
    text: string
  }[]
}

export interface PollOptionProps {
  index: number
  register: UseFormRegister<CreatePollType>
  remove: UseFieldArrayRemove
  value: string
  disableRemove: boolean
}

export interface PollOptionsProps {
  control: Control<CreatePollType>
  errors: FieldErrors<CreatePollType>
  register: UseFormRegister<CreatePollType>
  maxOptions?: number
}
