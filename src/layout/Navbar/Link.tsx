import Link from 'next/link'

interface Props {
  text: string
  href: string
}

function NavbarLink({ text, href }: Props) {
  return (
    <li className='h-full'>
      <Link
        href={href}
        className='flex items-center h-full mb-1 border-b-2 border-transparent text-brand-subtext hover:border-b-brand-mauve'
      >
        {text}
      </Link>
    </li>
  )
}

export default NavbarLink
