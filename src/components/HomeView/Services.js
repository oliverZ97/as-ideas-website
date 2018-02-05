import React from 'react';


const servicesText = {
    saas: {
        title: "Software as a service",
        text: "You need a big software solution? We are willing to be your partner in development and operating your customised software solution."
    },
    pilotProjects: {
        title: "Pilot Projects",
        text: "Just wanna test the waters with a prototype before making the investment? We offer the perfect toolset for creating prototypes that fary your ideas."
    },
    technologyAdvisors: {
        title: "Technology Advisors",
        text: "Do you have tons of questions, but not sure where to turn? We offer technology consultations for companies in need of advice."
    },
    workshops: {
        title: "Workshops",
        text: "You want challenge your ideas? We offer the skills and resources to bring bring your problem to the next level."
    }
};


const ServiceHeading = ({children}) => (
    <h2 className="mb-4 text-12 font-bold text-white uppercase leading-normal tracking-wide opacity-75">
        {children}
    </h2>
);


const ServiceText = ({children}) => (
    <p className="text-20 text-white leading-normal">
        {children}
    </p>
)


const ServiceItemGrid = ({children}) => (
    <div className="max-w-2xl flex flex-wrap lg:-mx-16 xl:-mx-16">
        {children}
    </div>
)


const ServiceItem = ({children}) => (
    <div className="w-1/2 my-4 px-16 sm:w-full sm:mb-8 sm:px-0 md:px-6">
        {children}
    </div>
)


const Services = () => (
    <div
        id="services"
        className="flex justify-center items-center min-h-screen-90 px-24 py-16 bg-grey-10 sm:min-h-0 sm:px-6 md:px-6"
    >
        <div className="max-w-2xl">
            <h1 className="max-w-lg mx-auto mb-24 text-24 font-normal text-white text-center uppercase tracking-wide sm:mb-10 sm:text-20 md:text-20">
                How can we help you?
            </h1>
            <ServiceItemGrid>
                <ServiceItem>
                    <ServiceHeading>{servicesText.saas.title}</ServiceHeading>
                    <ServiceText>{servicesText.saas.text}</ServiceText>
                </ServiceItem>
                <ServiceItem>
                    <ServiceHeading>{servicesText.technologyAdvisors.title}</ServiceHeading>
                    <ServiceText>{servicesText.technologyAdvisors.text}</ServiceText>
                </ServiceItem>
                <ServiceItem>
                    <ServiceHeading>{servicesText.pilotProjects.title}</ServiceHeading>
                    <ServiceText>{servicesText.pilotProjects.text}</ServiceText>
                </ServiceItem>
                <ServiceItem>
                    <ServiceHeading>{servicesText.workshops.title}</ServiceHeading>
                    <ServiceText>{servicesText.workshops.text}</ServiceText>
                </ServiceItem>
            </ServiceItemGrid>
        </div>
    </div>
);


export default Services;