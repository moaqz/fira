import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'submit' | 'reset' | 'button'
  children?: ReactNode
  isDisabled?: boolean
  className?: string
  variant?: 'ghost' | 'pink' | 'gray'
  size?: 'medium' | 'large'
}

const VARIANTS = {
  ghost: 'bg-transparent hover:bg-brand-surface text-white',
  gray: 'bg-brand-surface hover:bg-brand-surface2 text-white',
  pink: 'bg-brand-mauve hover:bg-brand-mauve2 text-black font-semibold'
}

const SIZES = {
  medium: 'h-10 px-4',
  large: 'h-12 px-6'
}

function Button({
  type = 'button',
  children,
  isDisabled = false,
  className = '',
  variant = 'ghost',
  size = 'medium',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`flex justify-center items-center gap-3 rounded-md transition-colors duration-200 ${
        isDisabled && 'cursor-no-drop'
      } ${VARIANTS[variant]}
      } ${className && className} ${SIZES[size]}`}
      disabled={isDisabled}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
