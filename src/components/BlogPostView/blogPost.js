import React from "react";
import "./blogPost.scss";
import "./marked.scss";
import marked from "marked";
import posts from "./../BlogSummaryView/blog-posts.js";
import highlightJs from "./highlight";
import disqus from "./disqus";
import {animateScroll} from "react-scroll/modules/index";

class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLightboxVisible: false
        }
    }

    componentDidMount() {
        this.loadCurrentBlogPost(this.props.match.params);
        highlightJs.loadHighlightJs();
        disqus.loadDisqus();
    }

    componentWillUnmount() {
        document.title = "ideas engineering ⚡";
    }

    componentWillReceiveProps(nextProps) {
        this.loadCurrentBlogPost(nextProps.match.params.name);
    }

    loadCurrentBlogPost(params) {
        let post = posts.getPost(params);

        disqus.showComment(post);
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

                    <div id="disqus_thread"/>
                </div>
            </div>
        )
    }
}
;


export default BlogPost;