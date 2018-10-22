import React from "react"

import Layout from "../layout/layout";

import BlogSummary from "./../components/BlogSummaryView";


export default ({data}) => {
  console.error("!!!!!!!!!!!!!!!!!!!\n\n");
  console.error("!", data.blog.edges);
  console.error("!!!!!!!!!!!!!!!!!!!\n\n");
  return (
    <Layout>
      <BlogSummary posts={data.blog.edges}/>
    </Layout>
  )
};

export const pageQuery = graphql`
  query BlogQuery {
    blog: allMarkdownRemark(
     filter: { fileAbsolutePath: {regex : "\\/blog/"} },
     sort: { order: ASC, fields: [fileAbsolutePath] },
    ) {
      edges {
        node {
          id
          html
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
  }
`;
