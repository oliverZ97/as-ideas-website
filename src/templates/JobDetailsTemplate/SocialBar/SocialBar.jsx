import {Twitter, Facebook, LinkedIn} from './svg';

import React from 'react';
import './SocialBar.scss'

class SocialBar extends React.Component {
  constructor(props) {
    super(props);

    this.openFBDialogue = this.openFBDialogue.bind(this)
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


  openFBDialogue() {
    let randomImage = window.location.protocol + '//' + window.location.host + '/recruiting/' + (Math.floor(Math.random() * 6) + 1) + '.jpg'


    window.FB.ui({
      method: 'share_open_graph',
      action_type: 'og.likes',
      action_properties: JSON.stringify({
        object: {
          'og:url': this.props.object.url,
          'og:title': this.props.object.title,
          'og:description': this.props.object.summary,
          'og:image': randomImage
        }
      })
    }, (response) => {
    });
  }

  render() {
    let socialUrls = this.getSocialUrls(this.props.object.title, this.props.object.summary, this.props.object.url);
    return (
      <div className="socialBar">
        <a className="socialBar__icon"
           href={socialUrls.twitter}
           target="_blank" rel="noopener noreferrer"
        >
          <Twitter/>
        </a>
        <a className="socialBar__icon" onClick={this.openFBDialogue}>
          <Facebook/>
        </a>
        <a className="socialBar__icon"
           href={socialUrls.linkedIn}
           target="_blank" rel="noopener noreferrer"
        >
          <LinkedIn/>
        </a>
      </div>
    );
  };
}

export default SocialBar;
