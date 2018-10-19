import React from 'react';
import {scroller} from "react-scroll";
import {ArrowDown} from './svg';

import './Hero.scss';

const heroText = "We are a studio of developers, designers and product people. We focus on building software for the media industry. We combine technology and agile thinking to create great products people can’t help but love.";


class Hero extends React.Component {
    scrollDown() {
        scroller.scrollTo('services', {
            spy: true,
            smooth: true,
            duration: 350
        });
    }

    render() {
        return (
            <section className='hero'>
                <p className='hero__text'>
                    {heroText}
                </p>
                <ArrowDown className='hero__arrow' onClick={this.scrollDown.bind(this)}/>
            </section>
        );
    }
}

export default Hero;
