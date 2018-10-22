import React from "react";
import "./blogSummary.scss";
import posts from "./../../deprecated/blog-posts.js";

import OneBlogPostContainer from "./OneBlogPostContainer/oneBlogPostContainer";
import Loader from "../Loader/Loader";
import InfiniteScroll from 'react-infinite-scroller';

class BlogSummary extends React.Component {
  constructor(props) {
    super(props);
    // FIXME
    // console.info("BlogSummary", props.posts);

    let edges = props.posts.map((edge) => {
      return edge.node.frontmatter;
    });
    edges.forEach(element => {
      // FIXME
      // console.info("BlogSummary", element);
      element.titlePicture = element.titlePicture.childImageSharp ? element.titlePicture.childImageSharp.resize.src : element.titlePicture;
    });

    this.state = {
      loadedBlogPosts: [],
      posts: edges
    };

    // console.info(this.state.posts);

    this.loadNewPosts = this.loadNewPosts.bind(this);
  }

  loadNewPosts(count) {
    let newCount = count * 4;
    this.setState({
      loadedBlogPosts: this.state.posts.slice(0, newCount)
    })
  }

  render() {
    return (
      <section className="blogSummary centered">
        <div className="blogSummary__container">
          <h1 className="blogSummary__heading">Inside Ideas Engineering</h1>
          <ul id="posts" className="blogSummary__list">
            <InfiniteScroll
              pageStart={0}
              loadMore={this.loadNewPosts}
              hasMore={this.state.loadedBlogPosts.length < posts.length}
              loader={<Loader key={0}/>}
            >
              {
                this.state.loadedBlogPosts.map((post, index) => {
                  return (
                    <OneBlogPostContainer key={index} post={post}/>
                  )
                })
              }
            </InfiniteScroll>
          </ul>
        </div>
      </section>
    )
  }
}

export default BlogSummary;
