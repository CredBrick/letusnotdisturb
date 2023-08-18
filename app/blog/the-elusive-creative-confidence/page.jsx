import React from 'react'
import Link from 'next/link'
import Wrapper from '@/components/Wrapper'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

const ecc = () => {
  return (
    <div className="flex flex-col text-white items-center justify-center">
      <Wrapper className="mt-6">
        <Link
          href="/blog" 
          className="mt-6">
          <p className="md:text-md text-sm">Apr 2 - Written By Prashant Priyadarshi</p>
        </Link>
        <div className="mt-4">
          <p className="lg:text-8xl md:text-6xl text-4xl">The Elusive Creative Confidence</p>
        </div>
        <div>
          <img 
            src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1625715633509-KU85RSYHZPK3HTR16B9P/1548264136741.jpg?format=2500w" 
            className="object-cover w-full h-[250px] md:h-[450px] md:w-[760px] lg:w-full lg:h-[700px] bg-center bg-cover md:py-9 py-6" />
        </div>
        <div className="md:text-lg">
          <p className="py-3">Thousands of crowd, hundreds of millennial, one speaker with an agenda to create design awareness at the school and college level in the Indian education system.</p>
          <p className="py-3">This was just the trailer! A Workshop for Career Fest at Jyoti Nivas College by Ignite India.</p>
          {/* <p className="py-3"></p> */}
        </div>

        {/* youtube video */}
        <div className="w-full lg:max-w-[100%] sm:max-w-[760px] md:text-lg">
          <iframe
            width="100%"
            height="315" 
            src="https://www.youtube.com/embed/6GUVFv6qwu0?wmode=opaque"
            title="Embedded Content"
            frameBorder="0"
            allowFullScreen
            className="md:h-[380px] lg:w-[1200px] lg:h-[700px]"
            >
          </iframe>
          <div className='mt-4 w-full md:text-lg'>
          <p className="py-3">We are born creative, as a child we ask questions and as an adult we answer the questions, because it is the creativity required to ask a question and intelligence to answer. With time and conditioning we tend to have the fear of creative judgement and lose the creative confidence.</p>
          <p className="py-3">Well, I am elated to share my part of learning and contribution while taking a counselling session for the students in the event. The design event jointly organised by Ignite India and Rainush Media Labs powered by Pahal School of Design.</p>
          </div>
        </div>     
        <div className='mt-8 md:text-lg'>
        <img 
              className="lg:px-6 lg:mb-8 lg:mr-4 md:float-right w-full h-[300px] md:h-[650px] lg:h-[600px] lg:w-[600px]"
              src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1625715457455-6XRZDAOGA01F19G8940X/1554147603339.jpg?format=1000w" 
              alt="Could not load image"
            />
            <p 
              className='mt-8 md:text-lg md:clear-none '>
              Why about creativity? Because innovation can be both fun and rewarding. As we look at the sweep of our life and start to think of a 
              legacy that survives beyond it, giving others the opportunity to live up to their creative capacity seems like a worthy purpose. In the 
              last six years, we’ve helped countless people nurture their creativity and put it to valuable use. </p>
              
          <img 
              className="mt-6 lg:relative lg:mt-10 float-left w-[400px] md:w-[750px] lg:w-[600px] h-[250px] md:h-[550px] lg:h-[400px] lg:px-6"
              src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1625715475121-38NGZ6FBOL5Y3P7JNAB3/1554146795359.jpg?format=2500w" 
              alt="Could not load image"
            />
            <p 
              className='mt-8 lg:mr-8 md:py-6 md:text-lg md:clear-none'>
              'The truth is, we all have far more creative potential waiting to be tapped. 
              Everybody is the creative type. If we can get individuals to stick with it 
              awhile, they will end up doing amazing things. They come up with breakthrough
              ideas or suggestions, and work creatively with a team to develop something 
              truly innovative. They surprise themselves with the realisation that they 
              are a lot more creative than they had thought. We don’t have to generate 
              creativity from scratch. We just need to help people rediscover what they 
              already have, the capacity to imagine or build upon new-to-the world ideas.' -Kelley
              </p>
              <p
              className='mt-4 md:text-lg clear-none'>
              With the same belief we also had a highly energetic, enthusiastic and exhilarated 
              interactive session where the student submissions were drawn to link their thoughts 
              on art, design and creatives to life and career with demonstrating in one single sheet 
              in any formats be it all even meant only for the aliens with no subjective conclusion. 
              With this we witnessed the innovative ideas of the students, and saw an overview of many 
              texts and topics they mentioned beyond imagination.
              </p>
              <p
              className='mt-4 md:text-lg clear-none'>
              Later the students were introduced to the various career options available to orient their creative 
              thought in building to the most and more of their creativity.
              </p>
        </div>

        <div className="mt-4 md:text-lg">
          <p>
          Creativity now is much broader and more universal than what people typically consider “artistic” fields. We think of creativity as using our imagination to create something new in the world. Creativity comes into play wherever you have the opportunity to generate new ideas, solutions, or approaches. And we believe everyone should have access to that resource. For much of the 20th century the so-called “creative types”—designers, art directors, copy writers—were relegated to the kids’ table, far from serious discussions. Meanwhile, all the important business conversations took place among the “grown-ups” in boardrooms and meeting spaces down the hall.But the creative endeavours that seemed fanciful or extracurricular a decade ago have now gone mainstream.
          </p>
          <br />
          <p>
          Like earlier of our events, We have addressed this teachable moment once again to break the thought under the shadow of their preceded conditioning with a hope that might bring change and innovation in the teaching medium. And continue with our pen to power moment. The power to change the education system in schools. A watershed teaching moment, where a teaching unit on student activism in art and design with today and the world are working with a thought to ignite India, where students talk and portray their interest of career to their aspirations.
          </p>
        </div>

        <div className="mt-8">
          <img 
            src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1625715554982-V2881GBR6W45NTCNVYCR/1548266429480.jpg?format=1000w"
            className="w-full md:h-[500px] lg:h-[700px]"
            alt="" />
        </div>

        <div className="md:flex flex-row md:flex-row md:gap-10 lg:gap-[150px]">
        {/* flex flex-row md:flex-col */}
          <Link
            href="/blog/artificial-intelligence-in-fashion"
            className="flex flex-row items-start justify-start md:mt-[100px] mt-[50px] ">
            <AiOutlineLeft
              className="md:px-1 md:py-1 p-4 md:mt-4"
              size={50}
            />
            <p className="lg:text-5xl md:text-3xl text-sm whitespace-pre-wrap py-3">
              Artificial Intelligence in the Business of Fashion
            </p>
          </Link>
          <Link
            href="/blog/whats-their-inspiration"
            className="lg:mb-8 flex flex-row items-end justify-end md:mt-[100px] ">
            <p className="lg:text-5xl md:text-3xl text-sm whitespace-pre-wrap py-3">
              What's their inspiration...
            </p>
            <AiOutlineRight
              className="md:px-1 md:py-1 p-4 md:mb-4"
              size={50}
            />
          </Link>
        </div>
      </Wrapper>
    </div>
  )
}

export default ecc