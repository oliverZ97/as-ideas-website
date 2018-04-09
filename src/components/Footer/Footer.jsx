import React from 'react';
import './Footer.scss'
import { Link as ScrollLink } from "react-scroll";
import { Link as ExtLink } from 'react-router-dom'

const Column = ({ children, className }) => (
    <ul className={'footer__column ' + (className ? className : '')}>{children}</ul>
)

function Link({ to, children }) {
    let onHome = window.location.pathname === '/';
    let external = to.includes('/')

    if (external) {
        return <a className={'footer__link'} href={to}>{children}</a>
    } else {
        if (!onHome) {
            return <a href={'/#' + to} className={'footer__link'}>{children}</a>
        } else {
            return <ScrollLink
                to={to}
                className={'footer__link'}
                smooth={true}
                duration={350}
                spy={true}
            >
                {children}
            </ScrollLink>
        }
    }
}

export default class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <footer className='footer centered'>
                <div className='footer__container'>
                    <ul className='footer__columns'>
                        <Column className='footer__hire'>
                            We are hiring!<br />
                            If you're interested,<br />
                            drop us a line or two.
                        </Column>
                        <Column>
                            <h3>Sitemap</h3>
                            <ul>
                                <li><Link to='hero'>Home</Link></li>
                                <li><Link to='services'>Services</Link></li>
                                <li><Link to='portfolio'>Portfolio</Link></li>
                                <li><Link to='/blog'>Blog</Link></li>
                                <li><Link to='culture'>Culture</Link></li>
                                <li><Link to='/'>Work with us</Link></li>
                            </ul>
                        </Column>
                        <Column>
                            <h3>Social Media</h3>
                            <ul>
                                <li><Link to='https://github.com/as-ideas'>GitHub</Link></li>
                                <li><Link to='https://twitter.com/as_ideas'>Twitter</Link></li>
                                <li><Link to='https://www.linkedin.com/company/axel-springer-ideas-engineering'>LinkedIn</Link></li>
                                <li><Link to='https://www.facebook.com/AxelSpringerIdeas/'>Facebook</Link></li>
                                <li><Link to='https://www.instagram.com/ideas_engineering/'>Instagram</Link></li>
                            </ul>
                        </Column>
                        <Column>
                            <h3>Contact</h3>
                            <ul>
                                <li>Axel Springer Ideas Engineering GmbH</li>
                                <li>Axel-Springer-Str. 65, 10888 Berlin</li>
                                <li>+49-30-259178100</li>
                                <li>hello@asideas.de</li>
                            </ul>
                        </Column>
                    </ul>
                </div>
            </footer>
        )
    }
}