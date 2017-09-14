import React from "react";
import { Link } from "react-router-dom";
import "./MainNav.css";

export const MainNav = ({ pathname, classAddon }) => {
  
  /**
   * Navitem Home
   * @param {*} pathname 
   */
  const NavItemHome = (pathname, classAddon) => {
    const itemClassAddon = classAddon !== undefined ? `main-nav__item--${classAddon}` : "";
    const linkClassAddon = classAddon !== undefined ? `main-nav__item-link--${classAddon}` : "";
     
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
  const NavItemContact = (pathname, classAddon) => {
    const itemClassAddon = classAddon !== undefined ? `main-nav__item--${classAddon}` : "";
    const linkClassAddon = classAddon !== undefined ? `main-nav__item-link--${classAddon}` : "";

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

  const navClassAddon = classAddon !== undefined ? `main-nav--${classAddon}` : "";

  return (
    <div className="grid-noGutter-equalHeight">
      <div className="col-6_xs-12">
        <ul className={`main-nav ${navClassAddon}`}>
          { NavItemHome(pathname, classAddon) }    
        </ul>
      </div>
      <div className="col-6_xs-12">
        <ul className={`main-nav main-nav--right ${navClassAddon}`}>
          { NavItemContact(pathname, classAddon) }    
        </ul>
      </div>
    </div>
  )
};