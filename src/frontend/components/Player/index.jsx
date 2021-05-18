import React from 'react'
import classNames from 'classnames'
import { Redirect } from 'react-router-dom'

import './Player.css'

const Player = props => {
	const { source } = props

	return(
		<div className='Player'>
			<video controls>
				<source src={source} type="video/mp4" />
			</video>
		</div>	
	)
}

export default Player