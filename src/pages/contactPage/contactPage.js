import React from "react";
import AppBlackNavbar from "../../components/appBlackNavbar/appBlackNavbar";
import AppFooter from "../../components/appFooter/appFooter";
import { Link } from "react-router-dom"; 
import GoogleMapReact from 'google-map-react';

import contactUs from "../../recourses/contact-us.jpg";
import './contactPage.css';

function ContactPage() {
    const defaultProps = {
        center: {
          lat: 28.6391606,
          lng: 77.20818
        },
        zoom: 23
      };

    return (
        <div className="contact__container">
            <div className="contact__header">
                <AppBlackNavbar/>
            </div>
            <div className="contact__path__way">
                <Link to="/" className="home__contact">Home</Link>/<p className="contacter">Contact</p>
            </div>

            <div className="contact__elements">
                <img className="contact-preview" src={contactUs} alt="contact-us-pets-sap" draggable="false" />
                <h1 className="contact__title">
                    Have a question? Call and write us!
                </h1>

                <div className="contact__address">

                    <h1 className="contact__title">
                        The official saveApet animal rescue and adoption center
                    </h1>
                    <p className="contact-description">
                        121/68, near RamaKrishna Ashram Marg, Block 42, DIZ Area, Gole Market, New Delhi, Delhi 110001
                    </p>
                    <p className="center-schedule">
                        Open in 8 a.m. and Closed in 11 p.m. Monday to Friday
                    </p>
                </div>
                
                <div className="contact__details">
                    <div className="group__phone">
                        <h3 className="contact__phone__title">  
                            Phone number:
                        </h3>
                        <p className="contact-phone">
                            +91 870 021 66 08
                        </p>
                        <p className="phone-schedule">
                            Monday - Friday
                            From 8 a.m. to 11 p.m.
                        </p>
                    </div>

                    <div className="group__email">
                        <div className="email">
                        <h3 className="contact__email__title">  
                            Email:
                        </h3>
                        <p className="contact-email">
                            info@saveapet.online
                        </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="googlemaps">
                <div style={{ height: '50vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "" }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                    </GoogleMapReact>

                    <p className="location-message">*ONLINE PET STORE HOUSE is a saveApet adoption center</p>
                </div>
            </div>
            

            <div className="contact__footer">
                <AppFooter/>
            </div>
        </div>
    );
}

export default ContactPage;