import React,{useState} from 'react';
import './Analyzer.css';
import '../Signup/Signup.css';
import {useNavigate} from 'react-router-dom';
import FoodDetails from '../../Components/FoodDetails/FoodDetails';

import {RiAddFill} from 'react-icons/ri';
import {IoIosArrowDown} from 'react-icons/io';
import {FiTrash2, FiBookmark} from 'react-icons/fi';
import {BiDish, BiDetail} from 'react-icons/bi';

const foods=['Carot','apples', 'oranges', 'pumpkin','tomatos'];
const Analyzer = () => {

	const navigate = useNavigate();
	const [show, setShow] = useState(false);
	const [active, setActive] = useState('All meals');
	const [selected, setSelected] = useState([]);

	return (
		<section className="analyzer full app-flex">
			<div className="control-section app-flex-wrap">
				<h5 className="heading">Select food sample</h5>
				<div className="selectors app-flex-wrap">
					<label className="drop-label" htmlFor="select">
						<select className="selector-inputs " id="select">
							<option default>Select Food</option>
							{foods.map((food,i)=>(
								<option className="food-samples" key={i}>{food}</option>
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
						<h5>Clear</h5>
					</button>

					<button className=" app-flex clear-btn">
						<FiBookmark className="clear-icon"/>
						<h5>Save</h5>
					</button>
					<div className="filters pointer app-flex hover" onClick={()=>setShow(!show)}>
						<BiDish className="dish-icon"/>
						<h5 style={{margin:'0 5px'}}>{active}</h5>
						<IoIosArrowDown/>
						<span className={`drop-down app-flex-wrap ${show && 'show-tab'}`}>	
							<h5 className="h5" onClick={()=>setActive('All meals')}>All meals</h5>
							<h5 className="h5" onClick={()=>setActive('Saved meals')}>Saved meals</h5>
						</span>
					</div>
					<div className={`pointer more app-flex hover ${selected.length === 0 && 'appear'}`} onClick={()=>selected.length !== 0 ? navigate('/Home/KCAL/details') : null}>
						<BiDetail className=""/>
						<h5>More info</h5>
					</div>
				</div>
				<div className='bar-2'></div>
				<div className="detailer app-flex-wrap">
					<FoodDetails id="1" selected={selected} setSelected={setSelected}/>
					<FoodDetails id="2" selected={selected} setSelected={setSelected}/>
					<FoodDetails id="3" selected={selected} setSelected={setSelected}/>
					<FoodDetails id="4" selected={selected} setSelected={setSelected}/>
					<FoodDetails id="5" selected={selected} setSelected={setSelected}/>
				</div>
			</div>
		</section>
	)
}

export default Analyzer