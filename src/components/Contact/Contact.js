import React from "react";
import { Hero } from "./../Hero/Hero";
import { HeroContent } from "./ContactHero";
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
        <Hero 
          wrapped={HeroContent} 
          pathname={this.props.location.pathname} 
          cssClassAddon="light"
        />
        <Content />
        <Footer hideImprint={true} />
      </div>
    );
  }
}


export default Contact;