import React from 'react';
import classes from './BuildControls.css';
import BuildControls from './BuildControl/BuildControl';

const controls = [
     {label: 'Salad', type : 'salad'},
	 {label: 'Meat', type: 'meat'},
	 {label: 'Cheese', type:'cheese'},
	 {label: 'Bacon', type: 'bacon'},

];
const burgerControls =  (props) => (
     <div className ={classes.BuildControls}>
		 <p> Current Price: {props.price}</p>
		 {controls.map(ctrl => (
		 <BuildControls 
		 key={ctrl.label} 
		 label ={ctrl.label}
		 added = {() => props.ingredientAdded(ctrl.type)}
		 removed = {() => props.ingredientRemoved(ctrl.type)}
		 disabled = {props.disabled[ctrl.type]}/>
		 ))}
		 <button className ={classes.OrderButton} 
		 disabled ={!props.purchasable}
		 onClick ={props.ordered}> Order Now </button>
	 </div>
);

export default burgerControls;