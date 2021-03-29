import React from 'react'
import classNames from 'classnames'

import './Player.css'

const Player = props => {
	const { isCover, isPage } = props

	const playerClass = classNames('Player', {
		isCover,
		isPage
	})

	return(
		<div className={ playerClass }>
			<video controls autoPlay>
				<source src="#" type="video/mp4" />
			</video>

			<div className="Player-back">
				<button type="button" onClick={ () => props.history.goBack() }>
					Regresar
				</button>
			</div>
		</div>
	)
}

export default Player