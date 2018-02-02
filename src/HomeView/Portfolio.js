import React from "react";

import "./../../node_modules/gridlex/dist/gridlex.min.css";

const data = [
    {
        title: "Newsfinder",
        text: "The Newsfinder app allows Axel Springer employees to create real-time overviews for hand-picked topics using keywords or hashtags. Among the wide range of sources are third-party publications, social media channels, and news from press agencies. Automated translations make it possible to review foreign publications easily. "
    },
    {
        title: "Content Exchange",
        text: "Axel Springer has more than 15.000 editors across the globe producing an enormous stream of content ranging from traditional newspapers and advertorials to blogs and digital video platforms. The Content Exchange Platform enables the sharing of content within the Axel Springer group."
    },
    {
        title: "Single-Sign On",
        text: "We are the full-service operator for Axel Springer's Single Sign-On service. We successfully manage half a million active users, of which 100,000 are active on a daily basis. Our service securely facilitates the complete account and profile management as well as newsletter subscriptions."
    },
    {
        title: "Premium Content Platform",
        text: "For four years Axel Springer Ideas is operating and developing Axel Springer's payment platform that is fully integrated with the corporate financial infrastructure. Our Premium Content Platform covers the entire process of digital payment from offering till billing and credit management."
    },
];


const ProductItem = ({type, data}) => {
    const BackgroundImage = ({type}) => {
        if (type === "i") {
            return (
                <img className="product-image" alt="Grafik Newsfinder" src={require('./images/ideas_the_i.svg')} />
            );
        }
        if (type === "o") {
            return (
                <img className="product-image" alt="Grafik Newsfinder" src={require('./images/ideas_the_o.svg')}/>
            );
        }
        return null;
    };

    return (
        <div className="product-box">
            <div className="product-title">{data.title}</div>
            <div className="product-image-wrapper">
                <div className="product-text">
                    <div className="product-text__inner">
                        {data.text}
                    </div>
                </div>
                <BackgroundImage type={type} />
            </div>
        </div>
    );
};

const Portfolio = () => {
    return (
        <div id="portfolio" className="slide slide__portfolio">
            <div className="slide-content grid-spaceAround-noGutter">
                <div className="col-5_sm-12">
                    <ProductItem type="i" data={data[0]} />
                </div>
                <div className="col-5_sm-12">
                    <ProductItem type="o" data={data[1]} />
                </div>
                <div className="col-5_sm-12">
                    <ProductItem type="o" data={data[2]} />
                </div>
                <div className="col-5_sm-12">
                    <ProductItem type="i" data={data[3]} />
                </div>
            </div>
        </div>
    );
};


export default Portfolio;