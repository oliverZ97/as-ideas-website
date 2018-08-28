import React from 'react';

import JobService from '../../services/JobService';
import Terminal from './Terminal/Terminal';

import './JobDetailsView.scss'

class JobDetailsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobData: null
        };
    }


    componentDidMount() {
        let jobId = this.props.match.params.jobId;
        JobService.getJobById(jobId)
            .then((jobData) => {
                this.setState({ jobData });
            })
    }



    render() {
        let job = this.state.jobData;

        let randomImage = '/recruiting/' + (Math.floor(Math.random() * 5) + 1) + '.jpg'

        console.log(randomImage);

        return (
            <section className='jobDetailsView centered'>
                {this.state.jobData ? (
                    <div className='jobDetailsView__container'>
                        <h1 className='jobDetailsView__heading sectionHeading'>
                            <a className='jobDetailsView__section' href='/jobs'>Career</a>
                            {job.title._cdata}
                        </h1>
                        <div>
                            <div className='jobDetailsView__hero'>
                                <div className='image' style={{ backgroundImage: `url(${randomImage})` }}></div>
                            </div>
                            <p className='jobDetailsView__content--heading'>{job.titleTasks._cdata}</p>
                            <p className='jobDetailsView__content' dangerouslySetInnerHTML={{ __html: job.htmlTasks._cdata }} />
                            <p className='jobDetailsView__content--heading'>{job.titleProfile._cdata}</p>
                            <p className='jobDetailsView__content' dangerouslySetInnerHTML={{ __html: job.htmlProfile._cdata }} />
                            <p className='jobDetailsView__content--heading'>{job.titleOffer._cdata}</p>
                            <p className='jobDetailsView__content' dangerouslySetInnerHTML={{ __html: job.htmlOffer._cdata }} />
                            <p className='jobDetailsView__content--heading'>{job.titleContact._cdata}</p>
                            <p className='jobDetailsView__content' dangerouslySetInnerHTML={{ __html: job.htmlContact._cdata }} />
                            <p className='jobDetailsView__content jobDetailsView__content--no-heading' dangerouslySetInnerHTML={{ __html: job.htmlInfoEqualRights._cdata }} />
                            {/* <a className='jobDetailsView__applyButton' href={job.urlApplicationUrl._cdata} target="_blank" >Jetzt hier bewerben</a> */}
                            <Terminal url={job.urlApplicationUrl._cdata} />
                        </div>
                    </div>
                ) : null}
            </section>
        );
    };
}

export default JobDetailsView;
