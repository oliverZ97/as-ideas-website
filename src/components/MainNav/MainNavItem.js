import React from "react";
import { Link } from "react-router-dom";
import "./MainNav.css";

const NavItem = ({ name, link, hasActiveState, cssAddon, pathname }) => {
  // Is our route active? 
  const activeRoute = pathname === link;
  
  // In case we have a CSS addon we pass it through and add it to our classNames respectively
  const itemCSSAddon = cssAddon !== undefined ? `main-nav__item--${cssAddon}` : "";
  const linkCSSAddon = cssAddon !== undefined ? `main-nav__item-link--${cssAddon}` : "";
  
  // Add CSS depending on ActiveState, which describes wheater our nav items have a visible active state or not
  const linkCSSActiveState = hasActiveState === false ? "" : `main-nav__item-link--is-active`;
  
  return activeRoute ? (
    <li className={`main-nav__item ${itemCSSAddon}`}>
      <span className={`main-nav__item-link main-nav__item-link--is-active-route ${linkCSSActiveState} ${linkCSSAddon}`}>
        {name}
      </span>
    </li>
  ) 
  :
  (
    <li className={`main-nav__item ${itemCSSAddon}`}>
      <Link 
        className={`main-nav__item-link ${linkCSSAddon}`} 
        to={link}
      >
        {name}
      </Link>
    </li>
  );
};


export default NavItem;