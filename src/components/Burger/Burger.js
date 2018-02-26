import React from 'react';
import classes from './Burger.css';
import Ingredient from './Ingredient/Ingredient';

const Burger = ({ingredients}) => {
    const transformedIngredients = Object.keys(ingredients)
    .map((ingredientKey) => {
        return [...Array(ingredients[ingredientKey])]
        .map((_, i) => {
           return <Ingredient key={ingredientKey + i} type={ingredientKey} />
        });
    })
    .reduce((acc, current) => {
        return acc.concat(current);
    }, []);

    return (
        <div className={classes.Burger}>
            <Ingredient type="bread-top" />
                 {transformedIngredients.length > 0 ? 
                    transformedIngredients : 
                    <p>Please add ingredients.</p>
                }
            <Ingredient type="bread-bottom" />
        </div>
    );
};

export default Burger;