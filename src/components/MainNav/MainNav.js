import React from 'react';
import {Link} from 'react-scroll';

import {IdeasLogo, IconBurger} from './../../assets/svg';
import './MainNav.scss';


const MainNav = ({children}) => (
    <nav className="fixed z-20 flex items-stretch justify-between w-full h-16 bg-white-transparent-9/10 sm:block sm:h-auto">
        {children}
    </nav>
);


const MainNavCenter = ({children}) => (
    <div className="flex items-stretch justify-center sm:hidden">
        {children}
    </div>
);


const MainNavItemLink = ({children, target, className, activeClass}) => (
    <Link
        to={target}
        offset={-64} // See browser dev tool and check value of padding/margin for target container, in this case 4rem (64px)   
        className={`mainNavItem mainNavItemHasBorderOnHover flex justify-center items-center px-4 text-12 font-bold text-black uppercase tracking-wide no-underline cursor-pointer sm:justify-start sm:p-3 lg:min-w-24 xl:min-w-24 ${className}`}
        activeClass={activeClass}
        smooth={true}
        duration={350}
        spy={true}
    >
        {children}
    </Link>
);


const MainNavItem = ({children, className}) => (
    <div className={`flex justify-between items-center px-4 text-14 font-bold text-black no-underline sm:p-3 ${className}`}>
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

    render() {
        return (
            <MainNav>
                <OffCanvas
                    hidden={this.state.offCanvasHidden}
                    hideOffCanvas={() => this.hideOffCanvas()}
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
                        activeClass="mainNavItemHasBorder"
                    >
                        Services
                    </MainNavItemLink>
                    <MainNavItemLink
                        target="portfolio"
                        activeClass="mainNavItemHasBorder"
                    >
                        Portfolio
                    </MainNavItemLink>
                    <MainNavItem className="sm:hidden md:hidden">
                        <IdeasLogo/>
                    </MainNavItem>
                    <MainNavItemLink
                        target="culture"
                        activeClass="mainNavItemHasBorder"
                    >
                        Culture
                    </MainNavItemLink>
                    <MainNavItemLink
                        target="contact"
                        activeClass="mainNavItemHasBorder"
                    >
                        Contact
                    </MainNavItemLink>
                </MainNavCenter>
                <MainNavItem className="mainNavItemAside sm:hidden md:hidden"/>
            </MainNav>
        );
    }
};


const OffCanvas = ({hidden, hideOffCanvas}) => {
    const navItemProps = {
        smooth: true,
        duration: 350,
        onClick: hideOffCanvas
    };

    const itemClassName = "py-4 text-20 text-white text-center tracking-wide leading-none cursor-pointer";

    return (
        <div className={`${hidden ? "OffCanvas OffCanvas--hidden" : "OffCanvas"} hidden fixed z-10 h-screen p-16 opacity-95 bg-darkblue sm:block`}>
            <ul className="list-reset">
                <Link
                    to="services"
                    {...navItemProps}
                >
                    <li className={itemClassName}>
                        Services
                    </li>
                </Link>
                <Link
                    to="portfolio"
                    {...navItemProps}
                >
                    <li className={itemClassName}>
                        Portfolio
                    </li>
                </Link>
                <Link
                    to="culture"
                    {...navItemProps}
                >
                    <li className={itemClassName}>
                        Culture
                    </li>
                </Link>
                <Link
                    to="contact"
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