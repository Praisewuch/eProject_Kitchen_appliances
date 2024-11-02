import React from "react";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaApplePay, FaFacebook, FaGooglePay, FaRss } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { PiPaypalLogoFill } from "react-icons/pi";
import { RiMastercardFill, RiVisaFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footers">
      <div className="foote">
        <div className="col1">
          <h2>Debaco</h2>
          <p className="edit">
            We are a team of designers and developers that create
            <br />
            high quality Magneto, WordPress, Prestashop,Opencart
          </p>
          <p className="line">
            <strong>ADDRESS:</strong>6688 Princess Road, London,Greater London{" "}
            <br />
            BAS 23JK,UK
          </p>
          <p>
            <strong>PHONE</strong> (012)800 486 789-987
          </p>
          <p>
            <strong>EMAIL:</strong>Contact@groupthemes.com
          </p>
        </div>
        <div className="col2">
          <h3>Customer Care</h3>
          <p>My account</p>
          <p>Cart</p>
          <p>Shop</p>
          <p>Wishlist</p>
          <p>Checkout</p>
        </div>
        <div className="col3">
          <h3>Information</h3>
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Cart</p>
          <p>Contact</p>
          <p>Wishlist</p>
        </div>
        <div className="col4">
          <div className="news">
            <h3>Join Our Newsletter Now</h3>
            <p>
              Get E-mail updates about our latest shop
              <br />
              and special offers.
            </p>
            <div className="input">
              <input type="email"placeholder="Enter your" className="inp"></input>
              <button className="btn2">SUBSCRIBE!</button>
            </div>
          </div>
          <div className="icon-boxes">
            <div className="faceb box">
              <FaFacebook />
            </div>
            <div className="tweet box">
              <BsTwitterX />
            </div>
            <div className="insta box">
              <BsInstagram />
            </div>
            <div className="in box">
              <LiaLinkedin />
            </div>
            <div className="rss box">
              <FaRss />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <p>Copyright &copy; 2024 GroupThemes.All Rights Reserved</p>
        </div>
        <div className="icon-boxes2">
          <RiVisaFill  size={25}/>
          <RiMastercardFill size={25} />
          <PiPaypalLogoFill  size={25}/>
          <FaApplePay size={25} />
          <FaGooglePay  size={25}/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
