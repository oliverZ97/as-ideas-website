import React from 'react';
import './Portfolio.scss';

const PortfolioText = {
    newsfinder: {
        title: 'Newsfinder',
        description: 'The Newsfinder app allows Axel Springer employees to create real-time overviews for hand-picked topics using keywords or hashtags. Among the wide range of sources are third-party publications, social media channels, and news from press agencies. Automated translations make it possible to review foreign publications easily.',
        imageUrl: '/portfolio/ideas_identity_website_grafik_newsfinder.png'
    },
    contentExchange: {
        title: 'Content Exchange Platform',
        description: 'Axel Springer has more than 15.000 editors across the globe producing an enormous stream of content ranging from traditional newspapers and advertorials to blogs and digital video platforms. The Content Exchange Platform enables the sharing of content within the Axel Springer group.',
        imageUrl: '/portfolio/ideas_identity_website_grafik_cep.png'
    },
    singleSignOn: {
        title: 'Single-Sign On',
        description: 'We are the full-service operator for Axel Springer\'s Single Sign-On service.We successfully manage half a million active users, of which 100, 000 are active on a daily basis.Our service securely facilitates the complete account and profile management as well as newsletter subscriptions.',
        imageUrl: '/portfolio/ideas_identity_website_grafik_sso.png'
    },
    premiumContentPlatform: {
        title: 'Premium Content Platform',
        description: 'For seven years Axel Springer Ideas is operating and developing Axel Springer\'s payment platform that is fully integrated with the corporate financial infrastructure.Our Premium Content Platform covers the entire process of digital payment from offering till billing and credit management.',
        imageUrl: '/portfolio/ideas_identity_website_grafik_pcp.png'
    }
};

export default class Portfolio extends React.Component {
    renderItem(dataItem) {
        return (
            <li className='portfolio__item'>
                <img className='portfolio__image' src={dataItem.imageUrl} alt={dataItem.title} />
                <h3 className='portfolio__subtitle'>
                    {dataItem.title}
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
                        {this.renderItem(PortfolioText.premiumContentPlatform)}
                    </ul>
                </div>
            </section>
        )
    }
}