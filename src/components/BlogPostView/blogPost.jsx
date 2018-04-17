import React from "react";
import "./blogPost.scss";
import marked from "marked";
import posts from "./../../blog-posts.js";
import highlightJs from "./utils/highlight";
import social from "./utils/social";
import {animateScroll} from "react-scroll/modules/index";
import {Twitter, Facebook, LinkedIn} from '../../assets/svg';
import OneBlogPostContainer from "../BlogSummaryView/OneBlogPostContainer/oneBlogPostContainer";

class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLightboxVisible: false,
            post: {},
            nextPosts: []
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
        this.loadCurrentBlogPost(nextProps.match.params);
    }

    loadCurrentBlogPost(params) {
        let post = posts.getPost(params);
        this.setLoadedPost(post);
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

    setLoadedPost(post) {
        let state = this.state;
        state.post = post;
        state.nextPosts = posts.nextTwoPosts(this.state.post);

        this.setState(state);

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

    getMonth(month) {
        return posts.getMonth(month);
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
                        <Twitter/>
                        <span>Twitter</span>
                    </a>
                    <a className="blog-social-share__icon"
                       href={social.facebookUrl(this.state.post)}
                       target="_blank" rel="noopener noreferrer"
                    >
                        <Facebook/>
                        <span>Facebook</span>
                    </a>
                    <a className="blog-social-share__icon"
                       href={social.linkedInUrl(this.state.post)}
                       target="_blank" rel="noopener noreferrer"
                    >
                        <LinkedIn/>
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
        );
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
                <div className="blog-post centered">
                    {
                        this.state.post ? (
                            <h3 className="blog-post-meta">{this.getMonth(this.state.post.month)} {this.state.post.year} | {this.state.post.author}</h3>
                        ) : null
                    }
                    <div id="preview" className="markdown-body blog-markdown-body"/>

                    {this.renderSocials()}

                    <hr/>
                    <h1 className="next-posts--header">Die nächsten Beiträge</h1>
                    <ul id="next-posts" className="next-posts">
                        {
                            this.state.nextPosts.map((post) => {
                                return (
                                    <OneBlogPostContainer key={post.id} post={post}/>
                                )
                            })
                        }
                    </ul>

                    <div id="disqus_thread" className=".disqus-thread"/>
                </div>

            </div>
        )
    }
};

export default BlogPost;