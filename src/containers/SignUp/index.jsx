import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Footer from '../../components/Footer'

import './SignUp.css'

const SignUp = props => {

	const [ form, setForm ] = useState({
		name: '',
		mail: '',
		remember: '',
	})

	const handleChange = e => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		})
	}

	return(
		<>
			<section className="SignUp">
				<div className="Back-btn">
					<button onClick={ () => history.back() } type="button">
						back
					</button>
				</div>
				<div className="SignUp__container">

					<h2 className="SignUp__title">SignUp</h2>

					<form className="SignUp__form">

						<input 
							className="SignUp__form--input" 
							type="text" 
							name="name" 
							placeholder="Name"
							onChange={ handleChange }
						/>
						<input 
							className="SignUp__form--input" 
							type="email" 
							name="mail"
							placeholder="E-mail"
							onChange={ handleChange } 
						/>
						<input 
							className="SignUp__form--input" 
							type="password" 
							name="password"
							placeholder="Password"
						/>

						<button type="button" 
							className="SignUp__form--button" 
							name="button">
							Sign Up
						</button>

					</form>	

					<Link className="styles-link SignUp__remember" to="/login">Have an account? Login</Link>

				</div>
			</section>
			<Footer />
		</>
	)
}

export default connect(null, null)(SignUp)