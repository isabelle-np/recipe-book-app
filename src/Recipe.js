import React from 'react';
import { link } from 'fs';

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div>
            <h1>{title}</h1>
            <ol>
                {ingredients.map((ingredient, i) => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img src={image}/>
        </div>
    );
}

export default Recipe;