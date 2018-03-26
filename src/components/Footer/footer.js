import React from "react";
import {Link} from "react-scroll";
import {NavLink} from "react-router-dom";

import "./footer.scss"

class Footer extends React.Component {
  render() {
    return (
      <footer id="contact" className="footer">
        <div className="footer-container">
          <div className="footer__column col1">
            <span >
              <a href='https://career.axelspringer.com/job/backend-artist-mit-frontend-foo-some-ops-skills-baffos-berlin-2/' target="_blank" rel="noopener noreferrer">We are hiring!</a>
              <br/>
              <span className="col1-text">If you're interested,</span>
              <br/>
              <span className="col1-text">drop us a line or two.</span>
            </span>
          </div>
          <div className="footer__column col2 not-xs">
            <h2 className="col-header">sitemap</h2>
            <div className="footer__list">
              <Link to="home">Home</Link>
              <Link to="services">Services</Link>
              <Link to="portfolio">Portfolio</Link>
              <NavLink to="blog">Blog</NavLink>
              <Link to="culture">Culture</Link>
              <a href='https://career.axelspringer.com/job/backend-artist-mit-frontend-foo-some-ops-skills-baffos-berlin-2/' target="_blank" rel="noopener noreferrer">
                Work with us
              </a>
            </div>
          </div>
          <div className="footer__column col3 not-xs">
            <h2 className="col-header">SOCIAL MEDIA</h2>
            <div className="footer__list">
              <a href="https://github.com/as-ideas" rel="noopener noreferrer" target="_blank">Github</a>
              <a href="https://twitter.com/as_ideas" rel="noopener noreferrer" target="_blank">Twitter</a>
              <a href="https://www.linkedin.com/company/axel-springer-ideas-engineering" rel="noopener noreferrer" target="_blank">LinkedIn</a>
              <a href="https://www.facebook.com/AxelSpringerIdeas/" rel="noopener noreferrer" target="_blank">Facebook</a>
              <a href="https://www.instagram.com/ideas_engineering/" rel="noopener noreferrer" target="_blank">Instagram</a>
            </div>
          </div>
          <div className="footer__column col4">
            <h2 className="col-header not-xs">contact</h2>
            <div className="footer__list">
              <p>Axel Springer Ideas Engineering GmbH</p>
              <p>Axel-Springer-Str. 65, 10969 Berlin</p>
              <p>+49-30-259178100</p>
              <a href="mailto:hello@asideas.de">hello@asideas.de</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;