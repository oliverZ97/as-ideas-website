const path = require("path");
const {createFilePath, createFileNode} = require(`gatsby-source-filesystem`);

// Tell plugins to add pages. This extension point is called only after the initial sourcing
// and transformation of nodes plus creation of the GraphQL schema are complete
// so you can query your data in order to create pages.
exports.createPages = ({boundActionCreators, graphql}) => {
  createBlogPosts(boundActionCreators, graphql);
};

// This onCreateNode function will be called by Gatsby whenever a new node is created (or updated).
exports.onCreateNode = ({node, boundActionCreators, getNode}) => {
  console.info("onCreateNode", node.internal.type);
  if (node.internal.type === `MarkdownRemark`) {

    // from gatsby-source-filesystem to create the path called 'slug'
    const slug = createFilePath({node, getNode, basePath: `pages`});
    boundActionCreators.createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
};

function createBlogPosts(boundActionCreators, graphql) {
  const {createPage} = boundActionCreators;
  const blogPostTemplate = path.resolve("src/templates/BlogPostTemplate/blogPost.jsx");
  let graphqlPromise = graphql(`{
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields{
                slug
            }
            frontmatter {
              year
              month
              name
              title
              titlePicture
              summary
              author
              authorEmail
              url
              markdownUrl
              authorPictureUrl
              permalink
              id
              date
            }
          }
        }
      }
    }`);

  return graphqlPromise.then((result) => {
    if (result.errors) {
      console.error(result.errors);
      throw new Error("Something went wrong on creating the blog posts!");
    }

    result.data.allMarkdownRemark.edges.forEach(({node}) => {
      createSingleBlogPost(createPage, node, blogPostTemplate);
    });
  });

}

function createSingleBlogPost(createPage, node, blogPostTemplate) {
  // node.fields.slog
  // node.frontmatter.xyz

  let path = `blog/${node.frontmatter.year}/${node.frontmatter.month}/${node.frontmatter.name}/`;
  console.info("createSingleBlogPost", path, node.fields.slug);

  // Data passed to context is available
  // in page queries as GraphQL variables.
  createPage({
    path: path,
    component: blogPostTemplate,
    context: {
      slug: node.fields.slug,
    },
  })
}
