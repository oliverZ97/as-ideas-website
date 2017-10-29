import React from "react";
import {NavLink} from "react-router-dom";

import "./footer.css"


class Footer extends React.Component {
    render() {
        return (
            <div id="footer" className="footer wide content-container">
                <div className="footer__row">
                    <div className="footer__column col1">
                        {/*<img src={require('./images/mobility-hacks-ci-logo.svg')}/>*/}
                    </div>
                    <div className="footer__column col2 col-with-text not-xs">
                        <h1>sitemap</h1>
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
                        <h1>partners</h1>
                        <div className="footer__list">
                            <a href="http://www.bvg.de" rel="noopener noreferrer" target="_blank">Github</a>
                            <a href="https://www.ergo.de" rel="noopener noreferrer" target="_blank">medium</a>
                        </div>
                    </div>
                    <div className="footer__column col4 col-with-text not-xs">
                        <h1>contact</h1>
                        <div className="footer__list">
                            <div>Axel Springer Ideas Engineering GmbH</div>
                            <div>Axel-Springer-Str. 65, 10969 Berlin</div>
                            <div>+49-30-259178100</div>
                            <a href="mailto:hello@asideas.de">hello@asideas.de</a>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="footer__second-row">
                        <h1>We are hiring! If you're interested, drop us a line or two.</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;