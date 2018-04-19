import React from "react";
import "./blogSummary.scss";
import posts from "./../../blog-posts.js";

import OneBlogPostContainer from "./OneBlogPostContainer/oneBlogPostContainer";

class BlogSummary extends React.Component {
    render() {
        return (
            <section className="blogSummary centered">
                <div className="blogSummary__container">
                    <h1 className="blogSummary__heading">Inside Ideas Engineering</h1>
                    <ul id="posts" className="blogSummary__list">
                        {
                            posts.map((post) => {
                                return (
                                    <OneBlogPostContainer post={post} />
                                )
                            })
                        }
                    </ul>
                </div>
            </section>
        )
    }
}

export default BlogSummary;