import { ButtonHTMLAttributes, ReactNode } from "react";
import { Ring } from "@uiball/loaders";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "submit" | "reset" | "button";
  children?: ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  className?: string;
  variant?: "ghost" | "pink" | "gray";
  size?: "medium" | "large";
}

const VARIANTS = {
  ghost: "bg-transparent hover:bg-brand-surface text-white",
  gray: "bg-brand-surface hover:bg-brand-surface2 text-white",
  pink: "bg-brand-mauve hover:bg-brand-mauve2 text-black font-semibold",
};

const SIZES = {
  medium: "h-10 px-4",
  large: "h-12 px-6",
};

function Button({
  type = "button",
  children,
  isDisabled = false,
  className = "",
  variant = "ghost",
  size = "medium",
  isLoading = false,
  loadingText = "Loading...",
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "flex items-center justify-center gap-3 rounded-md transition-colors duration-200 disabled:pointer-events-none disabled:opacity-75",
        VARIANTS[variant],
        className,
        SIZES[size],
      )}
      disabled={isDisabled || isLoading}
      type={type}
      {...props}
    >
      {!isLoading ? (
        children
      ) : (
        <>
          <Ring size={22} speed={2} color="black" />
          {loadingText}
        </>
      )}
    </button>
  );
}

export default Button;
