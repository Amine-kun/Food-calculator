import React,{useState, useEffect} from 'react';
import './Authentication.css';
import {NavLink, Routes, Route, useLocation} from 'react-router-dom';
import Signin from '../../Pages/Signin/Signin';

const Authentication = () => {

	const location = useLocation();
	const [active, setActive] = useState('');

	useEffect(() => {
		const current = location.pathname.split('/')[2]
		setActive(current)
	}, [location.pathname])

	return (
		<section className="auth full app-flex">
			<div className="auth-container app-flex"> 
			<div className="spacer layer"></div>
				<div className="inputs full app-flex-wrap">
					<h2>{active} to Foodilizer</h2> 
					<span className="bar" style={{width:'150px'}}></span>
					<div className="navigator app-flex">
						<NavLink to="Signin">
							<button className='navbtn'>
								Signin
							</button>
						</NavLink>
						<NavLink to="Signup">
							<button className='navbtn'>
								Signup
							</button>
						</NavLink>
					</div>

					<Routes>
						<Route path="/Signin" element={<Signin/>}/>
					</Routes>
				</div>
			</div>
		</section>
	)
}

export default Authentication;