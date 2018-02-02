import React from "react";
import {Link, scroller} from "react-scroll";
import {NavLink} from "react-router-dom";
import history from "./history";
import "./header.css";

class Header extends React.Component {
    onClickNavLink() {
        // this is a small hack because NavLink and Link do not really work good together
        // and we need to disable the last 'active' Link
        let activeElements = document.querySelectorAll('.active');
        for (let i = 0; i < activeElements.length; i++) {
            activeElements[i].classList.remove('active');
        }

        window.setTimeout(() => {
            scroller.scrollTo('home', {
                spy: true,
                smooth: true,
                hashSpy: true,
                isDynamic: true
            });
        }, 250);
    }

    onClickScrollLink(to) {
        if (history.location.pathname !== '/') {
            history.push('/#' + to);
            window.setTimeout(() => {
                scroller.scrollTo(to, {
                    spy: true,
                    smooth: true,
                    hashSpy: true,
                    isDynamic: true
                });

            }, 250);
        }
    }

    render() {
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
                    <Link {...propsShared} to="portfolio"
                          onClick={(e) => this.onClickScrollLink('portfolio', e)}
                    >
                        Services
                    </Link>
                    <NavLink to="/blog" className="nav-link" activeClassName="active"
                             onClick={this.onClickNavLink.bind(this)}
                    >
                        Blog
                    </NavLink>
                    <div className="logo-container">
                        <Link {...propsLogo} to="home"
                              onClick={(e) => this.onClickScrollLink('home', e)}
                        >
                            <img src={require('./ideas_logo.svg')} alt=""/>
                        </Link>
                    </div>
                    <Link {...propsShared} to="culture"
                          onClick={(e) => this.onClickScrollLink('culture', e)}
                    >
                        Culture
                    </Link>
                    <Link {...propsShared} to="work-with-us"
                          onClick={(e) => this.onClickScrollLink('work-with-us', e)}
                    >
                        Work with us
                    </Link>
                </div>
            </header>
        )
    }
}

export default Header;