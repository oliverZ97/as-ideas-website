import React from "react";
import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";

import "./header.css"

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <Link spy={true} smooth={true} hashSpy={true}
                      to="services" className="nav-link" activeClass="active">
                    services
                </Link>
                <Link spy={true} smooth={true} hashSpy={true}
                      to="portfolio" className="nav-link" activeClass="active">
                    portfolio
                </Link>
                <div className="logo-container">
                    <Link spy={true} smooth={true} hashSpy={true}
                          to="home" className="logo-link" activeClass="active">
                        <img src={require('./ideas_logo.svg')}/>
                    </Link>
                </div>
                <Link spy={true} smooth={true} hashSpy={true}
                      to="culture" className="nav-link" activeClass="active">
                    culture
                </Link>
                <Link spy={true} smooth={true} hashSpy={true}
                      to="work-with-us" className="nav-link" activeClass="active">
                    work with us
                </Link>
            </div>
        </header>
    )
};


export default Header;