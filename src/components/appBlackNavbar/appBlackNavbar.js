import React from "react";
import { Link } from "react-router-dom";
import logoBlack from "../../recourses/logo black.png"
import './appBlackNavbar.css';

 
const AppBlackNavbar = () => {
    return (
        <div className="container">
                <div className="navbar-container">
                    <ul>
                      <Link to="/">
                        <img className="logo" src={logoBlack} alt="logo_sap_black" />
                        </Link>

                            <li><a href="#">About</a></li>
                         <div className="links-navbar">
                            <li><a href="#">Services</a></li>
                            <li><Link to="/cuties">Adopt</Link></li>
                        </div>
                            <li><Link to="/articles">Facts</Link></li>
                            <li><Link to="/contact-us/"><button style={{ fontWeight: 500 }}>Contact</button></Link></li>
                            <li><Link className="go-back" to="/">⬅ Back</Link></li>
                    </ul>
                </div>
        </div>
    )
}

export default AppBlackNavbar;