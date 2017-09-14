import React from "react";
import { MainNav } from "./../MainNav/MainNav";
import "./Contact.css";


const HeroText = () => {
  return (
    <div className="l-container">
      <div className="grid">
        <div className="col-8_xs-12">
          <h1 className="hero-heading has-cursor">
            We drive innovation 
          </h1>
          <p className="hero-intro">
            We are a studio of developers, designers and product people. 
            We focus to build products for the Axel Springer community. 
            We are a lab and a platform. 
            We love to channel technology and agility into great products. 
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