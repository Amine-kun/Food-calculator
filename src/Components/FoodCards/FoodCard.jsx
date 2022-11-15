import React, {useState} from 'react';
import './FoodCard.css';

import {AiOutlineHeart,AiFillHeart } from 'react-icons/ai';

const url = 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Nutty-chicken-satay-a8c094e.jpg';

const FoodCard = () => {

	const [like ,setLike]= useState(false);

	return (
		<div className="card app-flex-wrap">
			<div className="dish-img">
				<img alt="dish" className="dish full" src={url}/>
			</div>
			<div className="dish-info app-flex">
				<h4>This is a Dish Title.</h4>
				<span className="app-flex rate" onClick={()=> setLike(!like)}>
					<h5>4/5 (125)</h5>
					{like? <AiFillHeart className="like-icon like"/> :<AiOutlineHeart className="like-icon "/>}
				</span>
			</div>
		</div>
	)
}

export default FoodCard