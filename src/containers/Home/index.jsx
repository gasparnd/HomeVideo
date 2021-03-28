import React from 'react'

import Carousel from '../../components/Carousel'
import CarouselItem from '../../components/CarouselItem'
import Header from '../../components/Header'

const Home = () => {
	return(
		<>
			<Header />
			<main className="Home">
				<h2>Originals</h2>
				<Carousel >
					<CarouselItem />
					<CarouselItem />
					<CarouselItem />
					<CarouselItem />
					<CarouselItem />
					<CarouselItem />
					<CarouselItem />
					<CarouselItem />
				</Carousel>
			</main>
		</>
	)
}

export default Home