import React from "react";
import {Twitter, Facebook, LinkedIn} from './svg';

class SocialShareBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: props.post
    }
  }

  componentDidMount() {
  }

  // SOCIAL SHARE: https://blog.hubspot.com/blog/tabid/6307/bid/29544/the-ultimate-cheat-sheet-for-creating-social-media-buttons.aspx
  // cf. https://developer.linkedin.com/docs/share-on-linkedin
  linkedInUrl(post) {
    return `https://www.linkedin.com/shareArticle?url=${encodeURI(post.permalink)}&mini=true&title=${post.title}&source=axelspringerideas.de&summary=${this.getEncodedSummaryMax256Chars(post)}`;
  }

  twitterUrl(post) {
    return `http://twitter.com/share?text=${encodeURI(post.title)}&url=${encodeURI(post.permalink)}&hashtags=asideas,ideasengineering`
  }

  facebookUrl(post) {
    return `http://www.facebook.com/share.php?u=${encodeURI(post.permalink)}`;
  }

  // FIXME
  getEncodedSummaryMax256Chars(post) {
    if (post) {
      return encodeURI(this.trimTo256(post.summary));
    }
    return '';
  }

  // FIXME
  trimTo256(s) {
    return (s && s.length > 256) ?
      s.substring(0, 256 - 3) + '...' :
      s;
  }

  render() {
    return (
      <div className="blog-social-share">
        <span className="blog-social-share__header">Teile den Beitrag auf</span>
        <div className="blog-social-share__iconList">
          <a className="blog-social-share__icon"
             href={this.twitterUrl(this.state.post)}
             target="_blank" rel="noopener noreferrer"
          >
            <Twitter/>
            <span>Twitter</span>
          </a>
          <a className="blog-social-share__icon"
             href={this.facebookUrl(this.state.post)}
             target="_blank" rel="noopener noreferrer"
          >
            <Facebook/>
            <span>Facebook</span>
          </a>
          <a className="blog-social-share__icon"
             href={this.linkedInUrl(this.state.post)}
             target="_blank" rel="noopener noreferrer"
          >
            <LinkedIn/>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    )
  }
};

export default SocialShareBar;
