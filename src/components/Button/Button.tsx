import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'submit' | 'reset' | 'button'
  children?: ReactNode
  isDisabled?: boolean
  className?: string
  variant?: 'ghost' | 'pink'
}

const VARIANTS = {
  ghost: 'bg-transparent hover:bg-brand-surface text-white',
  pink: 'bg-brand-mauve hover:bg-brand-pink text-black font-semibold'
}

function Button({
  type = 'button',
  children,
  isDisabled = false,
  className = '',
  variant = 'ghost',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`flex items-center gap-3 px-4 py-2 rounded-md transition-colors duration-200 ${
        isDisabled ? 'cursor-no-drop' : VARIANTS[variant]
      } ${className && className}`}
      disabled={isDisabled}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
