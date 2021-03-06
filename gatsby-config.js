module.exports = {
  plugins: [
    'gatsby-plugin-sass',

    // Manage document head data with react-helmet.
    // Provides drop-in server rendering support for Gatsby.
    'gatsby-plugin-react-helmet',

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
