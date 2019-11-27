import React from 'react';
import EpisodesCardsGrid from "../organisms/EpisodesCardsGrid"

const Episodes = () => (
    <>
        <div className="ed-grid">
            <h1>Episodes</h1>
        </div>
        <div className="ed-grid s-grid-1 m-grid-2 l-grid-3">
            <EpisodesCardsGrid/>
        </div>
    </>
);
export default Episodes;
