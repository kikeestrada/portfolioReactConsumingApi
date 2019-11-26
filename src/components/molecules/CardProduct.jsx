import React from 'react'
import PropTypes from 'prop-types'


const CourseProduct =({id, title, image}) =>(
    <article className="card" id={title}>
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={image} alt={title} />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">{title}</h3>
        </div>
    </article>
);

CourseProduct.propTypes = {
    title           : PropTypes.string,
    image           : PropTypes.string
};

CourseProduct.defaultProps = {
    title           : "No titles",
    image           : "https://scott88lee.github.io/FMX/img/avatar.jpg"
};





export default CourseProduct