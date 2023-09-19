import React from 'react'

const page = () => {
  return (
    <div className=''>
      <div className='font-extralight'>
        <img
          className="object-cover md:w-full min-w-[350px] md:h-[450px] h-[400px]"
          src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1624635185627-9RRCPSQ767JTAJXZUVNO/atibaia-3381711_1920.jpg"
        />
        <div className="flex items-center justify-center text-center text-black leading-[80px] ">
            <p className="absolute lg:text-3xl md:text-2xl text-xl md:top-[100px] top-[130px] px-10 md:px-[130px] md:leading-10 lg:leading-[50px]">
              Comforting the disturbed and disturbing the comfortable! Our intention is to do exactly what we've been doing, TALK. 
              We went, We saw, We heard, We forgot. But we'll discuss, because nothing escapes our experienced eyes. 
              Let us just be what we are, we have no intention to disturb your sweet lives. 
            </p>
            <p className='absolute mb-[180px] lg:mb-[140px] text-3xl'>
              So, LET US NOT DISTURB 
            </p>
        </div>
      </div>
    </div>
  )
}

export default page