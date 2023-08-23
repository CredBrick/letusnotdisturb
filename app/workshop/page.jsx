import React from 'react'

const page = () => {
  return (
    <div className='text-white'>
        <div>
            <img
                className="relative object-cover md:w-full bg-center bg-cover md:min-w-[350px] min-w-[350px] md:h-[450px] h-[400px] opacity-60"
                src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1625725023761-62ZT5TBOUVR5HO6LUYVG/workshop-1746275_1920.jpg?format=2500w"
            />
            <div className="flex items-center justify-center text-center p-4 text-white">
                <p className="absolute lg:text-4xl md:text-3xl text-2xl md:top-[280px] top-[230px] px-10 md:px-[180px] lg:px-[230px] font-light ">Learning should never stop, and to make sure you're never out of things to do, we've got just the workshops you need.</p>
            </div>
        </div>
        <div className='flex items-center justify-center'>
            <div className='lg:text-left'>
                <p className='md:text-3xl lg:text-5xl underline mb-6 mt-8'>What kind of workshops can I find?</p>
                <p className='md:text-xl lg:text-2xl'>Art: Bring your creativity to life</p>
            </div>
        </div>
    </div>
  )
}

export default page