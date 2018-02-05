import React from "react";
import "./blogPost.css";
import "./marked.css";
import marked from "marked";
import posts from "./../BlogSummaryView/blog-posts.js";

class BlogPost extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        this.loadCurrentBlogPost(this.props.match.params);

        (function () { // DON'T EDIT BELOW THIS LINE
            var d = document, s = d.createElement('script');
            s.src = '//axelspringerideas-de.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
        })();
    }

    componentWillUnmount() {
        // TODO remove script tag von DISQUS
    }

    componentWillReceiveProps(nextProps) {
        this.loadCurrentBlogPost(nextProps.match.params.name);
    }

    loadCurrentBlogPost(params) {
        let post = posts.getPost(params);

        window.disqus_config = function () {
            this.page.url = post.permalink;
            this.page.identifier = post.id;
        };

        let url = `${post.url}.md`;
        fetch(url)
            .then((response) => {
                return response.text();
            })
            .then((text) => {
                // console.info("Loaded Markdown-File.", myBlob);
                var preview = document.getElementById("preview");
                preview.innerHTML = marked(text);
                // $('pre code').each(function (i, block) {
                //     hljs.highlightBlock(block);
                // });
            });
    }

    render() {
        return (
            <div className="blog-post">
                <div id="preview" className="markdown-body"/>

                <div id="disqus_thread"/>
            </div>
        )
    }
}
;


export default BlogPost;