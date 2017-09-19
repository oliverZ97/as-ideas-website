import React, { Component } from "react";
import { Hero } from "./../Hero/Hero";
import Typed from 'typed.js';
import "./Home.css";
import "./../Hero/Hero.css";


class HeroContent extends Component {
  componentDidMount() {
    /**
     * Add Typed.js for a little typewriter effect
     * See here: http://www.mattboldt.com/typed.js/
     */
    const typedOptions = {
      strings: [
        "We design your ideas",
        "We design prototypes",
        "We design software",
        "We develop your ideas",
        "We develop prototypes",
        "We develop software",
        "We love ideas",
        "We love prototypes",
        "We love software",
        "We are Ideas engineering"
      ],
      typeSpeed: 10,
      backSpeed: 15,
      startDelay: 5000,
      backDelay: 5000,
      fadeOut: true,
      smartBackspace: false,
      shuffle: true,
      loop: true,
      cursorChar: "",
    }
    
    this.typed = new Typed(this.heading, typedOptions);
  }


  componentWillUnmount() {
    this.typed.destroy();
  }


  render() {
    return (
      <div className="l-container l-container--lg">
        <div className="grid">
          <div className="col-9_xs-12_sm-12_md-12">
            <h1 className="hero-heading has-cursor" ref={(heading) => this.heading = heading}>
              We are Ideas engineering
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
    )
  }
}


export const HomeHero = ({pathname}) => (
  <Hero 
    wrapped={HeroContent}
    pathname={pathname}
  /> 
);