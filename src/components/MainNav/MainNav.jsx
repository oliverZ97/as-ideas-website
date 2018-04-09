import React from "react";
import ScrollingLink from '../ScrollingLink/ScrollingLink';
import { NavLink } from "react-router-dom";

import { IdeasLogo } from './../../assets/svg';

import './MainNav.scss';

function Link({ to, children, history }) {
    let onHome = window.location.pathname === '/';
    let external = to.includes('/')

    if (external) {
        return <a className={'mainNav__link'} href={to}>{children}</a>
    } else {
        if (!onHome) {
            return <a href={'/#' + to} className={'mainNav__link'}>{children}</a>
        } else {
            return <ScrollingLink
                to={to}
                className={'mainNav__link'}
                history={history}
            >
                {children}
            </ScrollingLink>
        }
    }
}

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
                        <Link className='mainNav__link' to='/blog' history={history}>
                            Blog
                    </Link>
                    </li>
                    <li className='mainNav__item mainNav__item--right'>
                        <Link className='mainNav__link' to='' history={history}>
                            Work with us
                    </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
