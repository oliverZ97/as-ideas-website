import React from "react";
import { Link } from "react-router-dom";
import "./MainNav.css";

export const MainNav = ({ pathname }) => {
  
  /**
   * Navitem Home
   * @param {*} pathname 
   */
  const NavItemHome = (pathname) => {
    return pathname === "/" ? (
      <li className="main-nav__item">
        Ideas Engineering
      </li>
    ) :
    (
      <li className="main-nav__item">
        <Link 
          className={`main-nav__item-link`} 
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
  const NavItemContact = (pathname) => {
    return pathname === "/contact" ? (
      <li className="main-nav__item">
        <span className={`main-nav__item-link main-nav__item-link--active`}>
          Contact
        </span>
      </li>
    ) :
    (
      <li className="main-nav__item">
        <Link 
          className={`main-nav__item-link`} 
          to="/contact"
        >
          Contact
        </Link>
      </li>
    );
  };

  
  return (
    <div className="grid-noGutter-equalHeight">
      <div className="col-6_xs-12">
        <ul className="main-nav">
          { NavItemHome(pathname) }    
        </ul>
      </div>
      <div className="col-6_xs-12">
        <ul className="main-nav main-nav--right">
          { NavItemContact(pathname) }    
        </ul>
      </div>
    </div>
  )
};