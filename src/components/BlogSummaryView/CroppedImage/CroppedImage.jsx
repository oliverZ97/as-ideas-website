import React from "react";
import "./CroppedImage.scss";

class CroppedImage extends React.Component {
    render() {
        return (
            <figure
                className={'croppedImage ' + (this.props.className ? this.props.className : '')}
                style={{ backgroundImage: 'url(' + this.props.src + ')' }}
            />
        )
    }
};

export default CroppedImage;