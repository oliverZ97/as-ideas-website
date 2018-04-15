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

  addMetaToHead: (post) => {
    // getElementByXpath('//meta[property="og:url"]').remove();
    //getElementByXpath('//meta[name=og:title]').remove();
    //getElementByXpath('//meta[name=og:description]').remove();
    //getElementByXpath('//meta[name=og:image]').remove();

    // $('head').append('<meta name="description" content="this is new">');

    // let metaTags = document.getElementsByTagName('meta');
    // if (metaTags) {
    //   metaTags.forEach((tag) => {
    //
    //   })
    // }
//    <meta property="og:url"           content="https://www.your-domain.com/your-page.html" />
//    <meta property="og:type"          content="website" />
//      <meta property="og:title"         content="Your Website Title" />
//      <meta property="og:description"   content="Your description" />
//      <meta property="og:image"         content="https://www.your-domain.com/path/image.jpg" />

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
    return `https://www.linkedin.com/shareArticle?url=${encodeURI(post.permalink)}&mini=true&title=${post.title}&source=axelspringerideas.de&summary=${getEncodedSummaryMax256Chars(post)}`;
  },

  twitterUrl: (post) => {
    return `http://twitter.com/share?text=${encodeURI(post.title)}&url=${encodeURI(post.permalink)}&hashtags=asideas,ideasengineering`
  },

  facebookUrl: (post) => {
    return `http://www.facebook.com/share.php?u=${encodeURI(post.permalink)}`;
  },
};

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function getEncodedSummaryMax256Chars(post) {
  if (post) {
    return encodeURI(trimTo256(post.summary));
  }
  return '';
}

function trimTo256(s) {
  return (s && s.length > 256) ?
    s.substring(0, 256 - 3) + '...' :
    s;
}

export default social;