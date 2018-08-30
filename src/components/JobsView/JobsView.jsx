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
                <div className='jobsView__container--video centered'>
                    <iframe width="700" height="250" src="https://www.youtube-nocookie.com/embed/btQwUY6qzQw?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                </div>

                <div className='jobsView__container--tiles centered'>
                    <h1 className='jobsView__heading sectionHeading'>
                        {'We are hiring'}
                    </h1>
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
                        By the way: Your data will only be saved until the end of the application process and then deleted. However, with your consent, your application can be maintained for 6 more months so that we can contact you if we find a suitable vacancy for you meanwhile.
                    </p>
                </div>

            </section>
        );
    };
}

export default JobsView;
