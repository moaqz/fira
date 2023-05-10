import { forwardRef, Ref, TextareaHTMLAttributes } from "react";

const TextArea = forwardRef(
  (
    props: TextareaHTMLAttributes<HTMLTextAreaElement>,
    ref: Ref<HTMLTextAreaElement>,
  ) => {
    return (
      <textarea
        ref={ref}
        className={`h-32 resize-none rounded border border-brand-surface bg-brand-crust px-4 py-3 caret-brand-mauve focus:outline-none focus:ring-1 focus:ring-brand-mauve ${props.className}`}
        {...props}
      />
    );
  },
);

export default TextArea;
