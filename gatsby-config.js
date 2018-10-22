module.exports = {
  plugins: [
    // This plugin exposes helper functions for processing
    // images with the NPM package “sharp”. It's used by
    // several other plugins.
    'gatsby-plugin-sharp',

    // This plugin identifies file nodes that are images and
    // transforms these to create new “ImageSharp” nodes.
    // With them you can resize images and
    // generate responsive image thumbnails.
    'gatsby-transformer-sharp',

    'gatsby-plugin-sass',

    // Gatsby's data processing layer begins with “source”
    // plugins.  You can source data nodes from anywhere but
    // most sites, like Gatsbygram, will include data from
    // the filesystem so we start here with
    // “gatsby-source-filesystem”.
    //
    // A site can have as many instances of
    // gatsby-source-filesystem as you need.  Each plugin
    // instance is configured with a root path where it then
    // recursively reads in files and adds them to the data
    // tree.
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "pages",
        path: `${__dirname}/src/data/blog/posts`,
        // ignore: ["^(.(?!.*\.md$|.*\.markdown))*$"],
        // ignore: ["**/*.jpg", "**/*.png", "**/*.jpeg", "**/*.gif",],
      },
    },

    // Gatsby transformer plugin for Markdown using the Remark library and ecosystem
    // markdown -> html
    {
      resolve: `gatsby-transformer-remark`,
    },
  ],
}
;
