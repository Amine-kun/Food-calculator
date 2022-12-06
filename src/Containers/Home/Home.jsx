import React from 'react';
import './Home.css';
import {Routes, Route} from 'react-router-dom';

import Sidebar from '../../Components/Sidebar/Sidebar';
import Analyzer from '../../Pages/Analyzer/Analyzer';
import Recipes from '../../Pages/Recipes/Recipes';



const Home = () => {
	return (
		<section className="homepage full-v app-flex">
			<Sidebar/>
			<div className="pages-container">
				<Routes>
					<Route path="/KCAL" element={<Analyzer/>}/>
					<Route path="/Recipes" element={<Recipes/>}/>
				</Routes>
			</div>
		</section>
	)
}

export default Home;