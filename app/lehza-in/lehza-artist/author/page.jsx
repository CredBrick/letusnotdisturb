import Link from 'next/link'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

const page = () => {
  return (
      <div className='text-white'>
        <div className='mt-10 text-center'>
          <h2 className='px-10 md:px-[60px] text-2xl md:text-3xl lg:text-4xl mb-10'>
            Authors must spend months, years making fantasy believable in a 
            <br /> 
            single work while reality runs rampant and complete chaos elsewhere.
          </h2>
          <p 
            className='italic underline text-lg mb-10'> 
            — Don Roff
          </p>
          <h1 className='text-5xl lg:text-7xl md:px-[300px] mt-10'>
            Lehza.in x Author
          </h1>
        </div>
      </div>
  )
}

export default page