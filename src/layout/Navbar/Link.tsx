import Link from "next/link";

interface Props {
  text: string;
  href: string;
}

function NavbarLink({ text, href }: Props) {
  return (
    <li className="h-full">
      <Link
        href={href}
        className="mb-1 flex h-full items-center border-b-2 border-transparent text-brand-subtext sm:hover:border-b-brand-mauve"
      >
        {text}
      </Link>
    </li>
  );
}

export default NavbarLink;
