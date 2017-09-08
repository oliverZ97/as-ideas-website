import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";


const MainNav = () => (
  <ul className="main-nav">
    <li className="main-nav__logo">
      Axel Springer / Ideas Engineering
    </li>
    <li className="main-nav__item main-nav__item__active">
      <Link className="main-nav__item-link" to="#">People</Link>
    </li>
    <li className="main-nav__item">
    <Link className="main-nav__item-link" to="/contact">Contact</Link>
    </li>
  </ul>
);


const HeroText = () => {
  return (
    <div className="l-container">
      <div className="grid">
        <div className="col-8">
          <h1 className="hero-heading has-cursor">
            We drive Axel Springer's digitalization 
          </h1>
          <p className="hero-intro">
            And we can be cool for you too
          </p>
        </div>
      </div>
    </div>
  );
};


const Hero = () => {
  return (
    <div className="hero">
      <MainNav />
      <HeroText />
    </div>
  );
};


const IdeasIntro = () => (
  <div className="l-container">
    <div className="grid">
      <div className="col-3" data-push-left="off-5_xs-0">
        Nice
      </div>
      <div className="col-3">
        Nice
      </div>
    </div>
  </div>
);


const ProductNewsfinder = () => (
  <div className="l-container">
    <div className="grid">
      <div className="col-4">
        <h2 className="h1 has-cursor has-cursor--400">
          Newsfinder
        </h2>
        <p className="hx-intro">
          We empower editors to react faster and better to the current issues.
        </p>
      </div>
      <div className="col-5" data-push-left="off-1_xs-0">
        <p className="product-intro">
          Editors can create their own dashboard for a thematic search through their own or third-party publications. Google Trends, an article preview and the translation of all articles into English at the push of a button round off our service for the editor of today.
        </p>
      </div>
    </div>
  </div>
);


const ProductCEP = () => (
  <div className="l-container">
    <div className="grid">
      <div className="col-4">
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
      <div className="col-4">
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
      <div className="col-4">
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



const Products = () => (
  <div>
    <ProductNewsfinder />
    <ProductCEP />
    <ProductSSO />
    <ProductPayment />
  </div>
);


const Home = () => (
  <div>
    <Hero />
    <Products />
  </div>
);


export default Home;