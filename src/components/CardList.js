import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    return(
        <div>
            {
                //To loop through the robots, perform a "map"
                robots.map((user, i) => {
                    return(
                        <Card 
                            key={i} 
                            id={robots[i].id} 
                            name={robots[i].name} 
                            email={robots[i].email}/>
                        );
                })
            }
        </div>
    );
}

export default CardList;