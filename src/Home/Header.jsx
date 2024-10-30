import React from "react";
import { BsTruck } from "react-icons/bs";
import { PiPiggyBank } from "react-icons/pi";
import { BiMessage, BiMessageAdd } from "react-icons/bi";
import { TiTicket } from "react-icons/ti";
import Swiper from "./Swiper";
const Header = () => {
  return (
    <div>
      <Swiper/>
      <div className="upcomming">
        <div className="box1 img1">
          <div className="top-box1">
            <p>Top Trending</p>
          </div>
          <div className="sentence-box">
            <h2>Table Runners</h2>
            <p className="p">Collection</p>
          </div>
          <div className="top-box">
            <p className="underline">Discover Now</p>
          </div>
        </div>

        <div className="box1 img2">
          <p className="up">Black Fridays</p>
          <div className="sentence-box">
            <h2 className="sales">Sale Up To 50% Off</h2>
          </div>
          <div>
            <p>Dinning Ware</p>
          </div>
        </div>

        <div className="box1 img3">
          <div className="top-box1">
            <p>New Arrivals</p>
          </div>
          <div className="sentence-box2">
            <h2>Classic</h2>
            <p className="p">FlatWare</p>
          </div>
          <div className="top-box">
            <p className="underline">Discover Now</p>
          </div>
        </div>
      </div>

      <div className="icons-row">
        <div className="icon-box1">
          <BsTruck size={38} />
          <p className="p1">Free Shipping</p>
          <p className="p2">Free shipping on all order</p>
        </div>
        <div className="icon-box1">
          <PiPiggyBank size={38} />
          <p className="p1">Money Return</p>
          <p className="p2">30 days for free return</p>
        </div>
        <div className="icon-box1">
          <BiMessageAdd size={38} />
          <p className="p1">Online Support</p>
          <p className="p2">Support 24 hours a day</p>
        </div>
        <div className="icon-box1">
          <br />
          <TiTicket size={38} />
          <p className="p1">Deals & Promotions</p>
          <p className="p2">Price savings, discounts.</p>
          <p className="p3">coupons</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
