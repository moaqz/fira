import Button from '@components/Button/Button'
import NavbarLink from './Link'
import NavbarMenu from './Menu'
import Logo from '@/components/Logo'

function Navbar() {
  return (
    <header className='sticky top-0 z-50 h-16 border-b bg-brand-mantle border-b-brand-surface'>
      <nav className='flex items-center justify-between h-full max-w-screen-lg px-4 mx-auto'>
        <div className='flex items-center h-full gap-12'>
          <Logo />
          <ul className='hidden h-full sm:flex sm:items-center sm:gap-x-8'>
            <NavbarLink href='/create' text='Create Poll' />
            <NavbarLink href='/demo' text='Demo' />
          </ul>
        </div>
        <div className='hidden h-full sm:flex sm:items-center sm:gap-4'>
          <Button>Login</Button>
          <Button variant='pink'>Sign up</Button>
        </div>
        <NavbarMenu />
      </nav>
    </header>
  )
}
export default Navbar
