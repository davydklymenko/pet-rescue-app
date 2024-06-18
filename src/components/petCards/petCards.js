import React from "react";
import './petCards.css';

import women from '../../recourses/women.png';
import pets from '../../recourses/pets.png';
import kittens from '../../recourses/kittens.png';

export const Card = ({ picture, title, alt, description, message }) => {
    return (
        <div className="preview">
            <img src={picture} alt={alt} />
            <h4>{title}</h4>
            <p>{description}</p>
            <button>{message}</button>
        </div>
    );
}

export const PetCards = () => {
    return (
        <div className="card__wrapper">
            <h1>Latest from saveApet</h1>

            <div className="cards">
                <Card title="Learn how to start your own shelter" 
                      description="We have a free intensive course available for those who would like to start an animal shelter..." 
                      picture={women}
                      alt="intensive-course-sap" 
                      message="Learn more..." />
                <Card title="Pets available in and around your neighbourhood" 
                      description="If you are in or close to Amsterdam, there are lots of puppies and older dogs up for adoption..." 
                      picture={pets}
                      alt="amsterdam-sap" 
                      message="Learn more..." />
                <Card title="Kitten siblings up for adoption together" 
                      description="One and Two are looking for a home and they would love to stay together..." 
                      picture={kittens}
                      alt="kitten-sap" 
                      message="Learn more..." />
            </div>

        </div>
    );
}
