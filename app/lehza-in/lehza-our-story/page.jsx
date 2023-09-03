import React from 'react'

const page = () => {
  return (
    <div className='text-white font-light'>
      {/* header */}
      <div className='relative'>
        <img 
          src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1625339403664-66YS6RKFFDWBC50ITPS9/books-1245690_1920.jpg" 
          alt="could not load the image"
          className='top-0 left-0 w-full h-[200px] object-cover opacity-80' />

          <p className='inset-0 absolute flex items-center justify-center text-3xl md:text-5xl'>
            Our Story
          </p>
      </div>

      {/* content */}
      <div className='flex flex-col items-center justify-center text-center mt-10 px-10 md:px-[80px] lg:px-[190px]'>
        <img 
          src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1625390150540-Z386ZC3UHPGGVQDHTFLP/a.jpg?format=1000w" 
          alt="could not load the image" />
          <div className='mt-10 text-lg'>
            <p className='text-lg'>Lehza.in</p>
            <h1 className='mt-6 text-3xl lg:text-5xl'>Lehza.in is reimagining the live event experience through curated, 
              intimate performances in 100+ live events around the world.</h1>
            <p className='mt-10 lg:mt-[80px]'>At Lehza.in, we like to ask: who's ever been to a aspiration & inspiration live session?</p>
            <p className='mt-5'>For some, the crowd was too loud or maybe the coffee was cold. 
              For others, the sound system wasn't doing the artist justice. 
              Or maybe someone was in the line of view, snapping selfies all night. 
              Whatever the experience, it just wasn't what you hoped or expected. 
              The magic of a live event experience has been lost.</p>
            <p className='mt-5'>Lehza.in was founded to bring back that magic.</p>
            <p className='mt-5'>In 2020, Prashant invited some friends over to his Bengaluru flat for a low-key, 
              intimate live aspiration chat. Seven people gathered in the living room to listen 
              to live chat performed by friend and writer Prashant Priyadarshi. 
              They shared a coffee, and sat on the floor, attentively listening to the session. 
              The room was so quiet, you could hear the clock ticking in the background.</p>
            <p className='mt-5'>Quickly, what started as a hobby in a Bengaluru flat spread into a global community 
              for artists and audiences to come together in unique and welcoming spaces - with an added 
              element of surprise - to share, discover, create and, hopefully make a friend or find 
              their new favorite artist to aspire/inspire along the way.</p>
            <p className='mt-5'>Today, Lehza.in is a community of thousands of artists, hosts, fans, 
              travelers and more, putting on hundreds of secret, intimate events 
              per month, across 100+ cities around the world.</p>
            <p className='mt-5'>You're invited. Come on in.</p>
          </div>
      </div>

      {/* Voice Behind Lehza.in */}
      <div className='flex flex-col md:flex-row mt-[70px]'>

        <div className='flex flex-col items-center'>
          <h1 className='text-3xl px-8 text-center mb-10'>Voice Behind Lehza.in</h1>
          <img 
            src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1625386498249-S0W1TLPBLSOUZG8VNI3X/13.jpg?format=1000w" 
            alt="could not load the image"
            className='px-10 md:px-0 lg:px-10 md:object-fill md:w-[6000px] md:h-[350px] lg:h-[480px] md:ml-10' />
        </div>

        <div className='px-6 md:px-[80px] mt-10 ml-4 md:mt-[80px]'>
          <p className='mb-6 text-lg'>
            Prashant is a multi-skilled accomplished and detail-oriented Brand Storyteller highly regarded for being a 
            people's person and specialized in all areas of Marketing, Brand strategizing, Brand storytelling and Brand managing, etc. 
            With 8 years of experience coupled with strong Visual merchandising acumen and significant designing and marketing exposure, 
            Prashant has demonstrated an exemplary career of working with start-ups 
            as well as for renowned brands from a young age. A resilient personality and strong negotiation 
            skills have enabled me In ensuring cost-effective and high-quality products, 
            resulting in an acceleration of growth in the overall business.
          </p>
          <p className='text-lg'>
            Over the years Prashant has Developed brand concept, stories and work ethos. 
            A passionate individual who believes in the power of storytelling and bringing 
            brands to life through design, messaging, and media by showcasing brand story 
            visually as well as developing Visual adaptation of the Brand strategies through 
            the development of visual elements that complement the brand. An excellent professional 
            with special abilities in Vendor management, tactical rationality, designing hard fixtures, 
            consumer engagement, and development and execution of complex projects.
          </p>
        </div>

      </div>

      {/* form here */}
      <div>

      </div>
      
    </div>
  )
}

export default page