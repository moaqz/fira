import { TextareaHTMLAttributes } from 'react'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string
  classname?: string
}

function TextArea({ id, className = '' }: TextAreaProps) {
  return (
    <textarea
      name={id}
      id={id}
      className={`h-32 px-4 py-3 border rounded resize-none border-brand-surface bg-brand-crust focus:ring-1 focus:ring-brand-mauve focus:outline-none caret-brand-mauve ${
        className && className
      }`}
    />
  )
}

export default TextArea
