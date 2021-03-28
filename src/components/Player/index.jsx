import React from 'react'

import './Player.css'

const Player = () => {
	return(
		<div className="Player">
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