const path = require("path");
const {createFilePath, createFileNode} = require(`gatsby-source-filesystem`);
const fse = require('fs-extra');
const {JobService} = require('./src/services/JobService.js');
const {BlogService} = require('./src/services/BlogService.js');

// This onCreateNode function will be called by Gatsby whenever a new node is created (or updated).
exports.onCreateNode = ({node, actions, getNode}) => {
  if (node.internal.type === `MarkdownRemark`) {

    let post = node.frontmatter;
    BlogService.enrich(post, node);

    // HINT: Example for adding meta-data (extra data) to a node
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

// Extension point to tell plugins to source nodes.
// -> add fetched data into the existing internal gatsby data store
// cf. https://blog.hasura.io/building-a-dynamic-listing-web-app-with-pagination-and-dynamic-pages-using-gatsby-2ddee9ec2dc3
// cf. https://www.gatsbyjs.org/docs/node-apis/#sourceNodes
exports.sourceNodes = ({actions, createNodeId, createContentDigest}) => {
  return JobService.getJobs()
    .then(allJobs => {
      let jobData = {jobs: allJobs};
      const nodeMeta = {
        id: createNodeId(`job-data`),
        name: 'job-data',
        parent: null,
        children: [],
        internal: {
          type: `JobsNode`,
          content: JSON.stringify(jobData),
          contentDigest: createContentDigest(jobData)
        }
      };

      actions.createNode(Object.assign({}, jobData, nodeMeta))
    });

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
              path
              year
              month
              author
              authorEmail
              summary
              title
              titlePicture {
                base
              }
              
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
    const allPosts = result.data.allMarkdownRemark.edges.map(edge => edge.node.frontmatter);

    result.data.allMarkdownRemark.edges.forEach(({node}) => {
      createSingleBlogPost(createPage, node, blogPostTemplate, allPosts);
    });
  });

}

// node.fields.slug
// node.frontmatter.xyz
function createSingleBlogPost(createPage, node, blogPostTemplate, allPosts) {
  let path = node.frontmatter.path;

  // Data passed to context is available
  // in page queries as GraphQL variables.
  if (!node.frontmatter.draft) {
    createPage({
      path: path,
      component: blogPostTemplate,
      context: {
        slug: node.fields.slug,
        nextPosts: BlogService.nextTwoPosts(node.frontmatter, allPosts)
      },
    })
  }

}
