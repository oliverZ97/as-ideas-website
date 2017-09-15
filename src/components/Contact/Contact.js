import React from "react";
import { Hero } from "./ContactHero";
import { Content } from "./ContactContent";
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
        <Content />
        <Footer hideImprint={true} />
      </div>
    );
  }
}


export default Contact;