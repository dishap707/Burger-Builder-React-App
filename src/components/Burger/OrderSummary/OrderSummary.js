import React from 'react';
import Auxi  from '../../../hoc/Auxi.js';

const orderSummary =(props) =>
{
	const ingredientSummary = Object.keys(props.ingredients)
	.map(
	igKey=>{
		return (<li key ={igKey}><span style ={{textTransform: 'capitalize'}}>{igKey}</span> : {props. ingredients[igKey]}</li>);
	});
	return(
		<Auxi>
			<h3>Your Order</h3>
			<p>Your burger contains follwing Ingredinets:</p>
			<ul>
			{ingredientSummary}
			</ul>
			<p> cotinue to checkout?</p>
			
		</Auxi>
	);
};

export default orderSummary;
