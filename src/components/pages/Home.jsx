import React from 'react';
import DeathsCardsGrid from '../organisms/DeathsCardsGrid'
import CharterCardsGrid from '../organisms/CharterCardsGrid'



const Home = ()=> (
    <>
        <div className="ed-grid">
            <h1>Home</h1>
        </div>
    <div className="ed-container">
        <div className="ed-item m-60">
            <div className="ed-grid s-grid-1 m-grid-2 l-grid-3">
              <CharterCardsGrid/>
            </div>
        </div>
        <div className="ed-item m-40">
            <div className="ed-grid s-grid-1">
               <DeathsCardsGrid/>
            </div>
        </div>
    </div>
    </>
);
export default Home;
