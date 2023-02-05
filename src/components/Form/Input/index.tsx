import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  classname?: string
}
function Input({ id, placeholder, type = 'text', classname = '' }: InputProps) {
  return (
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      className={`w-full px-4 py-3 border rounded border-brand-surface bg-brand-crust focus:ring-1 focus:ring-brand-mauve focus:outline-none caret-brand-mauve ${
        classname && classname
      }`}
    />
  )
}

export default Input
