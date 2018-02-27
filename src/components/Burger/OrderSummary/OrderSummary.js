import React from 'react';

const OrderSummary = ({ingredients}) => {
    const summary = Object.keys(ingredients)
        .map(igKey => 
            <li key={igKey}>    
                <span style={{textTransform: 'capitalize'}}>
                    {igKey}
                </span>: {ingredients[igKey]
            }</li>);

    return (
        <React.Fragment>
            <h3>Your Order</h3>
            <p>A burger with the following ingredients:</p>
            <ul>
                {summary}
            </ul>
            <p>Continue to Checkout?</p>
            <button>CANCEL</button>
            <button>CONTINUE</button>
        </React.Fragment>
    )
};

export default OrderSummary;