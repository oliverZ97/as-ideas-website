import React from "react";

import "./layout.css";

import Header from "./../Header";
import Footer from "../Footer/footer";

export default class Layout extends React.Component {
    render() {
        return (
            <div className="app-wrapper">
                <Header/>

                <div className="content">
                    {this.props.children}
                </div>

                <Footer/>
            </div>
        );
    }
}