module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/blog/posts`,
        name: "pages",
      },
    },
    'gatsby-transformer-remark'
  ],
};
