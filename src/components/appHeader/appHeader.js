import React from "react";
import { Link } from "react-router-dom";
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
                     <Link to="/">
                        <img className="logo" src={logo} alt="logo_sap" />
                        </Link>

                            <li><a href="#">About</a></li>
                         <div className="special-links">
                            <li><a href="#">Services</a></li>
                            <li><Link to="/cuties">Adopt</Link></li>
                        </div>
                            <li><Link to="/articles">Facts</Link></li>
                            <li><Link to="/contact-us/"><button className="button-solo">Contact</button></Link></li>
                    </ul>
                </div>
                    <div className="info__whapper">
                        <p>Share your love, adopt a pet safety and easier, give them a home <img src={lapy} alt="paws_sap" /></p>
                        <img src={family} alt="family_with_a_dog_sap" draggable="false"/>
                </div>
            </div>
        </div>
    )
}

export default AppHeader;