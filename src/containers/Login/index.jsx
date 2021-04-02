import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Footer from '../../components/Footer'

import './Login.css'

const Login = props => {

	const [ form, setForm ] = useState({
		mail: '',
		remember: '',
	})

	const handleChange = e => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		})
	}

	const handleClick = e => {
		setForm({
			...form,
			remember: true
		})
	}

	return(
		<>
			<section className="Login">
				<div className="Back-btn">
					<button onClick={ () => history.back() } type="button">
						back
					</button>
				</div>
				<div className="Login__container">

					<h2 className="Login__title">Login</h2>

					<form className="Login__form">
					
						<input 
							className="Login__form--input" 
							type="email" 
							name="mail"
							placeholder="E-mail"
							onChange={ handleChange } 
						/>
						<input 
							className="Login__form--input" 
							type="password" 
							name="password"
							placeholder="Password"
						/>

						<label className="Login__form--label">
							<input type="checkbox" 
								name="remember" 
								onClick={ handleClick } 
							/> Remember me
						</label>

						<button type="button" 
							className="Login__form--button" 
							name="button">
							Login
						</button>

					</form>	

					<Link className="styles-link Login__remember" to="/sign-up">Have an account? Sign Up</Link>

				</div>
			</section>
			<Footer />
		</>
	)
}

export default connect(null, null)(Login)