import React from "react";
import ScrollingLink from '../ScrollingLink/ScrollingLink';
import { NavLink } from "react-router-dom";

import { IdeasLogo } from './../../assets/svg';

import './MainNav.scss';

export default class MainNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let history = this.props.history;
        return (
            <nav className='mainNav'>
                <ul className='mainNav__list'>
                    <li className='mainNav__item'>
                        <ScrollingLink className='mainNav__link' to='services' history={history}>
                            Services
                        </ScrollingLink>
                    </li>
                    <li className='mainNav__item'>
                        <ScrollingLink className='mainNav__link' to='portfolio' history={history}>
                            Portfolio
                    </ScrollingLink>
                    </li>
                    <li className='mainNav__item mainNav__item--logo'>
                        <ScrollingLink className='mainNav__link' to='home' history={history}>
                            <IdeasLogo />
                        </ScrollingLink>
                    </li>
                    <li className='mainNav__item'>
                        <ScrollingLink className='mainNav__link' to='culture' history={history}>
                            Culture
                    </ScrollingLink>
                    </li>
                    <li className='mainNav__item'>
                        <NavLink className='mainNav__link' to='/blog' history={history}>
                            Blog
                    </NavLink>
                    </li>
                    <li className='mainNav__item mainNav__item--right'>
                        <ScrollingLink className='mainNav__link' to='' history={history}>
                            Work with us
                    </ScrollingLink>
                    </li>
                </ul>
            </nav>
        );
    }
}
