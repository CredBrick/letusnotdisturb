import Link from 'next/link'

import { FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai"

const videos = [
    { id : 1, url: "https://www.youtube.com/embed/7EYfdVvAcFo?wmode=opaque"},
    { id : 2, url: "https://www.youtube.com/embed/MlSEbEQcgn4?wmode=opaque"},
    { id : 3, url: "https://www.youtube.com/embed/vT6i1nTMi6Q?wmode=opaque"},
    { id : 4, url: "https://www.youtube.com/embed/_opxBo6jip4?wmode=opaque"},
    { id : 5, url: "https://www.youtube.com/embed/XD3VHDo3w84?wmode=opaque"},
]

const instapostdata = [
    { id : 1, imgurl: "https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1639372095078-V2MB6U7P5HFMK64DSOGT/image-asset.jpeg", instaurl: "https://www.instagram.com/p/CXaNcMSPvJ9/"},
    { id : 2, imgurl: "https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1639372095078-1WRU8BKVS35RDXM2EY19/image-asset.jpeg", instaurl: "https://www.instagram.com/p/CXaNYyDPQP9/"},
    { id : 3, imgurl: "https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1639372095078-V2MB6U7P5HFMK64DSOGT/image-asset.jpeg", instaurl: "https://www.instagram.com/p/CXaNUBqvTTc/"},
    { id : 4, imgurl: "https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1636872475966-C2VIHSU6OICXYK53K2GJ/image-asset.jpeg", instaurl: "https://www.instagram.com/p/CWPtOQlPzxq/"},
    { id : 5, imgurl: "https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1636872475966-0WCT8VVFQPHTGAT4WN12/image-asset.jpeg", instaurl: "https://www.instagram.com/p/CWPtK3LP1lM/"},
    { id : 6, imgurl: "https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1636872475967-O9FDZAS19WV2JUROIVR9/image-asset.jpeg", instaurl: "https://www.instagram.com/p/CWPtGBlP_Ve/"},
    { id : 7, imgurl: "https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1634793674354-YLKIB652BL0BXS3LGFZU/image-asset.jpeg", instaurl: "https://www.instagram.com/p/CVRySOusFdl/"},
    { id : 8, imgurl: "https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1634793674354-DFWXSVZT31OQ8ZKFRUR2/image-asset.jpeg", instaurl: "https://www.instagram.com/p/CVRx-GXMO4Z/"},
    { id : 9, imgurl: "https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1634793674354-U8G9HOLX7YHEO221OOV4/image-asset.jpeg", instaurl: "https://www.instagram.com/p/CVRx5ERMXgU/"},
    { id : 10, imgurl: "https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1643882681547-5QJ09SMGMRVOU00G3BMG/image-asset.jpeg", instaurl: "https://www.instagram.com/p/CUjgppmsVC3/"},
    { id : 11, imgurl: "https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1633240085838-W3IQNJ4KIURHXS839A4O/image-asset.jpeg", instaurl: "https://www.instagram.com/p/CUjgaNwsuHF/"},
    { id : 12, imgurl: "https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1639176359649-NJRCCU4CLHQ233CNC0U3/image-asset.jpeg", instaurl: "https://www.instagram.com/p/CUjgWFLMB7Q/"},
    { id : 13, imgurl: "https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1632207947744-RNVDEQ080FRL5OCNUG2C/image-asset.jpeg", instaurl: "https://www.instagram.com/p/CT1CehhJ_nu/"},
    { id : 14, imgurl: "https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1632207947744-6FA4EQURKGGI15WBZBWW/image-asset.jpeg", instaurl: "https://www.instagram.com/p/CT1CaTIpEZG/"}
]

const page = () => {
  return (
    <div>
        {/* Banner */}
        <div>
            <img
                className="relative object-cover md:w-full bg-center bg-cover w-full md:h-[250px] h-[300px] opacity-60 -top-[90px]"
                src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1625397253203-DGYA5HVD1OITC000SG4H/social-3408791_1920.jpg?format=2500w"
            />
            <div className="flex items-center justify-center text-center p-4 text-white ">
                <p className="absolute md:text-4xl text-2xl md:top-[200px] top-[190px] px-8">Explore LetUsNotDisturb Social Media</p>
            </div>
        </div>
        
        {/* Socials */}
        <div className="-mt-8 md:pb-[90px] pb-[40px] grid grid-cols-1 md:grid-cols-3 md:gap-3 gap-10 px-5 md:px-0 cursor-pointer">
            <Link
                href='https://www.linkedin.com/in/let-us-not-disturb-814454106/' 
                className="flex flex-col items-center">
                <FaLinkedinIn className='text-white font-normal' size={50}/>
            </Link>
            <Link
                href='https://www.instagram.com/letusnotdisturb/' 
                className="flex flex-col items-center">
                <AiFillInstagram className='text-white font-normal' size={50}/>
            </Link>
            <Link
                href='https://www.youtube.com/channel/UC3jvS6mi7udT5KLLqq83miQ' 
                className="flex flex-col items-center">
            <FaYoutube className='text-white font-normal' size={50}/>
            </Link>
        </div>

        {/* Youtube Videos */}
        <div className="mt-8 md:pb-[90px] pb-[40px] grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-4 lg:px-10 cursor-pointer">
            {videos.map((item) => (
                <iframe 
                    key={item.id} 
                    src={item.url}
                    width="100%"
                    height="315" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>   
            ))} 
        </div>

        {/* Instagram */}
        <div className='md:pb-[90px] pb-[40px] flex flex-col items-center justify-between text-white font-normal md:text-3xl'>
            <p>Join the community on Instagram </p>
            <Link
                href='https://www.instagram.com/letusnotdisturb/'>
                @letusnotdisturb
            </Link>
        </div>

        {/* Instagram Posts*/}
        <div className="mt-8 md:pb-[90px] pb-[40px] grid grid-cols-2 md:grid-cols-4 md:gap-4 gap-4 px-5 md:px-4 cursor-pointer">
            {instapostdata.map((item) => (
            <Link
                key={item.id}
                href={item.instaurl}
                >
                <img 
                    src={item.imgurl} 
                    alt="instagram posts" 
                />
            </Link>
            ))}
        </div>
    </div>
    )
}

export default page