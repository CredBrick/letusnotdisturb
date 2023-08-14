import Link from 'next/link'

const page = () => {
  return (
    <div className='min-h-screen background'>
        <div className="relative">
            <img
                className="relative object-cover md:w-full bg-center bg-cover w-full h-[180px] opacity-50"
                src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1625673532891-QYJWS5UEG70DSVCD8MZ7/diary-968592_1920.jpg"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 text-white">
                <p className="absolute md:top-[70px] top-[50px] md:text-4xl text-4xl">Stay Connected To Our Blogs</p>
            </div>
        </div>
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 md:gap-5 gap-10 my-14 px-5 md:px-0">
            <div className="flex flex-col items-center">
            <img 
                src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1625715982415-OO3KJISD06I8MX66UZL0/1581775044522.jpg?format=2500w" 
                className="min-w-[20%] h-[500px]" />
                
            <p className="mt-7 text-center text-white text-lg">8/11/19</p>
            <Link
                href='/blog/artificial-intelligence-in-fashion'>
                <p className="mt-6 text-center text-white text-2xl">Artificial Intelligence in the Business of Fashion</p>
            </Link>
            <p className="mt-6 text-center text-white text-lg">Where we all majorly debate on Artificial intelligence can over arc humans creativity, as a believer in elusive creative confidence, I choose to believe in humans.</p>
            </div>
            <div className="flex flex-col items-center">
            <img 
                src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1625715633509-KU85RSYHZPK3HTR16B9P/1548264136741.jpg?format=2500w" 
                className="" />
                
            <p className="mt-7 text-center text-white text-4xl">10+</p>
            <p className="mt-2 text-center text-white text-4xl">Educators</p>
            </div>
            <div className="flex flex-col items-center">
            <img 
                src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1625673886993-5KYCF1EODV691T53C26F/1520173637407.jpg?format=2500w" 
                className="" />
                
            <p className="mt-7 text-center text-white text-4xl">10+</p>
            <p className="mt-2 text-center text-white text-4xl">Educators</p>
            </div>
        </div>
    </div>
  )
}

export default page