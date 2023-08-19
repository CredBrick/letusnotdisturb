import React from 'react'
import Link from 'next/link'
import Wrapper from '@/components/Wrapper'
import { AiOutlineLeft } from 'react-icons/ai'

const page = () => {
  return (
    <div className="flex flex-col text-white items-center justify-center">
      <Wrapper className="mt-6">

        {/* subheading */}
        <Link
          href="/blog" 
          className="mt-6">
          <p className="md:text-md text-sm">Feb 13 - Written By Prashant Priyadarshi</p>
        </Link>

        {/* heading */}
        <div className="mt-4">
          <p className="lg:text-8xl md:text-6xl text-4xl">What's their inspiration...</p>
        </div>

        {/* image */}
        <div className='flex items-center justify-center'>
          <img 
            src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1625674554620-2ZDBLGFXC23S2NSJ75L6/1520173637407.jpg?format=1500w" 
            className="object-cover w-full h-[250px] md:h-[450px] md:w-[650px] lg:w-full lg:h-[700px] bg-center bg-cover md:py-9 py-6" />
        </div>

        {/* text */}
        <div className="md:text-lg text-justify">
          <p className="py-3 md:px-[80px] px-2 lg:px-0">As the world comes closer and everything is accessible to us in one place, 
            our minds are being awestruck by the immense talent the idiot box serves us with.  
            But where does this talent disappear after a while ? The reality shows feature creative people 
            that boggle us with their young age and variety. Be it fine arts or performing arts, the benchmark that defines 'awesome' is being set higher and higher. 
            It proves that the world is a pool of talent waiting to find a stage, but, what is the use of this stage if the sunshine can't provide us warmth the very next day.</p>
          <p className="py-3 md:px-[80px] px-2 lg:px-0">When a child who has never been to a school sketches fairly well, we aren't astonished because we have seen too much like it. 
            But do we have the right to question the choice of colors he uses to depict what he sees around or what he dreams of. We, who aren't able to move 
            without a dance teacher, we, who can't draw a straight line without a ruler; who are we to judge.</p>
        </div>

        {/* images */}
        <div className='flex items-center justify-center'>
          <img 
            src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1625674722989-BDOFS0IWXKVKRKQTLRGF/1520065064807.jpg?format=2500w" 
            className="object-cover w-full h-[250px] md:h-[450px] md:w-[650px] lg:w-full lg:h-[700px] bg-center bg-cover md:py-9 py-6" />
        </div>
          <div className='flex items-center justify-center'>
            <img 
              src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1625674607744-4Z6226XXRO54KYHUPEJU/1520611006046.jpg?format=2500w" 
              alt="awards" 
              className="object-cover w-full h-[500px] md:h-[900px] md:w-[650px] lg:w-[1200px] lg:h-[1400px] bg-center bg-cover md:py-9 py-6"/>
          </div>

          {/* text */}
          <div className="md:text-lg text-justify">
            <p 
              className="py-3 px-2 md:px-[80px] lg:px-0">
              That when we first went to this slum where most of the children are so poor that they can't afford proper education, and handed them a drawing book to paint a fraction of their imagination, was the moment when we came face-to-face with the absurdity of being privileged. If being privileged and educated means taking your dreams, people around you, your imagination for granted, then, we seriously need to rethink the structure of the educational system.
            </p>

            <p 
              className="py-3 px-2 md:px-[80px] lg:px-0">
              A better technological know-how is no excuse for lack of imagination, and Google isn't an alternative for working, creative brain. Technology isn't at fault when the misuse is purely invented by humans.
            </p>

            <p 
              className="py-3 px-2 md:px-[80px] lg:px-0">
              We have forgotten how to live in the society and still retain our individualism but these kids abstains from the artificiality that comes to us quite naturally. Maybe it's our conditioning or something else. Who can say anything without being unsure ?
            </p>
          </div>

          {/* images */}
          <div className='flex items-center justify-center'>
            <img 
              src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1625674242864-XKTOOV4N2H56ELJTZI1X/1520237232207+%281%29.jpg?format=1000w" 
              className="object-cover w-full h-[250px] md:h-[450px] md:w-[650px] lg:w-full lg:h-[700px] bg-center bg-cover md:py-9 py-6" />
          </div>
          <div className='flex items-center justify-center'>
            <img 
              src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1625674284032-VZEGYZSA24SVGFXXR748/1520238443723.jpg?format=1000w" 
              className="object-cover w-full h-[250px] md:h-[450px] md:w-[650px] lg:w-full lg:h-[700px] bg-center bg-cover md:py-9 py-6" />
          </div>
          <div className='flex items-center justify-center'>
            <img 
              src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1625674778211-26ODSMZZXDN7JPPIIE1A/1520064187563.jpg?format=1000w" 
              className="object-cover w-full h-[250px] md:h-[450px] md:w-[650px] lg:w-full lg:h-[700px] bg-center bg-cover md:py-9 py-6" />
          </div>

          {/* another blog */}
          <Link
            href="/blog/the-elusive-creative-confidence"
            className="flex flex-row items-start justify-start md:mt-[100px] mt-[50px] ">
            <AiOutlineLeft
              className="md:px-1 md:py-1 p-1"
              size={30}/>
            <p className="md:text-3xl text-lg">The Elusive Creative Confidence</p> 
          </Link>
      </Wrapper>
    </div>
  )
}

export default page