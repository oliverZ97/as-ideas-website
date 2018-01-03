import React from "react";
import { Link } from "react-scroll";

import "./header.css"

const Header = () => {
    const propsShared = {
        className: "nav-link",
        activeClass: "active",
        spy: true,
        smooth: true,
        hashSpy: true
    };

    const propsLogo = {
        ...propsShared,
        className: "logo-link",
        spy: false,
        hashSpy: false
    };

    return (
        <header className="header">
            <div className="header-container">
                <Link {...propsShared} to="services" >
                    Services
                </Link>
                <Link {...propsShared} to="portfolio">
                    Portfolio
                </Link>
                <div className="logo-container">
                    <Link {...propsLogo} to="home">
                        <img src={require('./ideas_logo.svg')} alt="" />
                    </Link>
                </div>
                <Link {...propsShared} to="culture">
                    Culture
                </Link>
                <Link {...propsShared} to="work-with-us">
                    Work with us
                </Link>
            </div>
        </header>
    )
};


export default Header;