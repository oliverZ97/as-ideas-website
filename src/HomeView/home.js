import React from "react";
import HowCanWeHelp from "./HowCanWeHelp";
import TeamQuotes from "./TeamQuotes";
import Portfolio from "./Portfolio";
import Culture from "./Culture";

import "./home.css"

const Home = () => {
    return (
        <div className="l-home">
            <div id="services" className="slide slide__slogan">
                <div className="slide-content">
                    <div className="slogan-text">
                        We are Ideas, a studio of developers, designers and
                        product owners. We focus on building software for media.
                        We create tons of code, prototype in fast iterations, and
                        design outstanding products people can’t help but love.
                        Trust us, we are engineers.
                    </div>
                </div>

            </div>

            <HowCanWeHelp />

            <Portfolio />

            <TeamQuotes />

            <Culture />
            
        </div>
    )
};


export default Home;