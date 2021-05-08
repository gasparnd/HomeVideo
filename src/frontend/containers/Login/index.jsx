import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'
import { IoLogoTwitter } from 'react-icons/io'

import { userLogin } from '../../actions'

import Footer from '../../components/Footer'

import './Login.css'

const Login = props => {
	const { userLogin } = props
	const [ form, setForm ] = useState({
		mail: '',
		remember: false,
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
			remember: !form.remember
		})
		userLogin(form)
	}

	const handleSubmit = e => {
		e.preventDefault()
		props.userLogin(form)
		props.history.push('/')
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

					<form className="Login__form" onSubmit={handleSubmit}>
					
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

						<div className='Login__container--social-media'>
            				<div>
              					<FaGoogle />
              						{' '}
									Login with Google
            				</div>
            				<div>
             	 				<IoLogoTwitter />
              					{' '}
								Login with Twitter
            				</div>
          				</div>

						<button type="submit" 
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

const mapDispatchToProps = {
	userLogin,
}

export default connect(null, mapDispatchToProps)(Login)