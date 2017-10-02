import React from "react";
import ReactTooltip from "react-tooltip";
import { Picture } from "react-responsive-picture";
import { IconGlobe, IconTwitter, IconInstagram, IconNewspaper, IconPhoto } from "./../SVGSprite/SVGSprite";
import newsfinder1x from "./newsfinder-1x.png";
import newsfinder2x from "./newsfinder-2x.png";
import newsfinderMobile1x from "./newsfinder-mobile-1x.png";
import newsfinderMobile2x from "./newsfinder-mobile-2x.png";
import "./Home.css";


const ProductNewsfinder = () => (
  <div className="l-fav-element">
    <ReactTooltip 
      className="fav-element__tooltip" 
      event="click" 
      effect="solid" 
    />
    <div className="l-container">
      <div className="grid-noGutter-noBottom">
        <div className="col-4_sm-10_xs-12" data-push-left="off-1_xs-0">
          <h2 className="h1">
            Newsfinder
          </h2>
          <p className="hx-intro">
            A personalized and real-time news overview
          </p>
          <p className="product-intro">
            The Newsfinder app allows Axel Springer employees to create real-time overviews for hand-picked topics using keywords or hashtags.
            Among the wide range of sources are third-party publications, social media channels, and news from press agencies.
            Automated translations make it possible to review foreign publications easily.
          </p>
          <p className="fav-element__icon-row">
            <span>News sources&nbsp;&nbsp;</span>
            <a className="fav-element__link" data-tip="A curated list of Twitter users">
              <IconTwitter className="fav-element__icon" />
            </a>
            <a className="fav-element__link" data-tip="A curated list of Instagram users">
              <IconInstagram className="fav-element__icon" />
            </a>
            <a className="fav-element__link" data-tip="Photo feed of news agencies">
              <IconPhoto className="fav-element__icon" />
            </a>
            <a className="fav-element__link" data-tip="Selected news organizations">
              <IconNewspaper className="fav-element__icon" />
            </a>
            <a className="fav-element__link" data-tip="News agencies">
              <IconGlobe className="fav-element__icon" />
            </a>
          </p>
        </div>
      </div>
    </div>
    <div className="grid-noGutter-noBottom grid-posAbsolute-bottom">
      <div className="col-6_sm-12" data-push-left="off-6_sm-0">
        <div className="fav-element__image-section">
          <Picture
            sources = {[
              {
                srcSet: `${newsfinderMobile1x} 1x, ${newsfinderMobile2x} 2x`,
                media: "(max-width: 35.5em)"
              },
              {
                srcSet: `${newsfinder1x} 1x, ${newsfinder2x} 2x`
              }
            ]}
          />
        </div>
      </div>
    </div>
  </div>
);


const ProductCEP = () => (
  <div className="l-container">
    <div className="grid">
      <div className="col-4_xs-12_md-10" data-push-left="off-1_xs-0">
        <h2 className="h1">
          Content Exchange Platform 
        </h2>
        <p className="hx-intro">
          A worldwide platform to exchange content
        </p>
        <p className="product-intro">
          Axel Springer has more than 15.000 editors across the globe producing an enormous stream of content ranging from traditional newspapers and advertorials to blogs and digital video platforms.
          The Content Exchange Platform enables the sharing of content within the Axel Springer group.
        </p>
      </div>
    </div>
  </div>
);


const ProductSSO = () => (
  <div className="l-container">
    <div className="grid">
      <div className="col-4_xs-12_md-10" data-push-left="off-1_xs-0">
        <h2 className="h1">
          Single Sign-on
        </h2>
        <p className="hx-intro">
          All services for user account management
        </p>
        <p className="product-intro">
         We are the full-service operator for Axel Springer's Single Sign-On service. We successfully manage half a million active users, of which 100,000 are active on a daily basis.
         Our service securely facilitates the complete account and profile management as well as newsletter subscriptions.
        </p>
      </div>
    </div>
  </div>
);


const ProductPayment = () => (
  <div className="l-container">
    <div className="grid">
      <div className="col-4_xs-12_md-10" data-push-left="off-1_xs-0">
        <h2 className="h1">
          Premium Content Platform 
        </h2>
        <p className="hx-intro">
          Payment &amp; billing as a service
        </p>
        <p className="product-intro">
          For seven years Axel Springer Ideas is operating and developing Axel Springer's payment platform that is fully integrated with the corporate financial infrastructure.
          Our Premium Content Platform covers the entire process of digital payment from offering till billing and credit management.
        </p>
      </div>
    </div>
  </div>
);


export const Products = () => (
  <div>
    <ProductNewsfinder />
    <ProductCEP />
    <ProductSSO />
    <ProductPayment />
  </div>
);