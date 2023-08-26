'use client'
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import {IoIosPeople} from 'react-icons/io';
import {PiChalkboardTeacherDuotone} from 'react-icons/pi';
import {GiArchiveRegister} from 'react-icons/gi';
import '../styles/globals.css';


  const slides = [
    {
      url: 'https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1625758260323-G7KON3HA2GOCIYEGA9GC/desk-1081708_1920.jpg',
      heading: 'Welcome to\nLetUsNotDisturb.com',
      text: "We went, We saw, We heard, We forgot.\nBut we'll discuss, because nothing escapes our experienced eyes.\nLet us just be what we are, we have no intention to disturb your sweet lives.",
      btntext: "Explore LetUsNotDisturb"

    },
    {
      url: 'https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1625760318719-WW8ZKPQRVG4HYYWJBTGO/paper-1100254_1920.jpg?format=2500w',
      heading: 'Lehza.in',
      text: "Virtual Concert, Live Session & Gigs",
      btntext: "Explore Lehza.in"
    },
  ];

  const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };


  return (
    <div>
    {/* slider */}
    <div className='min-w-[20%] h-[520px] md:min-w-[50%] md:h-[640px] m-auto relative group'>
        <div
            style={{
                backgroundImage: `url(${slides[currentIndex].url})`,
            }}
            className='w-full h-full rounded-none bg-center bg-cover duration-500 text-black flex flex-col items-center text-center'>
                
            {/* headings */}
            <p className='md:p-8 p-6 font-medium md:text-5xl text-3xl'>
                {slides[currentIndex].heading.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    <br />
                </React.Fragment>
                ))}
            </p>

            {/* text */}
            <p className='absolute mt-2 md:mt-4 text-xl md:text-2xl md:top-[200px] top-[170px] md:px-[160px] lg:px-[550px] px-[30px] '>
                {slides[currentIndex].text.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    <br />
                </React.Fragment>
                ))}
            </p>
            {/* button */}
            <button className='absolute mt-4 text-xl md:top-[510px] font-medium top-[340px] hover:bg-black hover:text-white rounded py-5 px-2'>
                  <p>{slides[currentIndex].btntext}</p>
            </button>
        </div>

      {/* Left Arrow */}
      <button className='focus md:hidden group-hover:block absolute md:top-[50%] top-[90%] -translate-x-0 translate-y-[-50%] md:left-5 left-[35%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </button>

      {/* Right Arrow */}
      <div className='md:hidden group-hover:block absolute md:top-[50%] top-[90%] -translate-x-0 translate-y-[-50%] md:right-5 right-[35%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>

    {/* achievements */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:gap-5 gap-10 my-14 px-5 md:px-0">
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

    {/* Things we do */}
    <div className="relative ">
      <img
        className="relative object-cover md:w-full bg-center bg-cover min-w-[20%] h-[420px] opacity-50"
        src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/88f9eee8-8319-4651-ba53-8a8f3110b3b1/light-bulb-3104355_1920.jpg?format=2500w"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center font-medium p-4 bg-black bg-opacity-50 text-white">
        <p className="absolute md:top-[70px] top-[50px] md:text-4xl text-xl">Things We Do</p>
        <p className='absolute whitespace-pre-wrap mt-4 px-6 md:text-lg text-md md:top-[150px] top-[100px]'>Facilitating Ideation & Brainstorming Sessions | Private Virtual Concerts | Art Workshops
        <br/>
          Creative Direction | Public Writing | Public Speaking | Live Events | Poetry | Spoken Word Art | Persona Creation | Fitness | Yoga | Gardening | UI design | UI style guides
        <br/>
          & Lots More…
        </p>
        <button className='absolute mt-4 text-xl md:top-[300px] top-[300px] hover:bg-white/90 text-black bg-white hover:opacity-60 py-5 px-2 font-medium'>
            <p>Explore Workshops</p>
        </button>
      </div>
    </div>

    {/* text section */}
    <div className="text-white text-center mt-10 font-medium">
      <p 
        className='md:text-2xl text-xl whitespace-pre-wrap px-6'>
          10+ Years Giving Toward The Community
      </p>
      <p 
        className='whitespace-pre-wrap md:text-lg mt-6 md:px-[130px] px-[50px] mb-[70px]'>
          Most of our creative career has been working on&nbsp; 
          <span className='italic'>giving towards the community</span> 
          – Live/Virtual events & Creative Workshop. We have also enjoyed opportunities to explore beyond events and designs also. We are not limited to just these things. A good community treats every aspect with an open mind and tackles it as a journey of discovery. The virtual & creative world is moving at an incredible pace and one cannot rely on experience alone. Throughout our career, We have been quick to adapt and morph and we are forever learning new tricks.
          <br />
          Change is constant.
        </p>
    </div>

    {/* made for you */}
    <div className='relative '>
      <img
        className = 'relative object-cover md:w-full bg-center bg-cover min-w-[20%] md:h-[520px] h-[420px] opacity-50' 
        src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/0e3d2d92-f4af-49df-8eca-c454d37c3c85/hands-1846428_1920.jpg" 
        alt="" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 text-white">
        <p className="absolute md:top-[70px] top-[50px] md:text-4xl text-2xl font-medium">Made For</p>
        <p className='absolute whitespace-pre-wrap mt-4 px-6 md:text-lg text-md md:top-[150px] top-[100px] font-medium'>
          Creators
          <br/>
          Game Changers
          <br/>
          Trendsetters
          <br/>
          Go-Getters
          <br/>
          Quiet Achievers
          <br />
          Thought Leaders
        </p>
        <p className='absolute mt-4 px-6 md:text-4xl text-2xl md:top-[350px] top-[300px] font-medium'>You</p>
      </div>
    </div>

    {/* Reviews from people */}
    <div className="mt-[70px] ">
        <div className="items-center font-medium">
          <p className="mt-7 text-center text-white md:text-2xl text-xl  whitespace-pre-wrap font-medium">What People Are Saying About Us</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-5 my-6 px-5 md:px-0'>
          <div className="flex flex-col md:p-8">
            <p className="mt-7 text-white md:text-lg text-center whitespace-pre-wrap">“The Lehza.in event was huge and success. I learnt a lot from the host and its a great platform to get inspired and happy living. I will definitely recommend this virtual concert to everyone”</p>
            <p className="mt-2 text-center text-white md:text-lg">— Siddharth Shukla</p>
          </div>
          <div className="flex flex-col items-center md:p-8">
            <p className="mt-7 text-center text-white md:text-lg">“I was blown away how well LetUsNotDisturb team. All is not lost because of COVID Pandemic. I was fortunate enough to experience the best virtual concert I have ever attended.”</p>
            <p className="mt-2 text-center text-white md:text-lg">—  Diksha Das</p>
          </div>
        </div>
    </div>

    {/* end image */}
    <div className="relative">
      <img
        className="relative object-cover md:w-full bg-center bg-cover min-w-[20%] h-[280px] opacity-50"
        src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/d5d012d1-935e-4eb1-8b9c-974c69ae7610/rings-100181_1920.jpg?format=2500w"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 text-white">
        <p className="absolute md:top-[70px] top-[100px] md:text-4xl text-3xl/[50px] font-medium">We’d love to work with you</p>
        <button className='absolute mt-4 text-xl md:top-[150px] top-[160px] hover:bg-white/90 text-black bg-white hover:opacity-60 py-5 px-2 font-medium'>
            <p>Connect With Us</p>
        </button>
      </div>
    </div>
  </div> 
  )
}

export default Hero;