import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import Button from '@/components/Button'
import { useRouter } from 'next/router'

function Auth() {
  const supabaseClient = useSupabaseClient()
  const user = useUser()
  const router = useRouter()

  const handleLogout = () => {
    supabaseClient.auth.signOut()
    router.push('/')
  }

  const handleSignIn = () => {
    supabaseClient.auth.signInWithOAuth({ provider: 'github' })
  }

  if (!user) {
    return (
      <Button variant='pink' onClick={handleSignIn}>
        Sign in with Github
      </Button>
    )
  }

  return (
    <Button variant='pink' onClick={handleLogout}>
      Logout
    </Button>
  )
}

export default Auth
