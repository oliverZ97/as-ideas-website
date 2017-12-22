import React from "react";

import "./../../node_modules/gridlex/dist/gridlex.min.css";
import "./home.css";

const Culture = () => {
    return (
        <div id="culture" className="slide slide--culture">
            <div className="slide-content">
                <div className="grid">
                    <div className="col-5_sm-12" data-push-left="off-2_sm-0" data-push-right="off-5_sm-0">
                        <h2 className="slide__section-intro">
                            Our background
                        </h2>

                        <p className="slide__text">
                    Axel Springer Ideas Engineering was founded in 2013 as an in-house Incubator for the Axel Springer Group. Our early years were characterized by rapid growth and a continually evolving organizational structure. While one part of the team focused on founding Start-ups, the other part focused on developing software services for various Axel Springer companies. After only two years more than 10 of our original ideas grew into individual products or companies such as Celepedia, The Iconist, and Upday. Such success led to a realignment of our vision, and we decided to focus on our core DNA: Ideas and Engineering. Doing so allowed us to do what we do best: develop software and digital products.
                        </p>
                    </div>

                    <div className="col-6_sm-12" data-push-left="off-6_sm-0">
                        <div className="image-foo">
                            <img className="culture-image" alt="our culture we are in space" src={require('./images/ideas_img_space.jpg')}/>
                        </div>
                    </div>

                    <div className="col-3_sm-12" data-push-right="off-9_sm-0">
                        <div className="image-foo shift-up-100">
                            <img className="culture-image" alt="our culture android agassi" src={require('./images/ideas_img_agassi.jpg')}/>
                        </div>
                    </div>

                    <div className="col-5_sm-12 shift-up-200" data-push-left="off-5_sm-0">
                        <h2 className="slide__section-intro">
                            Today
                        </h2>

                        <p className="slide__text">
                            Since then the organization has matured rapidly. We went on and developed a digital payment platform that enabled BILD.de and WELT.de to step into the world of paid journalism as a first mover in Europe. Millions of payment transactions for digital content have been handled by our platform since then. Meanwhile, we’ve developed several software solutions and services around digital content. We mastered the art of automated metadata enrichment for videos and pictures. Such specialized skills allowed us to offer products like the Newsfinder; a personalized real-time news scanner specifically crafted for our journalist colleagues in the Axel Springer group. 
                        </p>
                        <h2 className="slide__section-intro">
                            Tomorrow
                        </h2>

                        <p className="slide__text">
                           Our newest baby is our democratic innovation process, which allows us to fulfill two important objectives: Firstly, Deep-diving into the most recent technology phenomenons like AI and Blockchain for a better understanding of the exponentially evolving markets and secondly, creating an economical testing playground for digital product increments of real business challenges from the Axel Springer family and beyond. All this is culturally fueled by our lateral leadership principles and constantly evolving, democratic company processes with one true goal:
                        </p>

                    </div>

                    <div id="work-with-us" className="col-10_sm-12" data-push-left="off-2_sm-0">
                        <p className="slide__section-hero">
                            We turn your ideas into great products. Get in touch.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Culture;