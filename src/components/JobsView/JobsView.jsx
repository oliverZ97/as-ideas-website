import React from 'react';

import JobService from '../../services/JobService';
import JobsTile from '../HomeView/Jobs/JobsTile/JobsTile';

import './JobsView.scss'

class JobsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobData: null
        };
    }


    componentDidMount() {
        JobService.getJobs()
            .then((jobData) => {
                this.setState({ jobData });
            })
    }



    render() {
        return (
            <section className='jobsView'>
                <div className='jobsView__container--heading centered'>
                    <h1 className='jobsView__heading sectionHeading'>
                        {'Jobs & Career'}
                    </h1>
                </div>
                <div className='jobsView__container--intro centered'>
                    <p className='jobsView__intro'>
                        A lot of cool technology is hidden in our products. Become part of our unique team and burn with us during the development, because we want to shape the media use of tomorrow.
                </p>
                </div>

                <div className='jobsView__container--tiles centered'>
                    {this.state.jobData ? (
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
                        Drop us your complete application documents (cover letter, CV, references / certificates) stating your earliest possible starting date and your salary expectations to hello@asideas.de<br />
                        We can´t wait for your application!!
                    </p>
                </div>

            </section>
        );
    };
}

export default JobsView;
