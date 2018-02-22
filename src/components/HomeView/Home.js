import React from 'react';
import MainNavComponent from './../MainNav/MainNav';
import Hero from "./Hero";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Culture from "./Culture";
import Contact from "./Contact";

import "./Home.scss"

const Home = () => {
    return (
        <div className="home">
            <MainNavComponent/>
            <Hero/>
            <Services/>
            <Portfolio/>
            <Culture/>
            <Contact/>
        </div>
    );
};


export default Home;