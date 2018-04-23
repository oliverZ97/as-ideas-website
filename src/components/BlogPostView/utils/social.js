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
        return `https://www.linkedin.com/shareArticle?url=${encodeURI(post.permalink)}&mini=true&title=${post.title}&source=axelspringerideas.de&summary=${getEncodedSummaryMax256Chars(post)}`;
    },

    twitterUrl: (post) => {
        return `http://twitter.com/share?text=${encodeURI(post.title)}&url=${encodeURI(post.permalink)}&hashtags=asideas,ideasengineering`
    },

    facebookUrl: (post) => {
        return `http://www.facebook.com/share.php?u=${encodeURI(post.permalink)}`;
    },
};

function getEncodedSummaryMax256Chars(post) {
    if (post) {
        return encodeURI(trimTo256(post.summary));
    }
    return '';
}

export function trimTo256(s) {
    return (s && s.length > 256) ?
        s.substring(0, 256 - 3) + '...' :
        s;
}

export default social;
