import React from "react";
import Swipe from 'react-easy-swipe';
import {CSSTransition} from 'react-transition-group';
import "./Testimonials.scss";


const testimonialQuotations = [
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

/**
 * Fade HOC for wrapping CSS Transitions, see:
 * https://reactcommunity.org/react-transition-group/
 * @param {*} param0
 */
const Fade = ({children, ...props}) => (
    <CSSTransition
        {...props}
        timeout={500}
        classNames="fade"
    >
        {children}
    </CSSTransition>
);

/**
 * Main Component
 */
class Testimonials extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: 0
        }
    }

    render() {
        return (
            <Swipe onSwipeLeft={this.onSwipeLeft.bind(this)} onSwipeRight={this.onSwipeRight.bind(this)} onSwipeStart={this.onSwipeStart.bind(this)} onSwipeEnd={this.onSwipeEnd.bind(this)}>
                <div className="flex flex-col justify-center items-center min-h-screen-90 px-4 py-16 bg-grey-10 sm:min-h-0 sm:px-4 md:px-6">
                    <div className="w-full max-w-lg text-center text-white">
                        <div className="relative h-64 sm:h-48">
                            {
                                testimonialQuotations.map((item, index) => {
                                    let className = "testimonial-text absolute pin text-48 sm:text-24 sm:leading-tight md:text-36 md:leading-tight";
                                    return (
                                        <Fade key={index} in={this.state.activeItem === index}>
                                            <p className={this.state.activeItem === index ? `active ${className}` : `${className}`}>
                                                {item.quotation}
                                            </p>
                                        </Fade>
                                    );
                                })
                            }
                        </div>
                        <p className="mt-16 text-16 tracking-wide sm:text-14">
                            {testimonialQuotations[this.state.activeItem].quotedBy}
                        </p>
                        <div className="flex justify-center items-center mt-8">
                            {
                                testimonialQuotations.map((item, index) => {
                                    let className = "testimonial-dot mx-1 cursor-pointer bg-grey-2 w-12 h-2";
                                    return (
                                        <div
                                            onClick={this.goTo.bind(this, index)}
                                            key={index}
                                            className={this.state.activeItem === index ? `active ${className}` : `${className}`}
                                        />
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </Swipe>
        )
    }

    /**
     * Step to next slide
     */
    next() {
        let activeItem = (this.state.activeItem + 1 > testimonialQuotations.length - 1) ? 0 : this.state.activeItem + 1;
        this.setState({
            activeItem: activeItem
        });
    }

    /**
     * Step to previous slide
     */
    prev() {
        let activeItem = (this.state.activeItem - 1 < 0) ? testimonialQuotations.length - 1 : this.state.activeItem - 1;
        this.setState({
            activeItem: activeItem
        });
    }

    /**
     * Go to a slide
     * @param {number} index
     */
    goTo(index) {
        let activeItem = (index > testimonialQuotations.length - 1) ? 0 : index;
        this.setState({
            activeItem: activeItem
        });
        this.startLoop();
    }

    /**
     * Start looping through slides
     */
    startLoop() {
        this.endLoop();
        this.loop = setInterval(this.next.bind(this), 8000);
    }

    /**
     * Ends looping through slides
     */
    endLoop() {
        clearInterval(this.loop);
    }

    /**
     * Swiping methods for mobile devices, see:
     * http://react-easy-swipe.js.org/#demo or https://www.npmjs.com/package/react-easy-swipe
     */
    onSwipeLeft(position, event) {
        this.prev();
        this.startLoop();
    }

    onSwipeRight(position, event) {
        this.next();
        this.startLoop();
    }

    onSwipeStart(event) {
        this.endLoop();
    }

    onSwipeEnd(event) {
        this.startLoop();
    }

    /**
     * React lifecycle methods
     */
    componentDidMount() {
        this.startLoop();
    }

    componentWillUnmount() {
        this.endLoop();
    }
}


export default Testimonials;