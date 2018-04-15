import React from "react";
import "./blogPost.scss";
import "./marked.scss";
import marked from "marked";
import posts from "./../../blog-posts.js";
import highlightJs from "./utils/highlight";
import social from "./utils/social";
import {animateScroll} from "react-scroll/modules/index";

class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLightboxVisible: false,
      post: {}
    }
  }

  componentDidMount() {
    this.loadCurrentBlogPost(this.props.match.params);
    highlightJs.loadHighlightJs();
    social.init();
  }

  componentWillUnmount() {
    document.title = "ideas engineering ⚡";
  }

  componentWillReceiveProps(nextProps) {
    this.loadCurrentBlogPost(nextProps.match.params.name);
  }

  loadCurrentBlogPost(params) {
    let post = posts.getPost(params);
    let state = this.state;
    state.post = post;
    this.setState(state);
    social.addMetaToHead(post);
    social.showComment(post);

    let url = `${post.markdownUrl}`;
    fetch(url)
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        let preview = document.getElementById("preview");
        preview.innerHTML = marked(text);
        this.scrollToTop();
      })
      .then(() => {
        highlightJs.doHighlight();
        let elements = document.querySelectorAll(".markdown-body img");
        for (let i = 0; i < elements.length; i++) {
          elements[i].addEventListener("click", (event) => {
            this.showLightbox(event)
          });
        }
      });
  }

  scrollToTop() {
    window.setTimeout(() => {
      animateScroll.scrollToTop();
    }, 250);
  }

  hideLightbox() {
    this.setState({
      isLightboxVisible: false
    });
  }

  showLightbox(event) {
    this.setState({
      isLightboxVisible: true,
      lightboxUrl: event.srcElement.src
    });

  }

  render() {
    return (
      <div className="blog-post-wrapper">
        {this.state.isLightboxVisible ?
          <div className="blog-lightbox" onClick={this.hideLightbox.bind(this)}>
            <div className="blog-lightbox-image-container">
              <img id="blog-lightbox-image" alt="Bild aus der Gallerie" src={this.state.lightboxUrl}/>
            </div>
          </div>
          : ''}
        <div className="blog-post">
          <div id="preview" className="markdown-body blog-markdown-body"/>
          <div className="blog-social-share">
            <span className="blog-social-share__header">Teilen den Beitrag auf</span>
            <a className="blog-social-share__icon"
               href={social.twitterUrl(this.state.post)}
               target="_blank" rel="noopener noreferrer"
            >
              <img src={require('./images/002-twitter-sign.svg')} alt="twitter"/>
              Twitter
            </a>
            <a className="blog-social-share__icon"
               href={social.facebookUrl(this.state.post)}
               target="_blank" rel="noopener noreferrer"
            >
              <img src={require('./images/003-facebook-logo.svg')} alt="facebook"/>
              Facebook
            </a>
            <a className="blog-social-share__icon"
               href={social.linkedInUrl(this.state.post)}
               target="_blank" rel="noopener noreferrer"
            >
              <img src={require('./images/001-linkedin-sign.svg')} alt="linkedin"/>
              LinkedIn
            </a>
          </div>
          <div id="disqus_thread" className=".disqus-thread"/>
        </div>
      </div>
    )
  }
}
;


export default BlogPost;