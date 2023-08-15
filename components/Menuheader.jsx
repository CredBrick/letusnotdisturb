'use client'
import React from 'react'
import Link from 'next/link';
import { useState } from 'react';

const data = [
    { id : 1, name: "Lehza.in", url: "https://letusnotdisturb.com/lehza-in"},
    { id : 2, name: "Letusnotdisturb", subMenu: true},
    { id : 3, name: "Blogs", url: "/blog"},
    { id : 4, name: "Team", url: "/team"},
    { id : 5, name: "Discover", subMenu: true},
    { id : 6, name: "Contact Us", url: "/contact"}
]

const subMenudata1 = [
    { id : 1, name: "Discover LetUsNotDisturb", url: "/discover-letusnotdisturb"},
    { id : 2, name: "Social Media", url: "/social-media"},
    { id : 3, name: "News", url: "/news"},
    { id : 4, name: "Workshop", url: "/workshop"}
]

const subMenudata2 = [
    { id : 1, name: "About The Founder", url: "/about-founder"},
    { id : 2, name: "Prashant's Desk", url: "/prashants-desk"},
]

const Menu = ({ showCatMenu, setShowCatMenu }) => {
    const [activeMenu, setActiveMenu] = useState(''); // Initialize activeMenu state
  
    const handleMouseEnter = (menuName) => {
      setActiveMenu(menuName);
      setShowCatMenu(true);
    };
  
    const handleMouseLeave = () => {
      setActiveMenu('');
      setShowCatMenu(false);
    };
  
    return (
      <ul className='hidden md:flex gap-8 font-medium text-white'>
        {data.map((item) => (
          <li
            key={item.id}
            className='cursor-pointer relative'
            onMouseEnter={() => handleMouseEnter(item.name)}
            onMouseLeave={handleMouseLeave}
          >
            {item.subMenu ? (
              <>
                <span className="group" onMouseEnter={() => setActiveMenu(item.name)}>
                  {item.name}
                  {item.name === activeMenu && showCatMenu && (
                    <ul className='bg-black absolute top-6 min-w-[250px] p-1 text-white shadow-lg rounded-sm pt-4 '>
                      {item.name === 'Letusnotdisturb' &&
                        subMenudata1.map((subItem) => (
                          <li key={subItem.id}>
                            <Link
                              href={subItem.url}
                              className='h-12 flex hover:bg-black/[0.03] rounded-md px-2 text-center'
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      {item.name === 'Discover' &&
                        subMenudata2.map((subItem) => (
                          <li key={subItem.id}>
                            <Link
                              href={subItem.url}
                              className='h-12 flex hover:bg-black/[0.03] rounded-md px-2 text-right'
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
              <Link href={item.url}>
                <p className='hover:bg-black hover:text-white'>{item.name}</p>
              </Link>
              )}
            </li>
        ))}
      </ul>
    );
  };
  
  export default Menu;
  
  
  