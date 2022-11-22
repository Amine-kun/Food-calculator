import React,{useState} from 'react';
import './Analyzer.css';
import '../Signup/Signup.css';

import {RiAddFill} from 'react-icons/ri';
import {IoIosArrowDown} from 'react-icons/io';
import {FiTrash2, FiBookmark} from 'react-icons/fi';
import {BiDish} from 'react-icons/bi';

const foods=['Carot','apples', 'oranges', 'pumpkin','tomatos'];
const Analyzer = () => {

	const [show, setShow] = useState(false);
	const [active, setActive] = useState('All meals');

	return (
		<section className="analyzer full app-flex">
			<div className="control-section app-flex-wrap">
				<h5 className="heading">Select food sample</h5>
				<div className="selectors app-flex-wrap">
					<label className="drop-label" htmlFor="select">
						<select className="selector-inputs " id="select">
							<option default>Select Food</option>
							{foods.map((food,i)=>(
								<option className="food-samples">{food}</option>
								))}
						</select>
						<IoIosArrowDown className="drop-icon"/>
					</label>
					<label htmlFor="quantity" className="app-flex input">
					  <input type="number" id="quantity" min="0" name="quantity" placeholder=" " className="user-input"/>
					  <label htmlFor="quantity" className="label">Enter a Quantity</label>
					  <h5>g</h5>
					</label>
					<button className="btn main-btn app-flex btn-edit" style={{gap:'5px'}}>
					 <RiAddFill className="add-icon"/>
					 Add
					</button>
				</div>
			</div>
			<div className="details-section">
				<h3>Your Summary</h3>
				<div className='bar-2'>
					<div className="sub-bar"></div>
				</div>
				<div className="app-flex heading-details">	
					<button className="app-flex clear-btn">
						<FiTrash2 className="clear-icon"/>
						<h5>Clear All</h5>
					</button>
					<button className=" app-flex clear-btn">
						<FiBookmark className="clear-icon"/>
						<h5>Save</h5>
					</button>
					<div className="filters pointer app-flex" onClick={()=>setShow(!show)}>
						<BiDish className="dish-icon"/>
						<h5 style={{margin:'0 5px'}}>{active}</h5>
						<IoIosArrowDown/>

						<span className={`drop-down app-flex-wrap ${show && 'show-tab'}`}>	
							<h5 className="h5" onClick={()=>setActive('All meals')}>All meals</h5>
							<h5 className="h5" onClick={()=>setActive('Saved meals')}>Saved meals</h5>
						</span>
					</div>
				</div>
				<div className='bar-2'></div>
			</div>
		</section>
	)
}

export default Analyzer