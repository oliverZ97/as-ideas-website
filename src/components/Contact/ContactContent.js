import React from "react";
import { Picture } from "react-responsive-picture";
import { IconHere, IconEnvelope, IconSpeechbubble } from "./../SVGSprite/SVGSprite";
import ideasTeamLg from "./ideas-team-lg.jpg";
import ideasTeamMd from "./ideas-team-md.jpg";
import ideasTeamSm from "./ideas-team-sm.jpg";
import "./Contact.css";


export const Content = () => {
  return (
    <div class="contact">
      <div className="l-container l-container--no-gutter">
        <div className="contact__img-box">
          <Picture
            sources = {[
              { srcSet: `${ideasTeamSm} 1x`, media: "(max-width: 35.5em)" },
              { srcSet: `${ideasTeamMd} 1x`, media: "(max-width: 48em)"   },
              { srcSet: `${ideasTeamLg} 1x` }
            ]}
            className="contact__img"
          />
        </div>
      </div>
      <div className="l-container">
        <div className="grid-noGutter-spaceAround">
          <div className="col-10_sm-12">
            <p className="contact__txt-intro">
              Axel Springer Ideas was founded in 2013 as an in-house incubator. 
              Our early years were characterized by agile development, rapid growth, and a constantly changing company structure. 
              One part of the team was focused on founding startups, whereas the other part developed software services for various Axel Springer companies. 
              After two years, more than 10 of these ideas grew out of Axel Springer Ideas into individual products or companies such as Celepedia, The Iconist, and Upday. 
              This success led to a realignment, and we decided to focus on our fundamental DNA elements: Ideas and Engineering. 
              That allowed us to do what we do best: develop software and products.
            </p>
            <p className="contact__txt-intro">
              We have developed a digital payment platform that enabled BILD.de and WELT.de to step into the world of paid content. 
              Since 19x we've facilitated millions of payments for digital content. 
              In parallel, we develop software solutions and services around digital content. 
              We are specialized on automated metadata enrichment for videos and pictures. 
              That allows us to offer products like Newsfinder, a personalized real-time news overview, for our journalist colleagues within Axel Springer.
            </p>
            <p className="contact__txt-intro">
              We turn your ideas into great products.
            </p>
          </div>
        </div>
      </div>
      <div className="l-container l-container--no-gutter">
        <ul className="contact__list">
          <li className="contact__list-item">
            <div className="contact__icon-box">
              <IconEnvelope className="contact__icon"/>
            </div>
            <a 
              href="mailto:hello@asideas.de" 
              className="contact__link"
            >
              hello@asideas.de
            </a>
          </li>
          <li className="contact__list-item">
            <div className="contact__icon-box">
              <IconHere className="contact__icon"/>
            </div>
            <a 
              href="https://goo.gl/maps/pK8i7NwuKX62"
              className="contact__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              We are here.
            </a>
          </li>
          <li className="contact__list-item">
            <div className="contact__icon-box">
              <IconSpeechbubble className="contact__icon"/>
            </div>
            <span className="contact__txt">
              +49-30-259178100
            </span>
          </li>
        </ul>
      </div>
      <div className="l-container">
        <div className="grid-noGutter-spaceAround">
          <div className="col-10_sm-12">
            <p className="contact__txt-intro">
              Imprint
            </p>
            <p className="contact__txt contact__txt--sm">
              Axel Springer Ideas Engineering GmbH
            </p>
            <p className="contact__txt contact__txt--sm">
              ein Unternehmen der <span className="no-wrap">Axel Springer SE</span><br />
              Axel-Springer-Straße 65<br />
              10888 Berlin
            </p>
            <p className="contact__txt contact__txt--sm">
              Geschäftsführer<br />
              Samir Fadlallah, <span className="no-wrap">Michael Alber</span>
            </p>
            <p className="contact__txt contact__txt--sm">
              Handelsregistereintrag<br />
              Amtsgericht Charlottenburg, <span className="no-wrap">Berlin HRB 138466 B</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};