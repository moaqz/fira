import NextLink from "next/link";
import { VARIANTS } from "../Button";
import clsx from "clsx";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "ghost" | "pink" | "gray";
}

export function Link(props: LinkProps) {
  const { href, children, variant = "pink" } = props;

  return (
    <NextLink
      href={href}
      className={clsx(
        "flex h-12 items-center justify-center gap-3 whitespace-nowrap rounded-md px-6 transition-colors duration-200",
        VARIANTS[variant],
      )}
    >
      {children}
    </NextLink>
  );
}

export function ExternalLink(props: LinkProps) {
  const { href, children, variant = "gray" } = props;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={clsx(
        "flex h-12 items-center justify-center gap-3 whitespace-nowrap rounded-md px-6 transition-colors duration-200",
        VARIANTS[variant],
      )}
    >
      {children}
    </a>
  );
}
