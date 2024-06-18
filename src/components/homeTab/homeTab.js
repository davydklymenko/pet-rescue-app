import React from "react";
import './homeTab.css';
import star from "../../recourses/cuties/star.png";
import luna from "../../recourses/cuties/luna.png"; 
import nebula from "../../recourses/cuties/nebula.png"; 

export const Cutie = ({ picture, description, nickname }) => { 
    return(
        <div className="pet__whapper">
            <div className="pet">
                <img src={picture} alt={description} />
                <p>{nickname}</p>
            </div>
        </div>
    )
}

export const HomeTab = () => {
    return (
        <div className="tab__wrapper">

        <h1>These cuties are searching for a home</h1>

        <div className="pets__wrapper">
            <Cutie nickname="Star" description="star_sap" picture={star} />
            <Cutie nickname="Luna" description="luna_sap" picture={luna}/>
            <Cutie nickname="Nebula" description="nebula_sap" picture={nebula}/>
        </div>
     </div>
    )
}

