import React from "react";

export default class Link extends React.Component {
  // {to, children, className, onClick}
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    if (window) {
      // e.preventDefault();
      let to = this.props.to;
      let onHome = window.location.pathname === '/';
      let external = to.match('/|@');

      if (external) {

      }
    }
  }

  render() {
    let external = this.props.to.match('/|@');
    let to = external ? this.props.to : '/' + this.props.to;

    return (
      <a
        href={to}
        className={'scrollingLink__container ' + (this.props.className ? this.props.className : '')}
        onClick={this.handleClick.bind(this)}
      >
        {this.props.children}
      </a>
    )
  }
}
