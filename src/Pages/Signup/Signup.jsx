import React,{useState} from 'react';
import './Signup.css';
import {Link} from 'react-router-dom';
import {BsPersonFill} from 'react-icons/bs';
import {AiFillLock} from 'react-icons/ai';
import {MdEmail} from 'react-icons/md'; 

const Signup = () => {

	const [isFocused, setIsFocused] = useState("");

	return (
		<form className="app-flex-wrap">
			<label htmlFor="username" className={`app-flex input ${isFocused === 'username' && 'input-focus'}`} onClick={()=>setIsFocused("username")}>
			  <input type="text" id="username" name="username" placeholder=" " className="user-input"/>
			  <label htmlFor="username" className="label">Username</label>
			  <BsPersonFill className="icon"/>
			</label>

			<label htmlFor="email" className={`app-flex input ${isFocused === 'email' && 'input-focus'}`} onClick={()=>setIsFocused("email")}>
			  <input type="email" id="email" name="email" placeholder=" " className="user-input"/>
			  <label htmlFor="email" className="label">Email</label>
			  <MdEmail className="icon"/>
			</label>

			<label htmlFor="password" className={`app-flex input ${isFocused === 'password' && 'input-focus'}`} onClick={()=>setIsFocused("password")}>
			  <input type="password" id="password" name="password" placeholder=" " className="user-input"/>
			  <label htmlFor="password" className="label">Password</label>
			  <AiFillLock className="icon"/>
			</label>

			<label htmlFor="pass-validation" className={`app-flex input ${isFocused === 'pass-validation' && 'input-focus'}`} onClick={()=>setIsFocused("pass-validation")}>
			  <input type="password" id="pass-validation" name="pass-validation" placeholder=" " className="user-input"/>
			  <label htmlFor="pass-validation" className="label">Re-enter password</label>
			  <AiFillLock className="icon"/>
			</label>

			<div className="app-flex" style={{gap:'5px', marginTop:'15px'}} >
				<Link to="../Signin">
					<button
						style={{backgroundColor:'white', color:'var(--primary-color)'}}
						className="btn main-btn">
						Register
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

export default Signup;