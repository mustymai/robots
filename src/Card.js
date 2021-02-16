import React from 'react';

const Card = (props) => {
    return(
        <div className='bg-light-green br3 pa3 grow dib tc ma2'>
            <img alt='robots' src='https://robohash.org/ee{props.id}'/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
}
export default Card;