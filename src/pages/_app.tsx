import type { AppType } from 'next/dist/shared/lib/utils'
import type { Session } from 'next-auth'

// Styles
import '@/styles/globals.css'

// Iconir Icons
import { IconoirProvider } from 'iconoir-react'

// Layout
import AppLayout from '@/layout/AppLayout'

// Auth
import { SessionProvider } from 'next-auth/react'

const App: AppType<{session: Session| null}> = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
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
  )
}

export default App
