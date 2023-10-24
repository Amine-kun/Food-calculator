import React, {useState, useEffect} from 'react';
import './Recipes.css';

import {BiSearch, BiChevronDown, BiChevronUp} from 'react-icons/bi';
import {BsFilterRight} from 'react-icons/bs';

import FoodCardsV2 from '../../Components/FoodCardsV2/FoodCardsV2';
import calls from '../../Requests/foodCall';
import {RxCross2} from 'react-icons/rx';
import {LuVegan} from 'react-icons/lu';
import {PiBowlFoodBold} from 'react-icons/pi';

const Recipes = () => {

	const [data, setData] = useState();
	const [queries, setQueries] = useState({
		query:'',
		cuisine:'',
		diet:'',
		excludeCuisine:'',
		intolerances:'',
		excludeIngredients:'',
		type:'',
		maxCarbs:'100',
		minCarbs:'0',
		maxProtein:'100',
		minProtein:'0',
		maxFat:'100',
		minFat:'0',
	});

	const [showBakcDrop, setShowBackDrop] = useState(false);
	const [modal, setModal] = useState(false);

	const [colapse, setColapse] = useState(false);

	const showModal = () => {
		setShowBackDrop(true);
		setTimeout(()=>{ setModal(true) },50)
	}

	const hideModal = () => {
		setModal(false);
		setColapse(false);
		setTimeout(()=>{ setShowBackDrop(false) },50)
	}

	const changeInputs = (value, key) =>{
		setQueries({...queries, [key]:value})
	}

	const submiteFilterCall =()=>{
		(async()=>{
			let res = await calls.advancedCall(queries);

			setData(res.results);
			console.log(res.results)
			hideModal();
		})();
	}

	useEffect(() => {
		 (async()=>{
		 	let res = await randomCall();
		 	let response = await res.json();

		 	setData(response.recipes)
		 })();
	}, [])

	return (
		<section className="recipes_main">

			<div className={`back-drop ${showBakcDrop && 'show-backdrop'}`}></div>
			<div className={`modal app-flex ${modal && 'show_modal'}`}>
				<RxCross2 className="cross-icon" onClick={()=>hideModal()}/>

				<span className="search app-flex" style={{width:'100%', padding:'15px'}}>
					<BiSearch className="icon"/>
					<input type="Input" placeholder="Enter a Meal" className="search-input" value={queries.query} onChange={(e)=>changeInputs(e.target.value, 'query')}/>
				</span>

				<span className="search app-flex" style={{width:'100%', padding:'15px'}}>
					<PiBowlFoodBold className="icon"/>
					<input type="Input" placeholder="Prefered Cuisine" className="search-input" value={queries.cuisine} onChange={(e)=>changeInputs(e.target.value, 'cuisine')}/>
				</span>

				<span className="search app-flex" style={{width:'100%', padding:'15px'}} value={queries.diet} onChange={(e)=>changeInputs(e.target.value, 'diet')}>
					<LuVegan className="icon"/>
					<input type="Input" placeholder="Your Diet (i.e. Carnivore, Vegetarian)" className="search-input"/>
				</span>

				<span className={`search app-flex more ${colapse && 'more_active'}`} style={{width:'100%', padding:'15px'}} onClick={()=>setColapse(!colapse)}>
					{colapse ? <BiChevronUp className="icon"/> : <BiChevronDown className="icon"/>}
					<h4>Advanced Search (Optional)</h4>
				</span>

					<div className={`more_search app-flex ${colapse && 'more_search_show'}`}>

						<span className="search app-flex" style={{width:'100%', padding:'15px'}} value={queries.excludeCuisine} onChange={(e)=>changeInputs(e.target.value, 'excludeCuisine')}>
							<input type="Input" placeholder="Exclude A Cuisine" className="search-input"/>
						</span>

						<span className="search app-flex" style={{width:'100%', padding:'15px'}} value={queries.intolerances} onChange={(e)=>changeInputs(e.target.value, 'intolerances')}>
							<input type="Input" placeholder="Intolerance" className="search-input"/>
						</span>

						<span className="search app-flex" style={{width:'100%', padding:'15px'}} value={queries.excludeIngredients} onChange={(e)=>changeInputs(e.target.value, 'excludeIngredients')}>
							<input type="Input" placeholder="Excluded Ingredient(s)" className="search-input"/>
						</span>

						<span className="search app-flex" style={{width:'100%', padding:'15px'}} value={queries.type} onChange={(e)=>changeInputs(e.target.value, 'type')}>
							<input type="Input" placeholder="Type of Meal (i.e. Main, dessert)" className="search-input"/>
						</span>

						<span className="search app-flex" style={{width:'100%', padding:'15px'}} value={queries.minCarbs} onChange={(e)=>changeInputs(e.target.value, 'minCarbs')}>
							<input type="Input" placeholder="Minimum Carbs Included" className="search-input"/>
						</span>

						<span className="search app-flex" style={{width:'100%', padding:'15px'}} value={queries.maxCarbs} onChange={(e)=>changeInputs(e.target.value, 'maxCarbs')}>
							<input type="Input" placeholder="Maximum Carbs Included" className="search-input"/>
						</span>

						<span className="search app-flex" style={{width:'100%', padding:'15px'}} value={queries.minProtein} onChange={(e)=>changeInputs(e.target.value, 'minProtein')}>
							<input type="Input" placeholder="Minimum Protein Included" className="search-input"/>
						</span>

						<span className="search app-flex" style={{width:'100%', padding:'15px'}} value={queries.maxProtein} onChange={(e)=>changeInputs(e.target.value, 'maxProtein')}>
							<input type="Input" placeholder="Maximum Protein Included" className="search-input"/>
						</span>

						<span className="search app-flex" style={{width:'100%', padding:'15px'}} value={queries.minFat} onChange={(e)=>changeInputs(e.target.value, 'minFat')}>
							<input type="Input" placeholder="Minimum Fat Included" className="search-input"/>
						</span>

						<span className="search app-flex" style={{width:'100%', padding:'15px'}} value={queries.maxFat} onChange={(e)=>changeInputs(e.target.value, 'maxFat')}>
							<input type="Input" placeholder="Maximum Fat Included" className="search-input"/>
						</span>

					</div>


				<span className="filter app-flex" style={{width:'100%'}} onClick={()=>submiteFilterCall()}>
					<BiSearch className="icon"/>
					<button className="filter_button">Search </button>
				</span>
			</div>

			<div className="app-flex">
				<span className="search app-flex" style={{width:'90%', padding:'15px'}}>
					<BiSearch className="icon"/>
					<input type="Input" placeholder="Search for Recipes and meals" className="search-input"/>
				</span>
				<span className="filter app-flex" style={{width:'10%'}} onClick={()=>showModal()}>
					<BsFilterRight className="icon"/>
					<button className="filter_button">Filter </button>
				</span>
			</div>

			<div className="cards">

				{data?.length > 0 
					? data.map((food,i)=>(
						<FoodCardsV2 data={food} key={i}/>
						))
					: <p>No recipes</p>}

			</div>
		</section>
	)
}

export default Recipes
