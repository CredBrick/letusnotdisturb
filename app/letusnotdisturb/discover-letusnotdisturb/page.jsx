import Button from '@/components/Button'

const page = () => {
  return (
    <div className=''>
      <div className='font-extralight'>
        <img
          className="relative object-cover md:w-full min-w-[350px] md:h-[450px] h-[400px]"
          src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1624635185627-9RRCPSQ767JTAJXZUVNO/atibaia-3381711_1920.jpg"
          alt="could not load the image"
        />
        <div className="flex flex-col items-center justify-center text-center text-black leading-[80px] ">
            <p className="absolute lg:text-3xl md:text-2xl text-xl top-[130px] md:top-[150px] lg:top-[180px] px-10 md:px-[130px] lg:px-[230px] md:leading-10 lg:leading-[50px]">
              Comforting the disturbed and disturbing the comfortable! Our intention is to do exactly what we've been doing, TALK. 
              We went, We saw, We heard, We forgot. But we'll discuss, because nothing escapes our experienced eyes. 
              Let us just be what we are, we have no intention to disturb your sweet lives. 
            </p>
            <p className='absolute mb-[180px] lg:mb-[170px] text-2xl md:text-3xl'>
              So, LET US NOT DISTURB 
            </p>
        </div>
      </div>

      <div className='relative flex mt-10'>
        <img
          src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1628010941889-LK6F0K3X8MDB5IRXA3NG/Stationary.jpg"
          alt="could not load the image"
          className='z-10 w-full h-auto sm:w-[400px] md:w-[500px] lg:w-[1500px] px-10'
        />
        <div className="z-20 absolute top-11 right-[200px] bg-white w-full sm:w-[300px] md:w-[380px] h-[200px] p-4 shadow-md sm:ml-0 sm:mt-0">
          <p className="text-black text-2xl px-4 mt-4 leading-10">
            Explore your creative side.
            <br />
            Learn a new artform.
            <br />
            Follow your passion.
          </p>
        </div>
      </div>

      <Button />

      <div className='mt-10 lg:mt-[100px] px-10 lg:ml-10 grid grid-rows-1 md:grid-cols-3 gap-4 md:gap-2 lg:gap-4 items-center justify-center cursor-pointer'>
        
      </div>


    </div>
  )
}

export default page