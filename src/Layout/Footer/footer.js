import React from "react";
import {Link} from "react-router-dom";

import "./footer.css";
import "./../../../node_modules/gridlex/dist/gridlex.min.css";


class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer-container grid-spaceBetween">
                    <div className="col-4_xs-12">
                        <h2>We are hiring</h2>
                        <a href='https://career.axelspringer.com/jobangebote/#"ideas engineering"' target="_blank">Jobportal</a>
                    </div>
                    <div className="col-4_xs-12">
                        <h2>Contact / Imprint</h2>
                        <div className="footer__list">
                            <p>Axel Springer Ideas Engineering GmbH</p>
                            <p>
                                ein Unternehmen der Axel Springer SE<br />
                                Axel-Springer-Straße 65<br />
                                10888 Berlin
                            </p>
                            <p>
                                Geschäftsführer<br />
                                Samir Fadlallah, Michael Alber
                            </p>
                            <p>
                                Handelsregistereintrag<br />
                                Amtsgericht Charlottenburg, Berlin HRB 138466 B
                            </p>
                            <p>
                                +49-30-259178100<br />
                                <a href="mailto:hello@asideas.de">hello@asideas.de</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;