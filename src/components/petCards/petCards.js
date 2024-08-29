import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import './petCards.css';

import { kittensDocumentation , womenWithADog, pets } from "../../recourses/indexArticles";

const Card = ({ picture, title, alt, description, link }) => {
    return (
        <div className="preview">
            <img className="fact-preview" src={picture} alt={alt} />
            <h4 className="fact-title">{title}</h4>
            <p className="fact-description">{description}</p>
            <Link to={link}><button className="button-linker">Learn more</button></Link>
        </div>
    );
}

const PetCards = () => {
    return (
        <div className="card__wrapper">
            <h1>Different facts from saveApet</h1>

            <div className="cards">
                <Card 
                    title="Learn how to start your own shelter" 
                    description="We have a free intensive course available for those who would like to start an animal shelter..." 
                    picture={womenWithADog}
                    alt="intensive-course-sap" 
                    link="/articles/course_shelter"
                />
                <Card 
                    title="Pets available in and around your neighbourhood" 
                    description="If you are in or close to Amsterdam, there are lots of puppies and older dogs up for adoption..." 
                    picture={pets}
                    alt="amsterdam-sap" 
                    link="/articles/pets_neighbourhood"
                />
                <Card 
                    title="Kitten siblings up for adoption together" 
                    description="One and Two are looking for a home and they would love to stay together..." 
                    picture={kittensDocumentation}
                    alt="kitten-sap" 
                    link="/articles/kittens_adoption"
                />
            </div>
        </div>
    );
}

const SeeMoreFacts = () => {
    const [hover, setHover] = useState(false);

    function onMouseEnterHandler() {
        setHover(true);
    }

    function onMouseLeaverHandler() {
        setHover(false);
    }

    return(
        <div className="bottom-message">
            <p className="bottom-text">Want to see more facts? Click here!</p>
            <Link to="/articles"><button onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaverHandler} className="load">More Facts <i style={{display: hover ?  "block" : "none"}} className="fa-solid fa-chevron-right" ></i></button></Link>
        </div>
    )
}

export default PetCards;
export {Card};
export {SeeMoreFacts};
