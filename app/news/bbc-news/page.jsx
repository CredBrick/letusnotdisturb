import React from 'react'
import Link from 'next/link'
import Wrapper from '@/components/Wrapper'
import { AiOutlineLeft } from 'react-icons/ai'

const page = () => {
  return (
    <div>
      <Wrapper className="text-white">

        {/* youtube video */}
        <div className="mt-[60px] flex items-center justify-center">
            <iframe
              src="https://www.youtube.com/embed/8d__2XrIFlk?wmode=opaque"
              title="Embedded Content"
              frameBorder="0"
              allowFullScreen
              className="md:h-[400px] md:w-[700px] lg:w-[950px] lg:h-[600px] h-[180px]"
              >
            </iframe>
        </div>

        {/* previous page */}
        <Link
            href="/news/corona3rdwave"
            className="flex flex-row items-start justify-start md:mt-[100px] mt-[50px] ">
            <AiOutlineLeft
              className="md:px-1 md:py-1 p-1"
              size={30}/>
            <p className="md:text-3xl text-lg">Corona 3rd Wave - Lallantop</p> 
        </Link>
      </Wrapper>
    </div>
  )
}

export default page