import React from 'react';

import JobService from '../../services/JobService';
import JobsTile from '../HomeView/Jobs/JobsTile/JobsTile';
import Loader from '../Loader/Loader';
import { Helmet } from 'react-helmet';

import VideoPlayer from '../VideoPlayer/VideoPlayer'

import './JobsView.scss'

class JobsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobData: null,
            showLoader: true
        };
    }

    componentDidMount() {
        JobService.getJobs()
            .then((jobData) => {
                this.setState({ jobData, showLoader: false });
            })
            .catch(e => {
                console.log(e);
                this.setState({ showLoader: false })
            })
    }

    render() {
        let hiringHeading;
        if (!this.state.showLoader && !this.state.jobData) {
            hiringHeading = <h1 className='jobsView__heading sectionHeading'>We are full staffed at the moment.<br />But speculative applications are always welcome!</h1>;
        } else {
            hiringHeading = <h1 className='jobsView__heading sectionHeading'>We are hiring</h1>;
        }
        let randomImage = window.location.protocol + '//' + window.location.host + '/recruiting/' + (Math.floor(Math.random() * 6) + 1) + '.jpg'
        let summary = "Axel Springer Ideas ist eine 100 prozentige Tochter der Axel Springer SE. Wir arbeiten als Startup im Konzern und finden Lösungen rund um das Thema Digitaler Content. Wir agieren als Innovationstreiber und setzen je nach Aufgabenstellung von Prototypen bis Plattformen das beste Ergebnis um.";

        return (
            <section className='jobsView'>
                <Helmet>
                    <title>ideas engineering ⚡ {`Jobs & Career`}</title>
                    <meta property="og:url" content={window.location.href} />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content={'Jobs & Career'} />
                    <meta property="og:description" content={trimTo256(summary)} />
                    <meta property="og:image" content={randomImage} />
                </Helmet>
                <div className='jobsView__container--heading centered'>
                    <h1 className='jobsView__heading sectionHeading'>
                        {'Jobs & Career'}
                    </h1>
                </div>
                <div className='jobsView__container--intro centered'>
                    <p className='jobsView__intro'>
                        You love to develop cool technology? We do aswell.<br />
                        Become part of our unique team now! Let´s shape together tomorrow´s media usage.
                    </p>
                </div>
                <div className='jobsView__container--video centered'>
                    <VideoPlayer src='https://s3-eu-west-1.amazonaws.com/ideas-engineering-io/kennst-du-schon-tom-hd.mp4' thumbnail='/tom.png' playingHeight={'600px'} />
                </div>

                <div className='jobsView__container--tiles centered'>
                    {hiringHeading}
                    {this.state.showLoader ? (
                        <Loader />
                    ) : this.state.jobData && this.state.jobData.length > 0 ? (
                        <ul className='jobsView__jobList'>
                            {
                                this.state.jobData.map(job => {
                                    return <JobsTile key={'jobsTile' + job._attributes.jobId} job={job} />
                                })
                            }
                        </ul>
                    ) : null}
                </div>

                <div className='jobsView__container--initiativ centered'>
                    <p className='jobsView__initiativ'>
                        Nothing suitable here at the moment but you are keen on working with us one day?<br />
                        We highly welcome your speculative application!
                    </p>
                </div>

                <div className='jobsView__container centered'>
                    <p className='jobsView__outro'>
                        Drop us your complete application documents (cover letter, CV, references / certificates) stating your earliest possible starting date to <a href="mailto:hello@asideas.de">hello@asideas.de</a>.<br />
                        <br />
                        We can´t wait for your application!!
                        <span>By the way: Your data will only be saved until the end of the application process and then deleted. However, with your consent, your application can be maintained for 6 more months so that we can contact you if we find a suitable vacancy for you meanwhile.</span>
                    </p>
                </div>

            </section >
        );
    };
}

export default JobsView;
