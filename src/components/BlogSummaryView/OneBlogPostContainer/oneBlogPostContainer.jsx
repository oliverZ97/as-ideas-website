import React from "react";
import { NavLink } from "react-router-dom";
import "./oneBlogPostContainer.scss";
import posts from "./../../../deprecated/blog-posts.js";

import CroppedImage from '../CroppedImage/CroppedImage';

class OneBlogPostContainer extends React.Component {


  getMonth(month) {
    return posts.getMonth(month);
  }

  render() {
    let post = this.props.post;
    post.url = this.props.post.markdownUrl.slice(0, -3);
    if (post) {
      return (
        <li className="blogSummary__item" key={post.url}>
          <NavLink to={post.url}>
            <CroppedImage className="blogSummary__image" src={post.url + post.titlePicture} alt={post.title}/>
            <h3 className="blogSummary__meta">{this.getMonth(post.month)} {post.year} | {post.author}</h3>
            <h2 className="blogSummary__title">{post.title}</h2>
            <p className="blogSummary__summary">{post.summary}</p>
          </NavLink>
        </li>
      )
    } else {
      return <span>Loading...</span>
    }
  }
}

export default OneBlogPostContainer;
