import React from 'react'

import Carousel from '../../components/Carousel'
import CarouselItem from '../../components/CarouselItem'
import Header from '../../components/Header'

import './Home.css'

const Home = () => {
	return(
		<>
			<Header />
			<main className="Home">
				<section className="Home__mainVideo">
					<video className="Home__mainVideo-video">
						<source src="#"></source>
					</video>
				</section>
				<h2 className="Home__category">Originals</h2>
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
				<h2 className="Home__category">My List</h2>
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
				<h2 className="Home__category">Trends</h2>
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