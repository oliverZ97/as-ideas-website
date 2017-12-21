import React from "react";
import {NavLink} from "react-router-dom";

import "./footer.css"


class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer__column col1">
                        <div className="">
                            <span className="col1-text">We are hiring!<br/> If you're interested,<br/> drop us a line or two.</span>
                        </div>
                    </div>
                    <div className="footer__column col2 col-with-text not-xs">
                        <h2>sitemap</h2>
                        <div className="footer__list">
                            <NavLink to="home">Home</NavLink>
                            <NavLink to="get-your-ticket">Service</NavLink>
                            <NavLink to="why-mobility">Portfolio</NavLink>
                            <NavLink to="sponsors">Culture</NavLink>
                            <NavLink to="prizes">Work with us</NavLink>
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
            </footer>
        );
    }
}

export default Footer;