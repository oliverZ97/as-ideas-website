import React from "react"

import Layout from "../templates/layout/layout";
import JobsView from "../components/JobsView/JobsView";
import {graphql} from "gatsby";


export default ({data}) => {
  let jobData = JSON.parse(data.allJobsNode.edges[0].node.internal.content);
  return (
    <Layout>
      <JobsView jobs={jobData}/>
    </Layout>
  )
};


export const pageQuery = graphql`
 {
  allJobsNode {
    edges {
      node {
        internal {
          content
        }
      }
    }
  }
}

`;
