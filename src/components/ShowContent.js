import React from 'react';

const ShowContent = ({recipe}) => {
    return (
        <div>
            <div>
                <img src={`${recipe[0].image}`} alt="recipe" />
            </div>
            <div>
            <h1>{recipe[0].tag}</h1>
                <p>{recipe[0].instructions}</p>
            </div>
        </div>
    )
}

export default ShowContent;