import React from 'react';
import {Link} from 'react-scroll';


/**
 * Contact Text Data
 */
const contact = {
    mission: "We turn your ideas into great products.",
    ctaText: "Get in touch",
};

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
    </div>
);


export default Contact;