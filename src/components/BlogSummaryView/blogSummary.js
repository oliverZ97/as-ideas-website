import React from "react";
import { NavLink } from "react-router-dom";
import "./blogSummary.scss";
import posts from "./../../blog-posts.js";

import CroppedImage from '../CroppedImage/CroppedImage';

class BlogSummary extends React.Component {

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
            <section className="blogSummary centered">
                <div className="blogSummary__container">
                    <h1 className="blogSummary__heading">Inside Ideas Engieering</h1>
                    <ul id="posts" className="blogSummary__list">
                        {
                            posts.map((post) => {
                                return (
                                    < li className="blogSummary__item" key={post.url} >
                                        <NavLink to={post.url}>
                                            <CroppedImage className="blogSummary__image" src={post.url + post.titlePicture} alt={post.title} />
                                            <h3 className="blogSummary__meta">{this.getMonth(post.month)} {post.year} | {post.author}</h3>
                                            <h2 className="blogSummary__title">{post.title}</h2>
                                            <p className="blogSummary__summary">{post.summary}</p>
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </section>
        )
    }
}
;


export default BlogSummary;