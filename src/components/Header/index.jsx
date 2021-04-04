import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import NavBar from './NavBar'

import Logo from '../../assets/statics/home-video-logo.png'
import './Header.css'

const Header = props => {

	const media = window.matchMedia('(max-width: 720px)')

	const [ open, setOpen ] = useState(true)
	const [ mobile, setMobile ] = useState(false)

	const handleClick = () => {
		setOpen(!open)
	}

	const validation = () => {
		setMobile(!mobile)
	}

	useEffect(() => {
		if(media.matches) {
			setMobile(true)
		}
		media.addListener(validation)
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
				<div className="Header__navigation--main">
					<div className="Header__navigation--main-search">
						<i className="icon icon-search"></i>
					</div>
					<div className="Header__navigation--main-profile">
						<img className="profile__image" src="https://avatars.githubusercontent.com/u/36377522?v=4" alt="name" />
					</div>
					<ul>
						<li><Link to="/">Profile</Link></li>
						<li><Link to="/login">Sign out</Link></li>
					</ul>
				</div>

				{ mobile && 
					<i className="burger-menu icon-menu" onClick={ handleClick }></i>
				}
			</div>

		</header>
	)
}

export default Header