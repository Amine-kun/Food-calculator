import React,{useState} from 'react';
import './Analyzer.css';
import '../Signup/Signup.css';
import FoodDetails from '../../Components/FoodDetails/FoodDetails';
import SampleDetails from '../sampleDetails/sampleDetails';
import {AnalyseFood, LabelData} from '../../Requests/NutrientsCall';

import {RiAddFill} from 'react-icons/ri';
import {IoIosArrowDown} from 'react-icons/io';
import {FiTrash2, FiBookmark} from 'react-icons/fi';
import {BiDish, BiDetail} from 'react-icons/bi';
import {BsCheck} from 'react-icons/bs';

const Analyzer = () => {

	const [show, setShow] = useState(false);
	const [active, setActive] = useState('All meals');
	const [selected, setSelected] = useState([]);
	const [foodNutrients, setFoodNutrients] = useState([]);
	const [ingredients, setIngredients] = useState('');
	const [showDetails, setShowDetails] = useState(false);
	const [error, setError] = useState('');

	const checkForDuplicates = () =>{
		let checker = foodNutrients.find(obj => obj.ingr === ingredients );
		if(checker?.ingr){
			return true;
		}
		return false;
	}

	const getNutrients = async (ingredients) =>{
		if(ingredients === '') {
			setError('Enter Ingredients');
			setTimeout(()=>{setError('')}, 1000)
		} else if(!checkForDuplicates()) {
			let res = await AnalyseFood(ingredients);
			let response = await res.json();
			let labeling = LabelData(response, ingredients);

			foodNutrients.length > 0 ? setFoodNutrients((prev)=>[...prev , labeling]) : setFoodNutrients([labeling])
		} else {
			setError('Already Exists');
			setTimeout(()=>{setError('')}, 1000)
		}
	}

	const clearNutrients = () =>{

		let  filtering = foodNutrients.filter((foodObj)=>
			!selected.some(obj=> foodObj.ingr === obj)
		)
		setSelected([]);
		setFoodNutrients(filtering);
	}


	return (
		<>
		{showDetails && <SampleDetails selected={selected} setShowDetails={setShowDetails} foodNutrients={foodNutrients}/>}

		<section className="analyzer full app-flex">
			<div className="control-section app-flex-wrap">
				<h5 className="heading">Select food sample</h5>
				<div className="selectors app-flex-wrap">
					<label htmlFor="ingr" className={`app-flex input ${error !== '' && 'error'}`} onChange={(e)=>setIngredients(e.target.value)}>
					  <input type="text" id="ingr" min="0" name="ingr" placeholder=" " className="user-input"/>
					  <label htmlFor="ingr" className={`label ${error && 'red'}`}>Ingredients</label>
					  <h5 className={`errorMsg ${error !== '' && 'errorMsgShow'}`}>{error}</h5>
					</label>
					<div className="Note">
						<h4>Notes:</h4>
						<ul>
							<li>You must enter your ingredients as precise as possible, and Coherant.</li>
							<li>You must add the amount of the targeted ingredient, e.g. 2 Large Apples.</li>
							<li>If an ingredient size hasn't been given, it will be treated as Medium Size.</li>
							<li>Food Nutrients might not be 100% Calculated.</li>
							<li>Happy Diet! :D</li>
						</ul>
					</div>
					<button className="btn main-btn app-flex btn-edit" style={{gap:'5px'}} onClick={()=>getNutrients(ingredients)}>
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
					<button className="app-flex clear-btn" onClick={()=>clearNutrients()}>
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
					<div className={`pointer more app-flex hover ${selected.length === 0 && 'appear'}`} onClick={()=>selected.length !== 0 ? setShowDetails(true) : null}>
						<BiDetail className=""/>
						<h5>More info</h5>
					</div>
				</div>
				<div className='bar-2'></div>
				<div className="label-line app-flex">
					<BsCheck className="check-icon"/>
					<h5>Ingredients</h5>
					<h5 style={{marginLeft:'110px'}}>Calories</h5>
					<span className="generals app-flex">
						<h5>Carbs</h5>
						<h5>Protein</h5>
						<h5>Fat</h5>
						<h5>Water</h5>
					</span>
				</div>
				<div className='bar-2'></div>
				<div className="detailer app-flex-wrap">
					{foodNutrients.map((food, i)=>(
							<FoodDetails id={i} selected={selected} setSelected={setSelected} foodNutrients={food} setFoodNutrients={setFoodNutrients}/>
						))}
				</div>
			</div>
		</section>
		</>
	)
}

export default Analyzer