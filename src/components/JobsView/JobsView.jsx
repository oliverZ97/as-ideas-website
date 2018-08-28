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
            <section className='jobsView centered'>
                <h1 className='jobsView__heading sectionHeading'>
                    {'Jobs & Career'}
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
            </section>
        );
    };
}

export default JobsView;
