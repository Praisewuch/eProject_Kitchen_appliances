import React from 'react'
import { BiDownArrowCircle, BiHeart, BiSearch, BiUser } from 'react-icons/bi'
import { CgShoppingCart } from 'react-icons/cg'
import { CiSettings } from 'react-icons/ci'
import { FaAngleDown } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'

const Nav = () => {
  return (
    <div className='nav'>
      <div className='logo-box'><h1><b>Debaco</b></h1></div>
        <ul className='list'>
        <li className='left'>HOME<FaAngleDown/></li>
        <li className='left'>SHOP<FaAngleDown/></li>
        <li className='left'>PAGES<FaAngleDown/></li>
        <li className='left'>BLOG<FaAngleDown/></li>
        <li>ABOUTUS</li>
        <li>CONTACT</li>
        </ul>
      <div className='icon-box'>
        <GiHamburgerMenu className='display'/>
        <BiSearch size={25}/>
        <BiUser size={25}/>
        <BiHeart size={25}/>
        <CgShoppingCart size={25}/>
        <CiSettings size={25} className='display'/>
      </div>
    </div>
  )
}

export default Nav;
