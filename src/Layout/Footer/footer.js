import React from "react";
import {NavLink} from "react-router-dom";

import "./footer.css"


class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__first-row">
                    <div className="footer__column col1">
                        <div className="footer-logo">
                            x
                        </div>
                    </div>
                    <div className="footer__column col2 col-with-text not-xs">
                        <h2>sitemap</h2>
                        <div className="footer__list">
                            <NavLink spy={true} smooth={true} to="home">Home</NavLink>
                            <NavLink spy={true} smooth={true} to="get-your-ticket">Service</NavLink>
                            <NavLink spy={true} smooth={true} to="why-mobility">Portfolio</NavLink>
                            <NavLink spy={true} smooth={true} to="sponsors">Culture</NavLink>
                            <NavLink spy={true} smooth={true} to="prizes">Work with us</NavLink>
                            <a href="http://www.hackerstolz.de/impressum/">Impressum</a>
                        </div>
                    </div>
                    <div className="footer__column col3 col-with-text not-xs">
                        <h2>partners</h2>
                        <div className="footer__list">
                            <a href="http://www.bvg.de" rel="noopener noreferrer" target="_blank">Github</a>
                            <a href="https://www.ergo.de" rel="noopener noreferrer" target="_blank">Twitter</a>
                            <a href="https://www.linkedin.com/company/axel-springer-ideas-engineering" rel="noopener noreferrer" target="_blank">LinkedIn</a>
                            <a href="https://www.ergo.de" rel="noopener noreferrer" target="_blank">Facebook</a>
                            <a href="https://www.ergo.de" rel="noopener noreferrer" target="_blank">Medium</a>
                        </div>
                    </div>
                    <div className="footer__column col4 col-with-text not-xs">
                        <h2>contact</h2>
                        <div className="footer__list">
                            <p>Axel Springer Ideas Engineering GmbH</p>
                            <p>Axel-Springer-Str. 65, 10969 Berlin</p>
                            <p>+49-30-259178100</p>
                            <a href="mailto:hello@asideas.de">hello@asideas.de</a>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="footer__second-row">
                        <h1>We are hiring! If you're interested, drop us a line or two.</h1>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;