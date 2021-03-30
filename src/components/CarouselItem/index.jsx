import React from 'react'
import { Link } from 'react-router-dom'

import './CarouselItem.css'

const CarouselItem = props => {

	const { cover, title, duration, year, contentRating, id } = props

	return(
		<div className="carousel-item">
			<img className="carousel-item__img" src={cover} alt={title} />
			<div className="carousel-item__details">
				<div className="carousel-item-icon">
					<Link to={ `/player/${id}` }>
						<div className="item-icon">
							<i className="icon-play"></i>
						</div>
					</Link>
					<div className="item-icon">
						<i className="icon-plus"></i>
					</div>
				</div>
				<p className="carousel-item__details--title">{title}</p>
				<p className="carousel-item__details--video-details">
					{`${year} ${contentRating} ${duration} minuts`}
				</p>
			</div>
		</div>
	)
}

export default CarouselItem