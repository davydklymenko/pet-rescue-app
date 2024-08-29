import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {Cutie} from "../../components/petHomeTab/petHomeTab";
import AppBlackNavbar from "../../components/appBlackNavbar/appBlackNavbar";
import AppFooter from "../../components/appFooter/appFooter";

import { star, axolotl, fish, lizard, luna, nebula, parrot, rat } from "../../recourses/indexCuties";
import bannerCutiePage from "../../recourses/adblocks/banner-cutie-page.svg";

import './cutiesPage.css';

const cuties = [
    { nickname: "Star", picture: star, description: "star_sap" },
    { nickname: "Luna", picture: luna, description: "luna_sap" },
    { nickname: "Nebula", picture: nebula, description: "nebula_sap" },
    { nickname: "Dory", picture: fish, description: "dory_sap" },
    { nickname: "Fancy", picture: axolotl, description: "fancy_sap" },
    { nickname: "Chupi", picture: parrot, description: "chupi_sap" },
    { nickname: "Cheese", picture: rat, description: "cheese_sap" },
    { nickname: "Zora", picture: lizard, description: "zora_sap" },
];

const CutiesPage = () => {
    const itemsPerPage = 400;

    const [currentPage, setCurrentPage] = useState(1);

    const [isPrevPageButtonShown, setIsPrevPageButtonShown] = useState(false);

    const totalPages = Math.ceil(cuties.length / itemsPerPage);

    const currentCuties = cuties.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const tooglePrevPageButton = () => {
        setIsPrevPageButtonShown(!isPrevPageButtonShown);
    }

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="parents__container">
            <Helmet>
                <meta name="description" content="Single page, where all cuties are collected and located here." />
                <title>All cuties for own adoption | saveApet</title>
            </Helmet>
            <div className="navbar__container">
                <AppBlackNavbar/>
            </div>
            <div className="path_way">
                <Link to="/" className="home">Home</Link>/<Link to="/cuties" className="cuties">Cuties</Link>
            </div>

            <div className="ad-banner">
                <img className="banner" src={bannerCutiePage} alt="ad-banner-sap-00001" />

                <div className="message-banner">
                    <h1 className="title">Cuties adoption page</h1>
                    <h4 className="seduction-message">Have you wanted to get a pet for a long time? Start adoption now!</h4>
                </div>
            </div>
            <div className="cutie__container">
                {currentCuties.map((cutie, index) => (
                 <Link key={index} to={`/cuties/${cutie.nickname.toLowerCase()}`}>
                    <Cutie nickname={cutie.nickname} description={cutie.description} picture={cutie.picture} />
                </Link>
                ))}
            </div>

            <div className="pagination">
                {totalPages > 3 ? (
                    <>
                        {[...Array(3)].map((_, lastindex) => (
                            <button
                                key={lastindex}
                                className={`slide__button ${currentPage === lastindex + 1 ? 'active' : ''}`}
                                onClick={() => handlePageChange(lastindex + 1)}
                            >
                            {lastindex + 1}
                            </button>
                        ))}

                <button onClick={tooglePrevPageButton} className="slide__button dots">
                ...
                </button>
                {isPrevPageButtonShown && (
                    <>
                        <button 
                            className="slide__button"
                            onClick={() => handlePageChange(totalPages - 1)} 
                        >
                        {totalPages - 1}
                        </button>
                    </>
                )}
                    <button
                        className={`slide__button ${currentPage === totalPages ? 'active' : ''}`}
                        onClick={() => setCurrentPage(totalPages)}
                        >
                        {totalPages}
                    </button>
                    </>
                ) : (
                    [...Array(totalPages)].map((_, index) => (
                            <button
                                key={index}
                                className={`slide__button ${currentPage === index + 1 ? 'active' : ''}`}
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </button>
                    ))
                )}
            </div>
            
            <div className="footer__container">
                <AppFooter/>
            </div>
        </div>
    );
};

export default CutiesPage;