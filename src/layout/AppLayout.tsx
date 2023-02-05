import type { ReactNode } from 'react'
// import Footer from './Footer'
import Navbar from './Navbar'

interface Props {
  children: ReactNode
}

function AppLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main className='mb-28'>{children}</main>
      {/* <Footer /> */}
    </>
  )
}

export default AppLayout
