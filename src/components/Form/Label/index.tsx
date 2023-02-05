import { LabelHTMLAttributes, type ReactNode } from 'react'

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode
  id: string
  optional?: boolean
}

function Label({ children, id, optional = false, ...props }: LabelProps) {
  return (
    <label htmlFor={id} className='text-lg font-semibold text-brand-subtext' {...props}>
      {children} {optional && <span className='text-sm text-brand-mauve'>(optional)</span>}
    </label>
  )
}

export default Label
