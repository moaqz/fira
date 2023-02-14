import { LineWobble } from '@uiball/loaders'

interface LoaderProps {
  text?: string
}

function Loader(props: LoaderProps) {
  const text = props.text ?? 'Loading...'

  return (
    <div className='mt-8 flex flex-col items-center justify-center'>
      <p className='text-lg mb-4 text-brand-subtext'>{text}</p>
      <LineWobble speed={2} color='#ccc' />
    </div>
  )
}

export default Loader
