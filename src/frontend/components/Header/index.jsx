import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import window from 'global'

import gravatar from '../../utils/gravatar'
import { userLogOut } from '../../actions'


import NavBar from './NavBar'

import ProfileIcon from '../../assets/statics/user-icon.png'
import Logo from '../../assets/statics/home-video-logo.png'
import './Header.css'

const Header = props => {
	const { user } = props

	const hasUser = Object.keys(user).length > 0

	//const media = matchMedia('screen and (max-width: 480px)')

	const [ open, setOpen ] = useState(true)
	const [ mobile, setMobile ] = useState(false)

	const handleClick = () => {
		setOpen(!open)
	}

	const validation = () => {
		setMobile(!mobile)
	}

	const handleLogOut = e => {
		props.userLogOut({})
	}

	useEffect(() => {
		/*if(media.matches) {
			setMobile(true)
		}
		media.addListener(validation)*/
	})

	return(
		<header className="Header">
			<div className="Header__logoContainer">	
				<Link to="/home">
					<img className="Header__logoContainer--logo" 
						width="100" src={Logo} alt="HomeVideo" 
					/>
				</Link>				
			</div>
			<div className="Header__navigation">
				{mobile ?
					<NavBar open={open} isMobile />
					:
					<NavBar isDesktop />
				}
				<div className="Header__navigation--main-container">
					<div className="Header__navigation--main">
						<div className="Header__navigation--main-profile">
							{hasUser ?
								<img className="profile__image" src={gravatar(user.mail)} alt={user.name} />
								:
								<img className="profile__image" src={ProfileIcon} alt="Profile Icon" />
							}
						</div>
						<ul>
							{hasUser ?
								<>
									<li><Link to="/">Profile</Link></li>
									<li><Link to="/login" onClick={ handleLogOut }>Sign out</Link></li>
								</>
								:
								<>
									<li><Link to="/login">Sign in</Link></li>
								</>
							}
						</ul>
					</div>
				</div>

				{ mobile && 
					<i className="burger-menu icon-menu" onClick={ handleClick }></i>
				}
			</div>

		</header>
	)
}

const mapStateToProps = state => {
	return{
		user: state.user
	}
}

const mapDispatchToProps = {
	userLogOut,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)