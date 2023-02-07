/* eslint-disable react/display-name */
import { forwardRef, Ref, TextareaHTMLAttributes } from 'react'

const TextArea = forwardRef((
  props: TextareaHTMLAttributes<HTMLTextAreaElement>,
  ref: Ref<HTMLTextAreaElement>
) => {
  const { className } = props

  return (
    <textarea
      {...props}
      ref={ref}
      className={`h-32 px-4 py-3 border rounded resize-none border-brand-surface bg-brand-crust focus:ring-1 focus:ring-brand-mauve focus:outline-none caret-brand-mauve ${className}`}
    />
  )
})

export default TextArea
