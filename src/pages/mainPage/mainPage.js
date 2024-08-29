import React from "react";
import { Helmet } from "react-helmet";

import PetPartners from "../../components/petPartners/petPartners";
import { SeeMoreFacts } from "../../components/petCards/petCards";
import CookieFilesAgreement from "../../utils/cookieFiles/cookieFiles";

import AppHeader from "../../components/appHeader/appHeader";
import AppFooter from "../../components/appFooter/appFooter";
import PetHomeTab from "../../components/petHomeTab/petHomeTab";
import PetFinder from "../../components/petFinder/petFinder";
import PetCards from "../../components/petCards/petCards";

import "./mainPage.css";

const MainPage = () => (
    <>
        <Helmet>
            <meta name="description" content="Web site about pet rescue." />
            <title>saveApet</title>
        </Helmet>

        <header>
            <AppHeader />
        </header>
        <main>
            <div className="pet-partners">
                <PetPartners/>
            </div>
            <div className="tab">
                <PetHomeTab />
            </div>
            <div className="find">
                <PetFinder />
            </div>
            <div className="card__latest">
                <PetCards />
                <SeeMoreFacts />
            </div>
        </main>
        <footer>
            <AppFooter />
        </footer>

        <CookieFilesAgreement/> 
    </>
);

export default MainPage;