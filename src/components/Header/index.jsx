import React from 'react'
import { Link } from 'react-router-dom'

import '../../assets/styles/components/Header.css'

const Header = props => {
	return(
		<header>
			<div className="Header__logoContainer">	
				<img className="Header__Header__logoContainer--logo" alt="HomeVideo" />
			</div>
			<nav className="Header__navigation">
				<div className="Header__navigation--pages">
					<a className="Header__navigation--pages-link" to="/home">
						Home
					</a>
					<a className="Header__navigation--pages-link" to="/movies">
						Movies
					</a>
					<a className="Header__navigation--pages-link" to="/series">
						Series
					</a>
					<a className="Header__navigation--pages-link" to="/my-list">
						My List
					</a>
					<a className="Header__navigation--pages-link" to="/new">
						New for you
					</a>
				</div>
				<div className="Header__navigation--main">
					<i className="icon">Search</i>
					<div className="Header__navigation--main-profile">
						<img className="profile__image" alt="name" />
					</div>
				</div>
			</nav>
			<h2>HomeVideo</h2>
		</header>
	)
}

export default Header