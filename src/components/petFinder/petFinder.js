import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pin } from "react-postal-code";

import coolWaves from "../../recourses/waves/cool-waves.png";
import bunny from "../../recourses/bunny.png";
import cat from "../../recourses/cat.png";
import dog from "../../recourses/dog.png";

import './petFinder.css';
 
const Pet = ({ picture, description, option }) => { 
    const [active, setActive] = useState(false);

    function toggleActivePet() {
        setActive(prevActive => !prevActive);
    }

    return (
        <div className="option__pet" style={active ? { backgroundColor: '#F0DEDE', transition: 'all .3s ease-in-out' } : null}>
            <img src={picture} alt={description}/>
            <button onClick={toggleActivePet} style={active ? { backgroundColor: '#194918', color: "#FFF", transition: 'all .3s ease-in-out' } : null}>{option}</button>
        </div>
    );
}

const PetFinder = () => {
    const [input, setInput] = useState('');

    return (
        <div className="main">
            <img className="cool-waves" src={coolWaves} alt="cool_waves" draggable="false"/>
            <div className="finder__whapper">
                <h1>Find pets near you</h1>

                <div className="finder__options">
                    <Pet option="Find a bunny" description="bunny_sap" picture={bunny} />
                    <Pet option="Find a cat" description="cat_sap" picture={cat} />
                    <Pet option="Find a dog" description="dog_sap" picture={dog} />
                </div>

                <form action="#">
                    <input type="text" onChange={(e) => setInput(e.target.value)} placeholder="Enter zip code" maxLength={6} required/>
                    <button type="submit" className="search"><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>

                <div className="pin-block">
                        <i class="fa-solid fa-map-pin" style={{ "color": "#000000" }}></i>
                        <Pin
                        pincode={input}
                        showBlock={true}
                        showCountry={true}
                        showDistrict={true}
                        errorState="Zip code not found. Try again"
                        />
                    </div>
            </div>
        </div>
    );
}

export default PetFinder;