import React from "react";
import { HomeHero as Hero} from "./HomeHero";
import { Products } from "./HomeProducts";
import { Footer } from "./../Footer/Footer";


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