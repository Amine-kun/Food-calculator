import React, {useState} from 'react';
import './Landing.css';
import Navbar from '../../Components/Navbar/Navbar';
import FoodCard from '../../Components/FoodCards/FoodCard'
import vector from '../../Assets/pannel.png';
import Footer from '../../Components/Footer/Footer';

import {BsArrowRightShort} from 'react-icons/bs';
import {BiSearch} from 'react-icons/bi';
import {RiArrowDownSLine} from 'react-icons/ri';

const Landing = () => {

	const [expended, setExpended] = useState(false);

	return (
		<section className="landing full">
			<Navbar/>
			<div className="pannel full app-flex">
				<span className="about app-flex-wrap">
					<h2>Foodilizer</h2>
					<h5>With Foodilizer, Get Recipes and the calories, carbs, protein and much more for Over 30,000 food and drinks.</h5>

					<span className="start app-flex pointer">	
						<h4>Get Started Now !</h4>
						<BsArrowRightShort className="icon"/>
					</span>
				</span>
				<img src={vector} alt="introductory-pic" className="pannel-pic"/>
				<div className="spacer layer"></div>
			</div>

			<div className="recipes full">
				<div className="header app-flex">
					<span className="search app-flex">
						<BiSearch className="icon"/>
						<input type="Input" placeholder="Search for Recipes and meals" className="search-input"/>
					</span>
					<span className={`sort app-flex-wrap pointer ${expended && 'sort-drop'}`} onClick={()=>setExpended(!expended)}>
						<div className="app-flex">
							<h5 style={{color:'var(--soft-green)'}} className="sortby">Sort by</h5>
							<h4>Newest</h4>
							<RiArrowDownSLine style={{fontSize:'1.3rem'}}/>
						</div>
						<div className="sorts app-flex-wrap">
							<p>Oldest</p>
							<p>Popular</p>
							<p>Healthier</p>
						</div>
					</span>
				</div>
				<div className="full main-recipes">
					<div className="recipes-cards">
						<FoodCard/>
						<FoodCard/>
						<FoodCard/>
						<FoodCard/>
					</div>
					<button className=" btn main-btn btn-more">
						Load More...
					</button>
				</div>
			</div>

			<Footer/>
		</section>
	)
}

export default Landing