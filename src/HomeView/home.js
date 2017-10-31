import React from "react";

import "./home.css"

const Home = () => {
    return (
        <div className="l-home">
            <div className="slide slide__oneliner">
                <div className="oneliner-text">We are coding<br/>the future of media</div>
            </div>

            <div id="services" className="slide slide__slogan">
                <div className="slogan-text">
                    We are a studio of developers, designers and product
                    people. We focus on building software products for media.
                    We create tons of code, prototype in fast iterations and
                    design outstanding products people can't help but love.<br/>
                    Trust us, we are engineers.
                </div>
            </div>

            <div id="portfolio" className="slide slide__products">
                <div className="product-box">
                    <div className="product-title">Newsfinder</div>
                    <div className="product-image-wrapper">
                        <div className="product-text">
                            <div className="product-text__inner">
                                Axel Springer has more than 15.000
                                editors across the globe producing an
                                enormous stream of content ranging
                                from traditional newspapers and
                                advertorials to blos and ditial video
                                platforms. The Content Exchange
                                Platform enables the sharing of
                                content within the Axel Springer group.
                            </div>
                        </div>
                        <img className="product-image" alt="Grafik Newsfinder" src={require('./images/ideas_identity_website_grafik_newsfinder.png')}/>
                    </div>
                </div>
                <div className="product-box">
                    <div className="product-title">Single Sign-on</div>
                    <div className="product-image-wrapper">
                        <div className="product-text">
                            <div className="product-text__inner">
                                Axel Springer has more than 15.000
                                editors across the globe producing an
                                enormous stream of content ranging
                                from traditional newspapers and
                                advertorials to blos and ditial video
                                platforms. The Content Exchange
                                Platform enables the sharing of
                                content within the Axel Springer group.
                            </div>
                        </div>
                        <img className="product-image" alt="Grafik SSO" src={require('./images/ideas_identity_website_grafik_sso.png')}/>
                    </div>
                </div>
                <div className="product-box">
                    <div className="product-title">Content exchange platform</div>
                    <div className="product-image-wrapper">
                        <div className="product-text">
                            <div className="product-text__inner">
                                Axel Springer has more than 15.000
                                editors across the globe producing an
                                enormous stream of content ranging
                                from traditional newspapers and
                                advertorials to blos and ditial video
                                platforms. The Content Exchange
                                Platform enables the sharing of
                                content within the Axel Springer group.
                            </div>
                        </div>
                        <img className="product-image" alt="Grafik CEP" src={require('./images/ideas_identity_website_grafik_cep.png')}/>
                    </div>
                </div>
                <div className="product-box">
                    <div className="product-title">premium content platform</div>
                    <div className="product-image-wrapper">
                        <div className="product-text">
                            <div className="product-text__inner">
                                Axel Springer has more than 15.000
                                editors across the globe producing an
                                enormous stream of content ranging
                                from traditional newspapers and
                                advertorials to blos and ditial video
                                platforms. The Content Exchange
                                Platform enables the sharing of
                                content within the Axel Springer group.
                            </div>
                        </div>
                        <img className="product-image" alt="Grafik PCP" src={require('./images/ideas_identity_website_grafik_pcp.png')}/>
                    </div>

                </div>
            </div>
        </div>
    )
};


export default Home;