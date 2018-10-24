const md5 = require("md5");

let BlogService = {};

BlogService.next = ((post, posts) => {
  let indexOfPost = posts.indexOf(post);
  if (indexOfPost < 0) {
    return undefined;
  }

  if ((indexOfPost + 1) >= posts.length) {
    return posts[0];
  }

  return posts[indexOfPost + 1];
});

BlogService.prev = ((post, posts) => {
  let indexOfPost = posts.indexOf(post);
  if (indexOfPost < 0) {
    return undefined;
  }

  if (indexOfPost === 0) {
    return posts[posts.length - 1];
  }

  return posts[indexOfPost - 1];
});

BlogService.nextTwoPosts = ((post, posts) => {

  let next = BlogService.next(post, posts);
  if (next) {
    return [next, BlogService.prev(post, posts)];
  }
  return [];
});

BlogService.enrich = (post, node) => {
  let fileName = node.fileAbsolutePath.replace(/^.*[\\\/]/, '').toLowerCase();
  let fileNameWithoutExtension = fileName.substring(0, fileName.lastIndexOf('.')) || fileName

  post.year = post.date.substring(0, 4);
  post.month = post.date.substring(5, 7);
  post.day = post.date.substring(8, 10);
  post.name = post.title.toLowerCase().replace(/\W/g, ' ').replace(/\s+/g, '-');
  post.path = `/blog/${post.year}/${post.month}/${fileNameWithoutExtension}/`;
  post.permalink = `https://axelspringerideas.de` + post.path;
  post.authorPictureUrl = "//www.gravatar.com/avatar/" + md5(post.authorEmail.toLowerCase());
};

BlogService.getMonth = (month) => {
  let monthNames = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
  try {
    let monthInt = parseInt(month, 10);
    return monthNames[monthInt - 1];
  } catch (e) {
    console.error("Unparseble month: " + month);
    return month;
  }
};

// BlogService.sort((a, b) => {
//   return b.date.localeCompare(a.date);
// });

BlogService.getEncodedPermalink = (post) => {
  return encodeURI(post.permalink);
};

exports.BlogService = BlogService;
