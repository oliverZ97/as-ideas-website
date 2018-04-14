import React from "react";
import { Link, scroller, animateScroll } from "react-scroll";

export default class ScrollingLink extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        if (this.props.history.location.pathname !== '/') {
            this.props.history.push('/#' + this.props.to);
        }
    }

    init(history) {
        this.history = history;
    }

    render() {
        return (
            <Link
                to={this.props.to}
                className={'scrollingLink__container ' + (this.props.className ? this.props.className : '')}
                activeClass={'scrollingLink__container--active ' + (this.props.className ? (this.props.className + '--active') : '')}
                smooth={true}
                duration={350}
                spy={true}
                onClick={this.handleClick.bind(this)}
            >
                {this.props.children}
            </Link>
        )
    }
}
