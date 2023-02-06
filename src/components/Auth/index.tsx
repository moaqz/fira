import Button from '@/components/Button'
import { useSession, signIn, signOut } from 'next-auth/react'

function Auth() {
  const { data: session } = useSession()

  if (!session) {
    return (
      <Button variant='pink' onClick={() => signIn()}>
        Sign in with Github
      </Button>
    )
  }

  return (
    <Button variant='pink' onClick={() => signOut({ callbackUrl: '/' })}>
      Logout
    </Button>
  )
}

export default Auth
