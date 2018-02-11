const highlightJs = {
    loadHighlightJs: () => {
        if (!document.getElementById('highlight-js-script')) {
            (function () {
                let d = document, s = d.createElement('script');
                s.id = 'highlight-js-script';
                s.src = '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js';
                s.setAttribute('data-timestamp', +new Date());
                (d.head || d.body).appendChild(s);
            })();
            (function () {
                let d = document, s = d.createElement('link');
                s.rel = 'stylesheet';
                s.href = '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css';
                s.setAttribute('data-timestamp', +new Date());
                (d.head || d.body).appendChild(s);
            })();
        }

    },
    doHighlight: () => {
        if (window.hljs) {
            let preElements = document.querySelectorAll("code");
            for (let i = 1; i < preElements.length; i++) {
                window.hljs.highlightBlock(preElements[i]);
            }
        } else {
            console.warn("HighlightJs not loaded, retry...");
            window.setTimeout(() => {
                highlightJs.doHighlight()
            }, 500);
        }
    }
};

export default highlightJs;