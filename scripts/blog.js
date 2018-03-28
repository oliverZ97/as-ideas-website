'use strict';

const fse = require('fs-extra');
const klaw = require('klaw');
const blogPosts = require('./../src/blog-posts.json');
const md5 = require("md5");
const RSS = require('rss');

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
    throw err;
});

(function createBlogAndStuff() {
    const blogPostsInPublicDir = [];
    klaw('./public/blog')
        .on('readable', function () {
            let item;
            while ((item = this.read())) {
                if (item.path.endsWith('.md')) {
                    blogPostsInPublicDir.push({path: item.path});
                }
            }
        })
        .on('end', () => {
            let allBlogPosts = handleBlogPostsFromFileSystem(blogPostsInPublicDir);
            fse.writeFileSync('./src/blog-posts.json', JSON.stringify(allBlogPosts, null, 2));
            createRssFeed(allBlogPosts);
        });


})();


function createRssFeed(allBlogPosts) {
    var feed = new RSS({
        title: 'Ideas Engineering - All Posts',
        description: 'We are a studio of developers, designers and product people. We focus on building software for the media industry. We combine technology and agile thinking to create great products people can’t help but love.',
        feed_url: 'http://axelspringerideas.de/rss.xml',
        site_url: 'http://axelspringerideas.de/',
        image_url: 'http://axelspringerideas.de/icon.png',
        copyright: '2017 Axel Springer Ideas Engineering GmbH',
        language: 'de',
        categories: ['Category 1', 'Category 2', 'Category 3'],
        pubDate: new Date().toLocaleDateString('en-US'),
        ttl: '60'
    });

    allBlogPosts.filter((post) => {
        return post.authorEmail
    }).forEach((post) => {
        feed.item({
            title: post.title,
            description: post.summary,
            url: post.permalink,
            // categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4'], // optional - array of item categories
            author: post.author, // optional - defaults to feed author property
            date: post.date, // any format that js Date can parse.
        });
    });

    fse.writeFileSync('./build/rss.xml', feed.xml());
}

function handleBlogPostsFromFileSystem(blogPostsInPublicDir) {
    // console.dir(blogPostsInPublicDir);
    let newBlogPosts = [];
    blogPostsInPublicDir.forEach((postFromFs) => {
        enrichNewBlogPost(postFromFs);

        if (isNewBlogPosts(postFromFs)) {
            newBlogPosts.push(postFromFs);
            console.warn('FOUND NEW BLOG POST! Adding it to the list... URL:', postFromFs.url)
        }
    });

    blogPosts.push(...newBlogPosts);

    return blogPosts;
}

function isNewBlogPosts(postFromFs) {
    let result = blogPosts.find((existingPost) => {
        return existingPost.url === postFromFs.url;
    });
    return result === undefined;
}

function enrichNewBlogPost(post) {
    // eg. /Users/swaschni/Projekte/ideas/as-ideas-website-version-3/public/blog/2016/06/ideas-for-hackathons.md',
    // and will be url: '/blog/2016/06/ideas-for-hackathons.md'
    post.url = post.path.split('/public')[1].replace(".md", "/");

    // given
    post.year = post.url.split('/')[2];
    post.month = post.url.split('/')[3];
    post.date = new Date(`${post.year}-${post.month}-01T12:00:00`);
    post.name = post.url.split('/')[4];
    post.title = post.name;
    post.titlePicture = "";
    post.summary = "";
    post.author = "";
    post.authorEmail = "";

    // calculated
    post.markdownUrl = `/blog/${post.year}/${post.month}/${post.name}.md`;
    post.permalink = "http://axelspringerideas.de" + post.url;
    post.id = md5(post.url);

    // remove path
    delete post['path'];
    delete post['authorPictureUrl'];
}
