import React from 'react';
import './Contact.scss'

import Link from './../../Link/Link';

const Contact = () => (
    <section className='contact centered'>
        <div className='contact__container'>
            <h1 className='contact__text sectionHeading'>
                <Link className='contact__link' to='mailto:hello@asideas.de'>
                    Get in touch with us<br />
                    We turn your ideas into great products.
                </Link>
            </h1>
        </div>
    </section>
);


export default Contact;
