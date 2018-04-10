import React from "react";
import { CSSTransition } from 'react-transition-group';
import "./Testimonials.scss";

import { ArrowRight } from '../../../assets/svg';
import { ArrowLeft } from '../../../assets/svg';

let testimonialQuotations = [
    {
        quotation: "At Ideas, we have so many possibilities to learn and evolve, unparalleled to any other company I know.",
        quotedBy: "Software Engineer at Ideas Engineering"
    },
    {
        quotation: "It's nice to work with so many people that actually care about you as a person and there are many different possibilities to step back and work quietly.",
        quotedBy: "UX Designer at Ideas Engineering"
    },
    {
        quotation: "I can quickly reach out to the right people if I have impediments that I cannot solve on my own.",
        quotedBy: "Product Owner at Ideas Engineering"
    },
    {
        quotation: "Flat hierarchies and process guidelines enables us to resolve most issues directly with the team.",
        quotedBy: "Software Engineer at Ideas Engineering"
    },
    {
        quotation: "You get a strong support when you want to evolve or alter your skills.",
        quotedBy: "Product Owner at Ideas Engineering"
    },
    {
        quotation: "I am highly motivated, because I have a lot of room to maneuver and feel appropriately challenged according to my skillset.",
        quotedBy: "Software Engineer at Ideas Engineering"
    },
    {
        quotation: "What I like about my team? We have fun with good challenges and are able to tackle even the most complex tasks together.",
        quotedBy: "Software Engineer at Ideas Engineering"
    },
    {
        quotation: "I work in a team with smart and pleasant people, all eager to improve every day.",
        quotedBy: "UX Designer at Ideas Engineering"
    },
    {
        quotation: "We demand a high quality standard of ourselves and are able to defend that for our clients. The team is young and always open to new ideas.",
        quotedBy: "Software Engineer at Ideas Engineering"
    },
];

class Testimonials extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: 0,
        }
    }

    componentWillMount() {
        testimonialQuotations = this.shuffleArray(testimonialQuotations);
    }

    componentDidMount() {
        document.body.addEventListener('keydown', this.handleKeyDown.bind(this));
    }

    componentWillUnmount() {
        document.body.removeEventListener('keydown', this.handleKeyDown.bind(this));
    }

    handleKeyDown(e) {
        if (e.key === 'ArrowRight') {
            this.next();
        } else if (e.key === 'ArrowLeft') {
            this.prev();
        }
    }

    next() {
        let activeItem = (this.state.activeItem + 1 > testimonialQuotations.length - 1) ? 0 : this.state.activeItem + 1;
        this.setState({
            activeItem: activeItem
        });
    }

    prev() {
        let activeItem = (this.state.activeItem - 1 < 0) ? testimonialQuotations.length - 1 : this.state.activeItem - 1;
        this.setState({
            activeItem: activeItem
        });
    }

    goTo(index) {
        this.setState({
            activeItem: index
        });
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    renderIndicator(length, active) {
        let items = [];
        for (let i = 0; i < length; i++) {
            let active = this.state.activeItem === i;
            items.push(
                <li
                    className={'testimonials__indicatorDot' + (active ? ' testimonials__indicatorDot--active' : '')}
                    key={'indicator' + i}
                    onClick={this.goTo.bind(this, i)}
                />
            );
        }

        return (
            <ul className='testimonials__indicator'>
                {items}
            </ul>
        );
    }

    render() {
        let quote = testimonialQuotations[this.state.activeItem];

        return (
            <section className='testimonials centered'>
                <figure className='testimonials__container'>
                    {this.renderIndicator(testimonialQuotations.length, this.state.activeItem)}
                    <h3 className='testimonials__author'>
                        {quote.quotedBy}
                    </h3>
                    <p className='testimonials__text'>
                        {quote.quotation}
                    </p>
                    <div className='testimonials__overlay testimonials__overlay--left' onClick={this.prev.bind(this)}>
                        <ArrowLeft className='testimonials__arrow testimonials__arrow--left' />
                    </div>
                    <div className='testimonials__overlay testimonials__overlay--right' onClick={this.next.bind(this)}>
                        <ArrowRight className='testimonials__arrow testimonials__arrow--right' />
                    </div>
                </figure>
            </section>
        )
    }
}

export default Testimonials;