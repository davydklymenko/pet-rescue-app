import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PetSinglePage from "../components/petSinglePage/petSinglePage";
import ArticlesPage from "../components/articlePage/articlePage";
import TermsAndConditions from "../pages/termsAndConditions/termsAndConditions";
import CutiesPage from "../pages/cutiesPage/cutiesPage";
import SingleArticlesPage from "../pages/singleArticlesPage/singleArticlesPage";
import ContactPage from "../pages/contactPage/contactPage";

import Loading from "../utils/loading/loading";
import LocationToTop from "../utils/locationToTop/locationToTop";

import './App.css';

const MainPage = lazy(() => import("../pages/mainPage/mainPage"));

function App() {
    return (
        <Router>
            <LocationToTop/>
                <div className="app">
                    <Suspense fallback={<Loading />}>
                        <Routes>
                            <Route path="/" element={
                                <MainPage/>
                            } />
                        
                            <Route path="/cuties/:petId" element={<PetSinglePage />} />
                            <Route path="/articles/:articleId" element={<ArticlesPage />} />
                            <Route path="/cuties/adoption-care-terms-and-conditions" element={<TermsAndConditions />} />
                            <Route path="/cuties/" element={<CutiesPage />} />
                            <Route path="/articles/" element={<SingleArticlesPage />} />
                            <Route path="/contact-us/" element={<ContactPage />} /> 
                        </Routes>
                    </Suspense> 
                </div>
            </Router>
    );
}

export default App;