import React from 'react';
import LazyLoad from 'react-lazyload';
import './Culture.scss';

const ourStory = {
    background: {
        title: 'Our Background',
        text: 'Axel Springer Ideas Engineering was founded in 2013 as an in-house Incubator for the Axel Springer Group. Our early years were characterized by rapid growth and a continually evolving organizational structure. While one part of the team focused on founding Start-ups, the other part focused on developing software services for various Axel Springer companies. After only two years more than 10 of our original ideas grew into individual products or companies such as Celepedia, The Iconist, and Upday. Such success led to a realignment of our vision, and we decided to focus on our core DNA: Ideas and Engineering. Doing so allowed us to do what we do best: develop software and digital products.',
        imageUrl: '/culture/Bild Culture 1.jpg'
    },
    today: {
        title: 'Today',
        text: 'Since then the organization has matured rapidly. We went on and developed a digital payment platform that enabled BILD.de and WELT.de to step into the world of paid journalism as a first mover in Europe. Millions of payment transactions for digital content have been handled by our platform since then. Meanwhile, we’ve developed several software solutions and services around digital content. We mastered the art of automated metadata enrichment for videos and pictures. Such specialized skills allowed us to offer products like the Newsfinder; a personalized real-time news scanner specifically crafted for our journalist colleagues in the Axel Springer group.',
        imageUrl: '/culture/Bild Culture 2.jpg'
    },
    tomorrow: {
        title: 'Tomorrow',
        text: 'Our newest baby is our democratic innovation process, which allows us to fulfill two important objectives: Firstly, Deep-diving into the most recent technology phenomenons like AI and Blockchain for a better understanding of the exponentially evolving markets and secondly, creating an economical testing playground for digital product increments of real business challenges from the Axel Springer family and beyond. All this is culturally fueled by our lateral leadership principles and constantly evolving, democratic company processes with one true goal: We turn your ideas into great products.',
        imageUrl: '/culture/Bild Culture 3.jpg'
    }
};

export default class Culture extends React.Component {
    constructor(props) {
        super(props)
    }

    renderCultureItem(dataItem, floatingClass, height) {
        return (
            <div className={'culture__section culture__section--' + floatingClass}>
                <LazyLoad height={height}>
                    <img className='culture__image' src={dataItem.imageUrl} />
                </LazyLoad>
                <div className='culture__text'>
                    <h3>{dataItem.title}</h3>
                    <p>{dataItem.text}</p>
                </div>
            </div>
        )
    }

    render() {
        return (
            <section className='culture centered'>
                <div className='culture__container'>
                    <h1 className='culture__heading sectionHeading'>
                        Our Company Culture
                    </h1>
                    {this.renderCultureItem(ourStory.background, 'background', 419)}
                    {this.renderCultureItem(ourStory.today, 'today', 498)}
                    {this.renderCultureItem(ourStory.tomorrow, 'tomorrow', 504)}
                </div>
            </section>
        )
    }
}