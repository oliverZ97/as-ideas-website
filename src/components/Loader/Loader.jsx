import React from 'react';

import './Loader.scss'

class Loader extends React.Component {
    render() {
        return (
            <div className="loader">
                <img src={require('./ideas.gif')} alt="Loading spinner" />
            </div>
        );
    };
}

export default Loader;



