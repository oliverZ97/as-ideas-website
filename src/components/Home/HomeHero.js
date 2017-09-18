import React from "react";
import "./Home.css";
import "./../Hero/Hero.css";


export const HeroContent = () => {
  return (
    <div className="l-container">
      <div className="grid">
        <div className="col-8_xs-12">
          <h1 className="hero-heading has-cursor">
            We create your ideas
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