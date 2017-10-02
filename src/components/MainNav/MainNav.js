import React from "react";
import NavItem from "./MainNavItem";
import "./MainNav.css";

export const MainNav = ({ pathname, cssAddon }) => {
  // In case we have a CSS addon we pass it through and add it to our classNames respectively
  const mainNavCSS = cssAddon !== undefined ? `main-nav main-nav--${cssAddon}` : "main-nav";
  
  return (
    <div className="grid-noGutter-equalHeight">
      <div className="col-6_xs-12">
        <ul className={mainNavCSS}>
          <NavItem 
            name="Ideas Engineering" 
            link="/"
            pathname={pathname}
            cssAddon={cssAddon}
            hasActiveState={false}
          />
        </ul>
      </div>
      <div className="col-6_xs-12">
        <ul className={`${mainNavCSS} main-nav--right`}>
          <NavItem 
            name="About Us / Contact" 
            link="/contact"
            pathname={pathname}
            cssAddon={cssAddon}
          />
        </ul>
      </div>
    </div>
  )
};