import React from 'react';
import Layout from '../layout/layout';
import SocialShareBar from "../../components/BlogPostView/SocialBar/SocialShareBar";

import "./blogPost.scss";

function BlogPost({data}) {
  const post = data.markdownRemark;
  // console.info(post.frontmatter);
  //  s.src = '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js';
  //  s.href = '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css';

  return (
    <Layout>
      <div className="blog-post-wrapper">

        {/*{this.state.isLightboxVisible ?*/}
        {/*<div className="blog-lightbox" onClick={this.hideLightbox.bind(this)}>*/}
        {/*<div className="blog-lightbox-image-container">*/}
        {/*<img id="blog-lightbox-image" alt="Bild aus der Gallerie" src={this.state.lightboxUrl}/>*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*: ''}*/}
        <div className="blog-post centered">
          {
            post ? (
              <h3 className="blog-post-meta">
                {/*{this.getMonth(post.month)} {post.year} | {post.author}*/}
                {post.year} | {post.author}
              </h3>
            ) : null
          }

          <div id="preview" className="markdown-body blog-markdown-body">
            <div dangerouslySetInnerHTML={{__html: post.html}}/>
          </div>

          <SocialShareBar post={post}/>

          <hr/>
          <h1 className="next-posts--header">Die nächsten Beiträge</h1>
          <ul id="next-posts" className="next-posts">
            {/*{*/}
            {/*this.state.nextPosts.map((post) => {*/}
            {/*return (*/}
            {/*<OneBlogPostContainer key={post.id} post={post}/>*/}
            {/*)*/}
            {/*})*/}
            {/*}*/}
          </ul>

          <div id="disqus_thread" className=".disqus-thread"/>
        </div>
      </div>
    </Layout>
  );
}

export default BlogPost

export const query = graphql`
  query OneBlogPost ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
        frontmatter {
          year
          month
          name
          title
          summary
          author
          authorEmail
          url
          markdownUrl
          permalink
          id
          date
        }
    }
  }
`;
