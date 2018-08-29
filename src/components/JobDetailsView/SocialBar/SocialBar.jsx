
import { Twitter, Facebook, LinkedIn } from '../../../assets/svg';

import React from 'react';
import './SocialBar.scss'

class SocialBar extends React.Component {
    constructor(props) {
        super(props);
    }


    getSocialUrls(title, summary, url) {
        if (encodeURI(summary).length < 256) {
            summary = summary.substring(0, 253) + '...'
        }

        return {
            linkedIn: `https://www.linkedin.com/shareArticle?url=${encodeURI(url)}&mini=true&title=${title}&source=axelspringerideas.de&summary=${encodeURI(summary)}`,
            twitter: `http://twitter.com/share?text=${encodeURI(title)}&url=${encodeURI(url)}&hashtags=asideas,ideasengineering`,
            facebook: `http://www.facebook.com/share.php?u=${encodeURI(url)}`
        }
    }


    render() {
        let socialUrls = this.getSocialUrls(this.props.object.title, this.props.object.summary, this.props.object.url);
        console.log(socialUrls)
        return (
            <div className="socialBar">
                <a className="socialBar__icon"
                    href={socialUrls.twitter}
                    target="_blank" rel="noopener noreferrer"
                >
                    <Twitter />
                </a>
                <a className="socialBar__icon"
                    href={socialUrls.facebook}
                    target="_blank" rel="noopener noreferrer"
                >
                    <Facebook />
                </a>
                <a className="socialBar__icon"
                    href={socialUrls.linkedIn}
                    target="_blank" rel="noopener noreferrer"
                >
                    <LinkedIn />
                </a>
            </div>
        );
    };
}

export default SocialBar;
