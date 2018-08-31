import React from 'react';

import './Jobs.scss';
import JobService from '../../../services/JobService';
import JobsTile from './JobsTile/JobsTile';
import Loader from '../../Loader/Loader';

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
        if (this.state.jobData && this.state.jobData.length === 0) return null;
        return (
            <section id='job' className='jobs centered'>
                <div className='jobs__container'>
                    <h1 className='sectionHeading jobs__heading'>
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
                    ) :
                        <Loader />
                    }
                </div>
            </section>
        );
    }
}

export default Jobs;
