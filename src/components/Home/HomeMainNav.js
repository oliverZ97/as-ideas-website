import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export const MainNav = ({ pathname }) => {
  return (
    <div className="grid-noGutter-equalHeight">
      <div className="col-6_xs-12">
        <ul className="main-nav">
            <li className="main-nav__item">
              Ideas Engineering
            </li>
          </ul>
      </div>
      <div className="col-6_xs-12">
        <ul className="main-nav main-nav--right">
          <li className="main-nav__item">
            <Link className={pathname === "/contact" ? `main-nav__item-link main-nav__item-link--active` : `main-nav__item-link`} to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  )
};