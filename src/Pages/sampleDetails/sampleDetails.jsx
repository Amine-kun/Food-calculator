import React,{useState, useEffect} from 'react';
import './sampleDetails.css';
import NutrientsTables from '../../Components/NutrientsTables/NutrientsTables';
import {AnalyseFood, LabelData} from '../../Requests/NutrientsCall';

import {IoClose} from 'react-icons/io5';

const SampleDetails = ({selected, setShowDetails}) => {
	const [active, setActive] = useState(selected[0]);

	useEffect(() => {
		async function fetching(){
			let res = await AnalyseFood();
			let response = await res.json();
			let lebeling = LabelData(response);
		}
		fetching();
	}, [])

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
							<NutrientsTables width='100%'/>
							<NutrientsTables width='100%'/>
						</div>
						<div className="app-flex-wrap" style={{width:'50%'}}>
							<NutrientsTables width='100%'/>
							<NutrientsTables width='100%'/>
							<NutrientsTables width='100%'/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default SampleDetails