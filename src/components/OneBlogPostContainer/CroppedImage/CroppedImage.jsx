import React from "react";
import "./CroppedImage.scss";

class CroppedImage extends React.Component {
  render() {
    let src = this.props.src.replace("//", "/");
    return (
      <figure
        className={'croppedImage ' + (this.props.className ? this.props.className : '')}
        style={{backgroundImage: 'url(' + src + ')'}}
      />
    )
  }
};

export default CroppedImage;
