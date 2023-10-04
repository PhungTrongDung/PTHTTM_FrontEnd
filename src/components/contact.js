import React from "react";
import './contact.css';

function Contact() {
    return (
        <div id="content">
            <div id="contact" class="content-section">
                <h2 class="section-heading">CONTACT</h2>
                <p class="section-sub-heading">Fan? Drop a note!</p>

                <div class="row contact-content">
                    <div class="col col-half s-col-full contact-info">
                        <p><i class="ti-location-pin"></i>Chicago, US</p>
                        <p><i class="ti-mobile"></i>Phone: <a href="tell:+00 151515">+00 151515</a></p>
                        <p><i class="ti-email"></i>Email: <a href="mailto:mail@mail.com">mail@mail.com</a></p>

                    </div>

                    <div class="col col-half s-col-full contact-form">
                        <form action="">
                            <div class="row">
                                <div class="col col-half s-col-full">
                                    <input type="text" name="" placeholder="Name" required id="contact-name"
                                        class="form-control"></input>
                                </div>
                                <div class="col col-half s-col-full s-mt-8">
                                    <input type="email" name="" placeholder="Email" required id="contact-email"
                                        class="form-control"></input>
                                </div>
                            </div>

                            <div class="row mt-8">
                                <div class="col col-full">
                                    <input type="text" name="" placeholder="Message" required id="contact-message"
                                        class="form-control"></input>
                                </div>
                            </div>
                            <input class="contact-submit-btn btn pull-right mt-16 s-full-width" type="submit"
                                value="SEND"></input>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;