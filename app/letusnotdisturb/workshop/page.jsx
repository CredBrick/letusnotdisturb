import React from 'react'
import Link from 'next/link';
import { worshopdata, workshop } from '@/constants/data'

const page = () => {
  return (
    <div className='text-white'>
        <div>
            <img
                className="relative object-cover md:w-full bg-center bg-cover md:min-w-[350px] min-w-[350px] md:h-[450px] h-[400px] opacity-60"
                src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1625725023761-62ZT5TBOUVR5HO6LUYVG/workshop-1746275_1920.jpg?format=2500w"
            />
            <div className="flex items-center justify-center text-center p-4 text-white">
                <p className="absolute lg:text-4xl md:text-3xl text-2xl md:top-[280px] top-[230px] px-10 md:px-[180px] lg:px-[230px] font-light ">
                    Learning should never stop, and to make sure you're never out of things to do, we've got just the workshops you need.
                </p>
            </div>
        </div>

        <div className='flex flex-col items-center justify-center font-light leading-loose'>
            <div className='md:text-left px-[40px] md:px-[110px] lg:px-[224px]'>
                <p className='text-3xl lg:text-5xl underline lg:mb-[60px] mb-9 mt-9 lg:mt-11 '>What kind of workshops can I find?</p>
                <p className='md:text-xl lg:text-2xl font-bold mb-9'>Art: Bring your creativity to life</p>
                <p className='md:text-lg leading-loose'>
                    Been a while since you tried your hand at art? No better time than now to get back into it. Pick from watercolor painting, charcoal sketching, 
                    mandala making, doodling & so much more. There's a variety of digital art workshops - featuring live online demos to learn from. 
                    (We know craft can get complicated) Don't hold back at all, just bring all those colorful thoughts on paper and see it roll out step by step. 
                    Art is also therapeutic, so it might be a good idea to take up things other than your daily chores during this work from home period. You don't really have to be a pro to participate, 
                    and we can assure you this because we're no experts either. Just Van Gogh get yourself registered and watch your masterpiece come alive.
                </p>
            </div>

            <div>
                <img 
                    src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1625726401765-D75WF8PFJBV7QGRWG33C/fund-414948_1920.jpg?format=1000w" 
                    alt="could not load"
                    className='w-[343px] md:w-[720px] md:h-[320px] lg:w-[1250px] lg:h-[500px] h-[138px] mt-9 px-4 mb-9' />
            </div>

            <div>
                {worshopdata.map((worshopdata, index) => {
              return (
              <div
                  className='flex flex-col mb-6 '
                  key={index}>
                <div className='md:text-left px-[40px] md:px-[110px] lg:px-[224px] leading-loose mb-4'>
                    <p className='md:text-xl lg:text-2xl font-bold mb-4'>
                        {worshopdata.topic}
                    </p>
                    <p className='md:text-md'>
                        {worshopdata.about}
                    </p>
                </div>
                <div className="flex items-center justify-center md:mt-8 md:mb-8 ">

                <img
                    className="w-[343px] md:w-[720px] md:h-[370px] lg:w-[1250px] lg:h-[580px] h-[138px] px-4 mb-6" 
                    src={worshopdata.url} 
                    alt="could not load the image" 
                />
                </div>
              </div>
              );
              })}
            </div>

            <Link 
                href="/contactus" 
                className="font-normal text-white 
                hover:bg-white hover:text-black py-5 px-2">
                Register Now
            </Link>
        </div>

        <div className=" relative mt-9">
            <img
                className="inset-0 min-w-[100%] h-[300px] mb-10"
                src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1625756902416-7I9KP8E7OIU8KUBD62GW/create-3026190_1920.jpg?format=2500w"
                alt="could not load the image"
            />
            <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                <p className="md:text-4xl text-3xl">Our E-Network</p>
            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 '>
            {workshop.map((workshop, index) => {
            return (
                <div
                    className='flex flex-col mb-6 '
                    key={index}
                >
                    <div className='flex flex-row items-center'>
                        <Link
                            href={workshop.comurl}
                            className='cursor-pointer'>
                            <img 
                                src={workshop.url} 
                                alt="could not load"
                                className='h-[90px] w-[200px] md:h-[150px] md:w-[300px] md:mt-9 px-4 mb-9 ml-4' 
                            />
                        </Link>
                        <p className='mb-6 px-2 text-md md:text-lg lg:text-xl'>
                            {workshop.title}
                        </p>
                    </div>
                </div>      
            );
            })}
        </div>

        <Link
            href='https://www.prattyancha.org/'
            className='flex flex-col md:flex-row items-center justify-center mb-10'>
            <img 
                src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1625863922927-6F2Q64OK8LI8Q29CG5TT/cv.jpg" 
                alt="could not load the image" 
                className='mt-10 md:ml-6 w-[300px] md:w-[600px] lg:w-[750px]'/>
            <p className='mt-4 text-xl md:ml-8 md:text-2xl'>
                Prattyancha NGO
            </p>
        </Link>
    </div>
  )
}

export default page