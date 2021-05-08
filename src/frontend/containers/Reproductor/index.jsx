import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getVideoSource } from '../../actions'
	
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
				<video src={playing.source} controls>
					<source src={playing.source} type="video/mp4" />
				</video>
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