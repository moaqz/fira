import Github from '@/components/Icons/Github'

function Footer() {
  return (
    <div className='fixed bottom-0 flex justify-center w-full mt-6 mb-6 text-brand-subtext'>
      <a
        href='https://github.com/techwithmat/fira'
        target='_blank'
        rel='noreferrer'
        className='flex items-center gap-2 transition-colors duration-100 hover:text-white'
      >
        <Github />
        Made using Tailwind & Next.js
      </a>
    </div>
  )
}

export default Footer
