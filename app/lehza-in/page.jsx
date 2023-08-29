import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='text-white'>
        {/* className='min-w-[60%] h-[620px] md:min-w-[80%] md:h-[622px] lg:min-w-[30%] lg:h-[770px] m-auto relative group' 
        
        w-[500px] h-[600px] md:w-full md:h-full md:bg-center bg-cover*/}
        <div className='relative'>
            <img 
                src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1623338223362-LJFJWRVCEC7NSK342DSC/recording-studio-1869560_1920.jpg?format=2500w" 
                alt="Could not load the image" 
                className='w-[850px] h-[600px] md:w-full md:h-[700px] object-cover'/>

            <div className="absolute top-[90px] w-full h-full flex flex-col justify-left items-left text-white">
                <p className='text-3xl md:text-5xl lg:text-7xl md:px-[40px] lg:px-[450px] px-[30px] leading-[50px] md:leading-[60px]'>
                    Stay Connected with our virtual concerts
                </p>
                <p className='mt-4 text-xl px-[30px] md:px-[60px] lg:px-[450px]'>
                    Add the magic of aspiration and inspiration to your next event.
                </p>
            </div>
            
            <div className='absolute top-[300px] md:top-[120px] w-full h-full gap-6
                flex flex-col md:flex-row items-center justify-top md:justify-between md:px-[120px] 
                text-black text-md md:text-xl font-medium'>
                <Link 
                    href='/lehza-our-story'
                    className='bg-white hover:opacity-70 py-5 px-8'>
                    Story
                </Link>
                <Link 
                    href='/book-lehza-virtual-concert'
                    className='bg-white hover:opacity-70 py-5 px-8'>
                    Book An Event
                </Link>
                <Link 
                    href='/lehza-artist'
                    className='bg-white hover:opacity-70 py-5 px-8'>
                    Artists
                </Link>
            </div>
        </div>

    </div>
  )
}

export default page