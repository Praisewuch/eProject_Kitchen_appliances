import React from "react";
import { BiDownArrowCircle, BiHeart, BiSearch, BiUser } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useState } from "react";
import './nav.css'

const Nav = () => {

  const [menuOpen, setMenuOpen]  = useState(false);

  const toggleMenu = () => {
    console.log('james')
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="nav">
      <div className="logo-box">
        <h1>
          <b>Debaco</b>
        </h1>
      </div>
      <div className={`linksHolder ${menuOpen ? "active" : ""}`}>
          <ul>
            <Link to="/" className="li">
              <li>Home</li>
            </Link>
            <Link to="/Shops" className="li">
              <li>Shops</li>
            </Link>
            <Link to="/contact" className="li">
              <li>Contact</li>
            </Link>
            <Link to="/about" className="li">
              <li>About</li>
            </Link>
          </ul>
        </div>
      <div className="icon-box">
        <GiHamburgerMenu  className="ham" onClick={toggleMenu}/>
        <BiSearch size={25} className="display" />
        <BiUser size={25}  className="display" />
        <BiHeart size={25} className="display" />
        <CgShoppingCart size={25} className="display" />
        <CiSettings size={25} className="display" />
      </div>
    </div>
  );
};

export default Nav;
