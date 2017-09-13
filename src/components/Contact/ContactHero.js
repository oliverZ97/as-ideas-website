import React from "react";
import { MainNav } from "./../MainNav/MainNav";
import "./Contact.css";


const HeroText = () => {
  return (
    <div className="l-container">
      <div className="grid">
        <div className="col-8_xs-12">
          <h1 className="hero-heading has-cursor">
            We drive Axel Springer's digitalization 
          </h1>
          <p className="hero-intro">
            And we can be cool for you too
          </p>
        </div>
      </div>
    </div>
  );
};


export const Hero = (props) => {
  return (
    <div className="hero">
      <MainNav {...props} />
      <HeroText />
    </div>
  );
};