import React from 'react';
import {Link, scroller, animateScroll} from "react-scroll";
import {NavLink} from "react-router-dom";
import history from "./history";

import {IdeasLogo, IconBurger} from './../../assets/svg';
import './MainNav.scss';


const MainNav = ({children}) => (
    <nav id="main-nav" className="fixed z-20 flex items-stretch justify-between w-full h-16 bg-white-transparent-9/10 sm:block sm:h-auto">
        {children}
    </nav>
);


const MainNavCenter = ({children}) => (
    <div className="flex items-stretch justify-center sm:hidden">
        {children}
    </div>
);


const MainNavItemLink = ({children, target, className, activeClass, onClick}) => (
    <Link
        to={target}
        offset={-64} // See browser dev tool and check value of padding/margin for target container, in this case 4rem (64px)   
        className={`mainNavItem mainNavItemHasBorderOnHover flex justify-center items-center px-4 text-12 font-bold text-black uppercase tracking-wide no-underline cursor-pointer sm:justify-start sm:p-3 lg:min-w-24 xl:min-w-24 ${className}`}
        activeClass={activeClass}
        smooth={true}
        duration={350}
        spy={true}
        onClick={onClick}
    >
        {children}
    </Link>
);


const MainNavItem = ({children, className, onClick}) => (
    <div className={`flex justify-between items-center px-4 text-14 font-bold text-black no-underline sm:p-3 ${className}`} onClick={onClick}
    >
        {children}
    </div>
);


class MainNavComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            offCanvasHidden: true
        }
    }

    toggleOffCanvas() {
        this.setState({
            offCanvasHidden: !this.state.offCanvasHidden
        })
    }

    hideOffCanvas() {
        this.setState({
            offCanvasHidden: true
        })
    }

    onClickNavLink() {
        // this is a small hack because NavLink and Link do not really work good together
        // and we need to disable the last 'active' Link
        let activeElements = document.querySelectorAll('.mainNavItemHasBorder');
        for (let i = 0; i < activeElements.length; i++) {
            activeElements[i].classList.remove('mainNavItemHasBorder');
        }

        window.setTimeout(() => {
            animateScroll.scrollToTop();
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
                    isDynamic: true,
                    offset: -64
                });

            }, 250);
        }
    }

    render() {
        return (
            <MainNav>
                <OffCanvas
                    hidden={this.state.offCanvasHidden}
                    hideOffCanvas={() => this.hideOffCanvas()}
                    onClickScrollLink={() => this.onClickScrollLink()}
                    onClickNavLink={() => this.onClickNavLink()}
                />
                <MainNavItem className="mainNavItemAside">
                    <span className="flex items-center">
                        <IdeasLogo className="hidden sm:flex md:flex md:mr-2 sm:mr-2"/>
                        ideas engineering
                    </span>

                    {/* This is our burger icon to toggle the offcanvas */}
                    <div
                        onClick={() => this.toggleOffCanvas()}
                        className="hidden sm:flex sm:items-center p-2 cursor-pointer"
                    >
                        <IconBurger className="block"/>
                    </div>
                </MainNavItem>
                <MainNavCenter>
                    <MainNavItemLink
                        target="services"
                        onClick={(e) => this.onClickScrollLink('portfolio', e)}
                        activeClass="mainNavItemHasBorder"
                    >
                        Services
                    </MainNavItemLink>
                    <NavLink
                        to='/blog'
                        className={`mainNavItem mainNavItemHasBorderOnHover flex justify-center items-center px-4 text-12 font-bold text-black uppercase tracking-wide no-underline cursor-pointer sm:justify-start sm:p-3 lg:min-w-24 xl:min-w-24`}
                        activeClassName='mainNavItemHasBorder'
                        onClick={this.onClickNavLink.bind(this)}
                    >
                        Blog
                    </NavLink>

                    <MainNavItem
                        onClick={(e) => this.onClickScrollLink('home', e)}
                        className="sm:hidden md:hidden">
                        <IdeasLogo/>
                    </MainNavItem>
                    <MainNavItemLink
                        target="culture"
                        activeClass="mainNavItemHasBorder"
                        onClick={(e) => this.onClickScrollLink('culture', e)}
                    >
                        Culture
                    </MainNavItemLink>
                    <MainNavItemLink
                        target="contact"
                        activeClass="mainNavItemHasBorder"
                        onClick={(e) => this.onClickScrollLink('contact', e)}
                    >
                        Contact
                    </MainNavItemLink>
                </MainNavCenter>
                <MainNavItem className="mainNavItemAside sm:hidden md:hidden"/>
            </MainNav>
        );
    }
};


const OffCanvas = ({hidden, hideOffCanvas, onClickNavLink, onClickScrollLink}) => {
    const navItemProps = {
        smooth: true,
        duration: 350
    };

    const itemClassName = "py-4 text-20 text-white text-center tracking-wide leading-none cursor-pointer";

    return (
        <div className={`${hidden ? "OffCanvas OffCanvas--hidden" : "OffCanvas"} hidden fixed z-10 h-screen p-16 opacity-95 bg-darkblue sm:block`}>
            <ul className="list-reset">
                <Link
                    to="services"
                    onClick={() => {
                        onClickScrollLink('services');
                        hideOffCanvas()
                    }}
                    {...navItemProps}
                >
                    <li className={itemClassName}>
                        Services
                    </li>
                </Link>
                <NavLink
                    to='/blog'
                    onClick={() => {
                        onClickNavLink();
                        hideOffCanvas()
                    }}
                >
                    <li className={itemClassName}>
                        Blog
                    </li>
                </NavLink>
                <Link
                    to="culture"
                    onClick={() => {
                        onClickScrollLink('culture');
                        hideOffCanvas()
                    }}
                    {...navItemProps}
                >
                    <li className={itemClassName}>
                        Culture
                    </li>
                </Link>
                <Link
                    to="contact"
                    onClick={() => {
                        onClickScrollLink('contact');
                        hideOffCanvas()
                    }}
                    {...navItemProps}
                >
                    <li className={itemClassName}>
                        Contact
                    </li>
                </Link>
            </ul>
        </div>
    );
}


export default MainNavComponent;