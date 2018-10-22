import React from 'react';
import Layout from '../../layout/layout';

function BlogPost({data}) {
  const post = data.markdownRemark;
  // console.info(post.frontmatter);
  //  s.src = '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js';
  //  s.href = '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css';

  return (
    <Layout>
      <div>
        hello post
        <div dangerouslySetInnerHTML={{__html: post.html}}/>
      </div>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query OneBlogPost ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
