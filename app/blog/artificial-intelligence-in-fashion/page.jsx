import React from 'react'
import Link from 'next/link'
import Wrapper from '@/components/Wrapper'
import { AiOutlineRight } from 'react-icons/ai'

const page = () => {
  return (
    <div className="flex flex-col text-white items-center justify-center">
      <Wrapper className="mt-6">

        {/* sub-heading */}
        <Link
          href="/blog" 
          className="mt-6">
          <p className="md:text-md text-sm">Aug 11 - Written By Prashant Priyadarshi</p>
        </Link>

        {/* heading */}
        <div className="mt-4">
          <p className="lg:text-8xl md:text-6xl text-4xl">Artificial Intelligence in the Business of Fashion</p>
        </div>

        {/* image */}
        <div>
          <img 
            src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1625715982415-OO3KJISD06I8MX66UZL0/1581775044522.jpg?format=2500w" 
            className="object-cover w-full h-[250px] md:h-[450px] md:w-[760px] lg:w-full lg:h-[700px] bg-center bg-cover md:py-9 py-6" />
        </div>

        {/* content */}
        <div className="md:text-lg">
          <p className="py-3">Where we all majorly debate on Artificial intelligence can over arc humans creativity, as a believer in elusive creative confidence, I choose to believe in humans.</p>
          <p className="py-3">It was a privilege to be a keynote speaker and in the distinguished guest list and deliver my take along with AI experts, fashion enthusiasts, educationists, academicians, 
            professors from IITs, NIDs, NIFTs and top shot professionals from TCS and Capgemini on how we see Artificial Intelligence in the business of fashion.</p>
          <p className="py-3">In the nutshell - “Artificial intelligence isn’t in a line of code or plot of a scifi movie. It is in us, and together the possibilities are exponential! Believe in humans!”</p>
        </div>

        {/* youtube */}
        <div className="w-full max-w-[760px]">
          <iframe
            width="100%"
            height="315" 
            src="https://www.youtube.com/embed/94OFLB5icHk?wmode=opaque"
            title="Embedded Content"
            frameBorder="0"
            allowFullScreen
            className="md:h-[380px] lg:w-[1200px] lg:h-[700px]"
            >
          </iframe>
        </div>

        {/* image */}
          <div className="">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1625715900201-7MUPR9ILYWCM8NV0S41C/1565535864784.jpg?format=1000w" 
              alt="awards" 
              className="object-cover w-full h-[250px] md:h-[450px] md:w-[760px] lg:w-[1200px] lg:h-[700px] bg-center bg-cover md:py-9 py-6"/>
          </div>

        {/* image */}
          <div className="lg:flex lg:items-center lg:justify-center">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1625715940541-HTMRB84KIOCU00YHC8AM/1565535893011.jpg?format=1000w" 
              alt="poster" 
              className="h-[550px] w-[760px] md:h-[750px] md:w-[760px] lg:h-[1000px]"/>
          </div>

          {/* next pages */}
          <Link
            href="/blog/the-elusive-creative-confidence"
            className="flex flex-row items-end justify-end md:mt-[100px] mt-[50px] ">
            <p className="md:text-3xl text-lg">The Elusive Creative Confidence</p> 
            <AiOutlineRight
              className="md:px-1 md:py-1 p-1"
              size={30}/>
          </Link>
          
      </Wrapper>
    </div>
  )
}

export default page