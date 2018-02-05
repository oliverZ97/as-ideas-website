import React from 'react';
import Loadable from 'react-loadable';
import LazyLoad from 'react-lazyload';
import {Link} from 'react-scroll';
import {googleMapsURL} from "./MapComponent/googlemaps-config";


/**
 * Contact Text Data
 */
const contact = {
    mission: "We turn your ideas into great products.",
    ctaText: "Get in touch",
};


/**
 * Define Styles for Maps Container Element
 *
 */
const containerElementStyle = {
    width: "calc(100% + 80px)",
    height: "450px",
};


/**
 * Utility Components
 *
 */
const ServiceHeading = ({children}) => (
    <h2 className="mb-4 text-12 font-bold text-white uppercase leading-normal tracking-wide opacity-75">
        {children}
    </h2>
);


const ServiceText = ({children}) => (
    <p className="text-20 text-white leading-normal md:leading-tight">
        {children}
    </p>
)


const ServiceItemGrid = ({children}) => (
    <div className="max-w-2xl w-full flex flex-wrap text-center justify-center lg:-mx-16 xl:-mx-16">
        {children}
    </div>
)


const ServiceItem = ({children}) => (
    <div className="w-1/2 my-4 px-16 sm:w-full sm:mb-8 sm:px-0 md:px-6">
        {children}
    </div>
)


/**
 * Load MapComponent as a dynamic import with code splitting, see:
 * https://github.com/thejameskyle/react-loadable
 */
const LoadableMap = Loadable({
    loader: () => import('./MapComponent/MapComponent'),
    loading() {
        return <div>Loading...</div>
    },
});


/**
 * Main Contact Component
 *
 */
const Contact = () => (
    <div>
        <div className="flex items-center justify-center min-h-screen-90 p-24 bg-grey-10 text-white sm:min-h-0 sm:p-10">
            <div className="max-w-lg">
                <p className="my-32 text-80 text-center sm:text-24 sm:leading-tight md:max-w-lg md:text-36 md:leading-tight">
                    {contact.mission}
                </p>
                <Link
                    to="contact"
                    className="table mx-auto my-8 px-12 py-4 rounded font-normal text-white no-underline leading-none bg-darkblue cursor-pointer hover:bg-darkblue-7"
                    smooth={true}
                    duration={350}
                >
                    {contact.ctaText}
                </Link>
            </div>
        </div>

        <div className="flex items-center justify-center min-h-screen-90 p-24 sm:min-h-0 sm:p-10">
            <div className="max-w-lg">
                <p className="my-32 text-80 text-center sm:text-24 sm:leading-tight md:max-w-lg md:text-36 md:leading-tight">
                    We are hiring.
                </p>
                <a
                    href='https://career.axelspringer.com/jobangebote/#"ideas engineering"'
                    className="table mx-auto my-4 px-12 py-4 rounded font-normal text-white no-underline leading-none bg-darkblue cursor-pointer hover:bg-darkblue-7"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    See our job offers
                </a>
                <Link
                    to="contact"
                    className="table mx-auto my-8 text-14 text-center no-underline border-b border-black cursor-pointer"
                    smooth={true}
                    duration={350}
                >
                    {contact.ctaText}
                </Link>
            </div>
        </div>

        <div
            id="contact"
            className="flex flex-col items-center justify-center min-h-screen-90 p-24 bg-grey-10 text-white sm:min-h-0 sm:p-10"
        >
            <div className="flex flex-col items-center w-full max-w-2xl mb-16">
                <h1 className="max-w-lg mx-auto mb-24 text-24 font-normal text-white text-center uppercase tracking-wide sm:mb-10 sm:text-20 md:text-20">
                    Get in touch
                </h1>
                <ServiceItemGrid>
                    <ServiceItem>
                        <ServiceHeading>
                            Find us here
                        </ServiceHeading>
                        <ServiceText>
                            Axel Springer Ideas Engineering GmbH<br/>
                            <span className="text-16">Axel-Springer-Straße 65 /
                            10888 Berlin</span>
                        </ServiceText>
                    </ServiceItem>
                    <ServiceItem>
                        <ServiceHeading>or say hello</ServiceHeading>
                        <ServiceText>
                            <span className="tracking-wide">hello@asideas.de <br/></span>
                            <span className="text-16 tracking-wide">+49-30-259178100</span>
                        </ServiceText>
                    </ServiceItem>
                </ServiceItemGrid>
            </div>
            <LazyLoad
                height={450}
                offset={400}
            >
                <LoadableMap
                    isMarkerShown
                    googleMapURL={googleMapsURL}
                    loadingElement={<div style={{height: `100%`}}/>}
                    containerElement={<div style={containerElementStyle}/>}
                    mapElement={<div style={{height: `100%`}}/>}
                />
            </LazyLoad>
        </div>
    </div>
);


export default Contact;