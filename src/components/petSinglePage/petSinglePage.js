import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import AppBlackNavbar from "../appBlackNavbar/appBlackNavbar";
import AdoptAPetModal from "../adoptAPetModal/adoptAPetModal";
import Pets from "../../database/petsDataBase";
import Page404 from "../../pages/404/404";

import "./petSinglePage.css";

const SinglePage = ({ animal, sex, age, housetrained, health, goodinahomewith, description, nickname, photo, title, content, alt, openModal }) => (
    <div className="page">
        <header>
            <AppBlackNavbar />
        </header>
        <div className="path_way_container">
            <div className="path_way_cutie">
                <Link to="/" className="home">Home</Link> / <Link to="/cuties" className="cuties">Cuties</Link> /<div className="cutie_nickname">{title}</div>
            </div>
        </div>
        <div className="single-page-container">
            <Helmet>
                <meta name="description" content={content} />
                <title>{nickname}</title>
            </Helmet>
            <main>
                <div className="pet-info">
                    <div title={title} className="pet-view">
                        <img src={photo} alt={alt} />
                        <button onClick={openModal} className="adopt-a-pet">Adopt</button>
                    </div>
                    <div className="pet-description">
                        <h1>{nickname}</h1><hr />
                        <ul className="pet-type">
                            <li>{animal}</li>
                            <li>{sex}</li>
                            <li>{age}</li>
                        </ul><hr />
                        <div className="pet-about">
                            <h2 style={{ "fontFamily": "Montserrat, sans-serif", "fontWeight": "600" }}>About</h2>
                            <b>HOUSE-TRAINED</b>
                            <span>{housetrained}</span>
                            <b>HEALTH</b>
                            <span>{health}</span>
                            <b>GOOD IN A HOME WITH</b>
                            <span>{goodinahomewith}</span>
                        </div><hr />
                        <h2 style={{ "fontFamily": "Montserrat, sans-serif", "fontWeight": "600" }}>Meet {nickname}</h2>
                        <p>{description}</p>
                    </div>
                </div>
            </main>
        </div>
    </div>
);

const PetSinglePage = () => {
    const { petId } = useParams();
    const pet = Pets[petId];
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return pet ? (
        <div>
            <SinglePage
                animal={pet.animal}
                sex={pet.sex}
                age={pet.age}
                housetrained={pet.housetrained}
                health={pet.health}
                goodinahomewith={pet.goodinahomewith}
                description={pet.description}
                nickname={pet.nickname}
                content={pet.content}
                photo={pet.photo}
                title={pet.title}
                alt={pet.alt}
                openModal={openModal}
            />
            {isModalOpen && <AdoptAPetModal closeModal={closeModal} />}
        </div>
    ) : (
        <Page404 />
    );
};

export default PetSinglePage;
