import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { IconoirProvider } from 'iconoir-react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <IconoirProvider
      iconProps={{
        width: '1.5rem',
        height: '1.5rem'
      }}
    >
      <Component {...pageProps} />
    </IconoirProvider>
  )
}
