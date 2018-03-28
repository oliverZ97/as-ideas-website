import md5 from "md5";

let posts = require('./blog-posts.json');

posts = posts.filter((post) => {
    return post.authorEmail
});

posts.forEach((post) => {
    post.authorPictureUrl = `//www.gravatar.com/avatar/${md5(post.authorEmail.toLowerCase())}`;
});

posts.getPost = (params) => {
    for (let post of posts) {
        if (post.year === params.year && post.month === params.month && post.name === params.name) {
            return post;
        }
    }
};

posts.sort((a, b) => {
    return b.url.localeCompare(a.url);
});

export default posts;