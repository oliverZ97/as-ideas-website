import React from 'react';
import {graphql} from "gatsby";

import Layout from '../layout/layout';
import SocialShareBar from "./SocialBar/SocialShareBar";

import "./blogPost.scss";
import {BlogService} from "../../services/BlogService";
import {TextService} from "../../services/TextService";
import {Helmet} from "react-helmet";
import OneBlogPostContainer from "../../components/OneBlogPostContainer/oneBlogPostContainer";

class BlogPost extends React.Component {
  constructor(props) {
    super(props);

    this.initHighlight.bind(this);
    this.initComments.bind(this);
    this.initGallery.bind(this);
  }

  componentDidMount() {
    this.initHighlight();
    this.initComments();
    this.initGallery();
  }

  initGallery() {
    if (!window.lightGallery) {
      window.setTimeout(() => {
        this.initGallery();
      }, 500);
    } else {
      let galleryNodes = document.querySelectorAll(".gallery");

      console.info("galleryNodes", galleryNodes);
      for (let i = 0; i < galleryNodes.length; i++) {
        let galleryNode = galleryNodes[i];
        console.info("galleryNode", i, galleryNode);
        let imageNodes = galleryNode.querySelectorAll("img");
        let newHtml = "";
        console.info("imageNodes", imageNodes);
        imageNodes.forEach((imageNode) => {
          newHtml += `<a href="${imageNode.src}" target="_blank">
        <img class="gallery-img" src="${imageNode.src}">
        <img class="zoom" src="//sachinchoolur.github.io/lightgallery.js/static/img/zoom.png">
    </a>`
        });

        galleryNode.innerHTML = newHtml;
        lightGallery(galleryNode);

        // FIXME: Debug code if you can't close a window
        // galleryNode.addEventListener('onBeforeClose', function (e) {
        //   alert('onBeforeClose');
        // }, false);
      }
    }
  }

  initHighlight() {
    if (window.hljs) {
      let preElements = document.querySelectorAll("code");
      for (let i = 1; i < preElements.length; i++) {
        window.hljs.highlightBlock(preElements[i]);
      }
    } else {
      console.warn("HighlightJs not loaded, retry...");
      window.setTimeout(() => {
        this.initHighlight();
      }, 500);
    }
  }

  initComments() {
    const post = this.props.data.markdownRemark.frontmatter;

    console.info("###", JSON.stringify(post));

    if (window.DISQUS) {
      window.disqus_config = function () {
        this.page.url = post.permalink;
        this.page.title = post.title;
        this.page.identifier = post.id;
      };

      window.DISQUS.reset({
        reload: true,
        config: window.disqus_config
      });
    } else {
      console.warn("Disqus not loaded, retry...");
      window.setTimeout(() => {
        this.initComments();
      }, 500);
    }
  }

  render() {
    let data = this.props.data;
    const post = data.markdownRemark.frontmatter;
    const postContent = data.markdownRemark.html;
    const nextPosts = this.props.pageContext.nextPosts ? this.props.pageContext.nextPosts : [];

    return (
      <Layout>
        <div className="blog-post-wrapper">
          <Helmet>
            <title>ideas engineering ⚡ {`${post.title}`}</title>
            <meta property="og:url" content={post.permalink}/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content={post.title}/>
            <meta property="og:description" content={TextService.trimTo256(post.summary)}/>
            <meta property="og:image" content={post.permalink + post.titlePicture.base}/>

            <script type="text/javascript" src="//axelspringerideas-de.disqus.com/embed.js"/>

            <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/highlight.min.js"/>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/styles/docco.min.css"/>

            {/* cf. https://github.com/sachinchoolur/lightgallery.js */}
            <script src="//cdn.jsdelivr.net/npm/lightgallery.js@1.1.2/dist/js/lightgallery.min.js"/>
            <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/lightgallery.js@1.1.2/dist/css/lightgallery.min.css"/>
            <script src="//cdn.rawgit.com/sachinchoolur/lg-pager.js/master/dist/lg-pager.js"/>
            <script src="//cdn.rawgit.com/sachinchoolur/lg-share.js/master/dist/lg-share.js"/>
            <script src="//cdn.rawgit.com/sachinchoolur/lg-thumbnail.js/master/dist/lg-thumbnail.js"/>
            <script src="//cdn.rawgit.com/sachinchoolur/lg-hash.js/master/dist/lg-hash.js"/>
          </Helmet>

          <div className="blog-post centered">
            <h3 className="blog-post-meta">
              {BlogService.getMonth(post.month)} {post.year} | {post.author}
            </h3>

            <div id="preview" className="markdown-body blog-markdown-body">
              <div dangerouslySetInnerHTML={{__html: postContent}}/>
            </div>

            <SocialShareBar post={post}/>

            <hr/>
            <h1 className="next-posts--header">Die nächsten Beiträge</h1>
            <ul id="next-posts" className="next-posts">
              {
                nextPosts.map((post, index) => {
                  return <OneBlogPostContainer key={index} post={post}/>
                })
              }
            </ul>

            <div id="disqus_thread" className=".disqus-thread"/>
          </div>
        </div>
      </Layout>
    );
  }
}

export default BlogPost

export const query = graphql`
  query OneBlogPost ($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug } }
    ) {
      html
        frontmatter {
          date
          year
          month
          name
          path
          permalink
          title
          titlePicture {
            base
          }
          summary
          author
          authorEmail
        }
    }
  }
`;
