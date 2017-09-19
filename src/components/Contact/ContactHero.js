import React from "react";
import { Hero } from "./../Hero/Hero";
import "./Contact.css";
import "./../Hero/Hero.css";


const HeroContent = () => {
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


export const ContactHero = ({pathname}) => (
  <Hero 
    wrapped={HeroContent}
    pathname={pathname}
    cssClassAddon="light"
  /> 
);