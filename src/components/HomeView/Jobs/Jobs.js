import React from 'react';

import './Jobs.scss';
import JobService from '../../../services/JobService';
import JobsTile from './JobsTile/JobsTile';

class Jobs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            jobData: null
        };
    }


    componentDidMount() {
        JobService.getJobs()
            .then((jobData) => {
                this.setState({ jobData: jobData.slice(0, 3) });
            })
    }


    render() {
        return (
            <section id='job' className='jobs centered'>
                <div className='jobs__container'>
                    <h1 className='jobs__heading sectionHeading'>
                        We are hiring
                    </h1>
                    {this.state.jobData ? (
                        <ul className='jobs__jobList'>
                            {
                                this.state.jobData.map(job => {
                                    return <JobsTile key={'jobsTile' + job._attributes.jobId} job={job} />
                                })
                            }
                            {
                                <JobsTile job={{ _attributes: { jobId: 'x' }, title: { _cdata: 'more ...' } }} url={'/jobs'} />
                            }
                        </ul>
                    ) : null}
                </div>
            </section>
        );
    }
}

export default Jobs;
