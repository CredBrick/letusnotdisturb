import React from 'react'
import Link from 'next/link'
import { cinema } from '@/constants/data';
import { AiOutlineRight } from 'react-icons/ai';

const page = () => {
  return (
    <div className='text-white'>
      <div className='mt-10 text-center'>
        <h2 className='px-10 md:px-[60px] text-2xl md:text-3xl lg:text-4xl mb-10'>
          Cinema is not only about making people dream.
          <br /> 
          It's about changing things and making people think.
        </h2>
        <a 
          href='https://en.wikipedia.org/wiki/Nadine_Labaki'
          className='italic underline text-lg mb-10'> 
          - Nadine Labaki
        </a>
        <h1 className='text-5xl lg:text-7xl md:px-[300px] mt-10'>
          Lehza.in x Cinema
        </h1>
      </div>

      <div className='mt-10 lg:mt-[100px] px-10 lg:ml-10 grid grid-rows-1 md:grid-cols-3 gap-4 md:gap-2 lg:gap-4 items-center justify-center cursor-pointer'>
        {cinema.map((cinema, index) => {
          return (
            <div className='relative' key={index}>
            <Link
              href={cinema.url}>
                <img 
                  src={cinema.img} 
                  alt="could not load the image"
                  className='md:w-[330px] md:h-[180px] lg:w-[430px] lg:h-[280px]' />
            </Link>
          </div>
          )
        })}
      </div>
      
      <Link
          href="/lehza-in/lehza-artist/fashion"
          className="flex flex-row items-end justify-end md:mt-[100px] mt-[50px] ">
          <p className="md:text-3xl text-lg">Fashion</p> 
          <AiOutlineRight
            className="md:px-1 md:py-1 p-1"
            size={30}/>
      </Link>

    </div>
  )
}

export default page