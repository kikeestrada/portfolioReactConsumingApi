import React from 'react'
import PropTypes from 'prop-types'


const EpisodesCard =({id, title}) =>(
    <article className="card" id={title}>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">{title}</h3>
        </div>
    </article>
);

EpisodesCard.propTypes = {
    title           : PropTypes.string,
};

EpisodesCard.defaultProps = {
    title           : "No titles",
};





export default EpisodesCard