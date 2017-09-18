import React from "react";
import "./Home.css";
import "./../Hero/Hero.css";


export const HeroContent = () => {
  return (
    <div className="l-container">
      <div className="grid">
        <div className="col-9_xs-12">
          <h1 className="hero-heading has-cursor">
            We develop software
          </h1>
          <p className="hero-intro">
            We are a studio of developers, designers and product people. 
            We focus to build software for the Axel Springer family. 
            We are a lab and a platform. 
            We combine technology and agile thinking to create great products. 
            And we love to start with a prototype.
          </p>
        </div>
      </div>
    </div>
  );
};