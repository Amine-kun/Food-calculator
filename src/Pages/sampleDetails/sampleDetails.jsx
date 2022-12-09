import React,{useState, useEffect} from 'react';
import './sampleDetails.css';
import NutrientsTables from '../../Components/NutrientsTables/NutrientsTables';

import {IoClose} from 'react-icons/io5';

const SampleDetails = ({selected, setShowDetails, foodNutrients}) => {
	const [active, setActive] = useState(selected[0]);
	const [currentOpen, setCurrentOpen] = useState(null)
	
	useEffect(() => {
		let isOpen = foodNutrients?.filter((foodObj)=>
			foodObj.ingr === active
		)
		setCurrentOpen(isOpen[0])
		}, [active, foodNutrients])


	return (
		<section className="main-details full-v app-flex">
			<div className="details-container app-flex-wrap">
				<div className="head app-flex">
					<h3 >Nutrient Information about selected products</h3>
					<IoClose className="close-icon" onClick={()=>setShowDetails(false)}/>
				</div>
				<div className="nutrients  app-flex-wrap">
					<div className="tabs app-flex">
						 {selected.map((tab,i)=>(
						 	<div key={i} className={`tabbing app-flex ${active === tab && 'active-tab'}`} onClick={()=>setActive(tab)}>
						 		{tab}
						 	</div>
						 ))}
					</div>
					<div className="details app-flex">
						<div className="app-flex-wrap" style={{width:'50%'}}>
							<NutrientsTables width='100%' data={currentOpen?.General} tableName="General"/>
							<NutrientsTables width='100%' data={currentOpen?.Vitamins} tableName="Vitamins"/>
						</div>
						<div className="app-flex-wrap" style={{width:'50%'}}>
							<NutrientsTables width='100%' data={currentOpen?.Carbohydrates} tableName="Carbohydrates"/>
							<NutrientsTables width='100%' data={currentOpen?.Lipids} tableName="Lipids"/>
							<NutrientsTables width='100%' data={currentOpen?.Minerals} tableName="Minerals"/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default SampleDetails