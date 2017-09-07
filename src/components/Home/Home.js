import React from "react";
import "./Home.css";


const MainNav = () => (
  <ul className="main-nav">
    <li className="main-nav__logo">
      Axel Springer / Ideas Engineering
    </li>
    <li className="main-nav__item main-nav__item__active">
      People
    </li>
    <li className="main-nav__item">
      Contact
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