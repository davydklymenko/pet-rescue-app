import React, { useState, useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Page404 from "../../pages/404/404";
import Articles from "../../database/globalArticlesBase";
import AppBlackNavbar from "../appBlackNavbar/appBlackNavbar";
import AppFooter from "../appFooter/appFooter";

import { Card } from "../petCards/petCards";
import { kittensDocumentation, womenWithADog, pets} from "../../recourses/indexArticles";
import fireIcon from "../../recourses/fire.png";

import './articlePage.css';

const changeColorIcon = (state, action) => {
    switch (action.type) {
        case 'toggle': 
            return { ...state, [action.icon]: state[action.icon]?.color === action.color ? { color: '#000000' } : { color: action.color } };
        default:
            throw new Error();
    }
}

const TextComponent = ({ text }) => {
    const [formattedText, setFormattedText] = useState('');

    useEffect(() => {
        const sentences = text.match(/[^.!?]+[.!?]+/g) || [];
        let totalLength = 0;
        let formatted = '';

        sentences.forEach((sentence, index) => {
            totalLength += sentence.length;
            if (totalLength > 500 && index % 5 === 0) {
                formatted += `<br><br>${sentence.trim()}`;
                totalLength = 0; 
            } else {
                formatted += `${sentence.trim()}`;
            }
        });

        setFormattedText(formatted);
    }, [text]);

    return (
        <div className="text-container" dangerouslySetInnerHTML={{ __html: formattedText }} />
    );
};

const Article = ({ title, image, about }) => {
    const [state, dispatch] = useReducer(changeColorIcon, {});

    return (
        <div className="container-article">
            <Helmet>
                <meta name="description" content="It's an article page of the website saveApet. Article it's a global information, which have inside answers on the popular questions and just information about pet care. All the articles are copyright by saveApet.inc (2024)" />
                <title>{title}</title>
            </Helmet>

            <div className="navbar__of__article">
                <AppBlackNavbar />
            </div>

            <div className="path_way_container">
                <div className="path_way_article">
                    <Link to="/" className="home">Home</Link> / <Link to="/articles" className="articles">Articles</Link> / <div className="article_title">{title}</div>
                </div>
            </div>

            <div className="article">
                <p className="top-message">sAp documentation</p>

                <div className="head-article">
                    <h1 className="article-title">{title}</h1>

                    <div className="article-links">
                        <button className="link">
                            <i className="fa-regular fa-bookmark" style={state.bookmark || { color: "#000000" }} onClick={() => dispatch({ type: 'toggle', icon: 'bookmark', color: '#FCD636' })} title="Save"></i>
                        </button>
                    </div>
                </div>
                <div className="line"></div>

                <div className="body-article">
                    <img src={image} alt="sap_image_article" />

                    <div className="text">
                        <TextComponent text={about} />
                    </div>
                </div>

                <div className="foot-article">
                    <button className="link">
                        <i className="fa-regular fa-heart" onClick={() => dispatch({ type: 'toggle', icon: 'heart', color: '#ED3F3F' })} style={state.heart || { color: "#000000" }} title="Like"></i>
                    </button>
                    <button className="link">
                        <i className="fa-regular fa-bookmark" onClick={() => dispatch({ type: 'toggle', icon: 'bookmark', color: '#FCD636' })} style={state.bookmark || { color: "#000000" }} title="Save"></i>
                    </button>
                    <button className="link">
                        <i className="fa-regular fa-star" onClick={() => dispatch({ type: 'toggle', icon: 'star', color: '#FCD636' })} style={state.star || { color: "#000000" }} title="Favorite"></i>
                    </button>
                </div>
            </div>

                <div className="facts-from-top">
                    <p className="title">
                     <img className="fire-icon" src={fireIcon} alt="fire_icon_by_saveApet" /> Week Top Hottest Facts
                    </p>

                    <div className="facts-container">
                        <div className="card-in-hottest">
                        <Card 
                        title="Kitten siblings up for adoption together" 
                        description="One and Two are looking for a home and they would love to stay together..." 
                        picture={womenWithADog}
                        alt="kitten-sap" 
                        link="/articles/kittens_adoption"
                        />
                        </div>

                        <div className="card-in-hottest">
                        <Card 
                        title="Kitten siblings up for adoption together" 
                        description="One and Two are looking for a home and they would love to stay together..." 
                        picture={pets}
                        alt="kitten-sap" 
                        link="/articles/kittens_adoption"
                        />
                        </div>

                        <div className="card-in-hottest">
                        <Card 
                        title="Kitten siblings up for adoption together" 
                        description="One and Two are looking for a home and they would love to stay together..." 
                        picture={kittensDocumentation}
                        alt="kitten-sap" 
                        link="/articles/kittens_adoption"
                        />
                        </div>
                        
                    </div>
                </div>

            <footer>
                <AppFooter />
            </footer>
        </div>
    );
}

const ArticlePage = () => {
    const { articleId } = useParams();
    const article = Articles[articleId];

    return article ? (
        <Article
            title={article.title}
            image={article.image}
            about={article.about}
        />
    ) : (
        <Page404 />
    );
};

export default ArticlePage;
