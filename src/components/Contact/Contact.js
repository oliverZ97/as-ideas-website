import React from "react";
import { Hero } from "./ContactHero";
import { Footer } from "./../Footer/Footer";
import "./Contact.css";


const Contact = ({ location }) => {
  return (
    <div>
      <Hero pathname={location.pathname} />
        We're cool, so get in touch
      <Footer />
    </div>
  )
};


export default Contact;