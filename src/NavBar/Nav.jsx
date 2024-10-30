import React from "react";
import { BiDownArrowCircle, BiHeart, BiSearch, BiUser } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  return (
    <div className="nav">
      <div className="logo-box">
        <h1>
          <b>Debaco</b>
        </h1>
      </div>
      <ul className="list">
        <li className="dropdown">
          <div className="left red1">
            HOME
            <FaAngleDown />
          </div>
        </li>
        <li className="left red2">
          SHOP
          <FaAngleDown />
        </li>
        <li className="left red3">
          PAGES
          <FaAngleDown />
        </li>
        <li className="left red4">
          BLOG
          <FaAngleDown />
        </li>
        <li>ABOUTUS</li>
        <li>CONTACT</li>
      </ul>
      <div className="icon-box">
        <GiHamburgerMenu />
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
