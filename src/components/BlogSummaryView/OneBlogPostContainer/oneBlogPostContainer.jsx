import React from "react";
import "./oneBlogPostContainer.scss";

import CroppedImage from '../CroppedImage/CroppedImage';
import Link from '../../Link/Link';

class OneBlogPostContainer extends React.Component {


  getMonth(month) {
    return '';// FIXME posts.getMonth(month);
  }

  render() {
    let post = this.props.post;
    post.url = this.props.post.markdownUrl.slice(0, -3) + "/";

    if (post) {
      return (
        <li className="blogSummary__item" key={post.url}>
          <Link to={post.url}>
            <CroppedImage className="blogSummary__image" src={post.titlePicture} alt={post.title}/>
            <h3 className="blogSummary__meta">{this.getMonth(post.month)} {post.year} | {post.author}</h3>
            <h2 className="blogSummary__title">{post.title}</h2>
            <p className="blogSummary__summary">{post.summary}</p>
          </Link>
        </li>
      )
    } else {
      return <span>Loading...</span>
    }
  }
}

export default OneBlogPostContainer;
