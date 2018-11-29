const Jimp = require('jimp');
const compress_images = require('compress-images');
const fse = require('fs-extra');
const klaw = require('klaw');
const seperator = require('path').sep;

(function readAllImages() {
  console.info("START RESIZING!");

  klaw('./public/blog')
    .on('readable', function () {
      let item;
      while ((item = this.read())) {
        let extension = getFileExtensionFromPath(item.path);
        if (["jpg", "jpeg", "png"].includes(extension)) {
          processImage(item.path);
        }
      }
    })
    .on('end', () => {
      console.info("END RESIZING!");
      compressImages();
      console.info("END IMAGE PROCESSING!");

    });
}());

function compressImages() {
  console.info("START PNG COMPRESSION!");

  klaw('./public/blog')
    .on('readable', function () {
      let item;
      while ((item = this.read())) {
        let extension = getFileExtensionFromPath(item.path);
        if (["png"].includes(extension)) {
          // FIXME does not override compressPng(item.path);
        }
      }
    })
    .on('end', () => {
      console.info("END COMPRESSION!");
    });
}

function processImage(path) {
  let extension = getFileExtensionFromPath(path);

  // cf. https://www.npmjs.com/package/jimp
  if (["jpg", "jpeg", "png"].includes(extension)) {
    Jimp.read(path)
      .then(image => {
        let wasEdited = false;
        if (image.bitmap.width > 1100) {
          wasEdited = true;
          image.resize(1100, Jimp.AUTO); // resize the width to 250 and scale the height accordingly
        }
        if (image.bitmap.height > 1100) {
          wasEdited = true;
          image.resize(Jimp.AUTO, 1100); // resize the width to 250 and scale the height accordingly
        }
        if (["jpg", "jpeg"].includes(extension)) {
          image.quality(70); // set JPEG quality
        }
        if (wasEdited) {
          image.write(path); // save
        }
        return image;

      })
      .catch(err => {
        console.error(err);
      });
  }
}

// cf. https://www.npmjs.com/package/compress-images
function compressPng(path) {
  let pathWithoutFileName = removeFileNameFromPath(path);
  compress_images(path, pathWithoutFileName,
    {compress_force: true, statistic: false, autoupdate: true}, false,
    {jpg: {engine: false, command: false}},
    // {png: {engine: 'optipng', command: false}},
    {png: {engine: 'pngquant', command: ['--quality=20-50 --ext=.png2 --force']}},
    {svg: {engine: false, command: false}},
    {gif: {engine: false, command: false}},
    (err) => {
      err ? console.error(err) : null
    }
  );
}

function getFileExtensionFromPath(path) {
  return path.substr(path.lastIndexOf('.') + 1);
}

function removeFileNameFromPath(path) {
  return path.substring(0, path.lastIndexOf(seperator)) + seperator;
}

