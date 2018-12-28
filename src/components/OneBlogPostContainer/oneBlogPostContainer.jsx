import React from "react";
import "./oneBlogPostContainer.scss";

import CroppedImage from './CroppedImage/CroppedImage';
import Link from '../Link/Link';
import {BlogService} from '../../services/BlogService';

class OneBlogPostContainer extends React.Component {
  getMonth(month) {
    return BlogService.getMonth(month);
  }

  render() {
    let post = this.props.post;

    let imagePath = "";
    if (post.titlePicture) {
      imagePath = post.path + "/" + post.titlePicture.base;
    }
    if (post) {
      return (
        <li className="blogSummary__item" key={post.path}>
          <Link to={post.path}>
            <CroppedImage className="blogSummary__image" src={imagePath} alt={post.title}/>
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
