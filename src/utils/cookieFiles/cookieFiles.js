import React from "react";
import { Link } from "react-router-dom";
import CookieConsent from "react-cookie-consent";

const CookieFilesAgreement = () => {
    return(
        <div className="cookie">
            <CookieConsent
                location="bottom"
                buttonText="I accept"
                acceptOnScroll
                acceptOnScrollPercentage={90}
                enableDeclineButton
                cookieName="saveAPetCookieConsent"
                containerClasses="cookie-consent-container"
                buttonClasses="cookie-accept-button"
                declineButtonClasses="cookie-decline-button"
                contentClasses="cookie-content"
                expires={150}
                style={{ padding:"5px", background: "#FFF", color: "#000", border: "1px solid #32A92F" }}
                buttonStyle={{ color: "#FFF", backgroundColor: "#32A92F"  }}
            >
                <b>We use cookies</b>
                <div className="text" style={{}}>We use cookies primarily for analytics to enhance your experiments. 
                                            By accepting, you agree to our use of this cookies you can learn more about our adoption
                                            terms and condition and cookies policy.</div>
                <div className="cookie-links" style={{ paddingTop: "10px"}}>
                    <Link style={{textDecoration: "none", color: "#424242"}} to="/privacy-policy">Privacy Policy</Link> <Link style={{textDecoration: "none", color: "#424242"}} to="/cuties/adoption-care-terms-and-conditions">Terms and Conditions</Link>
                </div>
            </CookieConsent>
      </div>
    );
};

export default CookieFilesAgreement;