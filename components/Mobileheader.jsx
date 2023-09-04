'use client'
import React from 'react';
import Link from 'next/link';
import { BsChevronDown } from 'react-icons/bs';
import { useState } from 'react';
import '../styles/globals.css'

const data = [
  { id: 1, name: 'Lehza.in', url: '/lehza-in' },
  { id: 2, name: 'Letusnotdisturb', subMenu: true },
  { id: 3, name: 'Blogs', url: '/blog' },
  { id: 4, name: 'Team', url: '/team' },
  { id: 5, name: 'Discover', subMenu: true },
  { id: 6, name: 'Contact Us', url: '/contact' },
];

const subMenudata1 = [
  { id: 1, name: 'Discover LetUsNotDisturb', url: '/discover-letusnotdisturb' },
  { id: 2, name: 'Social Media', url: '/social-media' },
  { id: 3, name: 'News', url: '/news' },
  { id: 4, name: 'Workshop', url: '/workshop' },
];

const subMenudata2 = [
  { id: 1, name: 'About The Founder', url: '/discover/about-founder' },
  { id: 2, name: "Prashant's Desk", url: '/discover/prashants-desk' },
];

const Mobileheader = ({ showCatMenu, setShowCatMenu, setMobileMenu }) => {
    const [activeSubMenu, setActiveSubMenu] = useState('');
  
    const handleSubMenuClick = (menuName) => {
      if (activeSubMenu === menuName) {
        setActiveSubMenu('');
        setShowCatMenu(false);
      } else {
        setActiveSubMenu(menuName);
      }
    };
  
    return (
      <ul className='z-30 flex flex-col font-light md:hidden absolute top-[118px] left-0 w-full h-[800px] bg-black text-white text-center items-center justify-between'>
        {data.map((item) => (
          <li
            key={item.id}
            className='cursor-pointer relative'
          >
            {item.subMenu ? (
              <>
                <span
                  className="group"
                  onClick={() => handleSubMenuClick(item.name)}
                >
                  {item.name} <BsChevronDown className="text-[20px] inline-block" size={10}/>
                  {item.name === 'Letusnotdisturb' &&
                    activeSubMenu === item.name && (
                    <ul className='bg-black top-6 min-w-[250px] p-1 text-right text-white shadow-lg rounded-sm pt-4 submenu active'>
                      {subMenudata1.map((subItem) => (
                        <li key={subItem.id}>
                          <Link
                            href={subItem.url}
                            className='h-12 flex items-center justify-center hover:bg-black/[0.03] rounded-md px-2 submenu-content'
                            onClick={() => {
                              setShowCatMenu(false); 
                              setMobileMenu(false); 
                            }}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.name === 'Discover' &&
                    activeSubMenu === item.name && (
                    <ul className='bg-black top-6 min-w-[250px] p-1 text-white shadow-lg rounded-sm pt-4 submenu active'>
                      {subMenudata2.map((subItem) => (
                        <li key={subItem.id}>
                          <Link
                            href={subItem.url}
                            className='h-12 flex items-center justify-center hover:bg-black/[0.03] rounded-md px-2 submenu-content'
                            onClick={() => {
                              setShowCatMenu(false); 
                              setMobileMenu(false); 
                            }}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </span>
              </>
            ) : (
              <Link 
                href={item.url}
                onClick={() => {
                  setShowCatMenu(false); 
                  setMobileMenu(false); 
                }}
              >
                <p className='hover:bg-black hover:text-white'>{item.name}</p>
              </Link>
            )}
          </li>
        ))}
        <Link href="/connect" className="md:flex font-bold text-white hover:bg-white hover:text-black rounded py-5 px-2 mb-[120px]">
                Connect With Us
        </Link>
      </ul>
      
    );
  };
  
export default Mobileheader;