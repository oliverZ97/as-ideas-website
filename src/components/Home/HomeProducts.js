import React from "react";
import { Picture } from "react-responsive-picture";
import { IconGlobe, IconTwitter, IconInstagram, IconNewspaper, IconPhoto } from "./../SVGSprite/SVGSprite";
import newsfinder1x from "./newsfinder-1x.png";
import newsfinder2x from "./newsfinder-2x.png";
import newsfinderMobile1x from "./newsfinder-mobile-1x.png";
import newsfinderMobile2x from "./newsfinder-mobile-2x.png";
import "./Home.css";


const ProductNewsfinder = () => (
  <div className="l-fav-element">
    <div className="l-container">
      <div className="grid">
        <div className="col-4_xs-12" data-push-left="off-1_xs-0">
          <h2 className="h1">
            Newsfinder
          </h2>
          <p className="hx-intro">
            Personalised real-time overview of your topics
          </p>
          <p className="product-intro">
            The Newsfinder allows Axel Springer employees to create dashboards with real-time overviews for hand-picked topics using keywords or hashtags. Among the wide range of sources are third-party publications, social media channels, and news by press agencies. Automated translations make it even possible to easily review foreign publications.
          </p>
          <p className="fav-element__icon-row">
            <IconTwitter className="fav-element__icon" />
            <IconInstagram className="fav-element__icon" />
            <IconPhoto className="fav-element__icon" />
            <IconNewspaper className="fav-element__icon" />
            <IconGlobe className="fav-element__icon" />
          </p>
        </div>
      </div>
    </div>
    <div className="grid-noGutter-noBottom grid-posAbsolute-bottom">
      <div className="col-6_xs-12" data-push-left="off-6_xs-0">
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
          Get in contact with your colleagues worldwide and exchange content using our platform.
        </p>
        <p className="product-intro">
          Axel Springer has more than 15.000 editors across the globe. We have an enormous content stream varying from classic newspapers and advertorials till blogs and digital video platforms. The Content Exchange Plattform enables sharing content within the Axel Springer family.
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
          We offer all services around registration and login for all customers in the Axel Springer Family.
        </p>
        <p className="product-intro">
          We are the full-service operator for Axel Springer's Single Sign-On service. 
          We successfully manage approximately half a million active users, of which approximately 100,000 are active on a daily basis. 
          Our service securely facilitates account and profile management as well as newsletter subscriptions.
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
          Over the past years, Axel Springer Ideas has operated a payment platform that is fully integrated with the financial infrastructure at Axel Springer. Our Premium Content Platform covers the entire process of digital payment from offering till billing and credit management.
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