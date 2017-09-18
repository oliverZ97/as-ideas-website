import React from "react";
import { Link } from "react-router-dom";
import "./MainNav.css";

export const MainNav = ({ pathname, cssClassAddon }) => {
  
  /**
   * Navitem Home
   * @param {*} pathname 
   */
  const NavItemHome = (pathname, cssClassAddon) => {
    const itemClassAddon = cssClassAddon !== undefined ? `main-nav__item--${cssClassAddon}` : "";
    const linkClassAddon = cssClassAddon !== undefined ? `main-nav__item-link--${cssClassAddon}` : "";
     
    return pathname === "/" ? (
      <li className={`main-nav__item ${itemClassAddon}`}>
        Ideas Engineering
      </li>
    ) :
    (
      <li className={`main-nav__item ${itemClassAddon}`}>
        <Link 
          className={`main-nav__item-link ${linkClassAddon}`} 
          to="/"
        >
          Ideas Engineering
        </Link>
      </li>
    );
  };


  /**
   * Navitem Contact
   * @param {*} pathname 
   */
  const NavItemContact = (pathname, cssClassAddon) => {
    const itemClassAddon = cssClassAddon !== undefined ? `main-nav__item--${cssClassAddon}` : "";
    const linkClassAddon = cssClassAddon !== undefined ? `main-nav__item-link--${cssClassAddon}` : "";

    return pathname === "/contact" ? (
      <li className={`main-nav__item ${itemClassAddon}`}>
        <span className={`main-nav__item-link main-nav__item-link--active ${linkClassAddon}`}>
          Contact
        </span>
      </li>
    ) :
    (
      <li className={`main-nav__item ${itemClassAddon}`}>
        <Link 
          className={`main-nav__item-link ${linkClassAddon}`} 
          to="/contact"
        >
          Contact
        </Link>
      </li>
    );
  };

  const mainNavCSSClass = cssClassAddon !== undefined ? `main-nav main-nav--${cssClassAddon}` : "main-nav";

  return (
    <div className="grid-noGutter-equalHeight">
      <div className="col-6_xs-12">
        <ul className={`main-nav ${mainNavCSSClass}`}>
          { NavItemHome(pathname, cssClassAddon) }    
        </ul>
      </div>
      <div className="col-6_xs-12">
        <ul className={`${mainNavCSSClass} main-nav--right`}>
          { NavItemContact(pathname, cssClassAddon) }    
        </ul>
      </div>
    </div>
  )
};