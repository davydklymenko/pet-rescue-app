import React from 'react';
import './petFinder.css';
import coolWaves from "../../recourses/waves/cool-waves.png";
import bunny from "../../recourses/bunny.png";
import cat from "../../recourses/cat.png";
import dog from "../../recourses/dog.png";

 
export const Pet = ({ picture, description, option }) => { 
    return(
        <div className="option__pet">
            <img src={picture} alt={description} />
            <button>{option}</button>
        </div>
    )
}

export const PetFinder = () => {
    return (
        <div className="main">
            <img className="cool-waves" src={coolWaves} alt="cool_waves" draggable="false"/>
            <div className="finder__whapper">
                <h1>Find pets near you</h1>

                <div className="finder__options" >

                <Pet option="Find a bunny" 
                     description="bunny_sap" 
                     picture={bunny} />
                <Pet option="Find a cat" 
                     description="cat_sap" 
                     picture={cat} />
                <Pet option="Find a dog" 
                     description="dog_sap" 
                     picture={dog} />
                </div>

                <form action="#">
                    <input type="search" placeholder="Enter zip code" maxLength={5} />
                    <button className="search"><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </div>
    </div>
    )
}
