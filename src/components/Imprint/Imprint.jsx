import React from "react";
import './Imprint.scss'

export default class Imprint extends React.Component {
    render() {
        return (
            <section className='imprint centered'>
                <div>
                    <h1 className='sectionHeading'>Impressum</h1>
                    <p>
                        <b>Anbieter:</b><br />
                        <br />
                        Axel Springer Ideas Engineering<br />
                        Axel-Springer-Straße 65<br />
                        10888 Berlin<br />
                        <br />
                        <b>Kontakt:</b><br />
                        <br />
                        Telefon: 030/2591 78100<br />
                        E-Mail: hello@asideas.de<br />
                        <br />
                        <br />
                        <b>Verantwortlich für den Inhalt nach § 6 Abs.2 MDStV:</b><br />
                        <br />
                        Michael Alber<br />
                        COO<br />
                        Axel-Springer-Straße 65<br />
                        10888 Berlin<br />
                        <br />
                        Amtsgericht/ Handelsregister<br />
                        Sitz Berlin, Amtsgericht Charlottenburg, HRB 138466 B<br />
                        USt-IdNr. DE 287499537<br />
                        Geschäftsführer: Samir Fadlallah, Michael Alber<br />
                    </p>
                </div>
            </section>
        );
    }
}
