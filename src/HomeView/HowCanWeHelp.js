import React from "react";

import "./../../node_modules/gridlex/dist/gridlex.min.css";

const Fragment = React.Fragment;

const data = [
    {
        heading: "Software as a service",
        text: "You need a big software solution? We are willing to be your partner in development and operating your customised software solution."
    },
    {
        heading: "Technology Advisors",
        text: "Do you have tons of questions, but not sure where to turn? We offer technology consultations for companies in need of advice."
    },
    {
        heading: "Pilot Projects",
        text: "Just wanna test the waters with a prototype before making the investment? We offer the perfect toolset for creating prototypes that fary your ideas."
    },
    {
        heading: "Workshops",
        text: "You want to test something? We offer the skills and resources to build a prototype that faries your idea. Blabla"
    }
];

const Items = ({items}) => {
    return items.map((item, index) => {
        return (
            <Item key={index} item={item} index={index} />
        )
    });
}

const Item = ({item, index}) => {
    const Spacer = () => {
        if (index % 2 === 0) {
            return <div className="col-1_sm-hidden" />
        }
        return null
    }
    
    return (
        <Fragment>
            <div className="col-5_sm-12 slide__item">
                <h2 className="slide__section-heading">
                    {item.heading}
                </h2>
                <p className="slide__text">
                    {item.text}
                </p>
            </div>
            <Spacer />
        </Fragment>
    );
};

const HowCanWeHelp = () => {
    return (
        <div id="how-can-we-help-you" className="slide slide__how-can-we-help-you">
            <div className="slide-content">
                <h1 className="slide__heading">
                    How can we help you?
                </h1>
                <div className="grid-spaceBetween">
                    <Items items={data} />
                </div>
            </div>
        </div>
    )
};


export default HowCanWeHelp;