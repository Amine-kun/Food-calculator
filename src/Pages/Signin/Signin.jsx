import React,{useState} from 'react';
import './Signin.css';
import {useNavigate} from 'react-router-dom';
import {BsPersonFill} from 'react-icons/bs';
import {AiFillLock} from 'react-icons/ai';

const Signin = () => {

	const [isFocused, setIsFocused] = useState("")
	const navigate = useNavigate()
	const changeDir = ()=>{
		navigate('/')
	}

	return (
		<htmlForm className="app-flex-wrap">
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
			<div className="app-flex">
				<button
					style={{backgroundColor:'white', color:'var(--primary-color)'}}
					className="btn main-btn" onClick={()=>changeDir()}>
					Signin
				</button>
				<button
					className="btn log-btn" onClick={()=>changeDir()}>
					Back
				</button>
			</div>
		</htmlForm>
	)
}

export default Signin;