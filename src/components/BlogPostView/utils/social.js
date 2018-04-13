const social = {
    init: () => {
        if (!document.getElementById('disqus-js')) {
            (function () { // DON'T EDIT BELOW THIS LINE
                let d = document, s = d.createElement('script');
                s.id = 'disqus-js';
                s.src = '//axelspringerideas-de.disqus.com/embed.js';
                s.setAttribute('data-timestamp', +new Date());
                (d.head || d.body).appendChild(s);
            })();
        }
        if (!document.getElementById('twitter-js')) {
            (function () { // DON'T EDIT BELOW THIS LINE
                let d = document, s = d.createElement('script');
                s.id = 'twitter-js';
                s.src = '//platform.twitter.com/widgets.js';
                s.setAttribute('data-timestamp', +new Date());
                (d.head || d.body).appendChild(s);
            })();
        }
    },

    showComment: (post) => {
        if (post && window.DISQUS) {
            window.disqus_config = function () {
                this.page.url = post.permalink;
                this.page.title = post.title;
                this.page.identifier = post.id;
            };

            window.DISQUS.reset({
                reload: true,
                config: window.disqus_config
            });

            document.title = "ideas engineering ⚡ " + post.title;
        } else {
            console.warn("Disqus not loaded, retry...");
            window.setTimeout(() => {
                social.showComment(post)
            }, 500);
        }
    },

    // SOCIAL SHARE: https://blog.hubspot.com/blog/tabid/6307/bid/29544/the-ultimate-cheat-sheet-for-creating-social-media-buttons.aspx
    // cf. https://developer.linkedin.com/docs/share-on-linkedin
    linkedInUrl: (post) => {
        return `${post.permalink}`;
    },

    encodedPermalink: (post) => {
        return encodeURI(post.permalink);
    }
};

export default social;