import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'submit' | 'reset' | 'button'
  children?: ReactNode
  isDisabled?: boolean
  className?: string
}

function Button({
  type = 'button',
  children,
  isDisabled = false,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`flex items-center gap-3 p-3 bg-blue-600 text-white rounded-md transition-colors duration-200 ${
        isDisabled ? 'cursor-no-drop' : 'hover:bg-blue-700'
      }`}
      disabled={isDisabled}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
