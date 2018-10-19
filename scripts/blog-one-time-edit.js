'use strict';

const fse = require('fs-extra');
const blogPosts = require('./../src/deprecated/blog-posts.json');
const klaw = require('klaw');

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
    return b.date.localeCompare(a.date);
  });
  // fse.writeFileSync('./src/blog-posts.json', JSON.stringify(blogPosts, null, 2));

  blogPosts.forEach((post) => {
    writePost(post);
    // copyImages(post);
  })
})();

function copyImages(post) {
  let imagePath = `./src/deprecated/blog/${post.year}/${post.month}/${post.name}/`;

  const imagesInDir = [];
  klaw(imagePath)
    .on('readable', function () {
      let item;
      while ((item = this.read())) {
        if (item.path.endsWith('.mp4') || item.path.endsWith('.JPG') || item.path.endsWith('.jpg') || item.path.endsWith('.jpeg') || item.path.endsWith('.gif') || item.path.endsWith('.png')) {
          imagesInDir.push(item.path);
        } else {
          // console.info("Not copying:", item.path);
        }
      }
    })
    .on('end', () => {
      // let allBlogPosts = handleBlogPostsFromFileSystem(blogPostsInPublicDir);
      // fse.writeFileSync('./src/blog-posts.json', JSON.stringify(allBlogPosts, null, 2));
      // createRssFeed(allBlogPosts);
      imagesInDir.forEach(itemPath => {


        let imageName = getFileNameFromPath(itemPath);
        // copy image
        let newItemPath = `./src/data/blog/images/${getNewImageName(post, imageName)}`;
        console.info(itemPath, "to", newItemPath);
        fse.copy(itemPath, newItemPath, err => {
          if (err) {
            console.error(err);
          }

        });

      });
    });
}

function getFileNameFromPath(path) {
  return path.replace(/^.*[\\\/]/, '');
}

function getNewImageName(post, imageName) {
  return `${post.year}-${post.month}-${post.name}_${imageName}`;
}

function polishContent(post, content) {

}

function writePost(post) {
  console.info(post.id);

  let markdownFilePath = `./src/deprecated/blog/${post.year}/${post.month}/${post.name}.md`;
  let newMarkdownFilePath = `./src/data/blog/posts/${post.year}-${post.month}-${post.name}.md`;
  fse.readFile(markdownFilePath, 'utf8', (err, contents) => {
    if (err) {
      console.error(err);
    } else {

      let remark = jsonToRemark(post);
      let newContent = remark + "\n" + polishContent(post, contents);

      fse.writeFile(newMarkdownFilePath, newContent, (err) => {
        if (err) {
          return console.error(err);
        }
      });
    }
  });

}

function jsonToRemark(json) {
  let result = "---\n";
  for (let key in json) {
    let value = json[key];
    if (typeof value === 'string') {
      value = value.replace(/\"/gm, "\\\"");
    }
    result += `${key}: "${value}"\n`;
  }
  result += "---\n";
  return result;
}
