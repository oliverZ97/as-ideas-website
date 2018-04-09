import React from 'react';

import './Services.scss';

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

export default class Services extends React.Component {
    constructor(props) {
        super(props);
    }

    renderServiceItem(service) {
        return (
            <li className='services__item'>
                <h3 className='services__title'>{service.title}</h3>
                <p className='services__description'>{service.text}</p>
            </li>
        )
    }

    render() {
        return (
            <section className='services centered'>
                <div className='services__container'>
                    <h1 className='services__heading sectionHeading'>
                        How can we help you?
                    </h1>
                    <ul className='services__list'>
                        {this.renderServiceItem(servicesText.saas)}
                        {this.renderServiceItem(servicesText.pilotProjects)}
                        {this.renderServiceItem(servicesText.technologyAdvisors)}
                        {this.renderServiceItem(servicesText.workshops)}
                    </ul>
                </div>
            </section>
        )
    }
}