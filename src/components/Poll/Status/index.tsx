import { remainingMinutes } from '@/lib/dateUtilities'
import clsx from 'clsx'

interface PollStatusProps {
  endDate: string
}

const STATUS = {
  live: 'bg-green-500 text-white',
  closed: 'bg-red-500 text-white'
}

function PollStatus({ endDate }: PollStatusProps) {
  const minutes = remainingMinutes(endDate)

  return (
    <div
      className={clsx(
        'flex items-center self-start gap-2 rounded-full font-medium px-4 py-2 text-sm',
        STATUS[minutes <= 0 ? 'closed' : 'live']
      )}
    >
      <svg className='h-2 w-2' fill='currentColor' viewBox='0 0 8 8'>
        <circle cx='4' cy='4' r='3'></circle>
      </svg>
      {minutes <= 0 ? 'Closed' : 'Live'}
    </div>
  )
}

export default PollStatus
