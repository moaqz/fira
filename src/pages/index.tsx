import Button from '@/components/Button'

function Home() {
  return (
    <>
      <div className='my-32 sm:my-40'>
        <div className='px-4'>
          <h1 className='max-w-sm mx-auto text-4xl font-semibold leading-tight text-center sm:max-w-xl sm:text-6xl'>
            Create your poll and vote the{' '}
            <span className='font-black text-transparent bg-gradient-to-r bg-clip-text from-brand-pink to-brand-mauve'>
              best ideas
            </span>
          </h1>
          <p className='max-w-sm mx-auto mt-4 text-center break-words text-brand-subtext sm:max-w-md sm:mt-8 sm:text-xl'>
            Can{"'"}t decide what to do? Create a poll and get answers in no time!
          </p>
        </div>
        <div className='flex items-center justify-center gap-2 mt-8'>
          <Button variant='pink' size='large'>
            Get Started
          </Button>
          <Button variant='gray' size='large'>
            View Examples
          </Button>
        </div>
      </div>
    </>
  )
}

export default Home
