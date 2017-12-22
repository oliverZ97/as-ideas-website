import React from "react";
import HowCanWeHelp from "./HowCanWeHelp";
import TeamQuotes from "./TeamQuotes";
import Portfolio from "./Portfolio";

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

            <div id="culture" className="slide slide__culture">
                <div className="slide-content">
                    Our background

                    Axel Springer Ideas Engineering was founded in
                    2013 as an in-house Incubator for the Axel
                    Springer Group. Our early years were
                    characterized by rapid growth and a continually
                    evolving organizational structure. While one part
                    of the team focused on founding Start-ups, the
                    other part focused on developing software
                    services for various Axel Springer companies.
                    After only two years more than 10 of our original
                    ideas grew into individual products or companies
                    such as Celepedia, The Iconist, and Upday. Such
                    success led to a realignment of our vision, and
                    we decided to focus on our core DNA: Ideas and
                    Engineering. Doing so allowed us to do what we
                    do best: develop software and products.

                    OUR PRESENCE
                    Since then the organization has matured rapidly.
                    We’ve gone on to develop a digital payment
                    platform that enabled BILD.de and WELT.de to
                    step into the world of paid content. Millions of
                    payments transactions for digital content have
                    been handled by our platform ever since. In
                    parallel, we’ve developed numerous software
                    solutions and services for digital content. We
                    have gone on to master the art of automated
                    metadata enrichment for videos and pictures.
                    Such specialized skills have allowed us to offer
                    products like Newsfinder; a personalized realtime
                    news overview catered specifically for our
                    journalist colleagues within the Axel Springer
                    group.


                    Get in touch with us.
                    We turn your ideas into great products.
                </div>
            </div>
        </div>
    )
};


export default Home;