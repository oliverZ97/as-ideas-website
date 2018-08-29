import React from 'react';
import Hero from './Hero/Hero';
import Services from './Services/Services';
import Portfolio from './Portfolio/Portfolio';
import Culture from './Culture/Culture';
import Contact from './Contact/Contact';
import Testimonials from './Testimonials/Testimonials';
import Jobs from './Jobs/Jobs';
import Newsletter from './Newsletter/Newsletter';

import './Home.scss'

const Home = () => {
    return (
        <div className='home'>
            <Hero />
            <Services />
            <Portfolio />
            <Testimonials />
            <Culture />
            <Newsletter />
            <Jobs />
            <Contact />
        </div>
    );
};

export default Home;
