import React from "react";
import "./Home.css";
import newsfinderImg from "./newsfinder-2x.png";


const ProductNewsfinder = () => (
  <div className="relative fill-dark--9">
    <div className="grid-noGutter-noBottom grid-posAbsolute_bottom">
      <div className="col-6" data-push-left="off-6">
        <div className="overflow-hidden has-box-shadow">
          <img 
            src={newsfinderImg} 
            width="1600" 
            height="620" 
            alt="Newsfinder Productshot" 
          />
        </div>
      </div>
    </div>
    <div className="l-container padding-h-110">
      <div className="grid">
        <div className="col-4" data-push-left="off-1_xs-0">
          <h2 className="h1 has-cursor has-cursor--400">
            Newsfinder
          </h2>
          <p className="hx-intro">
            We empower editors to react faster and better to the current issues.
          </p>
          <p className="product-intro">
            Editors can create their own dashboard for a thematic search through their own or third-party publications. Google Trends, an article preview and the translation of all articles into English at the push of a button round off our service for the editor of today.
          </p>
        </div>
      </div>
    </div>
  </div>
);


const ProductCEP = () => (
  <div className="l-container">
    <div className="grid">
      <div className="col-4" data-push-left="off-1_xs-0">
        <p className="product-intro">
          This way you always stay ahead of the competition and profit from the uniquely Axel Springer content. This allows you to quickly and clearly view current content.
        </p>
      </div>
      <div className="col-5" data-push-left="off-1_xs-0">
        <h2 className="h1 has-cursor has-cursor--400">
          Content Exchange Platform 
        </h2>
        <p className="hx-intro">
          Get in contact with your colleagues worldwide and exchange content using our platform.
        </p>
      </div>
    </div>
  </div>
);


const ProductSSO = () => (
  <div className="l-container">
    <div className="grid">
      <div className="col-4" data-push-left="off-1_xs-0">
        <h2 className="h1 has-cursor has-cursor--400">
          Single Sign-on
        </h2>
        <p className="hx-intro">
          We offer all services around registration and login for all customers in the Axel Springer Family.
        </p>
      </div>
      <div className="col-5" data-push-left="off-1_xs-0">
        <p className="product-intro">
          This includes newsletter management and automatic login and logout for all linked Axel Springer services.
        </p>
      </div>
    </div>
  </div>
);


const ProductPayment = () => (
  <div className="l-container">
    <div className="grid">
      <div className="col-4" data-push-left="off-1_xs-0">
        <p className="product-intro">
          Payment and Billing
        </p>
      </div>
      <div className="col-5" data-push-left="off-1_xs-0">
        <h2 className="h1 has-cursor has-cursor--400">
          We offer all services for payment and billing for all customers in the Axel Springer Family. 
        </h2>
        <p className="hx-intro">
          Get in contact with your colleagues worldwide and exchange content using our platform.
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