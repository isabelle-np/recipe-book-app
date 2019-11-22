import React from 'react';

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <>
            <h2>{title}</h2>
            <ol>
                {ingredients.map((ingredient, i) => (
                    <li key={i}>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            {/* img tag has no alt attribute because the image is within the content and context*/}
            <img src={image} alt=""/>
        </>
    );
}

export default Recipe;