import React from 'react';
import './FoodCardsV2.css'

const FoodCardsV2 = ({data}) => {

	return (
		<div className="cardV2">
			<img className="food_img" src={data.image}/>
			<h4 className="titleV2 app-flex">{data.title}</h4>

				{data?.cuisines?.length > 0 && <p className="tag">{data?.cuisines[0]} cuisine</p>}
				<p className="tag">{data?.veryHealthy ? 'Healthy Food' : 'Not very healthy'}</p>
				<p className="tag">{data?.vegan ? 'Vegan Food' : 'Not Vegan'}</p>

		</div>
	)
}

export default FoodCardsV2