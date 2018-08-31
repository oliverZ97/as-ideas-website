



import React from 'react';
import './Newsletter.scss';

const intro = "You want to stay connected to us and the rapidly evolving tech landscape? Then you should subscribe to our Tech Review Newsletter. On a (mostly) weekly basis, we meet and discuss stuff we are reading about the world out there, with focus on technological innovation, while not missing out its impact on society.";

class Newsletter extends React.Component {
    constructor(props) {
        super(props)

        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        var chimpPopup = document.createElement("script");
        chimpPopup.appendChild(document.createTextNode('require(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us13.list-manage.com","uuid":"d4ff5f1c1f7d849d773d43835","lid":"03f432ed25","uniqueMethods":false}) })'));
        document.head.appendChild(chimpPopup);

    }


    render() {
        return (
            <section className='newsletter centered'>
                <h1 className='culture__heading sectionHeading'>
                    Join our Newsletter
                </h1>

                <p className='newsletter__intro'>{intro}</p>
                <a href="http://eepurl.com/dFth9j" target="_blank" rel="noopener noreferrer" className='newsletter__signUpButton'>Sign up for newsletter!</a>
            </section>
        );
    }
}

export default Newsletter;
