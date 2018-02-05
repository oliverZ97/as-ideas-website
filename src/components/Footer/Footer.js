import React from 'react';
import Loadable from 'react-loadable';
import LazyLoad from 'react-lazyload';
import {googleMapsURL} from "./MapComponent/googlemaps-config";


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

const Footer = () => (
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
);


export default Footer;