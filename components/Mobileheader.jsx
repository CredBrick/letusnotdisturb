import React from 'react'
import Link from 'next/link';
import { BsChevronDown } from 'react-icons/bs'

const data = [
    { id : 1, name: "Lehza.in", url: "letusnotdisturb.com/lehza-in"},
    { id : 2, name: "Letusnotdisturb", subMenu: true},
    { id : 3, name: "Blogs", url: "/blogs"},
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

const Mobileheader = ({ showCatMenu, setShowCatMenu, setMobileMenu }) => {

}

export default Mobileheader