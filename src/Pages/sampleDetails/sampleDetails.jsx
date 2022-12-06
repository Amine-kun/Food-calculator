import React,{useState} from 'react';
import './sampleDetails.css';

import {IoClose} from 'react-icons/io5';

const SampleDetails = ({selected, setShowDetails}) => {
	const [active, setActive] = useState(selected[0])
	return (
		<section className="main-details full-v app-flex">
			<div className="details-container app-flex-wrap">
				<div className="head app-flex">
					<h3 >Nutrient Information about selected products</h3>
					<IoClose className="close-icon" onClick={()=>setShowDetails(false)}/>
				</div>
				<div className="nutrients">
					<div className="tabs app-flex">
						 {selected.map((tab,i)=>(
						 	<div key={i} className={`tabbing app-flex ${active === tab && 'active-tab'}`} onClick={()=>setActive(tab)}>
						 		{tab}
						 	</div>
						 ))}
					</div>
					<div className="details">
					{active}
					</div>
				</div>
			</div>
		</section>
	)
}

export default SampleDetails