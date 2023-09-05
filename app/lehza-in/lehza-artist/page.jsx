import React from 'react'
import Link from 'next/link'
import { HiOutlineBookOpen  } from 'react-icons/hi'
import { RiQuestionAnswerLine } from 'react-icons/ri'
import { PiSpeakerHighBold, PiChalkboardTeacherDuotone } from 'react-icons/pi'
import {IoIosPeople} from 'react-icons/io';
import {GiArchiveRegister} from 'react-icons/gi';
import { artist } from '@/constants/data';

const page = () => {
  return (
    <div className='text-white font-light'>
      <div className='relative'>
        <img 
          src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1624941575067-SPZO8435OCCM8WTCXWDS/microphone-2574511_1920.jpg?format=2500w" 
          alt="could not load the image"
          className='top-0 left-0 w-full h-[200px] object-cover opacity-80' />

          {/* text section */}
          <div className='inset-0 absolute text-center '>
            <p className='mt-10 text-xl md:text-3xl lg:text-5xl leading-10 md:px-[150px]'>
              Unleash the artist within you
            </p>
            <p className='mt-6 font-bold px-8'>
              co-create with your bunch of favourite mentors
            </p>
          </div>
      </div>

      {/* what we offer section */}
      <div className=''>
        <p className='text-center text-2xl md:text-4xl lg:text-5xl mt-10'>
          What we offer at 
          <a href="https://www.instagram.com/lehza.in/" 
            target='_blank' 
            rel="noopener noreferrer" 
            className='italic underline px-2'>
            Lehza.in
          </a>
        </p>
      {/*icons and about section */}
        <div className='flex flex-col md:flex-row mt-10'>
          <div className='flex flex-col items-center justify-center text-center basis-1/3'>
            <HiOutlineBookOpen className='w-[80px] h-[80px]'/>
            <h1 className='text-3xl mt-6 mb-8'>Learn Something New</h1>
            <p className='px-6 text-lg mb-8'>
              Lehza.in artist webinar series brings together artists, industry experts and professionals to share what they've learned.</p>
          </div>
          <div className='flex flex-col items-center justify-center text-center basis-1/3'>
            <PiSpeakerHighBold className='w-[80px] h-[80px]'/>
            <h1 className='text-3xl mt-6 mb-8'>Keep up on artist news</h1>
            <p className='px-6 text-lg mb-8'>Lehza.in artist webinar series brings together artists, industry experts and professionals to share what they've learned.</p>
          </div>
          <div className='flex flex-col items-center justify-center text-center basis-1/3'>
            <RiQuestionAnswerLine className='w-[80px] h-[80px]'/>
            <h1 className='text-3xl mt-6 mb-8'>Learn Something New</h1>
            <p className='px-6 text-lg mb-8'>Lehza.in artist webinar series brings together artists, industry experts and professionals to share what they've learned.</p>
          </div>
        </div>
      </div>

      {/* host and voice section */}
      <div className='flex flex-col md:flex-row mt-10'>
        <div className='basis-1/2'>
          <img 
            src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1628063320030-0RXSITP4DI7XZRFAYGOT/Team_lehza.in.png?format=1000w" 
            alt="" />
        </div>
        
        <div className='flex flex-col items-center justify-center basis-1/2 font-light'>
          <h1 className='text-xl md:text-3xl lg:text-5xl mb-8'>Host & Voice -</h1>

          {/* Mr. Prashant Priyadarshi */}
          <Link
            href='https://www.instagram.com/pprashant_priya/'
            className='text-center underline text-xl lg:text-3xl mb-4'
            target='_blank'
            rel='noopener noreferrer'>
            Mr. Prashant Priyadarshi
          </Link>
          <p className='mb-8 italic'>Design Evangelist & Curator, Lehza.in</p>


          {/* Our Creative Volunteer */}
          <h1 className='text-xl md:text-3xl lg:text-5xl mb-8'>Our Creative Volunteer -</h1>

          {/* Miss. Maitree Parashar */}
          <Link
            href='https://www.instagram.com/maitreeparashar1/'
            className='text-center underline text-xl lg:text-3xl mb-4'
            target='_blank'
            rel='noopener noreferrer'>
            Miss. Maitree Parashar
          </Link>
          <p className='mb-4 italic'>Host, Lehza.in</p>

          {/* Mr. Arumit Kayasth */}
          <Link
            href='https://www.instagram.com/arumit/'
            className='text-center underline text-xl lg:text-3xl mb-4'
            target='_blank'
            rel='noopener noreferrer'>
            Mr. Arumit Kayasth
          </Link>
          <p className='mb-4 italic'>Host, Lehza.in</p>

          {/* Miss. Bhavna Parate */}
          <Link
            href='https://www.instagram.com/unruffled_mist/'
            className='text-center underline text-xl lg:text-3xl mb-4'
            target='_blank'
            rel='noopener noreferrer'>
            Miss. Bhavna Parate
          </Link>
          <p className='mb-4 italic'>Host, Lehza.in</p>
        </div>
      </div>

      {/* our team section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:gap-5 gap-10 my-14 px-5 md:px-0">
        <div className="flex flex-col items-center ">
          <PiChalkboardTeacherDuotone
            className='text-white font-normal'
            size={70}/>
          <p className="mt-7 text-center text-white text-4xl ">10+</p>
          <p className="mt-2 text-center text-white text-4xl ">Educators</p>
        </div>
        <div className="flex flex-col items-center">
          <GiArchiveRegister
            className='text-white font-normal'
            size={70}/>
          <p className="mt-7 text-center text-white text-4xl">100+</p>
          <p className="mt-2 text-center text-white text-4xl">Registered Artist</p>
        </div>
        <div className="flex flex-col items-center">
          <IoIosPeople 
            className='text-white font-normal'
            size={70}/>
          <p className="mt-7 text-center text-white text-4xl">10,000+</p>
          <p className="mt-2 text-center text-white text-4xl">Community Members</p>
        </div>
      </div>

      {/* Bringing Lehza.in To You section */}
      <div className='mt-6 md:mt-10 lg:mt-[100px] font-light text-center'>
        <h1 className='text-4xl mb-8'>
          Bringing Lehza.in To You
        </h1>
        <p className='text-lg px-4 md:px-[120px] lg:px-[250px]'>
          As we work toward bringing in-person shows safely back to your
          local community, we're more committed than ever to the idea that 
          live session brings people together. Join independent artists around 
          the world for intimate livestream performances in the Lehza.in streaming room!
        </p>
      </div>

      {/* different sections */}
      <div className='mt-10 lg:mt-[100px] px-10 lg:ml-10 grid grid-rows-1 md:grid-cols-3 gap-4 md:gap-2 lg:gap-4 items-center justify-center cursor-pointer'>
        {artist.map((artist, index) => {
          return (
            <div className='relative' key={index}>
            <Link
              href={artist.page}>
                <img 
                  src={artist.url} 
                  alt="could not load the image"
                  className='md:w-[350px] md:h-[140px] lg:w-[450px] lg:h-[240px]' />
                <div className='absolute inset-0 lg:right-8 flex items-center justify-center text-center text-white transition-opacity opacity-100 hover:opacity-0'>
                  <p className='text-2xl lg:text-4xl lg:px-[60px]'>
                    {artist.title}
                  </p>
                </div>
            </Link>
          </div>
          )
        })}
      </div>

      <div className='flex flex-col items-center justify-center text-center'>
        <p className='text-center text-2xl md:text-4xl lg:text-5xl mt-10 mb-4 md:mb-10'>
            <a href="https://www.instagram.com/lehza.in/" 
              target='_blank' 
              rel="noopener noreferrer" 
              className='underline px-2'>
              Lehza.in
            </a>
            In Session
          </p>

          <iframe 
            src="https://www.youtube.com/embed/Zok838VVMWk?si=YbUir6n3nhFvJuXl" 
            title="YouTube video player"
            className='p-6 w-full h-full md:w-[600px] md:h-[400px] lg:w-[900px] lg:h-[550px]'
            >
          </iframe>
      </div>

      <div className='relative mt-10'>
        <img 
          src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1625338671022-RZH2ZZRI4THK20AO86VI/hands-5216585_1920.jpg" 
          alt="could not load the image"
          className='w-full h-[300px] object-cover' />
          

          <div className='absolute inset-0 flex flex-col text-center'>
            <h1 className='text-2xl'>Join The Community</h1>
            <p className='text-lg px-10 '>Register in one of our courses to become a part of a vibrant community of artists - writers, poets, musicians, painters, performers and what not!</p>
            <form dir="ltr" className='px-4'>
              <input 
                type="text" 
                placeholder='Email Address' 
                className='w-[400px] h-[60px] bg-white border-10 border-white 
                text-black text-xl outline-none'/>
            </form>
            <button>Sign up</button>
          </div>
      </div>
    </div>
  )
}

export default page