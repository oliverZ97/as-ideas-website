import React from 'react';
import './Footer.scss'
import Link from './../Link/Link';

const Column = ({ children, className }) => (
    <ul className={'footer__column ' + (className ? className : '')}>{children}</ul>
)

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
                                <li><Link className='footer__link' to='hero'>Home</Link></li>
                                <li><Link className='footer__link' to='services'>Services</Link></li>
                                <li><Link className='footer__link' to='portfolio'>Portfolio</Link></li>
                                <li><Link className='footer__link' to='/blog'>Blog</Link></li>
                                <li><Link className='footer__link' to='culture'>Culture</Link></li>
                                <li><Link className='footer__link' to='https://career.axelspringer.com/jobangebote/'>Work with us</Link></li>
                            </ul>
                        </Column>
                        <Column>
                            <h3>Social Media</h3>
                            <ul>
                                <li><Link className='footer__link' to='https://github.com/as-ideas'>GitHub</Link></li>
                                <li><Link className='footer__link' to='https://twitter.com/as_ideas'>Twitter</Link></li>
                                <li><Link className='footer__link' to='https://www.linkedin.com/company/axel-springer-ideas-engineering'>LinkedIn</Link></li>
                                <li><Link className='footer__link' to='https://www.facebook.com/AxelSpringerIdeas/'>Facebook</Link></li>
                                <li><Link className='footer__link' to='https://www.instagram.com/ideas_engineering/'>Instagram</Link></li>
                            </ul>
                        </Column>
                        <Column>
                            <h3>Contact</h3>
                            <ul>
                                <li>Axel Springer Ideas Engineering GmbH</li>
                                <li>Axel-Springer-Str. 65, 10888 Berlin</li>
                                <li>+49-30-259178100</li>
                                <li><Link className='footer__link' to='mailto:hello@asideas.de'>hello@asideas.de</Link></li>
                            </ul>
                        </Column>
                    </ul>
                </div>
            </footer>
        )
    }
}