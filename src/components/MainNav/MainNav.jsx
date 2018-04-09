import React from "react";

import { IdeasLogo } from './../../assets/svg';
import Link from './../Link/Link';

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
                        <Link className='mainNav__link' to='home' history={history}>
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
                </ul>
            </nav>
        );
    }
}
