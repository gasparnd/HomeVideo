import React from 'react'
import classNames from 'classnames'

import './Player.css'

const Player = props => {
	const { isCover, isPage, back, notBack } = props

	const playerClass = classNames('Player', {
		isCover,
		isPage
	})

	const backButton = classNames('Player-back', {
		back,
		notBack
	})

	return(
		<div className={ playerClass }>
			<video controls autoPlay>
				<source src="#" type="video/mp4" />
			</video>

			<div className={ backButton }>
				<button type="button" onClick={ () => props.history.goBack() }>
					Regresar
				</button>
			</div>
		</div>
	)
}

export default Player