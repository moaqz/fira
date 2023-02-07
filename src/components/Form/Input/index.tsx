/* eslint-disable react/display-name */
import { InputHTMLAttributes, forwardRef, Ref } from 'react'

const Input = forwardRef((
  props: InputHTMLAttributes<HTMLInputElement>,
  ref: Ref<HTMLInputElement>
) => {
  const { className = '', type = 'text' } = props

  return (
    <input
      {...props}
      type={type}
      ref={ref}
      className={`w-full px-4 py-3 border rounded border-brand-surface bg-brand-crust focus:ring-1 focus:ring-brand-mauve focus:outline-none caret-brand-mauve ${className}`}
    />
  )
})

export default Input
