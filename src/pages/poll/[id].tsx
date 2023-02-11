import { GetServerSidePropsContext } from 'next'
import { PollType } from '@lib/types/poll'
import { PollStatus, PollOptionVote } from '@/components/Poll'

export default function Poll({ data }: { data: PollType }) {
  const {
    title,
    description,
    options,
    endsAt,
    user: { name }
  } = data

  const hasVoted = options.some((option) => option.UserVotes.length > 0)

  // This is temporary. Change this from the API when joining the tables.
  const totalVotes = options.reduce((a, b) => a + b.totalCount, 0)

  return (
    <div className='max-w-3xl p-4 mx-auto my-12 space-y-6 border border-brand-surface bg-brand-mantle sm:rounded sm:p-6'>
      <header className='flex flex-col sm:flex-row justify-between gap-4'>
        <div className='flex flex-col flex-1 order-1 sm:-order-1'>
          <h1 className='text-xl'>{title}</h1>
          <p className='text-brand-subtext'>{description}</p>
        </div>
        <PollStatus endDate={endsAt} />
      </header>
      <div className='flex flex-col gap-3'>
        {options?.map((option) => {
          return (
            <PollOptionVote
              key={option.id}
              id={option.id}
              text={option.text}
              totalCount={option.totalCount}
              pollId={option.pollId}
              UserVotes={option.UserVotes}
              disabled={hasVoted}
              totalVotes={totalVotes}
            />
          )
        })}
      </div>
      <footer>
        <p className='text-brand-subtext mt-1'>Created by {name}</p>
      </footer>
    </div>
  )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const id = ctx.params?.id

  const response = await fetch(`http://localhost:3000/api/poll/${id}`)
  const data = await response.json()

  if (!data) {
    return {
      redirect: {
        destination: '/404',
        permanent: false
      }
    }
  }

  return {
    props: {
      data
    }
  }
}
