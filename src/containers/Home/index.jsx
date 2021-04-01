import React from 'react'
import { connect } from 'react-redux'

import Carousel from '../../components/Carousel'
import CarouselItem from '../../components/CarouselItem'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Player from '../../components/Player'

import './Home.css'

const Home = props => {
	const { trends, originals, myList } = props

	return(
		<>
			<Header />
			<main className="Home">
				<section className="Home__mainVideo">
					<Player isCover />
				</section>

				<h2 className="Home__category">Originals</h2>
				<Carousel >
					{originals.map( el => (
						<CarouselItem {...el} key={el.id} />
					))}
				</Carousel>

				{myList.length > 0 && 
					<>
						<h2 className="Home__category">My List</h2>
						<Carousel >
						{myList.map( el => (
							<CarouselItem isList {...el} key={el.id} />
						))}
						</Carousel>
					</>
				}

				<h2 className="Home__category">Trends</h2>
				<Carousel >
					{trends.map( el => (
						<CarouselItem {...el} key={el.id} />
					))}
				</Carousel>

			</main>
			<Footer />
		</>
	)
}

const mapStateToProps = state => {
	return {
		trends: state.trends,
		originals: state.originals,
		myList: state.myList,
	}
}

export default connect(mapStateToProps, null)(Home)