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

};

export function trimTo256(s) {
  return (s && s.length > 256) ?
    s.substring(0, 256 - 3) + '...' :
    s;
}

export default social;
