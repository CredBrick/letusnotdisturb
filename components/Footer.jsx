'use client';
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai"
// import Wrapper from "./Wrapper";

const Footer = () => {
    return (
        <footer className="background text-white pt-8 pb-3">
            <div className="ml-6 grid grid-rows-1 md:grid-cols-4 justify-center items-center text-center gap-[35px] md:gap-[85px]">

                {/* Learn More START */}
                <div className="flex flex-col gap-3">
                    <div className="font-oswald font-medium uppercase">
                        Learn More
                    </div>
                    <Link
                        href="/"
                        className="font-oswald font-medium uppercase text-sm cursor-pointer underline">
                        Terms & Condition
                    </Link>
                    <Link 
                        href="/"
                        className="font-oswald font-medium uppercase text-sm cursor-pointer underline">
                        Privacy Policy
                    </Link>
                    <Link
                        href="/"
                        className="font-oswald font-medium uppercase text-sm cursor-pointer underline">
                        About Us
                    </Link>
                    <Link
                        href="/" 
                        className="font-oswald font-medium uppercase text-sm cursor-pointer underline">
                        Contact Us
                    </Link>
                </div>
                {/* Learn More END */}


                {/* Discover About START */}
                <div className="flex md:flex-row flex-col gap-[50px] md:mb-10">
                    <div className="flex flex-col gap-5">
                        <div className="font-oswald font-medium uppercase text-md">
                            Discover About
                        </div>
                        <Link
                            href='https://letusnotdisturb.com/lehza-in/' 
                            className="text-md text-white hover:text-white cursor-pointer underline">
                            Lehaz.in
                        </Link>
                        <Link
                            href='https://www.letusnotdisturb.com/discover-let-us-not-disturb' 
                            className="text-md text-white hover:text-white cursor-pointer underline">
                            LetUsNotDisturb
                        </Link>
                    </div>
                </div>
                {/* Discover About END */}


                {/* Social Media START */}
                <div className='flex flex-col md:mb-[80px] lg:mb-[90px]'>
                    <div className='font-oswald font-medium uppercase text-md'>
                        Social Media
                    </div>
                
                    <div className='flex justify-between flex-row gap-2 py-3'>
                        <div
                            onClick={() => 
                                window.open("https://www.instagram.com/lehza.in/", "_blank")
                                } 
                            className="w-7 h-7 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                            <AiFillInstagram size={20} />
                        </div>

                        <div
                            onClick={() => 
                                window.open("https://www.facebook.com/lehza.in/", "_blank")
                                }
                            className="w-7 h-7 rounded-full bg-white/[0.25] flex items-center 
                            justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                            <FaFacebookF size={20} />
                        </div>

                        <div
                            onClick={() => 
                                window.open("https://www.linkedin.com/company/lehza-in/", "_blank")
                                }
                            className="w-7 h-7 rounded-full bg-white/[0.25] flex items-center 
                            justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                            <FaLinkedinIn size={20} />
                        </div>
                        
                        <div 
                            onClick={() => 
                                window.open("https://www.youtube.com/channel/UC3jvS6mi7udT5KLLqq83miQ", "_blank")
                                }
                            className="w-7 h-7 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                            <FaYoutube size={20} />
                        </div>

                        <div 
                            onClick={() => 
                                window.open("https://twitter.com/letusnotdisturb", "_blank")
                                }
                            className="w-7 h-7 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                            <FaTwitter size={20} />
                        </div>

                        <div
                            onClick={() => 
                                window.open("https://www.instagram.com/letusnotdisturb/", "_blank")
                                } 
                            className="w-7 h-7 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                            <AiFillInstagram size={20} />
                        </div>

                        <div
                            onClick={() => 
                                window.open("https://www.linkedin.com/in/let-us-not-disturb-814454106/", "_blank")
                                }
                            className="w-7 h-7 rounded-full bg-white/[0.25] flex items-center 
                            justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                            <FaLinkedinIn size={20} />
                        </div>

                    </div>
                </div>
                {/* Social Media END */}
                

                {/* Created By START */}
                <div className="flex flex-col gap-2 justify-center md:justify-start md:mb-[100px] lg:mb-[130px]">
                    <div>Created By</div>
                    <div>
                    <Link
                        href='https://askashirvad.com/'>
                        <div className="font-oswald text-md cursor-pointer underline">
                            AskAshirvad
                        </div>
                    </Link>
                    </div>
                </div>
                {/* Created By END */}

            </div>
        </footer>
    );
};

export default Footer;
