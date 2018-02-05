import React from "react";
import LazyLoad from 'react-lazyload';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

import imgTeam from "./../../media/images/img-a-team.jpg";
import imgBoard from "./../../media/images/img-a-board.jpg";
import imgFailbetter from "./../../media/images/img-b-failbetter.jpg";
import imgIOStuff from "./../../media/images/img-b-iostuff.jpg";
import imgTrooper from "./../../media/images/img-b-trooper.jpg";


/**
 * Data for this section
 */
const ourStory = {
    background: {
        title: "Background", 
        text: "Axel Springer Ideas Engineering was founded in 2013 as an in-house Incubator for the Axel Springer Group. Our early years were characterized by rapid growth and a continually evolving organizational structure. While one part of the team focused on founding Start-ups, the other part focused on developing software services for various Axel Springer companies. After only two years more than 10 of our original ideas grew into individual products or companies such as Celepedia, The Iconist, and Upday. Such success led to a realignment of our vision, and we decided to focus on our core DNA: Ideas and Engineering. Doing so allowed us to do what we do best: develop software and digital products."
    },
    today: {
        title: "Today", 
        text: "Since then the organization has matured rapidly. We went on and developed a digital payment platform that enabled BILD.de and WELT.de to step into the world of paid journalism as a first mover in Europe. Millions of payment transactions for digital content have been handled by our platform since then. Meanwhile, we’ve developed several software solutions and services around digital content. We mastered the art of automated metadata enrichment for videos and pictures. Such specialized skills allowed us to offer products like the Newsfinder; a personalized real-time news scanner specifically crafted for our journalist colleagues in the Axel Springer group.",
    },
    tomorrow: {
        title: "Tomorrow",
        text: "Our newest baby is our democratic innovation process, which allows us to fulfill two important objectives: Firstly, Deep-diving into the most recent technology phenomenons like AI and Blockchain for a better understanding of the exponentially evolving markets and secondly, creating an economical testing playground for digital product increments of real business challenges from the Axel Springer family and beyond. All this is culturally fueled by our lateral leadership principles and constantly evolving, democratic company processes with one true goal: We turn your ideas into great products."
    }
};


const Kicker = ({ children }) => (
    <h2 className="mb-4 text-12 font-bold uppercase tracking-wide opacity-50">
        {children}
    </h2>
);


const Text = ({ children }) => (
    <p className="text-20 leading-normal">
        {children}
    </p>
);


const ParallaxImageFrame = () => {
    // Styles to be added to Parallax outer container
    // See docs: https://github.com/jscottsmith/react-scroll-parallax
    const outerStyle = {
        position: "absolute",
        zIndex:  10,
        width:  "100%",
        height: "100%",
    };

    // Styles to be added to Parallax inner container
    // See docs: https://github.com/jscottsmith/react-scroll-parallax
    const innerStyle = {
        position: "relative",
        width:  "100%",
        height: "100%",
        left: "2rem",
        top:  "-2rem"
    };

    return (
        <Parallax
            offsetXMax={ 12}
            offsetXMin={-12}
            offsetYMax={ 18}
            offsetYMin={-18}
            styleOuter={outerStyle}
            styleInner={innerStyle}
        >
            <div className="w-full h-full border-2 border-darkblue" />
        </Parallax>
    )
}


/**
 * Main Component
 */
const OurStory = () => (
    <ParallaxProvider>
    <div className="flex flex-col justify-center items-center overflow-hidden min-h-screen-90 px-4 py-16 sm:min-h-0 sm:px-4 md:px-6">
        <h1 className="mx-auto mb-24 text-24 font-normal text-center uppercase tracking-wide sm:mb-10 sm:text-20 md:text-20">
            Our Story
        </h1>
        <div className="max-w-2xl">
            <div className="flex flex-wrap self-start sm:mb-8">
                {/* 1st row */}
                <div className="mx-1/3 my-8 px-4 md:ml-1/3 md:mr-0 sm:mx-0">
                    <Kicker>
                        {ourStory.background.title}   
                    </Kicker>
                    <Text>
                        {ourStory.background.text}
                    </Text>
                </div>
                
                {/* 2nd row */}
                <div className="relative w-2/3 my-8 sm:w-full md:w-4/5">
                    <ParallaxImageFrame />
                    <LazyLoad 
                        height={450}
                        offset={200}
                    >
                        <img 
                            src={imgTeam}
                            className="block filter-contrast-8/10"
                            alt="Teams are the center of our work"
                        />
                    </LazyLoad>
                </div>

                {/* 3rd row */}
                <div className="mx-1/3 my-8 px-4 md:ml-1/3 md:mr-0 sm:mx-0">
                    <Kicker>
                        {ourStory.today.title}   
                    </Kicker>
                    <Text>
                        {ourStory.today.text}
                    </Text>
                </div>

                {/* 4th row */}
                <div className="relative w-2/3 ml-1/3 my-8 sm:w-full sm:ml-0 md:w-4/5 md:ml-0">
                    <ParallaxImageFrame />
                    <LazyLoad 
                        height={450}
                        offset={200}
                    >
                        <img
                            src={imgBoard}
                            className="block filter-contrast-8/10"
                            alt="We have established a team wide innovation process"
                        />
                    </LazyLoad>
                </div>

                {/* 5th row */}
                <div className="mx-1/3 my-8 px-4 md:ml-1/3 md:mr-0 sm:mx-0">
                    <Kicker>
                        {ourStory.tomorrow.title}
                    </Kicker>
                    <Text>
                        {ourStory.tomorrow.text}
                    </Text>
                </div>

                {/* 6th row */}
                <div className="relative w-1/3 my-8 px-2 sm:w-2/3 mx-auto">
                    <ParallaxImageFrame />
                    <LazyLoad 
                        height={300}
                        offset={200}
                    >
                        <img 
                            src={imgTrooper}
                            className="block filter-contrast-8/10"
                            alt="Lego blocks and figures at the office"
                        />
                    </LazyLoad>
                </div>
                <div className="w-1/3 my-8 px-2 sm:w-2/3 mx-auto">
                    <LazyLoad 
                        height={300}
                        offset={200}
                    >
                        <img 
                            src={imgIOStuff}
                            className="block filter-contrast-8/10"
                            alt="Analog prototyping materials"
                        />
                    </LazyLoad>
                </div>
                <div className="relative w-1/3 my-8 px-2 sm:w-2/3 mx-auto">
                    <ParallaxImageFrame />
                    <LazyLoad 
                        height={300}
                        offset={200}
                    >
                        <img 
                            src={imgFailbetter}
                            className="block filter-contrast-8/10"
                            alt="Prototyping modes for failing fast and better"
                        />
                    </LazyLoad>
                </div>
            </div>
        </div>
    </div>
    </ParallaxProvider>
);


export default OurStory;