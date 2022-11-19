import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import logo from '../../Assets/logo.png';

const Navbar = () => {
	return (
		<header className="navbar app-flex">
			<div className="brand">
				<img alt="foodilizer-logo" src={logo} className="logo"/>
			</div>
			<div className="nav-btns app-flex">
				<Link to="/Auth/Signin">
					<button className="sub-btn btn">Signin</button>
				</Link>
				<Link to="/Auth/Signup">
					<button className="main-btn btn">Signup</button>
				</Link>
			</div>
		</header>
	)
}

export default Navbar