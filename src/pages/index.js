import React from "react"

import Layout from "../templates/layout/layout";

import Hero from "../components/HomeView/Hero/Hero";
import Services from "../components/HomeView/Services/Services";
import Portfolio from "../components/HomeView/Portfolio/Portfolio";
import Testimonials from "../components/HomeView/Testimonials/Testimonials";
import Culture from "../components/HomeView/Culture/Culture";
import Newsletter from "../components/HomeView/Newsletter/Newsletter";
import Jobs from "../components/HomeView/Jobs/Jobs";
import Contact from "../components/HomeView/Contact/Contact";


export default ({data}) => (
  <Layout>
    <div className='home'>
      <Hero/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Culture/>
      <Newsletter/>
      <Jobs/>
      <Contact/>
    </div>
  </Layout>
);

