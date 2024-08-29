import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Card } from "../../components/petCards/petCards";
import AppBlackNavbar from "../../components/appBlackNavbar/appBlackNavbar";
import AppFooter from "../../components/appFooter/appFooter";

import { kittensDocumentation, womenWithADog, pets } from "../../recourses/indexArticles";

import './singleArticlesPage.css';

const cards = [
    { title: "Pets available in and around your neighbourhood", description: "If you are in or close to Amsterdam, there are lots of puppies and older dogs up for adoption...", picture: pets, alt: "amsterdam-sap", link: "/articles/pets_neighbourhood" },
    { title: "Kitten siblings up for adoption together", description: "One and Two are looking for a home and they would love to stay together...", picture: kittensDocumentation, alt: "kittens-sap", link: "/articles/kittens_adoption" },
    { title: "Learn how to start your own shelter", description: "We have a free intensive course available for those who would like to start an animal shelter...", picture: womenWithADog, alt: "course-sap", link: "/articles/course_shelter" },
];

const SingleArticlesPage = () => {
    const itemsPerPage = 400;

    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(cards.length / itemsPerPage);

    const currentCards = cards.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (
        <div className="articles__container">
            <Helmet>
                <meta name="description" content="The main page of global documentaion of saveApet.xyz to give users read the documentantion about pet care and rescue." />
                <title>Soft documentaion collected to read | saveApet</title>
            </Helmet>

            <div className="navbar__container">
                <AppBlackNavbar />
            </div>

            <div className="article__path__way">
                <Link to="/" className="home">Home</Link>/<p className="articles">Articles</p>
            </div>

            <div className="banner">
                <div className="message-banner">
                    <h1 className="title">Documentaion of facts page</h1>
                    <h4 className="seduction-message">Search interesting information about a pets? Start learning!</h4>
                </div>
            </div>

            <div className="articles__cards">
                    {currentCards.map((cards, index) => (
                        <div className="articles__card" key={index}>
                            <Card title={cards.title} description={cards.description} picture={cards.picture} alt={cards.alt} link={cards.link} />
                        </div>
                    ))}
            </div>

            <div className="cards__pagination">
                {totalPages > 3 ? (
                    <>
                        {[...Array(3)].map((_, lastindex) => (
                            <button
                                key={lastindex}
                                className={`slide__card__button ${currentPage === lastindex + 1 ? 'active' : ''}`}
                                onClick={() => handlePageChange(lastindex + 1)}
                            >
                                {lastindex + 1}
                            </button>
                        ))}
                        <button className="slide__card__button">...</button>
                            <button
                                className={`slide__card__button ${currentPage === totalPages ? 'active' : ''}`}
                                onClick={() => setCurrentPage(totalPages)}
                            >
                                {totalPages}
                        </button>
                    </>
                ) : (
                    [...Array(totalPages)].map((_, index) => (
                            <button
                                key={index}
                                className={`slide__card__button ${currentPage === index + 1 ? 'active' : ''}`}
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </button>
                    ))
                )}
            </div>

            <div className="footer__container">
                <AppFooter />
            </div>
        </div >
    );
};

export default SingleArticlesPage;