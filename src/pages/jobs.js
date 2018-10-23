import React from "react"

import Layout from "../templates/layout/layout";
import JobsView from "../components/JobsView/JobsView";


export default ({data}) => {
  return (
    <Layout>
      <JobsView/>
    </Layout>
  )
};
