import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getVideoSource } from '../../actions'

import Player from '../../components/Player'
import VideoNotFound from '../../components/VideoNotFound'
import Footer from '../../components/Footer'

import './Reproductor.css'

const Reproductor = props => {
	const { playing } = props
	const { id } = props.match.params

	useEffect(() => {
		props.getVideoSource(id)
	}, [])

	const hasPaying = Object.keys(playing).length > 0
	
	return(
		<>
			<section className="Reproductor">
				<Player source={playing.source} />
			</section>
			<Footer />
		</>

	)
}

const mapStateToProps = state => {
	return {
		playing: state.playing,
	}
}

const mapDispatchToProps = {
	getVideoSource,
}

export default connect(mapStateToProps, mapDispatchToProps)(Reproductor)