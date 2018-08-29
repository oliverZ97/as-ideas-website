import React from 'react';

import JobService from '../../services/JobService';
import Terminal from './Terminal/Terminal';
import NotFound from '../NotFound/NotFound';
import Loader from '../Loader/Loader';
import SocialBar from './SocialBar/SocialBar';

import './JobDetailsView.scss'

class JobDetailsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobData: null,
            showLoader: true
        };
    }

    componentDidMount() {
        let jobId = this.props.match.params.jobId;
        JobService.getJobById(jobId)
            .then((jobData) => {
                if (jobData) {
                    let randomImage = '/recruiting/' + (Math.floor(Math.random() * 6) + 1) + '.jpg'

                    document.querySelector('meta[property=og\\:title]').setAttribute('content', jobData.title._cdata);
                    document.querySelector('meta[property=og\\:image]').setAttribute('content', randomImage);
                    document.querySelector('meta[property=og\\:description]').setAttribute('content', "Axel Springer Ideas ist eine 100 prozentige Tochter der Axel Springer SE. Wir arbeiten als Startup im Konzern und finden Lösungen rund um das Thema Digitaler Content. Wir agieren als Innovationstreiber und setzen je nach Aufgabenstellung von Prototypen bis Plattformen das beste Ergebnis um.");
                }

                this.setState({ jobData, showLoader: false });
            })
    }

    render() {
        let job = this.state.jobData;

        let randomImage = '/recruiting/' + (Math.floor(Math.random() * 6) + 1) + '.jpg'

        let socialBarData;
        if (this.state.jobData) {
            socialBarData = {
                title: job.title._cdata,
                summary: "Axel Springer Ideas ist eine 100 prozentige Tochter der Axel Springer SE. Wir arbeiten als Startup im Konzern und finden Lösungen rund um das Thema Digitaler Content. Wir agieren als Innovationstreiber und setzen je nach Aufgabenstellung von Prototypen bis Plattformen das beste Ergebnis um.",
                url: window.location.href
            }
        }

        return (
            <section className='jobDetailsView centered'>
                {this.state.jobData ? (
                    <div className='jobDetailsView__container'>
                        <div className='jobDetailsView__subnav'>
                            <a className='jobDetailsView__section' href='/jobs'>Career</a>
                            <SocialBar object={socialBarData} />
                        </div>
                        <h1 className='jobDetailsView__heading sectionHeading'>
                            {job.title._cdata}
                            <a className='jobDetailsView__applyButton' href={job.urlApplicationUrl._cdata} target="_blank" >bewerben!</a>
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
                            <Terminal url={job.urlApplicationUrl._cdata} />
                        </div>
                    </div>
                ) : this.state.showLoader ? (
                    <Loader />
                ) : (
                            <NotFound />
                        )
                }
            </section>
        );
    };
}

export default JobDetailsView;
