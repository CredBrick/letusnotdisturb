import React from 'react'

const page = () => {
  return (
    <div className='text-white font-light'>
      <div className='relative'>
        <img 
          src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1624941575067-SPZO8435OCCM8WTCXWDS/microphone-2574511_1920.jpg?format=2500w" 
          alt="could not load the image"
          className='top-0 left-0 w-full h-[200px] object-cover opacity-80' />

          {/* text section */}
          <div className='inset-0 absolute text-center '>
            <p className='mt-10 text-xl md:text-3xl lg:text-5xl leading-10 px-[150px]'>
              Unleash the artist within you
            </p>
            <p className='mt-6 font-bold'>
              co-create with your bunch of favourite mentors
            </p>
          </div>
      </div>

      {/* what we offer section */}
      <div className=''>
        <p className='text-center text-2xl md:text-4xl lg:text-5xl mt-10'>
          What we offer at 
          <a href="https://www.instagram.com/lehza.in/" 
            target='_blank' 
            rel="noopener noreferrer" 
            className='italic underline px-2'>
            Lehza.in
          </a>
        </p>

        <div className='flex flex-col md:flex-row'>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default page