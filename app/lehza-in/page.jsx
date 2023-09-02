import React from 'react'
import Link from 'next/link'
import { MdLiveTv } from 'react-icons/md'
import { GoPeople } from 'react-icons/go'
import { PiSortAscendingLight, PiMagicWand } from 'react-icons/pi'
import { IoTicketOutline } from 'react-icons/io5'
import { lehzainstaposts } from '@/constants/data';


const page = () => {
  return (
    <div className='text-white'>
        {/* entry section */}
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

        {/* other pages using icons */}
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
        
        {/* introduction section */}
        <div className='flex flex-col md:flex-row lg:gap-2 mt-[60px] md:mt-[70px]'>
            <img 
                src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1623601578272-R3WWKMCQLZLHW5E8E630/cx.jpg?format=1000w" 
                alt="Could not load the image"
                className='px-10 lg:px-2 lg:ml-[80px] md:h-[600px] md:w-[500px] lg:h-[700px] lg:w-[500px]' 
                />
            <div className='px-4 lg:px-0 mt-[40px] lg:mt-[90px] ml-6 lg:ml-[100px]'>
                <p className='text-2xl mb-10'>
                    Bring your people together no matter where they are
                </p>
                <p className='text-lg'>
                    Interested in bringing live chat to your team, friends, or community? <br/>
                    No matter the occasion, we can produce your event on air. <br/>
                    We are all ears to hear stories from our guests, but we believe in talking more about aspirations than achievements. <br/>
                </p>
                <Link
                    href='/contact'
                    target="_blank" rel="noopener noreferrer"
                    className='flex items-center justify-center text-center'>
                    <button className='hover:bg-white hover:text-black font-normal px-4 py-4 mt-10'>Book Your Own Concert</button>
                </Link>
            </div>
        </div>

        {/* How we do it in Lehza.in */}
        <div className='mt-[60px] md:mt-[70px]'>
            <h1 className='text-4xl text-center mb-[40px] md:mb-[80px]'>How we do it in Lehza.in</h1>
            <div className='text-white grid grid-cols-1 md:grid-cols-3  items-center justify-between px-6'>
                <div className='flex flex-col items-center'>
                    <PiMagicWand className='w-[70px] h-[100px]'/>
                    <h1 className='mt-4 mb-4 text-xl'>You Set The Vibe</h1>
                    <p className='text-lg text-center px-6 mb-5'>Tell us about your event and favorite topic. We curate the perfect lineup to inspire the audience.</p>
                </div>
                <div className='flex flex-col items-center'>
                    <PiSortAscendingLight className='w-[70px] h-[100px]'/>
                    <h1 className='mt-4 mb-4 text-xl'>We sort the show</h1>
                    <p className='text-lg text-center px-6 mb-5'>We take care of everything from booking to on-air, so discovering emerging artists has never been easier.</p>
                </div>
                <div className='flex flex-col items-center'>
                    <IoTicketOutline className='w-[70px] h-[100px]'/>
                    <h1 className='mt-4 mb-5 text-xl'>Enjoy the gig</h1>
                    <p className='text-lg text-center px-6 mb-5'>This isn't your average virtual event. Our Team creates the atmosphere so everyone you invite can simply enjoy the show.</p>
                </div>
            </div>
        </div>

        {/* contact us section */}
        <div className='mt-[60px] md:mt-[70px]'>
            <img 
                src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1623601004854-SUECDOBOOT37T0BESXJH/ticket-2974645_1920.jpg?format=1500w" 
                alt="Could not load the image" 
                className='w-full h-[300px] object-cover'/>
            <div className='mt-10 flex flex-col items-center justify-center text-center'>
                <h1 className='text-3xl lg:text-5xl px-6'>Contact Us Today To Learn More</h1>
                <Link
                    href='/contact'
                    target="_blank" rel="noopener noreferrer"
                    className='text-center'>
                    <button className='hover:bg-white hover:text-black font-normal text-lg px-4 py-4 mt-8'>Contact Us</button>
                </Link>
            </div>
        </div>

        {/* video section */}
        <div className='flex flex-col md:flex-row items-center justify-center mt-[60px] md:mt-[70px]'>
            <div className='flex flex-col text-center items-center justify-between'>
                <h1 className='text-3xl lg:text-5xl px-4 lg:px-[60px]'>
                    Make it memorable with live chat.
                </h1>
                <Link
                    href='/contact'
                    target="_blank" rel="noopener noreferrer"
                    className='text-center'>
                    <button 
                        className='hover:bg-white hover:text-black font-normal 
                        text-lg px-4 py-4 mt-8'>
                        Get In Touch
                    </button>
                </Link>
            </div>
            <iframe 
                src="https://www.youtube.com/embed/Zok838VVMWk?si=kn_aBASoGewYWYek" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer" 
                allowfullscreen
                className='p-6 w-full h-[400px] lg:h-[600px]'>
            </iframe>
        </div>

        {/* what people love about lehza.in */}
        <div className='flex flex-col md:flex-row items-center justify-center mt-[60px] md:mt-[70px]'>
            <div className='flex flex-col items-center justify-center text-center'>
                <h1 className='mb-8 text-3xl lg:text-5xl px-4 lg:px-[60px]'>What people love about Private Virtual Concerts</h1>
                <img 
                    src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1623597656664-4CCPJLRUVODIS7MOQAL8/n.jpg?format=1000w" 
                    alt="could not load the image" 
                    className='px-6'/>
            </div>
            <div className='mt-10 md:mt-[90px] text-lg px-4'>
                <li className='text-2xl mb-2'>Your Private Virtual Concert</li>
                <p className='mb-6 ml-8'>Sit back with your guests and enjoy the live session from wherever you are.</p>
                <li className='text-2xl mt-4 mb-2'>End to End Support </li>
                <p className='ml-8'>The artists stream from their locations with full support from our production engineers in real-time. This keeps you carefree.</p>
            </div>
        </div>

        {/* instagram posts */}
        <div className='mt-[60px] md:mt-[70px] flex flex-col items-center justify-center'>
            <h1 className='mb-10 text-3xl lg:text-5xl'>
                Follow our journey.
            </h1>
            <div className="mt-[60px] md:mt-[70px] md:pb-[90px] pb-[40px] grid grid-cols-2 md:grid-cols-4 md:gap-4 gap-4 px-5 md:px-4 cursor-pointer">
                {lehzainstaposts.map((lehzainstaposts, index) => {
                    return (
                        <Link
                            target='_blank'
                            rel="noopener noreferrer"
                            key={index}
                            href={lehzainstaposts.instaurl}
                            >
                            <img 
                                src={lehzainstaposts.imgurl} 
                                alt="could not load the posts" 
                            />
                        </Link>
                )})}
            </div>
        </div>

    </div>
  )
}

export default page