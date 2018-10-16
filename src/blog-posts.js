import md5 from "md5";

let posts = require('./blog-posts.json');

posts = posts.filter((post) => {
  return post.authorEmail && !post.draft;
});

posts.forEach((post) => {
  post.authorPictureUrl = `//www.gravatar.com/avatar/${md5(post.authorEmail.toLowerCase())}`;
});

posts.next = ((post) => {
  let indexOfPost = posts.indexOf(post);
  if (indexOfPost < 0) {
    return undefined;
  }

  if ((indexOfPost + 1) >= posts.length) {
    return posts[0];
  }

  return posts[indexOfPost + 1];
});

posts.prev = ((post) => {
  let indexOfPost = posts.indexOf(post);
  if (indexOfPost < 0) {
    return undefined;
  }

  if (indexOfPost === 0) {
    return posts[posts.length - 1];
  }

  return posts[indexOfPost - 1];
});

posts.nextTwoPosts = ((post) => {
  let next = posts.next(post);
  if (next) {
    return [next, posts.prev(post)];
  }
  return [];
});

posts.getPost = (params) => {
  for (let post of posts) {
    if (post.year === params.year && post.month === params.month && post.name === params.name) {
      return post;
    }
  }
};

posts.getMonth = (month) => {
  let monthNames = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
  try {
    let monthInt = parseInt(month, 10);
    return monthNames[monthInt - 1];
  } catch (e) {
    console.error("Unparseble month: " + month);
    return month;
  }
};

posts.sort((a, b) => {
  return b.date.localeCompare(a.date);
});

posts.getEncodedPermalink = (post) => {
  return encodeURI(post.permalink);
};

export default posts;
