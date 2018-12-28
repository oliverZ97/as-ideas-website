import React from "react";
import "./blogSummary.scss";
import Layout from "../../templates/layout/layout";

import OneBlogPostContainer from "../../components/OneBlogPostContainer/oneBlogPostContainer";
import Loader from "../../components/Loader/Loader";
import InfiniteScroll from 'react-infinite-scroller';
import {graphql} from "gatsby";

export default class BlogSummary extends React.Component {
  constructor(props) {
    super(props);

    let edges = props.data.blog.edges
      .map((edge) => {
        return edge.node.frontmatter;
      })
      .sort((a, b) => {
        return b.date.localeCompare(a.date);
      });

    this.state = {
      loadedBlogPosts: [],
      posts: edges
    };

    this.loadNewPosts = this.loadNewPosts.bind(this);
  }

  loadNewPosts(count) {
    let newCount = count * 4;
    this.state.loadedBlogPosts = this.state.posts.slice(0, newCount);
    this.setState(this.state);
  }

  render() {
    return (
      <Layout>
        <section className="blogSummary centered">
          <div className="blogSummary__container">
            <h1 className="blogSummary__heading">Inside Ideas Engineering</h1>
            <ul id="posts" className="blogSummary__list">
              <InfiniteScroll
                pageStart={0}
                loadMore={this.loadNewPosts.bind(this)}
                hasMore={this.state.loadedBlogPosts.length < this.state.posts.length}
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
      </Layout>
    )
  }
}

export const query = graphql`
  query BlogQuery {
    blog: allMarkdownRemark(
     filter: { 
       fileAbsolutePath: {regex : "\\/blog/"}, 
       frontmatter: { draft: { ne: true }}
     },
     sort: { order: ASC, fields: [fileAbsolutePath] },
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            year
            month
            name
            title
            titlePicture {
              base
            }
            summary
            author
            authorEmail
            path
            permalink
            date
          }
        }
      }
    }
  }
`;

