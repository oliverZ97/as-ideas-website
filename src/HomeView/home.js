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
                        We are a studio of developers, designers and product people. We focus on building software for the media industry. We combine technology and agile thinking to create great products people can’t help but love.
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