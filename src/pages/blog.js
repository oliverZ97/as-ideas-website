import React from "react"
import {graphql} from "gatsby";

import Layout from "../templates/layout/layout";

import BlogSummary from "./../components/BlogSummaryView";


export default ({data}) => {
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
            titlePicture {
              childImageSharp {
                resize(width: 500) {
                  src
                }
              }
            }
            summary
            author
            authorEmail
            path
            permalink
            date
          }
        }
      }
    }
  }
`;


// export const pageQuery = graphql`
//   query BlogQuery {
//     blog: allMarkdownRemark(
//      filter: { fileAbsolutePath: {regex : "\\/blog/"} },
//      sort: { order: ASC, fields: [fileAbsolutePath] },
//     ) {
//       edges {
//         node {
//           id
//           html
//           frontmatter {
//             year
//             month
//             name
//             title
//             titlePicture  {
//               childImageSharp {
//                 resize(width: 800) {
//                   src
//                 }
//               }
//             }
//             summary
//             author
//             authorEmail
//             url
//             markdownUrl
//             permalink
//             id
//             date
//           }
//         }
//       }
//     }
//   }
// `;
