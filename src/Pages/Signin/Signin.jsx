import React,{useState} from 'react';
import './Signin.css';
import {Link} from 'react-router-dom';
import {BsPersonFill} from 'react-icons/bs';
import {AiFillLock} from 'react-icons/ai';

const Signin = () => {

	const [isFocused, setIsFocused] = useState("")

	return (
		<form className="app-flex-wrap" style={{marginTop:'30px'}}>
			<label htmlFor="username" className={`app-flex input ${isFocused === 'username' && 'input-focus'}`} onClick={()=>setIsFocused("username")}>
			  <input type="text" id="username" name="username" placeholder=" " className="user-input"/>
			  <label htmlFor="username" className="label">Username</label>
			  <BsPersonFill className="icon"/>
			</label>
			<label htmlFor="password" className={`app-flex input ${isFocused === 'password' && 'input-focus'}`} onClick={()=>setIsFocused("password")}>
			  <input type="password" id="password" name="password" placeholder=" " className="user-input"/>
			  <label htmlFor="password" className="label">Password</label>
			  <AiFillLock className="icon"/>
			</label>
			<h5 className="reset pointer">Forgot your password?</h5>
			<div className="app-flex" style={{gap:'5px'}} >
				<Link to="/Home/KCAL">
					<button
						style={{backgroundColor:'white', color:'var(--primary-color)'}}
						className="btn main-btn">
						Signin
					</button>
				</Link>
				<Link to="/">
					<button
						className="btn log-btn">
						Back
					</button>
				</Link>
			</div>
		</form>
	)
}

export default Signin;