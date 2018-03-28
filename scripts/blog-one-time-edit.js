'use strict';

const fse = require('fs-extra');
const blogPosts = require('./../src/blog-posts.json');

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
    throw err;
});


(function doSomeStuffAndWriteBack() {
    blogPosts.forEach((post) => {
        if (!post.date) {
            post.date = new Date(`${post.year}-${post.month}-01T12:00:00`);
        }
    });
    blogPosts.sort((a, b) => {
        return b.url.localeCompare(a.url);
    });
    fse.writeFileSync('./src/blog-posts.json', JSON.stringify(blogPosts, null, 2));

})();
