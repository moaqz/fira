import Button from '@/components/Button/Button'

function Home() {
  return (
    <>
      <div className='my-32 sm:my-40'>
        <div className='px-4'>
          <h1 className='font-semibold max-w-sm sm:max-w-xl mx-auto text-4xl leading-tight text-center sm:text-6xl'>
            Create your poll and vote the{' '}
            <span className='font-black text-transparent bg-gradient-to-r bg-clip-text from-brand-pink to-brand-mauve'>
              best ideas
            </span>
          </h1>
          <p className='text-center break-words text-brand-subtext max-w-sm sm:max-w-md mx-auto mt-4 sm:mt-8 sm:text-xl'>
            Can{"'"}t decide what to do? Create a poll and get answers in no time!
          </p>
        </div>
        <div className='flex gap-2 justify-center items-center mt-8'>
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
