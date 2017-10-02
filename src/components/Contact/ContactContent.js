import React from "react";
import { Picture } from "react-responsive-picture";
import { IconHere, IconEnvelope, IconSpeechbubble } from "./../SVGSprite/SVGSprite";
import ideasTeamLg from "./ideas-team-lg.jpg";
import ideasTeamMd from "./ideas-team-md.jpg";
import ideasTeamSm from "./ideas-team-sm.jpg";
import "./Contact.css";


export const Content = () => {
  return (
    <div className="contact">
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
              Axel Springer Ideas Engineering was founded in 2013 as an in-house Incubator for the Axel Springer Group.
              Our early years were characterized by rapid growth and a continually evolving organizational structure.
              While one part of the team focused on founding Start-ups, the other part focused on developing software services for various Axel Springer companies.
              After only two years more than 10 of our original ideas grew into individual products or companies such as Celepedia, The Iconist, and Upday.
              Such success led to a realignment of our vision, and we decided to focus on our core DNA: Ideas and Engineering. 
              Doing so allowed us to do what we do best: develop software and products.
            </p>
            <p className="contact__txt-intro">
                Since then the organization has matured rapidly.
                We’ve gone on to develop a digital payment platform that enabled BILD.de and WELT.de to step into the world of paid content.
                Millions of payments transactions for digital content have been handled by our platform ever since.
                In parallel, we’ve developed numerous software solutions and services for digital content. 
                We have gone on to master the art of automated metadata enrichment for videos and pictures. 
                Such specialized skills have allowed us to offer products like Newsfinder; a personalized real-time news overview catered specifically for our journalist colleagues within the Axel Springer group.
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