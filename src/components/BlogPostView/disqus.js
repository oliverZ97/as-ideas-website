const disqus = {
    loadDisqus: () => {
        if (!document.getElementById('disqus-js')) {
            (function () { // DON'T EDIT BELOW THIS LINE
                var d = document, s = d.createElement('script');
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

            document.title = "ideas engineering ⚡ " + post.title;
        } else {
            console.warn("Disqus not loaded, retry...");
            window.setTimeout(() => {
                disqus.showComment(post)
            }, 500);
        }
    }
};

export default disqus;