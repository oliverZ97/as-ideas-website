import React from 'react';
import Layout from '../layout/layout';

import Terminal from './Terminal/Terminal';
import SocialBar from './SocialBar/SocialBar';
import {Helmet} from 'react-helmet';
import {TextService} from './../../services/TextService';

import './JobDetailsView.scss'

class JobDetailsView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let job = this.props.pageContext.job;
    let randomImage = '/recruiting/' + (Math.floor(Math.random() * 6) + 1) + '.jpg'
    let summary = "You love to develop cool technology? We do aswell. Become part of our unique team now! Let´s shape together tomorrow´s media usage.";

    let socialBarData;
    if (job) {
      socialBarData = {
        title: job.title._cdata,
        summary,
        url: 'https://axelspringerideas.de/jobs/' + job._attributes.jobId // FIXME
      }
    }

    return (
      <Layout>
        <section className='jobDetailsView centered'>
          <div className='jobDetailsView__container'>
            <Helmet>
              <title>ideas engineering ⚡ {`${job.title._cdata}`}</title>
              <meta property="og:url" content={"https://axelspringerideas.de/jobs/" + job._attributes.jobId}/>
              <meta property="og:type" content="website"/>
              <meta property="og:title" content={job.title._cdata}/>
              <meta property="og:description" content={TextService.trimTo256(summary)}/>
              <meta property="og:image" content={"https://axelspringerideas.de/jobs" + randomImage}/>
            </Helmet>
            <div className='jobDetailsView__subnav'>
              <a className='jobDetailsView__section' href='/jobs'>Career</a>
              <SocialBar object={socialBarData}/>
            </div>
            <div className='jobDetailsView__heading sectionHeading'>
              <h1>{job.title._cdata}</h1>
              <a className='jobDetailsView__applyButton' href={job.urlApplicationUrl._cdata} target="_blank">bewerben!</a>
            </div>
            <div>
              <div className='jobDetailsView__hero'>
                <div className='image' style={{backgroundImage: `url(${randomImage})`}}/>
              </div>

              {/* HINT: dangerouslySetInnerHTML not reconciling for <p> tags https://github.com/facebook/react/issues/5479 */}
              <div className='jobDetailsView__content--heading job-task'>{job.titleTasks._cdata}</div>
              <div className='jobDetailsView__content job-task' dangerouslySetInnerHTML={{__html: job.htmlTasks._cdata}}/>

              <div className='jobDetailsView__content--heading'>{job.titleProfile._cdata}</div>
              <div className='jobDetailsView__content' dangerouslySetInnerHTML={{__html: job.htmlProfile._cdata}}/>

              <div className='jobDetailsView__content--heading'>{job.titleOffer._cdata}</div>
              <div className='jobDetailsView__content' dangerouslySetInnerHTML={{__html: job.htmlOffer._cdata}}/>

              <div className='jobDetailsView__content--heading'>{job.titleContact._cdata}</div>
              <div className='jobDetailsView__content' dangerouslySetInnerHTML={{__html: job.htmlContact._cdata}}/>

              <div className='jobDetailsView__content jobDetailsView__content--no-heading' dangerouslySetInnerHTML={{__html: job.htmlInfoEqualRights._cdata}}/>

              <div className='jobDetailsView__shareApply'>
                <SocialBar object={socialBarData}/>
                <a className='jobDetailsView__applyButton' href={job.urlApplicationUrl._cdata} target="_blank">bewerben!</a>
              </div>

              <Terminal url={job.urlApplicationUrl._cdata}/>
            </div>
          </div>
        </section>
      </Layout>
    );
  };
}

export default JobDetailsView;
