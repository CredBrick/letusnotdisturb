import React from 'react'

const page = () => {
  return (
    <div className='text-white'>
        <div>
            <img
                className="relative object-cover md:w-full bg-center bg-cover w-full md:h-[250px] h-[300px] opacity-60 -top-[90px]"
                src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/5e9fe4da-6dfd-4535-9f88-604c0896854f/team-4529717_1920.jpg?format=2500w"
            />
            <div className="flex items-center justify-center text-center p-4 text-white ">
                <p className="absolute md:text-4xl text-2xl md:top-[190px] top-[190px] px-8 ">What Does Community Mean To You?</p>
            </div>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <div className='md:-mt-10 font-normal'>
            <p className='md:text-lg md:px-[140px] text-center'>At The LetUsNotDisturb.com, our mission is to try and answer one question: What is community?</p>
            <p className='md:text-lg  md:px-[100px] text-center mt-4'>This simple question guides everything we do. We believe that every event we host, every treat we dish out, every member we accept, takes us one step closer to answering this question. We learn by running mini experiments and from every member that joins our community. Each of our members has a story .We believe that every creator, every member and every brand has its own story- we tell that story.</p>
          </div>

          <div className='md:mt-[80px] '>
            <h1 className='text-4xl'>Meet Our Community</h1>
          </div>

          <div>
            
          </div>
        </div>
    </div>
  )
}

export default page