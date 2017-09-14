import React from "react";
import { MainNav } from "./../MainNav/MainNav";
import "./Contact.css";


const HeroText = () => {
  return (
    <div className="l-container">
      <div className="grid">
        <div className="col-10_xs-12">
          <h1 className="hero-heading hero-heading--dark has-cursor">
            We are Ideas engineering. <br />
            Get in touch 
          </h1>
        </div>
      </div>
    </div>
  );
};


export const Hero = (props) => {
  return (
    <div className="hero hero--light">
      <MainNav {...props} classAddon="dark" />
      <HeroText />
    </div>
  );
};