import { Menu, Cancel } from 'iconoir-react'
import Button from '@components/Button/Button'
import { useState } from 'react'
import NavbarLink from './Link'
import Logo from '@/components/Logo'
import Auth from '@/components/Auth'

function NavbarMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className='sm:hidden'>
      <Button onClick={() => setIsOpen(!isOpen)}>
        <Menu />
      </Button>
      {isOpen && (
        <div className='absolute top-0 left-0 flex flex-col w-full gap-4 p-4 border-b bg-brand-mantle border-b-brand-surface'>
          <div className='flex justify-between'>
            <Logo />
            <Button onClick={() => setIsOpen(!isOpen)}>
              <Cancel />
            </Button>
          </div>
          <ul className='flex flex-col gap-4'>
            <NavbarLink href='/create' text='Create Poll' />
            <NavbarLink href='/demo' text='Demo' />
          </ul>
          <div className='flex flex-col gap-3'>
            <Auth />
          </div>
        </div>
      )}
    </div>
  )
}

export default NavbarMenu
