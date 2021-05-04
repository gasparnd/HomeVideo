import React from 'react'
import { Link } from 'react-router-dom'

import './NotFound.css'

const NotFound = () => {
	return(
		<div className="NotFound">
			<h3>
				Error 404
			</h3>
			<p>Page not found</p>
			<Link to='/'>Back to Home</Link>
		</div>
	)
}

export default NotFound