import React from "react";
import "./blogPost.scss";
import marked from "marked";
import posts from "./../../blog-posts.js";
import highlightJs from "./utils/highlight";
import social from "./utils/social";
import { animateScroll } from "react-scroll/modules/index";
import { Twitter, Facebook, LinkedIn } from '../../assets/svg';

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

    renderSocials() {
        return (
            <div className="blog-social-share">
                <span className="blog-social-share__header">Teile den Beitrag auf</span>
                <div className="blog-social-share__iconList">
                    <a className="blog-social-share__icon"
                        href={social.twitterUrl(this.state.post)}
                        target="_blank" rel="noopener noreferrer"
                    >
                        <Twitter />
                        Twitter
                </a>
                    <a className="blog-social-share__icon"
                        href={social.facebookUrl(this.state.post)}
                        target="_blank" rel="noopener noreferrer"
                    >
                        <Facebook />
                        Facebook
                </a>
                    <a className="blog-social-share__icon"
                        href={social.linkedInUrl(this.state.post)}
                        target="_blank" rel="noopener noreferrer"
                    >
                        <LinkedIn />
                        LinkedIn
                </a>
                </div>
            </div>
        );
    }

    getMonth(month) {
        let monthNames = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
        try {
            let monthInt = parseInt(month);
            return monthNames[monthInt];
        } catch (e) {
            console.error("Unparseble month: " + month);
            return month;
        }
    }

    render() {
        return (
            <div className="blog-post-wrapper ">
                <div className="blog-post centered">
                    {
                        this.state.post ? (
                            <h3 className="blog-post-meta">{this.getMonth(this.state.post.month)} {this.state.post.year} | {this.state.post.author}</h3>
                        ) : null
                    }
                    <div id="preview" className="markdown-body blog-markdown-body" />
                    {this.renderSocials()}
                    <div id="disqus_thread" className=".disqus-thread" />
                </div>
                {this.state.isLightboxVisible ?
                    <div className="blog-lightbox" onClick={this.hideLightbox.bind(this)}>
                        <div className="blog-lightbox-image-container">
                            <img id="blog-lightbox-image" alt="Bild aus der Gallerie" src={this.state.lightboxUrl} />
                        </div>
                    </div>
                    : ''}
            </div>
        )
    }
};

export default BlogPost;