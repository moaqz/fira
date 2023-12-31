import { InputHTMLAttributes, Ref, forwardRef } from "react";

const Input = forwardRef(
  (
    props: InputHTMLAttributes<HTMLInputElement>,
    ref: Ref<HTMLInputElement>,
  ) => {
    return (
      <input
        type={props.type || "text"}
        ref={ref}
        className={`w-full rounded border border-brand-surface bg-brand-crust px-4 py-3 caret-brand-mauve focus:outline-none focus:ring-1 focus:ring-brand-mauve ${props.className}`}
        {...props}
      />
    );
  },
);

export default Input;
