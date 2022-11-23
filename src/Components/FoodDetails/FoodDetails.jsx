import React from 'react';
import './FoodDetails.css';

const FoodDetails = ({id}) => {
	return (
		<label htmlFor={id} className="food app-flex">
			<input id={id} type="checkbox" className="checker"/>
			<div className="checkmark"></div>
			<h5>Apples</h5>
			<h5 className='quan'><b>3</b> grams</h5>
				<div className="data app-flex">
					<h5>284</h5>
					<h5>0.6</h5> 
					<h5>9.6</h5>
					<h5>12.5</h5>
					<h5>1.60</h5>
				</div>
		</label>
	)
}

export default FoodDetails;