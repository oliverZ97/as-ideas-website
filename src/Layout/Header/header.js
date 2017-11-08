import React from "react";
import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";

import "./header.css"

const Header = () => {
    return (
        <header className="header">
            <div className="l-header-left">
                <NavLink to="/" className="nav-link ideas-logo" activeClassName="active">
                    IDEAS X
                </NavLink>
            </div>
            <div className="l-header-right">
                <Link spy={true}
                      smooth={true}
                      to="services" className="nav-link" activeClass="active">
                    services
                </Link>
                <Link spy={true}
                      smooth={true}
                      hashSpy={true}
                      to="portfolio" className="nav-link" activeClass="active">
                    portfolio
                </Link>
                <NavLink to="/blog" className="nav-link" activeClassName="active">
                    blog
                </NavLink>
                <NavLink to="/culture" className="nav-link" activeClassName="active">
                    culture
                </NavLink>
                <NavLink to="/work-with-us" className="nav-link" activeClassName="active">
                    work with us
                </NavLink>
            </div>
        </header>
    )
};


export default Header;