import React from 'react';

import './NotFound.scss'

class NotFound extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className='notFound'>
                <h2>
                    Sorry, we can't find what you're searching for.
                </h2>
                <h3>¯\(ಠ_ಠ)/¯</h3>
            </section>
        );
    };
}

export default NotFound;
