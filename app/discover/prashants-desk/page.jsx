import React from 'react'

const page = () => {
  return (
    <div className='text-white'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center'>
            <img 
                src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1625400296519-PZTX2AP6MUB1Q2CDRLDX/88.jpg?format=1500w" 
                alt="could not load the image" 
                className=' p-10 md:p-6 lg:ml-[200px]'
            />
            <div className='text-center p-6 md:px-9'>
                <p className='mb-2 md:mb-6 text-xl md:text-2xl lg:text-4xl'>
                    Prashant Priyadarshi
                </p>
                <p className='text-md md:text-lg lg:text-2xl'>
                    Brand Storyteller | Concept Strategist | Brand Manager & Strategist | Marketing | Communication Designer | Community | Campaigns | VIVID TALKS | Keynote Speaker | TEDx Speaker | Creative Writer
                </p>
            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center'>
            <div>
                <img 
                    src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1625400525107-DEWUTKMZP0P64AVCRM9X/207037457_4683934334951284_1448958745409155780_n.jpg?format=2500w" 
                    alt="could not load the image" 
                    className='p-10 md:p-6'
                />
                <img 
                    src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1625400613576-5S0U5EU3R9M400GXY64X/image9min.png?format=2500w" 
                    alt="could not load the image" 
                    className='p-10 md:p-6'
                />
            </div>

            <div className='p-6 md:px-9'>
                <p className='mb-2 md:mb-6 text-xl md:text-2xl lg:text-4xl'>
                    Who I am
                </p>
                <p className='text-md md:text-lg lg:text-2xl mb-3 md:mb-6'>
                    A multi-skilled accomplished and detail-oriented Brand Storyteller highly regarded for being a people's person and specialized in all areas of Marketing, Brand strategizing, Brand storytelling and Brand managing, etc. With 8 years of experience coupled with strong Visual merchandising acumen and significant designing and marketing exposure, I have demonstrated an exemplary career of working with start-ups as well as for renowned brands from a young age. A resilient personality and strong negotiation skills have enabled me In ensuring cost-effective and high-quality products, resulting in an acceleration of growth in the overall business.
                </p>

                <p className='mb-2 md:mb-6 text-xl md:text-2xl lg:text-4xl'>
                    What I have Done
                </p>
                <p className='text-md md:text-lg lg:text-2xl mb-3 md:mb-6'>
                    Over the years I have Developed brand concept, stories and work ethos. A passionate individual who believes in the power of storytelling and bringing brands to life through design, messaging, and media by showcasing brand story visually as well as developing Visual adaptation of the Brand strategies through the development of visual elements that complement the brand. An excellent professional with special abilities in Vendor management, tactical rationality, designing hard fixtures, consumer engagement, and development and execution of complex projects.
                </p>

                <p className='mb-2 md:mb-6 text-xl md:text-2xl lg:text-4xl'>
                    How Have I done
                </p>
                <p className='text-md md:text-lg lg:text-2xl mb-3 md:mb-6'>
                    With a progressive mindset and a drive for developing innovative and creative design and development strategies coupled with excellent oral and written communication skills and strong organizational and presentation skills, my constant urge to work for the holistic growth of an organization has enabled me to accelerate profits, engage a large audience and deliver high-quality designs, branding strategies as well as proper execution of projects. With my extensive field exposure and career background, I would like to contribute my skills and strengths to my best potential to achieve organizational and individual goals.
                </p>

                <ul className='mb-2 md:mb-6 text-md md:text-lg lg:text-2xl'> 
                    <p className='text-xl md:text-2xl lg:text-4xl'>Areas of Critical Impact</p>
                    <li>-Strategic thinking</li>
                    <li>-Storytelling</li>
                    <li>-Oration</li>
                    <li>-Project Management</li>
                    <li>-Design Evangelism</li>
                </ul>

            </div>
                
        </div>
    </div>
  )
}

export default page