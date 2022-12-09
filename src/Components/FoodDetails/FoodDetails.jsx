import React from 'react';
import './FoodDetails.css';

const FoodDetails = ({id, setSelected, selected, foodNutrients, setFoodNutrients}) => {
	const name = foodNutrients.ingr;
	const setCard = () =>{
		if(selected.includes(name)){
			let filtering = selected.filter(foodObj=> foodObj !== name)
			setSelected(filtering)
		} else {
			 setSelected((prev)=>[...prev, name])
		}
	}


	return (
		<label htmlFor={id} className="food app-flex" key={id}>
			<input id={id} type="checkbox" className="checker" checked={selected.includes(name) ? true : false} onClick={setCard}/>
			<div className="checkmark"></div>
			<h5 className="ingr">{name}</h5>
			<h5 className='quan'>
				<b>{foodNutrients.calories.toFixed(2)} </b>
				 KCAL</h5>
				<div className="data app-flex">
					
					{foodNutrients.General.map((obj, i)=>(
						<h5 key={i} className="t-cells">{obj.quantity.toFixed(2)}</h5>
						))}

				</div>
		</label>
	)
}

export default FoodDetails;