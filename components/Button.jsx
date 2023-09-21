import Link from 'next/link'

const Button = () => {
  return (
    <div className='flex items-center justify-center'>
        <Link
          href='/contact' 
          className='text-white hover:bg-white px-4 py-6 font-semibold hover:text-black' >Join LetUsNotDisturb</Link>
    </div>
  )
}

export default Button