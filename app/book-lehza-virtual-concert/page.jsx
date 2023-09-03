import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='text-black relative'>
        <img 
            src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1623603247087-BSW3TUYDOYFSEO1QAO02/audio-1844798_1920+%281%29.jpg?format=2500w" 
            alt="could not load the image" 
            className='object-cover w-full h-[700px] opacity-70'/>
            <div className='absolute flex flex-col md:flex-row justify-center items-center inset-0 top-[100px] md:top-6 left-0 text-5xl'>
                <p className='md:mr-[120px] md:px-10 py-4 font-light'>Get in touch.</p>
                <Link
                    href='/contact'
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='text-center'>
                    <button 
                        className='hover:bg-black hover:text-white font-normal 
                        text-lg md:px-8 py-4'>
                        Contact Us
                    </button>
                </Link>
            </div>
    </div>
  )
}

export default page