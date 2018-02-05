import React from 'react';


const heroText = "We are a studio of developers, designers and product people. We focus on building software for the media industry. We combine technology and agile thinking to create great products people can’t help but love.";


const Hero = () => (
    <div
        id="hero"
        className="flex items-center justify-center min-h-screen-90 p-24 sm:min-h-0 sm:p-12 sm:pt-24"
    >
        <p className="max-w-lg text-48 text-center sm:text-24 sm:leading-tight md:max-w-lg md:text-36 md:leading-tight">
            {heroText}
        </p>
    </div>
);


export default Hero;