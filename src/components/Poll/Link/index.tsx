// Components
import Button from '@/components/Button'
import { PasteClipboard } from 'iconoir-react'

// Utilities & External Libraries
import { FIRA_PRODUCTION_URL } from '@/lib/constants'
import { toast } from 'react-hot-toast'

interface PollLinkProps {
  id: string
}

function PollLink(props: PollLinkProps) {
  const link = FIRA_PRODUCTION_URL + 'poll/' + props.id

  const handleClick = () => {
    navigator.clipboard
      .writeText(link)
      .then(() => toast.success('Link Copied to Clipboard!'))
      .catch((err) => {
        console.error(err)
        toast.error('Failed to Copy')
      })
  }

  return (
    <div className='max-w-3xl px-4 py-6 mx-auto my-6 space-y-3 border border-brand-surface bg-brand-mantle sm:rounded'>
      <div className='flex items-center justify-between'>
        <h2 className='text-lg text-brand-subtext'>Share the Link</h2>
        <Button onClick={handleClick} className='text-brand-subtext'>
          <PasteClipboard /> Copy
        </Button>
      </div>
      <div className='px-4 py-3 border rounded border-brand-surface bg-brand-crust text-ellipsis overflow-hidden'>
        {link}
      </div>
    </div>
  )
}

export default PollLink
