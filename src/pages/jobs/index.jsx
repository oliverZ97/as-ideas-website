import React from 'react';
import {graphql} from "gatsby";
import Layout from "../../templates/layout/layout";

import {TextService} from '../../services/TextService';

import JobsTile from '../../components/HomeView/Jobs/JobsTile/JobsTile';

import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import {Helmet} from 'react-helmet';


import './JobsView.scss'

export default class JobsView extends React.Component {
  constructor(props) {
    super(props);

    let jobData = JSON.parse(props.data.allJobsNode.edges[0].node.internal.content);
    this.state = {
      jobData: jobData.jobs
    };
  }

  render() {
    let randomImage = '/recruiting/' + (Math.floor(Math.random() * 6) + 1) + '.jpg';
    let summary = "You love to develop cool technology? We do aswell. Become part of our unique team now! Let´s shape together tomorrow´s media usage.";
    let hasJobs = this.state.jobData.length > 0;

    return (
      <Layout>
        <section className='jobsView'>
          <Helmet>
            <title>ideas engineering ⚡ {`Jobs & Career`}</title>
            <meta property="og:url" content="https://axelspringerideas.de/jobs"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content={'Jobs & Career'}/>
            <meta property="og:description" content={TextService.trimTo256(summary)}/>
            <meta property="og:image" content={randomImage}/>
          </Helmet>
          <div className='jobsView__container--heading centered'>
            <h1 className='jobsView__heading sectionHeading'>
              {'Jobs & Career'}
            </h1>
          </div>
          <div className='jobsView__container--intro centered'>
            <p className='jobsView__intro'>
              You love to develop cool technology? We do aswell.<br/>
              Become part of our unique team now! Let´s shape together tomorrow´s media usage.
            </p>
          </div>
          <div className='jobsView__container--video centered'>
            <VideoPlayer src='https://s3-eu-west-1.amazonaws.com/ideas-engineering-io/kennst-du-schon-tom-hd.mp4' thumbnail={require("./tom.png")} playingHeight={'600px'}/>
          </div>

          <div className='jobsView__container--tiles centered'>
            {
              hasJobs ? <h1 className='jobsView__heading sectionHeading'>We are hiring</h1>
                : <h1 className='jobsView__heading sectionHeading'>We are full staffed at the moment.<br/>But speculative applications are always welcome!</h1>
            }
            <ul className='jobsView__jobList'>
              {
                this.state.jobData.map(job => {
                  return <JobsTile key={'jobsTile' + job._attributes.jobId} job={job}/>
                })
              }
            </ul>
          </div>

          <div className='jobsView__container--initiativ centered'>
            <p className='jobsView__initiativ'>
              Nothing suitable here at the moment but you are keen on working with us one day?<br/>
              We highly welcome your speculative application!
            </p>
          </div>

          <div className='jobsView__container centered'>
            <p className='jobsView__outro'>
              Drop us your complete application documents (cover letter, CV, references / certificates) stating your earliest possible starting date to <a href="mailto:hello@asideas.de">hello@asideas.de</a>.<br/>
              <br/>
              We can´t wait for your application!!
              <span>By the way: Your data will only be saved until the end of the application process and then deleted. However, with your consent, your application can be maintained for 6 more months so that we can contact you if we find a suitable vacancy for you meanwhile.</span>
            </p>
          </div>

        </section>
      </Layout>
    );
  };
}


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
