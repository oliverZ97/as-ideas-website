import React from "react";
import { Hero } from "./HomeHero";
import { Products } from "./HomeProducts";
import { Footer } from "./../Footer/Footer";
import "./Home.css";


const Home = ({ location }) => {
  return (
    <div>
      <Hero pathname={location.pathname} />
      <Products />
      <Footer />
    </div>
  )
};


export default Home;