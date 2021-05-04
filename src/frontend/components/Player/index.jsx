import React from 'react'
import classNames from 'classnames'
import { Redirect } from 'react-router-dom'

import './Player.css'

const Player = props => {
	const { isCover, isPage, source } = props

	const playerClass = classNames('Player', {
		isCover,
		isPage
	})

	return(
		<div className={ playerClass }>
			<video controls autoPlay>
				<source src={source} type="video/mp4" />
			</video>
		</div>
	)
}

export default Player