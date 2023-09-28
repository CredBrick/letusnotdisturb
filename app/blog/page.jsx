import Link from 'next/link'
import '../../styles/globals.css'
import Animation from '../../components/Animation'

const page = () => {
  return (
    <div className=''>
        <Animation className='fade-in'>
        <div>
            <img
                className="relative object-cover md:w-full bg-center bg-cover w-full h-[180px] opacity-50"
                src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1625673532891-QYJWS5UEG70DSVCD8MZ7/diary-968592_1920.jpg"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 text-white">
                <p className="absolute md:top-[180px] top-[200px] md:text-4xl text-2xl">Stay Connected To Our Blogs</p>
            </div>
        </div>
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 lg:gap-3 md:gap-5 gap-10 my-14 md:px-0">

        {/* Artificial Intelligence in the Business of Fashion */}
            <div className="flex flex-col items-center">
                <img 
                    src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1625715982415-OO3KJISD06I8MX66UZL0/1581775044522.jpg?format=2500w" 
                    className="object-cover md:w-[750px] lg:w-[750px] lg:h-[500px] bg-center bg-cover w-[500px] md:h-[700px] h-[350px] p-9 " />
                    
                <p className="mt-2 text-center text-white text-md">8/11/19</p>
                <Link
                    href='/blog/artificial-intelligence-in-fashion'>
                    <p className="mt-6 text-center text-white text-2xl">Artificial Intelligence in the Business of Fashion</p>
                </Link>
                <p className="mt-6 text-center text-white text-lg px-8">Where we all majorly debate on Artificial intelligence can over arc humans creativity, 
                as a believer in elusive creative confidence, I choose to believe in humans.</p>
                <Link
                    href='/blog/artificial-intelligence-in-fashion'>
                    <p className="mt-6 text-center text-white text-lg underline">Read more...</p>
                </Link>
            </div>

        {/* The Elusive Creative Confidence */}
            <div className="flex flex-col items-center">
                <img 
                    src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1625715633509-KU85RSYHZPK3HTR16B9P/1548264136741.jpg?format=2500w" 
                    className="object-cover md:w-[750px] lg:w-[750px] lg:h-[500px] bg-center bg-cover w-[500px] md:h-[700px] h-[350px] p-9 " />
                    
                <p className="mt-2 text-center text-white text-md">4/2/19</p>
                <Link
                    href='/blog/the-elusive-creative-confidence'>
                    <p className="mt-6 text-center text-white text-2xl">The Elusive Creative Confidence</p>
                </Link>
                <p className="mt-6 text-center text-white text-lg px-8">Thousands of crowd, hundreds of millennial, one speaker with an agenda to create design awareness at the school and college level in the Indian education system.</p>
                <Link
                    href='/blog/the-elusive-creative-confidence'>
                    <p className="mt-6 text-center text-white text-lg underline">Read more...</p>
                </Link>
            </div>

        {/* What's their inspiration... */}
            <div className="flex flex-col items-center">
                <img 
                    src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1625673886993-5KYCF1EODV691T53C26F/1520173637407.jpg?format=2500w"   
                    className="object-cover md:w-[750px] lg:w-[750px] lg:h-[500px] bg-center bg-cover w-[500px] md:h-[700px] h-[350px] p-9 " />
                    
                <p className="mt-2 text-center text-white text-md">2/13/16</p>
                <Link
                    href='/blog/whats-their-inspiration'>
                    <p className="mt-6 text-center text-white text-2xl">What's their inspiration...</p>
                </Link>
                <p className="mt-6 text-center text-white text-lg px-8">As the world comes closer and everything is accessible to us in one place , our minds are being awestruck by the immense talent the idiot box serves us with.  But where does this talent disappear after a while 7</p>
                <Link
                    href='/blog/whats-their-inspiration'>
                    <p className="mt-4 text-center text-white text-lg underline">Read more...</p>
                </Link>
            </div>
        </div>
        </Animation>
    </div>
  )
}

export default page