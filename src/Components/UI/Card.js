import React from 'react';
import './Card.css'


const Card = props => {

    const additionalClasses = props.className || '';

    return(
        <div className={`card ${additionalClasses}`}>{props.children}</div>
    );
}

export default Card;