import React from "react";
import "./blogPost.scss";
import OneBlogPostContainer from "../BlogSummaryView/OneBlogPostContainer/oneBlogPostContainer";
import SocialShareBar from "./SocialBar/SocialShareBar";

class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLightboxVisible: false,
            post: {},
            nextPosts: []
        }
    }

    // componentDidMount() {
    //     // this.loadCurrentBlogPost(this.props.match.params);
    //     // highlightJs.loadHighlightJs();
    //     // social.init();
    // }
    //
    // componentWillUnmount() {
    //     // document.title = "ideas engineering ⚡";
    // }
    //
    // componentWillReceiveProps(nextProps) {
    //     // this.loadCurrentBlogPost(nextProps.match.params);
    // }

    scrollToTop() {
        // window.setTimeout(() => {
        //     animateScroll.scrollToTop();
        // }, 250);
    }

    hideLightbox() {
        this.setState({
            isLightboxVisible: false
        });
    }

    getMonth(month) {
        return "";// FIXME posts.getMonth(month);
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
                {/*<Helmet>*/}
                    {/*<title>ideas engineering ⚡ {`${this.state.post.title}`}</title>*/}
                    {/*<meta property="og:url" content={this.state.post.permalink}/>*/}
                    {/*<meta property="og:type" content="website"/>*/}
                    {/*<meta property="og:title" content={this.state.post.title}/>*/}
                    {/*<meta property="og:description" content={trimTo256(this.state.post.summary)}/>*/}
                    {/*<meta property="og:image" content={this.state.post.url + this.state.post.titlePicture}/>*/}
                {/*</Helmet>*/}

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

                    <div id="preview" className="markdown-body blog-markdown-body">
                        <div className="blog-loading-spinner">
                            <img src={require('./images/ideas.gif')} alt="Loading spinner"/>
                            Loading...
                        </div>
                    </div>

                    <SocialShareBar post={this.state.post} />

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
