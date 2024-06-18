import React from "react";
import logo from "../../recourses/logo.png"
import family from "../../recourses/family.png";
import lapy from "../../recourses/lapy.png";
import './appHeader.css';

 
const AppHeader = () => {
    return (
        <div className="whapper">
            <div className="bg__whapper">
                <div className="navbar">
                    <ul>
                      <img className="logo" src={logo} alt="logo_sap" />

                            <li><a href="#">About</a></li>
                         <div className="special-links">
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Adopt</a></li>
                        </div>
                            <li><a href="#">News</a></li>
                            <li><a href="#"><button><b>Contact</b></button></a></li>
                    </ul>
                </div>
                    <div className="info__whapper">
                        <p>Share your love, adopt a pet and give them a home <img src={lapy} alt="paws_sap" /></p>
                        <img src={family} alt="family_with_a_dog_sap" draggable="false"/>
                </div>
            </div>
        </div>
    )
}

export default AppHeader;