import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";


export const Footer = () => (
  <div className="l-container fill-dark">
    <div className="grid">
      <div className="col-10_xs-12_sm-12" data-push-left="off-1_xs-0_sm-0" data-push-right="off-1_xs-0_sm-0">
        <h1 className="h0 has-cursor">
          We're hiring!
        </h1>
        <p className="hero-intro">
          We are a nice group of people who develop innovative, cool products for the Axel Springer Family. 
          Look at our vacancies or apply spontaneously.
        </p>
        <div className="grid-middle padding-h-md">
          <div className="col-6">
            <a 
              className="btn"
              href="https://career.axelspringer.com/jobangebote/#ideas|engineering"
              target="_blank"
              rel="noopener noreferrer"
            >
            Careers
          </a>
          </div>
          <div className="col-6">
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
    </div>
  </div>
);