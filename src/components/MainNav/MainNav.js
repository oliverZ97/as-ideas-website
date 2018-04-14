import React from "react";

import { IdeasLogo, IconBurger } from './../../assets/svg';
import Link from './../Link/Link';
import MobileMenu from '../MobileMenu/MobileMenu';

import './MainNav.scss';

export default class MainNav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showMobileMenu: false
        }
    }

    toggleMenu() {
        this.setState({
            showMobileMenu: !this.state.showMobileMenu
        })
    }

    render() {
        let history = this.props.history;

        let mobileMenu;
        if (this.state.showMobileMenu) mobileMenu = <MobileMenu history={this.props.history} close={this.toggleMenu.bind(this)} />;

        return (
            <nav className={'mainNav' + (this.state.showMobileMenu ? ' mainNav--open' : '')}>
                <ul className='mainNav__list'>
                    <li className='mainNav__item'>
                        <Link className='mainNav__link' to='services' history={history}>
                            Services
                        </Link>
                    </li>
                    <li className='mainNav__item'>
                        <Link className='mainNav__link' to='portfolio' history={history}>
                            Portfolio
                        </Link>
                    </li>
                    <li className='mainNav__item mainNav__item--logo'>
                        <Link className='mainNav__link' to='home' history={history} onClick={this.state.showMobileMenu ? this.toggleMenu.bind(this) : null}>
                            <IdeasLogo />
                        </Link>
                    </li>
                    <li className='mainNav__item'>
                        <Link className='mainNav__link' to='culture' history={history}>
                            Culture
                        </Link>
                    </li>
                    <li className='mainNav__item'>
                        <Link className='mainNav__link' to='/blog'>
                            Blog
                        </Link>
                    </li>
                    <li className='mainNav__item mainNav__item--right'>
                        <Link className='mainNav__link' to='https://career.axelspringer.com/jobangebote/'>
                            Work with us
                        </Link>
                    </li>
                    <li className='mainNav__item mainNav__item--toggle' onClick={this.toggleMenu.bind(this)}>
                        <IconBurger />
                    </li>
                </ul>
                {mobileMenu}
            </nav>
        );
    }
}
