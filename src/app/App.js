import React from "react";
import AppHeader from "../components/appHeader/appHeader";
import { HomeTab } from "../components/homeTab/homeTab";
import { PetFinder } from "../components/petFinder/petFinder";
import { PetCards } from "../components/petCards/petCards";
import AppFooter from "../components/appFooter/appFooter";

import './App.css';

function App() {
    return (
      <div className="app">
          <header>
              <AppHeader/>
        </header>
            <main>
              <div className="tab">
               <HomeTab/>
              </div>

              <div className="find">
                <PetFinder/>
              </div>

              <div className="card__latest">
                  <PetCards/>
              </div>
            </main>

            <footer>
              <AppFooter/>
          </footer>
      </div>
    );
}

export default App;
