import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";


const MainNav = () => (
  <ul className="main-nav">
    <li className="main-nav__logo">
      Axel Springer / Ideas Engineering
    </li>
    <li className="main-nav__item main-nav__item__active">
      <Link className="main-nav__item-link" to="#">People</Link>
    </li>
    <li className="main-nav__item">
    <Link className="main-nav__item-link" to="/contact">Contact</Link>
    </li>
  </ul>
);


const HeroText = () => {
  return (
    <div className="hero__text">
      <h1 className="heading-hero has-cursor">
        We drive Axel Springer's digitalization 
      </h1>
    </div>
  );
};


const Hero = () => {
  return (
    <div className="hero">
      <MainNav />
      <HeroText />
    </div>
  );
};


const Home = () => (
  <div>
    <Hero />
  </div>
);


export default Home;