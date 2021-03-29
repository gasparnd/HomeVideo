import React from 'react'

import Player from '../../components/Player'
import Carousel from '../../components/Carousel'
import CarouselItem from '../../components/CarouselItem'
import Footer from '../../components/Footer'

import './Reproductor.css'

const Reproductor = props => {

	return(
		<>
			<section className="Reproductor">
				<Player isPage />
				<div className="Suggestions">
					<h2 className="Suggestions__category">Suggestions</h2>
					<Carousel>
						<CarouselItem />
					</Carousel>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Reproductor