"use client"
import React, { useState, useEffect } from 'react'
import Wrapper from './Wrapper';
import Link from 'next/link';
import Mobileheader from './Mobileheader';
import Menuheader from './Menuheader';

import {VscChromeClose} from 'react-icons/vsc';
import {CiMenuFries} from 'react-icons/ci';

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [show, setShow] = useState("translate-y-0")
    const [lastScrollY, setLastScrollY] = useState(0)
    const [activeMenu, setActiveMenu] = useState(''); // for active menu 

const controlNavbar = () => {
    if(window.scrollY > 200 ) {
        if(window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]")
        } else {
        setShow("shadow-sm")
        }
    } else {
        setShow("translate-y-0")
    }
    setLastScrollY(window.scrollY)
    }
    useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
        window.removeEventListener("scroll", controlNavbar);
    }
    }, [lastScrollY]);
    return (
        <header className={`w-full h-[120px] md:h-[80hx] bg-black flex items-center
    justify-between z-10 sticky top-0 transition-transform duration-300 ${show}`}>
        <Wrapper className="h-[60px] flex justify-between items-center">
            <Link href="/">
                <img
                    src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1622990613752-CWYVT7EFCUBZD46O58NW/let+us+not+disturb1.png?format=1500w"
                    alt="Logo"
                    className="h-[90px]"
                />
            </Link>
            <Menuheader
                showCatMenu={showCatMenu} 
                setShowCatMenu={setShowCatMenu}
                activeMenu={activeMenu}
                // categories={categories}
            />
            {mobileMenu && (
            <Mobileheader
                showCatMenu={showCatMenu} 
                setShowCatMenu={setShowCatMenu}
                setMobileMenu={setMobileMenu} 
                // categories={categories}
        /> )}

        
        <div className='flex items-center justify-between text-white'>
            <Link href="/connect" className="hidden md:flex font-bold text-white hover:bg-white hover:text-black rounded py-5 px-2">
                Connect With Us
            </Link>
                {/* mobile screen */}
            <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center
              items-center hover:bg-black/[0.05] relative cursor-pointer -mr-2 md:hidden'>
                {mobileMenu ? ( 
                  <VscChromeClose
                    className='text-[16px] md:hidden'
                    onClick={() => setMobileMenu(false)}
                    size={30}
                  />
                ) : (
                  <CiMenuFries
                    className='text-[20px] md:hidden'
                    onClick={() => setMobileMenu(true)}
                    size={30}
                  />
                )}
            </div>
          </div>
        </Wrapper>
    </header>
    )
}

export default Header;