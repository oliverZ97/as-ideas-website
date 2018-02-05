import React from "react";
import { IdeasLogoPartI as IdeasLogoImgI, IdeasLogoPartO as IdeasLogoImgO } from './../Shared/Svg/Svg';
import "./Portfolio.scss";


const PortfolioText = {
    newsfinder: {
        title: "Newsfinder",
        text: "The Newsfinder app allows Axel Springer employees to create real-time overviews for hand-picked topics using keywords or hashtags. Among the wide range of sources are third-party publications, social media channels, and news from press agencies. Automated translations make it possible to review foreign publications easily."
    },
    contentExchange: {
        title: "Content Exchange Platform",
        text: "Axel Springer has more than 15.000 editors across the globe producing an enormous stream of content ranging from traditional newspapers and advertorials to blogs and digital video platforms. The Content Exchange Platform enables the sharing of content within the Axel Springer group."
    },
    singleSignOn: {
        title: "Single-Sign On",
        text: "We are the full-service operator for Axel Springer's Single Sign-On service. We successfully manage half a million active users, of which 100,000 are active on a daily basis. Our service securely facilitates the complete account and profile management as well as newsletter subscriptions."
    },
    premiumContentPlatform: {
        title: "Premium Content Platform",
        text: "For seven years Axel Springer Ideas is operating and developing Axel Springer's payment platform that is fully integrated with the corporate financial infrastructure. Our Premium Content Platform covers the entire process of digital payment from offering till billing and credit management."
    }
};


const IdeasLogoPartI = <IdeasLogoImgI className="portfolio-item__bg w-full h-full" />
const IdeasLogoPartO = <IdeasLogoImgO className="portfolio-item__bg w-full h-full" />


const PortfolioItemRow = ({ children }) => (
    <div className="max-w-2xl flex justify-center w-full -mx-8 my-8 md:flex-wrap md:mx-4 md:my-0 sm:flex-wrap sm:mx-4 sm:my-0">
        {children}
    </div>
);


const PortfolioItem = ({ data, bg, bgColor }) => (
    <div className="portfolio-item overflow-hidden flex flex-col w-1/2 max-w-sm px-8 md:w-full md:max-w-sm md:px-12 md:py-4 sm:w-full sm:max-w-xs sm:px-0 sm:py-4">
        <h1 className="mb-4 font-normal text-20">
            {data.title}
        </h1>
        <div className={`relative cursor-pointer ${bgColor}`}>
            {bg}
            <div className="portfolio-item__text absolute pin flex justify-center items-center">
                <p className="px-16 py-4 text-20 text-white leading-normal md:text-20 md:px-12 sm:px-4 sm:text-14">
                    {data.text}
                </p>
            </div>
        </div>
    </div>
);


const Portfolio = () => (
    <div
        id="portfolio"  
        className="flex flex-col justify-center items-center min-h-screen-90 px-4 py-16 sm:min-h-0 sm:px-4 md:px-6"
    >
        <h1 className="mx-auto mb-24 text-24 font-normal text-center uppercase tracking-wide sm:mb-10 sm:text-20 md:text-20">
            A Selection of our Projects
        </h1>
        <PortfolioItemRow>
            <PortfolioItem data={PortfolioText.newsfinder} bg={IdeasLogoPartI} bgColor="bg-darkblue" />
            <PortfolioItem data={PortfolioText.contentExchange} bg={IdeasLogoPartO} bgColor="bg-grey-10" />
        </PortfolioItemRow>
        <PortfolioItemRow>
            <PortfolioItem data={PortfolioText.singleSignOn} bg={IdeasLogoPartO} bgColor="bg-grey-10" />
            <PortfolioItem data={PortfolioText.premiumContentPlatform} bg={IdeasLogoPartI} bgColor="bg-darkblue" />
        </PortfolioItemRow>
  </div>
);


export default Portfolio;