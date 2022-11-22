import React from 'react';
import './Analyzer.css';

import {RiAddFill} from 'react-icons/ri';

const foods=['Carot','apples', 'oranges', 'pumpkin','tomatos'];
const Analyzer = () => {
	return (
		<section className="analyzer full app-flex">
			<div className="control-section app-flex-wrap">
				<h5 className="heading">Select food sample</h5>
				<div className="selectors app-flex-wrap">
					<select>
						<option default>Select Food</option>
						{foods.map((food,i)=>(
							<option className="food-samples">{food}</option>
							))}
					</select>
					<span className="app-flex" style={{gap:'5px'}}>
						<input type="number" className="quantity" placeholder="Quantity"/>
						<h6>g</h6>	
					</span>
					<button className="btn main-btn app-flex btn-edit" style={{gap:'5px'}}>
					 <RiAddFill className="add-icon"/>
					 Add
					</button>
				</div>
			</div>
			<div className="details-section">
			test
			</div>
		</section>
	)
}

export default Analyzer