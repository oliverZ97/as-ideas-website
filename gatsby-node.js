const path = require("path");
const {createFilePath, createFileNode} = require(`gatsby-source-filesystem`);

// Tell plugins to add pages. This extension point is called only after the initial sourcing and transformation of nodes plus creation of the GraphQL schema are complete so you can query your data in order to create pages.
exports.createPages = ({boundActionCreators, graphql}) => {


  const {createPage} = boundActionCreators;
  const blogPostTemplate = path.resolve("src/templates/BlogPostTemplate/blogPost.jsx");
  return new Promise((resolve, reject) => {
    resolve(graphql(`{
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
              name
            }
          }
        }
      }
    }`)
      .then((result) => {
        if (result.errors) {
          console.error(result.errors)
          return reject(result.errors)
        }

        result.data.allMarkdownRemark.edges.forEach(({node}) => {
          createPage({
            path: node.fields.slug,
            component: blogPostTemplate,
            context: {
              slug: node.fields.slug,
            }, // additional data can be passed via context
          })
        });
      })
    )
  })
};

exports.onCreateNode = ({node, boundActionCreators, getNode}) => {
  console.info("onCreateNode", node.internal.type);
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({node, getNode, basePath: `pages`});
    boundActionCreators.createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
};

