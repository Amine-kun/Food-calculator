import React from 'react';
import './Sidebar.css';
import {NavLink, Link} from 'react-router-dom';

import {BsFillCircleFill} from 'react-icons/bs';
import {TbCalculator} from 'react-icons/tb';
import {MdOutlineFastfood} from 'react-icons/md';
import {BiCalendarEdit} from 'react-icons/bi';
import {FiLogOut, FiLogIn} from 'react-icons/fi';

import logo from '../../Assets/logo.png';

const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI3vvVZ-pOGsyhaNEm9s-tm96lh7OGxJrpPQ&usqp=CAU"
const navs = [{nav:"Food KCAL",icon:TbCalculator, url:'KCAL'},
				{nav:"Recipes",icon:MdOutlineFastfood, url:'Recipes'},
				{nav:"History",icon:BiCalendarEdit, url:'History'}]
const Sidebar = () => {

	let status = false;

	return (
		<section className="sidebar app-flex-wrap">
			<div className="user app-flex">
				{status 
				? <>
					<img src={url} className="user-pic" alt="user-pic"/>
					<div className="user-info app-flex-wrap">
						<h4>Amineberr</h4>
						<span className="app-flex" style={{gap:'5px', justifyContent:'flex-start'}}>
							<BsFillCircleFill className="icon-ball"/>
							<h5>Online</h5>
						</span>
					</div>
				  </>
				 : <img src={logo} alt="logo" className="logo"/>}
			</div>
			<div className="full nav app-flex-wrap">
					<h4 style={{color:'var(--black-color)', margin:'10px 0 10px 55px'}}>MENU</h4>

					{navs.map((nav, i)=>(
						!status
						 ?	<>
								{nav.url !== 'History' 
								&& <>
									<NavLink className="tab app-flex" to={`${nav.url}`}>
										<nav.icon className="tab-icon"/>
										{nav.nav}
									</NavLink> 
								  </> }
							</>
						 : 	<>
								<NavLink className="tab app-flex" to={`${nav.url}`}>
									<nav.icon className="tab-icon"/>
									{nav.nav}
								</NavLink> 
							  </> 
						))}
			</div>
			<div className="sign">
				{status 
				 ? <>
				 	<Link to="/" className="tab app-flex">
				 		<FiLogOut className="tab-icon"/>
				 		Sign Out
				 	</Link>
				   </>
				 : <>
				 	 <Link to="/Signin" className="tab app-flex">
				 	 	<FiLogIn className="tab-icon"/>
				 		Sign In
				 	</Link>
				   </>}
			</div>
		</section>
	)
}

export default Sidebar