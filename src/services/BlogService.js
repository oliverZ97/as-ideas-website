import md5 from "md5";

let BlogService = {};

// posts = posts.filter((post) => {
//   return post.authorEmail && !post.draft;
// });
//
// posts.forEach((post) => {
//   post.authorPictureUrl = `//www.gravatar.com/avatar/${md5(post.authorEmail.toLowerCase())}`;
// });

BlogService.setPosts = (posts) => {

};

BlogService.setPostsFromEgdes = (edges) => {

};

BlogService.next = ((post) => {
  let indexOfPost = posts.indexOf(post);
  if (indexOfPost < 0) {
    return undefined;
  }

  if ((indexOfPost + 1) >= posts.length) {
    return posts[0];
  }

  return posts[indexOfPost + 1];
});

BlogService.prev = ((post) => {
  let indexOfPost = posts.indexOf(post);
  if (indexOfPost < 0) {
    return undefined;
  }

  if (indexOfPost === 0) {
    return posts[posts.length - 1];
  }

  return posts[indexOfPost - 1];
});

BlogService.nextTwoPosts = ((post) => {
  let next = posts.next(post);
  if (next) {
    return [next, posts.prev(post)];
  }
  return [];
});

BlogService.getPost = (year, month, name) => {
  for (let post of posts) {
    if (post.year === params.year && post.month === params.month && post.name === params.name) {
      return post;
    }
  }
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

BlogService.sort((a, b) => {
  return b.date.localeCompare(a.date);
});

BlogService.getEncodedPermalink = (post) => {
  return encodeURI(post.permalink);
};

export default BlogService;
