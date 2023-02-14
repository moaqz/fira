import type { PollType } from '@lib/types/poll'
import { PollStatus, PollLink, PollOptionsList } from '@/components/Poll'

import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Loader from '@/components/Loader'
import { NextSeo } from 'next-seo'

function Poll() {
  const router = useRouter()
  const pollId = '' + router.query.id ?? ''

  const [data, setData] = useState<PollType | null>(null)

  useEffect(() => {
    if (!pollId) return

    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/api/poll/${pollId}`)
      const data = await response.json()

      if (!data) {
        console.error('error fetching data')
      }

      setData(data)
    }

    fetchData()
  }, [pollId])

  if (!data) {
    return <Loader text='Loading Poll Information.' />
  }

  return (
    <>
      <NextSeo title={data.title} />
      <div className='max-w-3xl p-4 mx-auto mt-12 space-y-6 border border-brand-surface bg-brand-mantle sm:rounded sm:p-6'>
        <header className='flex flex-col sm:flex-row justify-between gap-4'>
          <div className='flex flex-col flex-1 order-1 sm:-order-1'>
            <h1 className='text-xl'>{data?.title}</h1>
            <p className='text-brand-subtext'>{data.description}</p>
          </div>
          <PollStatus endDate={data?.endsAt} />
        </header>
        <PollOptionsList endsAt={data.endsAt} options={data.options} />
        <footer>
          <p className='text-brand-subtext mt-1'>Created by {data.user.name}</p>
        </footer>
      </div>

      <PollLink id={pollId} />
    </>
  )
}

export default Poll
