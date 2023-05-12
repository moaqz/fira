import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import Spinner from "@components/loader/spinnerLoader";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "submit" | "button";
  children?: ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  className?: string;
  variant?: "pink" | "gray";
  size?: "medium" | "large";
}

export const VARIANTS = {
  gray: "bg-brand-surface hover:bg-brand-surface2 text-white",
  pink: "bg-brand-mauve hover:bg-brand-mauve2 text-black font-semibold",
};

export const SIZES = {
  medium: "h-10 px-4",
  large: "h-12 px-6",
};

function Button({
  type = "button",
  children,
  isDisabled = false,
  className = "",
  variant = "gray",
  size = "medium",
  isLoading = false,
  loadingText = "Loading...",
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "flex items-center justify-center gap-3 rounded-md transition-colors duration-200",
        VARIANTS[variant],
        className,
        SIZES[size],
        isDisabled && "disabled:pointer-events-none disabled:opacity-75",
      )}
      disabled={isDisabled || isLoading}
      type={type}
      {...props}
    >
      {!isLoading ? children : <Spinner color="text-gray-900" />}
    </button>
  );
}

export default Button;
