import React from 'react'
import Hero from "@/components/Hero";
import Footer from '@/components/Footer';

const page = () => {
  return (
    <main>
        <div className='min-h-screen background'> 
        <Hero />
        </div>
        {/* <div className='background'> 
        <Footer />
        </div> */}
    </main>
    
  )
}

export default page