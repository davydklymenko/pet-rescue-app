import React from "react";
import coolWaves2 from "../../recourses/waves/cool-waves-2.png";
import instagram from "../../recourses/insta.png";
import facebook from "../../recourses/facebook.png";
import twitter from "../../recourses/tw.png";

import cardPayment from "../../recourses/cardpayments.svg";

import './appFooter.css';

const AppFooter = () => {
    return (
        <div className="footer__whapper">
            <div className="footer__info">
                <div className="footer__section">
                    <b>Contact us</b>
                    <ul className="contact_us">
                        <li>121 /68, near RamaKrishna Ashram Marg, Block 42, DIZ Area, Gole Market</li>
                        <li>110001</li>
                        <li>New Delhi</li>
                        <div className="list-adress">
                            <li><i className="fa-solid fa-phone" style={{ "color": "#fff" }}></i> +91 870 021 6608</li>
                            <li><i className="fa-regular fa-envelope" style={{ "color": "#fff" }}></i> info@saveapet.online</li>
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

            <div className="social-media-and-cards">
                <a href="https://www.instagram.com/saveapet">
                    <img src={instagram} alt="instagram"/>
                </a>
                <a href="https://www.facebook.com/SaveAPetIL">
                    <img src={facebook} alt="facebook"/>
                </a>
                <a href="https://twitter.com/saveapetil">
                    <img src={twitter} alt="twitter"/>
                </a>

                <div className="card-payment">
                    <img src={cardPayment} alt="card_payments_sAp" draggable="false" />
                </div>
            </div>
            
            <div className="security-copyright-message">@2024 saveApet. All rights reserved.</div>
            <img className="coolwhaves" src={coolWaves2} alt="cool_whaves_2" draggable="false"/>
        </div>
    );
}

export default AppFooter;
