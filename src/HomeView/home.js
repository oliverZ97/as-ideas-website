import React from "react";

import "./home.css"

const Home = () => {
    return (
        <div className="l-home">
            <div id="services" className="slide slide__slogan">
                <div className="slide-content">
                    <div className="slogan-text">
                        We are Ideas, a studio of developers, designers and
                        product owners. We focus on building software for media.
                        We create tons of code, prototype in fast iterations, and
                        design outstanding products people can’t help but love.
                        Trust us, we are engineers.
                    </div>
                </div>

            </div>

            <div id="how-can-we-help-you" className="slide slide__how-can-we-help-you">
                <div className="slide-content">

                    <div className="service-header">
                    <h1>How can we help you?</h1>
                    </div>
                        <div className="service-box">
                        <h2>SOFTWARE AS A SERVICE</h2>
                        <p>You need a big software solution? We are willing to be your partner in development and operating your customised software solution.</p>
                    </div>

                    <div className="service-box">
                        <h2>WORKSHOPS</h2>
                        <p>Just wanna test the waters with a prototype before making the investment? We offer the perfect toolset for creating prototypes that fary your ideas.</p>
                    </div>

                    <div className="service-box">
                        <h2>PILOT PROJECTS</h2>
                        <p>Do you have tons of questions, but not sure where to turn? We offer technology consultations for companies in need of advice.</p>
                    </div>

                    <div className="service-box">
                        <h2>TECHNOLOGY ADVISORS</h2>
                        <p>You need a big software solution? We are willing to be your partner in development and operating your customised software solution.</p>
                    </div>
                </div>
            </div>

            <div id="portfolio" className="slide slide__portfolio">
                <div className="slide-content">
                    <div className="product-box">
                        <div className="product-title">Newsfinder</div>
                        <div className="product-image-wrapper">
                            <div className="product-text">
                                <div className="product-text__inner">
                                    The Newsfinder app allows Axel Springer
                                    employees to create real-time overviews
                                    for hand-picked topics using keywords
                                    or hashtags. Among the wide range of
                                    sources are third-party publications,
                                    social media channels, and news from
                                    press agencies. Automated translations
                                    make it possible to review foreign
                                    publications easily.
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
                                    We are the full-service operator for
                                    Axel Springer's Single Sign-On service.
                                    We successfully manage half a million
                                    active users, of which 100,000 are active
                                    on a daily basis. Our service securely
                                    facilitates the complete account and
                                    profile management as well as newsletter
                                    subscriptions.
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
                                    For seven years Axel Springer Ideas
                                    is operating and developing Axel Springer's
                                    payment platform that is fully integrated
                                    with the corporate financial infrastructure.
                                    Our Premium Content Platform covers the
                                    entire process of digital payment from
                                    offering till billing and credit management.
                                </div>
                            </div>
                            <img className="product-image" alt="Grafik PCP" src={require('./images/ideas_identity_website_grafik_pcp.png')}/>
                        </div>

                    </div>
                </div>
            </div>

            <div className="slide slide__oneliner">
                <div className="slide-content">
                    <div className="oneliner-text">
                        SOFTWARE ENGINEER AT IDEAS:
                        WE DEMAND A HIGH QUALITY
                        STANDARD OF OURSELVES AND ARE
                        ABLE TO DEFEND THAT FOR OUR
                        CLIENTS. THE TEAM IS YOUNG AND
                        ALWAYS OPEN TO NEW IDEAS.
                    </div>
                </div>
            </div>

            <div id="culture" className="slide slide__culture">
                <div className="slide-content">
                    Our background

                    Axel Springer Ideas Engineering was founded in
                    2013 as an in-house Incubator for the Axel
                    Springer Group. Our early years were
                    characterized by rapid growth and a continually
                    evolving organizational structure. While one part
                    of the team focused on founding Start-ups, the
                    other part focused on developing software
                    services for various Axel Springer companies.
                    After only two years more than 10 of our original
                    ideas grew into individual products or companies
                    such as Celepedia, The Iconist, and Upday. Such
                    success led to a realignment of our vision, and
                    we decided to focus on our core DNA: Ideas and
                    Engineering. Doing so allowed us to do what we
                    do best: develop software and products.

                    OUR PRESENCE
                    Since then the organization has matured rapidly.
                    We’ve gone on to develop a digital payment
                    platform that enabled BILD.de and WELT.de to
                    step into the world of paid content. Millions of
                    payments transactions for digital content have
                    been handled by our platform ever since. In
                    parallel, we’ve developed numerous software
                    solutions and services for digital content. We
                    have gone on to master the art of automated
                    metadata enrichment for videos and pictures.
                    Such specialized skills have allowed us to offer
                    products like Newsfinder; a personalized realtime
                    news overview catered specifically for our
                    journalist colleagues within the Axel Springer
                    group.


                    Get in touch with us.
                    We turn your ideas into great products.
                </div>
            </div>
        </div>
    )
};


export default Home;