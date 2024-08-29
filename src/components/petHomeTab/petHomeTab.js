import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { star, axolotl, fish, lizard, luna, nebula, parrot, rat } from "../../recourses/indexCuties";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import './petHomeTab.css';

const Cutie = ({ picture, description, nickname }) => {
    return (
        <div className="pet__wrapper">
            <div className="pet">
                <img src={picture} alt={description} />
                <p>{nickname}</p>
            </div>
        </div>
    );
};

const PetHomeTab = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        link: true
    };

    return (
        <div className="tab__wrapper">
            <h1>These cuties are searching for a home</h1>
            <div className="slider__container">
                <Slider className="pets__container" {...settings}>
                    <Link to="/cuties/star"><Cutie nickname="Star" description="star_sap" picture={star} /></Link>
                    <Link to="/cuties/luna"><Cutie nickname="Luna" description="luna_sap" picture={luna} /></Link>
                    <Link to="/cuties/nebula"><Cutie nickname="Nebula" description="nebula_sap" picture={nebula} /></Link>
                    <Link to="/cuties/chupi"><Cutie nickname="Chupi" description="chupi_sap" picture={parrot} /></Link>
                    <Link to="/cuties/zora"><Cutie nickname="Zora" description="zora_sap" picture={lizard} /></Link>
                </Slider>
            </div>
        </div>
    );
};

const AdoptionPetsPage = () => {
    return(
        <div className="adoption-pets-container">
           <p>Want to see more cuties? Click here!</p> <Link to="/cuties"><button>More cuties</button></Link>
        </div>
    )
}

export default PetHomeTab;
export {AdoptionPetsPage};
export {Cutie};
