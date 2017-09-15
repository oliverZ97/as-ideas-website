import React from "react";
import { Picture } from "react-responsive-picture";
import { IconHere, IconEnvelope, IconSpeechbubble } from "./../SVGSprite/SVGSprite";
import ideasTeamLg from "./ideas-team-lg.jpg";
import ideasTeamMd from "./ideas-team-md.jpg";
import ideasTeamSm from "./ideas-team-sm.jpg";
import "./Contact.css";


export const Content = () => {
  return (
    <div>
      <div className="l-container l-container--no-gutter">
        <div className="grid-noGutter-noBottom">
          <div className="col-12">
            <div className="contact__image-container">
              <Picture
                sources = {[
                  {
                    srcSet: `${ideasTeamSm} 1x`,
                    media: "(max-width: 35.5em)"
                  },
                  {
                    srcSet: `${ideasTeamMd} 1x`,
                    media: "(max-width: 48em)"
                  },
                  {
                    srcSet: `${ideasTeamLg} 1x`
                  }
                ]}
                className="contact__image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="l-container">
        <div className="grid-middle-spaceAround-noGutter">
          <div className="col-3_sm-12 contact__text-container">
            <IconEnvelope className="contact__icon"/>
            <a 
              href="mailto:hello@asideas.de" 
              className="contact__text"
            >
                hello@asideas.de
            </a>
          </div>
          <div className="col-3_sm-12 contact__text-container">
            <IconHere className="contact__icon"/>
            <a 
              href="https://goo.gl/maps/pK8i7NwuKX62"
              className="contact__text"
              target="_blank"
              rel="noopener noreferrer"
            >
              We are here.
            </a>
          </div>
          <div className="col-3_sm-12 contact__text-container">
            <IconSpeechbubble className="contact__icon"/>
            <span className="contact__text">+49-30-259178100</span>
          </div>
        </div>
      </div>
      <div className="l-container">
        <div className="grid-center">
          <div className="col-5_sm-12">
            <p className="contact__text contact__text--sm">
              Axel Springer Ideas Engineering GmbH
            </p>
            <p className="contact__text contact__text--sm">
              ein Unternehmen der <span className="no-wrap">Axel Springer SE</span><br />
              Axel-Springer-Straße 65<br />
              10888 Berlin
            </p>
          </div>
          <div className="col-5_sm-12">
            <p className="contact__text contact__text--sm">
              Geschäftsführer<br />
              Samir Fadlallah, <span className="no-wrap">Michael Alber</span>
            </p>
            <p className="contact__text contact__text--sm">
              Handelsregistereintrag<br />
              Amtsgericht Charlottenburg, <span className="no-wrap">Berlin HRB 138466 B</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};