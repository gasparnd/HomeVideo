import React from 'react'
import { Link } from 'react-router-dom'
import ClassNames from 'classnames'

const NavBar = ({ open, isMobile, isDesktop }) => {

	const navBarClass = ClassNames('NavBar', {
		isMobile,
		isDesktop,
		open,
	})

	return(
		<div className={navBarClass}>
			<Link className="NavBar__pages-link" to="/home">
				Home
			</Link>
			<Link className="NavBar__pages-link" to="/movies">
				Movies
			</Link>
			<Link className="NavBar__pages-link" to="/series">
				Series
			</Link>
			<Link className="NavBar__pages-link" to="/my-list">
				My List
			</Link>
		</div>
	)
}

export default NavBar