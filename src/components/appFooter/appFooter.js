import React from "react";
import coolWaves2 from "../../recourses/waves/cool-waves-2.png";
import instagram from "../../recourses/insta.png";
import facebook from "../../recourses/facebook.png";
import twitter from "../../recourses/tw.png";

import './appFooter.css';

const AppFooter = () => {
    return (
        <div className="footer__whapper">
            <div className="footer__info">
                <div className="footer__section">
                    <b>Contact us</b>
                    <ul className="contact_us">
                        <li>Fortis Green 7</li>
                        <li>A00110</li>
                        <li>London</li>
                        <div className="list-adress">
                            <li><i className="fa-solid fa-phone" style={{ "color": "#fff" }}></i> +44 070 3995 7729</li>
                            <li><i className="fa-regular fa-envelope" style={{ "color": "#fff" }}></i> info@saveapet.com</li>
                        </div>
                    </ul>
                </div>
                <div className="footer__section">
                    <b>Support</b>
                    <ul className="support">
                        <li><a href="donate">Donate</a></li>
                        <li><a href="pet-rescue">Pet rescue</a></li>
                        <li><a href="fundraise">Fundraise</a></li>
                    </ul>
                </div>
                <div className="footer__section">
                    <b>Impact</b>
                    <ul className="impact">
                        <li><a href="our-work">Our work</a></li>
                        <li><a href="partners">Partners</a></li>
                        <li><a href="vacancies">Vacancies</a></li>
                    </ul>
                </div>
            </div>

            <div className="social-media">
                <a href="https://www.instagram.com/saveapet">
                    <img src={instagram} alt="instagram"/>
                </a>
                <a href="https://www.facebook.com/SaveAPetIL">
                    <img src={facebook} alt="facebook"/>
                </a>
                <a href="https://twitter.com/saveapetil">
                    <img src={twitter} alt="twitter"/>
                </a>
            </div>

            <img className="coolwhaves" src={coolWaves2} alt="cool_whaves_2" draggable="false"/>
        </div>
    );
}

export default AppFooter;
