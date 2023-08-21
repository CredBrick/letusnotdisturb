import React from 'react'
import Link from 'next/link'
import Wrapper from '@/components/Wrapper'
import { AiOutlineRight } from 'react-icons/ai'

const page = () => {
  return (
    <div>
      <Wrapper className="text-white">

        {/* youtube video */}
        <div className="mt-[60px] flex items-center justify-center">
            <iframe
              src="https://www.youtube.com/embed/ruu6pL6b4EY?wmode=opaque"
              title="Embedded Content"
              frameBorder="0"
              allowFullScreen
              className="md:h-[400px] md:w-[700px] lg:w-[950px] lg:h-[600px] h-[180px]"
              >
            </iframe>
        </div>

        {/* next page */}
        <Link
            href="/news/bbc-news"
            className="flex flex-row items-end justify-end md:mt-[100px] mt-[50px] ">
            <p className="md:text-3xl text-xl">BBC News</p> 
            <AiOutlineRight
              className="md:px-1 md:py-1 p-1"
              size={30}/>
          </Link>
      </Wrapper>
    </div>
  )
}

export default page