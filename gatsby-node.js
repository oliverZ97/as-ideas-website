const path = require("path");
const {createFilePath, createFileNode} = require(`gatsby-source-filesystem`);
const fse = require('fs-extra');
const {JobService} = require('./src/services/JobService.js');

// This onCreateNode function will be called by Gatsby whenever a new node is created (or updated).
exports.onCreateNode = ({node, actions, getNode}) => {
  if (node.internal.type === `MarkdownRemark`) {
    // from gatsby-source-filesystem to create the path called 'slug'
    const slug = createFilePath({node, getNode, basePath: `pages`});
    actions.createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  } else if (node.internal.type === 'File') {
    if (node.sourceInstanceName === 'pages' && ["jpg", "png", "jpeg", "gif"].includes(node.extension)) {
      let path = `./src/data/blog/posts/${node.relativePath}`;
      let toPath = `./public/blog/${node.relativePath}`;
      fse.copySync(path, toPath);
    }
  }
};

exports.onPreBootstrap = (args) => {
  console.info("onPreBootstrap", JobService);
  const {actions} = args;
  const jobDetailsTemplate = path.resolve("src/templates/JobDetailsTemplate/JobDetailsView.jsx");
  return JobService.getJobs()
    .then(jobs => {
      jobs.forEach(job => {
        let path = `/jobs/${job._attributes.jobId}`;
        actions.createPage({
          path: path,
          component: jobDetailsTemplate,
          context: {
            job: job
          },
        })
      })
    });
};

// Tell plugins to add pages. This extension point is called only after the initial sourcing
// and transformation of nodes plus creation of the GraphQL schema are complete
// so you can query your data in order to create pages.
exports.createPages = (args) => {
  let {boundActionCreators, graphql} = args;
  createBlogPosts(boundActionCreators, graphql);
};


function createBlogPosts(boundActionCreators, graphql) {
  const {createPage} = boundActionCreators;
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

    const blogPostTemplate = path.resolve("src/templates/BlogPostTemplate/blogPost.jsx");
    result.data.allMarkdownRemark.edges.forEach(({node}) => {
      createSingleBlogPost(createPage, node, blogPostTemplate);
    });
  });

}

// node.fields.slug
// node.frontmatter.xyz
function createSingleBlogPost(createPage, node, blogPostTemplate) {
  let path = `blog/${node.frontmatter.year}/${node.frontmatter.month}/${node.frontmatter.name}/`;

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
