import React from 'react'
import PropTypes from 'prop-types'


const CharterCard =({char_id, name, img}) =>(
    <article className="card" id={char_id}>
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={img} alt={name} />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">{name}</h3>
        </div>
    </article>
);

CharterCard.propTypes = {
    name           : PropTypes.string,
    img           : PropTypes.string
};

CharterCard.defaultProps = {
    name           : "No titles",
    img           : "No Image"
};


export default CharterCard