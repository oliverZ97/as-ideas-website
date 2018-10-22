import React from 'react';
import Layout from '../../layout/layout';

function BlogPost({data}) {
  const post = data.markdownRemark;
  console.info(data);
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
