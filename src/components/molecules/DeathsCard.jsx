import React from 'react'
import PropTypes from 'prop-types'


const DeathsCard =({id, death}) =>(
    <article className="card" id={id}>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">{death}</h3>
        </div>
    </article>
);

DeathsCard.propTypes = {
    title           : PropTypes.string,
    image           : PropTypes.string
};

DeathsCard.defaultProps = {
    title           : "No titles",
    image           : "https://scott88lee.github.io/FMX/img/avatar.jpg"
};





export default DeathsCard