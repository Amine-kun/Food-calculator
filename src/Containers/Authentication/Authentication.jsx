import React, {useState} from 'react';
import './Authentication.css';
import {Link, Routes, Route} from 'react-router-dom';
import Signin from '../../Pages/Signin/Signin';

const Authentication = () => {

	const [active, setActive] = useState('Signin')

	return (
		<section className="auth full app-flex">
			<div className="auth-container app-flex"> 
			<div className="spacer layer"></div>
				<div className="inputs full app-flex-wrap">
					<h2>Signin to Foodilizer</h2> 
					<span className="bar" style={{width:'150px'}}></span>
					<div className="navigator app-flex">
						<Link to="Signin" onClick={()=>setActive('Signin')}>
							<button className={`navbtn ${active === 'Signin' && 'active'}`}>
								Signin
							</button>
						</Link>
						<Link to="Signup" onClick={()=>setActive('Signup')}>
							<button className={`navbtn ${active === 'Signup' && 'active'}`}>
								Signup
							</button>
						</Link>
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