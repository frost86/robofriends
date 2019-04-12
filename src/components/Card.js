import React from 'react';

const Card = ({name, email, id}) => {
    
    return (
        //The className properties come from Tachyons.
        //The ${props.id} is included to get a random robot for every user; that's 
        //how the site is setup after the .org. Also, the ?200X200 is a size
        //adjustment.
        <div className = "tc bg-light-green dib br3 ma2 grow bw2 shadow-5">
            <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;