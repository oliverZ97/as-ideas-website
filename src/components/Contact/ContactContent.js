import React from "react";
import { Picture } from "react-responsive-picture";
import ideasTeamLg from "./ideas-team-lg.jpg";
import ideasTeamMd from "./ideas-team-md.jpg";
import ideasTeamSm from "./ideas-team-sm.jpg";
import "./Contact.css";


export const Content = () => {
  return (
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
  );
};