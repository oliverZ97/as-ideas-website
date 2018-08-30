import React from "react";
import "./blogSummary.scss";
import posts from "./../../blog-posts.js";

import OneBlogPostContainer from "./OneBlogPostContainer/oneBlogPostContainer";
import Loader from "../Loader/Loader";
import InfiniteScroll from 'react-infinite-scroller';

class BlogSummary extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loadedBlogPosts: []
        }

        this.loadNewPosts = this.loadNewPosts.bind(this);
    }

    loadNewPosts(count) {
        let newCount = count * 4;
        this.setState({
            loadedBlogPosts: posts.slice(0, newCount)
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
                            loader={<Loader />}
                        >
                            {
                                this.state.loadedBlogPosts.map((post) => {
                                    return (
                                        <OneBlogPostContainer post={post} />
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
