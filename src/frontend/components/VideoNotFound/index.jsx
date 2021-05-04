import React from 'react'
import { connect } from 'react-redux'

import Header from '../Header'
import Footer from '../Footer'
import Carousel from '../Carousel'
import CarouselItem from '../CarouselItem'

import './VideoNotFound.css'

const VideoNotFound = props => {
	const { originals } = props

	return(
		<>
			<Header />
			<section className="VideoNotFound">
				<h2>Sorry this title is not available</h2>
				<p>
					We recommend you these titles
				</p>
				<div>
				</div>
			</section>
			<Carousel>
				{originals.map( item => (
					<CarouselItem key={item.id} { ...item } />
				))}
			</Carousel>
			<Footer />
		</>
	)
}

const mapStateToProps = state => {
	return{
		originals: state.originals
	}
}

export default connect(mapStateToProps, null)(VideoNotFound)