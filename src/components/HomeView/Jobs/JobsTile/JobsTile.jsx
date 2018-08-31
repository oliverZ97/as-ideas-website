import React from 'react';

import './JobsTile.scss';

class JobsTile extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.props.url) {
            window.location.href = this.props.url;
        } else {
            window.location.href = '/jobs/' + this.props.job._attributes.jobId;
        }
    }

    render() {
        return (
            <li className='jobsTile' onClick={this.handleClick}>
                <div className='jobsTile__jobContent'>
                    <p className='jobsTile__jobTitle'>
                        {this.props.job.title._cdata}
                    </p>
                </div>
                <div className='jobsTile__overlay'>
                    <p className='jobsTile__jobTitle'>
                        {this.props.job.title._cdata}
                    </p>
                </div>
            </li >
        );
    }
}

export default JobsTile;

