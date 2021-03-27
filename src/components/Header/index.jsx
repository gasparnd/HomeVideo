import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../assets/statics/home-video-logo.png'
import './Header.css'

const handleBurgerMenu = ev => {
	alert('OPEN')
}

const Header = props => {

	const ipad = screen.width <= 767
	console.log(ipad)

	return(
		<header className="Header">
			<div className="Header__logoContainer">	
				<img className="Header__logoContainer--logo" width="100" src={Logo} alt="HomeVideo" />
			</div>
			<nav className="Header__navigation">
				<div className={ !ipad ? "Header__navigation--pages" : "mobile"}>
					<a className="Header__navigation--pages-link" href="/home">
						Home
					</a>
					<a className="Header__navigation--pages-link" href="/movies">
						Movies
					</a>
					<a className="Header__navigation--pages-link" href="/series">
						Series
					</a>
					<a className="Header__navigation--pages-link" href="/my-list">
						My List
					</a>
					<a className="Header__navigation--pages-link" href="/new">
						New for you
					</a>
				</div>
				<div className="Header__navigation--main">
					<div className="Header__navigation--main-search">
						<i className="icon icon-search"></i>
					</div>
					<div className="Header__navigation--main-profile">
						<img className="profile__image" src="https://avatars.githubusercontent.com/u/36377522?v=4" alt="name" />
					</div>
					{ ipad &&
						<div onClick={ handleBurgerMenu }>MO</div>
					}
				</div>
			</nav>
		</header>
	)
}

export default Header