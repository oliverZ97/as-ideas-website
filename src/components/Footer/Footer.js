import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";


export const Footer = ({ hideImprint }) => (
  <div className="l-container fill-dark fill-dark--2">
    <div className="grid-noBottom-noGutter">
      <div className="col-10_xs-12_sm-12" data-push-left="off-1_xs-0_sm-0" data-push-right="off-1_xs-0_sm-0">
        <h1 className="h0 has-cursor">
          We're hiring!
        </h1>
        <div className="grid-noGutter-noBottom">
          <div className="col-9_md-12">
            <p className="hero-intro">
              We are a group of friendly people who develop innovative, cool products for the Axel Springer Family. Please have a look at our vacancies. We're always working on becoming better at what we do, so we're open to meet new talents, and we mean it when we say we're open for spontaneous applications.
            </p>
          </div>
        </div>
        <div className="grid-noGutter-noBottom margin-h-md">
          <div className="col-6_xs-12">
            <a 
              className="btn-cool"
              href="https://career.axelspringer.com/jobangebote/#ideas|engineering"
              target="_blank"
              rel="noopener noreferrer"
            >
              Careers
            </a>
          </div>
          <div className="col-6_xs-12">
            <ul className="footer-nav">
              { hideImprint === undefined &&
                <li>
                  <Link to="contact" className="footer-link">
                    Imprint
                  </Link>
                </li>
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);