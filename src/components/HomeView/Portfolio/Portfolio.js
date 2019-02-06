import React from 'react';
import './Portfolio.scss';

const PortfolioText = {
    newsfinder: {
        category: 'Newsfinder',
        title: 'Newsfinder',
        description: 'The Newsfinder app allows Axel Springer employees to create real-time overviews for hand-picked topics using keywords or hashtags. Among the wide range of sources are third-party publications, social media channels, and news from press agencies. Automated translations make it possible to review foreign publications easily.',
        imageUrl: require('./ideas_identity_website_grafik_newsfinder.png')
    },
    contentExchange: {
        category: 'CEP',
        title: 'Content Exchange Platform',
        description: 'Axel Springer has more than 15.000 editors across the globe producing an enormous stream of content ranging from traditional newspapers and advertorials to blogs and digital video platforms. The Content Exchange Platform enables the sharing of content within the Axel Springer group.',
        imageUrl: require('./ideas_identity_website_grafik_cep.png')
    },
    singleSignOn: {
        category: 'SSO',
        title: 'Single-Sign On',
        description: 'We are the full-service operator for Axel Springer\'s Single Sign-On service.We successfully manage half a million active users, of which 100, 000 are active on a daily basis.Our service securely facilitates the complete account and profile management as well as newsletter subscriptions.',
        imageUrl: require('./ideas_identity_website_grafik_sso.png')
    },
    optInLayer: {
        category: 'OIL.js',
        title: 'Opt-In Layer',
        description: 'Facing the effects of the new general data protection regulation (GDPR) concerning tracking, advertising and cookies we built an open source, easy to integrate, customizable, good-looking, responsive, lightweight JavaScript Library. While working on this solution we also helped shaping the IAB specification and integrated this new standard to forward the user\'s consent to different vendors.',
        imageUrl: require('./ideas_identity_website_grafik_pcp.png')
    }
};

export default class Portfolio extends React.Component {
    renderItem(dataItem) {
        return (
            <li className='portfolio__item'>
                <img className='portfolio__image' src={dataItem.imageUrl} alt={dataItem.title}/>
                <h3 className='portfolio__subtitle'>
                    {dataItem.category}
                </h3>
                <h2 className='portfolio__title'>
                    {dataItem.title}
                </h2>
                <p className='portfolio__description'>
                    {dataItem.description}
                </p>
            </li>
        )
    }

    render() {
        return (
            <section id='portfolio' className='portfolio centered'>
                <div className='portfolio__container'>
                    <h1 className='portfolio__heading sectionHeading'>
                        A Selection of our Work
                    </h1>
                    <ul className='portfolio__list'>
                        {this.renderItem(PortfolioText.newsfinder)}
                        {this.renderItem(PortfolioText.contentExchange)}
                        {this.renderItem(PortfolioText.singleSignOn)}
                        {this.renderItem(PortfolioText.optInLayer)}
                    </ul>
                </div>
            </section>
        )
    }
}
