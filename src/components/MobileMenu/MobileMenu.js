import React from "react";

import Link from './../Link/Link';

import './MobileMenu.scss';

export default class MobileMenu extends React.Component {
    componentWillMount() {
        document.body.style.overflow = 'hidden';
    }

    componentWillUnmount() {
        document.body.style.overflow = 'auto';
    }

    close() {
        this.props.close();
    }

    render() {
        let history = this.props.history;

        return (
            <section className='mobileMenu'>
                <ul className='mobileMenu__list'>
                    <li className='mobileMenu__item' >
                        <Link className='mobileMenu__link' to='services' history={history} onClick={this.close.bind(this)}>
                            Services
                        </Link>
                    </li>
                    <li className='mobileMenu__item'>
                        <Link className='mobileMenu__link' to='portfolio' history={history} onClick={this.close.bind(this)}>
                            Portfolio
                        </Link>
                    </li>
                    <li className='mobileMenu__item'>
                        <Link className='mobileMenu__link' to='culture' history={history} onClick={this.close.bind(this)}>
                            Culture
                        </Link>
                    </li>
                    <li className='mobileMenu__item'>
                        <Link className='mobileMenu__link' to='/blog' onClick={this.close.bind(this)}>
                            Blog
                        </Link>
                    </li>
                    <li className='mobileMenu__item' onClick={this.close.bind(this)}>
                        <Link className='mobileMenu__link' to='https://career.axelspringer.com/jobangebote/' onClick={this.close.bind(this)}>
                            Work with us
                        </Link>
                    </li>
                </ul>
            </section>
        )
    }
}
