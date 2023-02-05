import type { ReactNode } from 'react'

interface StackProps {
  children: ReactNode
  direction?: 'column' | 'row'
  spacing?: number
  className?: string
}

function Stack({ children, direction = 'column', spacing = 2, className = '' }: StackProps) {
  const dir = direction === 'column' ? 'flex-col' : 'flex-row'
  const space = `gap-${spacing}`

  return <div className={`flex ${dir} ${space} ${className && className}`}>{children}</div>
}

export default Stack
