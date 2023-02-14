import type { AppType } from 'next/dist/shared/lib/utils'
import type { Session } from 'next-auth'

// Styles
import '@/styles/globals.css'
import { Toaster } from 'react-hot-toast'

// Iconir Icons
import { IconoirProvider } from 'iconoir-react'

// Layout
import AppLayout from '@/layout/AppLayout'

// Auth
import { SessionProvider } from 'next-auth/react'

// SEO
import { DefaultSeo } from 'next-seo'
import nextSeoConfig from 'next-seo.config'

const App: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps }
}) => {
  return (
    <>
      <DefaultSeo {...nextSeoConfig} />
      <SessionProvider session={session}>
        <IconoirProvider
          iconProps={{
            width: '1.5rem',
            height: '1.5rem'
          }}
        >
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </IconoirProvider>
      </SessionProvider>
      <Toaster reverseOrder={false} />
    </>
  )
}

export default App
