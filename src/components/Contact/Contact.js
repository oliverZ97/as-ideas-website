import React from "react";
import { Hero } from "./ContactHero";
import { Footer } from "./../Footer/Footer";
import "./Contact.css";


class Contact extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Hero pathname={this.props.location.pathname} />
          We're cool, so get in touch
        <Footer />
      </div>
    );
  }
}


export default Contact;