import React from "react";

const data = [
    {
        quote: "At Ideas, we have so many possibilities to learn and evolve, unparalleled to any other company I know.",
        quotedBy: "a Software Engineer at Ideas Engineering"
    },
    {
        quote: "It's nice to work with so many people that actually care about you as a person and there are many different possibilities to step back and work quietly.",
        quotedBy: "a UX Designer at Ideas Engineering"
    },
    {
        quote: "I can quickly reach out to the right people if I have impediments that I cannot solve on your own.",
        quotedBy: "a Product Owner at Ideas Engineering"
    },
    {
        quote: "Flat hierarchies and process guidelines enables us to resolve most issues directly with the team.",
        quotedBy: "a Software Engineer at Ideas Engineering"
    },
    {
        quote: "You get a strong support when you want to evolve or alter your skills.",
        quotedBy: " Product Owner at Ideas Engineering"
    },
    {
        quote: "I am highly motivated, because I have a lot of room to maneuver and feel appropriately challenged according to my skillset.",
        quotedBy: "a Software Engineer at Ideas Engineering"
    },
    {
        quote: "What I like about my team? We have fun with good challenges and are able to tackle even the most complex tasks together.",
        quotedBy: "a Software Engineer at Ideas Engineering"
    },
    {
        quote: "I work in a team smart and pleasant people, all eager to improve every day.",
        quotedBy: "a UX Designer at Ideas Engineering"
    },
    {
        quote: "We demand a high quality standard of ourselves and are able to defend that for our clients. The team is young and always open to new ideas.",
        quotedBy: "a Software Engineer at Ideas Engineering"
    },
];


const TeamQuotes = () => {
    return (
        <div className="slide slide__oneliner">
            <div className="slide-content">
                <div className="oneliner-quote">
                    {data[0].quote}
                </div>
                <div className="oneliner-quoted-by">
                    {data[0].quotedBy}
                </div>
            </div>
        </div>
    );
};


export default TeamQuotes;