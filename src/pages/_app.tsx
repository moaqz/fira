import type { AppProps } from 'next/app'
import { useState } from 'react'

// Styles
import '@/styles/globals.css'

// Iconir Icons
import { IconoirProvider } from 'iconoir-react'

// Layout
import AppLayout from '@/layout/AppLayout'

// Supabase
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'

export default function App({
  Component,
  pageProps
}: AppProps<{
  initialSession: Session
}>) {
  const [supabase] = useState(() => createBrowserSupabaseClient())

  return (
    <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
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
    </SessionContextProvider>
  )
}
