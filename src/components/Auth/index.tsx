// Components
import Button from '@/components/Button'

// External Libraries
import { useSession, signIn, signOut } from 'next-auth/react'
import toast from 'react-hot-toast'

function Auth() {
  const { status } = useSession()

  const handleLogout = async () => {
    try {
      await signOut({
        callbackUrl: '/'
      })
    } catch (error) {
      toast.error('An error occurred while logout. Please create an issue about the problem.', {
        icon: '🤔'
      })
    }
  }

  if (status === 'authenticated') {
    return (
      <Button variant='pink' onClick={handleLogout}>
        Logout
      </Button>
    )
  }

  return (
    <Button variant='pink' onClick={() => signIn('github')}>
      Sign in with Github
    </Button>
  )
}

export default Auth
