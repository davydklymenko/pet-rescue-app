import React from "react";
import purina from "../../recourses/partners/purina.png";
import animalAid from "../../recourses/partners/animalaid.jpg";
import tataTrusts from "../../recourses/partners/tata_trusts.png";
import josera from "../../recourses/partners/josera.png";

import './petPartners.css';

const PetPartners = () => {
    return(
        <div className="parteners-parents">
            <div className="partners-container">
                <img className="partner" src={purina} alt="partner_of_a_sap"/>
                <img className="partner" src={animalAid} alt="partner_of_a_sap"/>
                <img className="partner" src={tataTrusts} alt="partner_of_a_sap"/>
                <img className="partner" src={josera} alt="partner_of_a_sap"/>
            </div>
        </div>
    )
}

export default PetPartners;