import React from "react";
import "./home.css";
import Nav from '../NavBar/Nav'
import Footer from '../Footer/Footer'
import Trending from "./Trending";
import Header from './Header'
import NewArrivials from "./NewArrivials";
const Home = () => {
  return (
    <div>
      <Nav/>
      <Header/>
      <Trending/>
      <NewArrivials/>
      <Footer/>
    </div>
  );
};

export default Home;
