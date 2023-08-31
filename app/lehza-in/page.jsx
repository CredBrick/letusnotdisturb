import React from 'react'
import Link from 'next/link'
import { MdLiveTv } from 'react-icons/md'
import { GoPeople } from 'react-icons/go'

const page = () => {
  return (
    <div className='text-white'>
        <div className='relative'>
            <img 
                src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1623338223362-LJFJWRVCEC7NSK342DSC/recording-studio-1869560_1920.jpg?format=2500w" 
                alt="Could not load the image" 
                className='w-[850px] h-[400px] md:w-full md:h-[700px] object-cover'/>

            <div className="absolute top-[10px] md:top-[100px] w-full h-full flex flex-col justify-left items-left text-white">
                <p className='text-3xl md:text-5xl lg:text-7xl md:px-[40px] lg:px-[450px] px-[30px] leading-[50px] md:leading-[60px]'>
                    Stay Connected with our virtual concerts
                </p>
                <p className='mt-4 text-xl px-[30px] md:px-[60px] lg:px-[450px]'>
                    Add the magic of aspiration and inspiration to your next event.
                </p>
            </div>
            
            <div className='absolute top-[200px] md:top-[120px] w-full h-full gap-6
                flex flex-col md:flex-row items-center justify-top md:justify-between md:px-[120px] 
                text-black text-md md:text-xl font-medium'>
                <Link 
                    href='/lehza-our-story'
                    className='bg-white hover:opacity-70 py-2 px-4 md:py-4 md:px-6'>
                    Story
                </Link>
                <Link 
                    href='/book-lehza-virtual-concert'
                    className='bg-white hover:opacity-70 py-2 px-4 md:py-4 md:px-6'>
                    Book An Event
                </Link>
                <Link 
                    href='/lehza-artist'
                    className='bg-white hover:opacity-70 py-2 px-4 md:py-4 md:px-6'>
                    Artists
                </Link>
            </div>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-center gap-6 md:gap-[300px] mt-[60px] md:mt-[70px]'>
            <Link
                href='/contact'
                target="_blank" rel="noopener noreferrer"
                className='cursor-pointer'>
                <MdLiveTv 
                    className='w-[50px] h-[50px] md:w-[100px] md:h-[100px] cursor-pointer'/>
            </Link>
            <Link
                href='/contact'
                target="_blank" rel="noopener noreferrer"
                className='cursor-pointer'>
                <GoPeople 
                    className='w-[50px] h-[50px] md:w-[100px] md:h-[100px]'/>
            </Link>
        </div>



    </div>
  )
}

export default page