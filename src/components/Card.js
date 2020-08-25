import React from 'react';

const Card = (props) => {
    // learn the below better
    const { id, name, email } =  props;
    return (
    <div  className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        {/* `https:people/id etc` is a "template string" from es6*/}
        <img alt='dude' src={`https://robohash.org/${id}?200x200`} />
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>
    );
}

export default Card;