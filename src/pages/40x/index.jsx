import React from 'react';
import Layout from "../../templates/layout/layout";

import './NotFound.scss'

class NotFound extends React.Component {
  render() {
    return (
      <Layout>
        <section className='notFound'>
          <h2>
            Sorry, we can't find what you're searching for.
          </h2>
          <h3>¯\(ಠ_ಠ)/¯</h3>
        </section>
      </Layout>
    );
  };
}

export default NotFound;
