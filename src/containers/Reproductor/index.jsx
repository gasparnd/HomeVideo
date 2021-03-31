import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getVideoSource } from '../../actions'

import Player from '../../components/Player'
import Carousel from '../../components/Carousel'
import CarouselItem from '../../components/CarouselItem'
import VideoNotFound from '../../components/VideoNotFound'
import Footer from '../../components/Footer'

import './Reproductor.css'

const Reproductor = props => {
	const { playing, originals } = props
	const { id } = props.match.params

	useEffect(() => {
		props.getVideoSource(id)
	}, [])

	const hasPaying = Object.keys(playing).length > 0
	
	return hasPaying ?(
		<>
			<section className="Reproductor">
				<Player source={playing.source} isPage />
				<div className="Suggestions">
					<h2 className="Suggestions__category">Suggestions</h2>
					<Carousel>
						{originals.map( movie => (
								<CarouselItem key={movie.id} {...movie} />
							))
						}
					</Carousel>
				</div>
			</section>
			<Footer />
		</>

	) : <VideoNotFound />
}

const mapStateToProps = state => {
	return {
		playing: state.playing,
		originals: state.originals,
	}
}

const mapDispatchToProps = {
	getVideoSource,
}

export default connect(mapStateToProps, mapDispatchToProps)(Reproductor)