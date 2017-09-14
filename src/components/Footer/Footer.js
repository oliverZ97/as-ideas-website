import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";


export const Footer = () => (
  <div className="l-container fill-dark">
    <div className="grid">
      <div className="col-4_xs-12_sm-12" data-push-left="off-1_xs-0_sm-0">
        <h1 className="h0 has-cursor">
          We're hiring!
        </h1>
        <p className="hero-intro">
          We are a really nice bunch of people that work on technology. This is still lorem ipsum text. 
        </p>
        <div className="btn-row">
          <a 
            className="btn"
            href="https://career.axelspringer.com/jobangebote/#ideas|engineering"
            target="_blank"
            rel="noopener noreferrer"
          >
            Careers
          </a>
        </div>
      </div>
    </div>
    <div className="grid">
      <div className="col" data-push-right="off-1_xs-0">
        <ul className="footer-nav">
          <li>
            <Link to="contact" className="footer-link">
              Imprint
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);