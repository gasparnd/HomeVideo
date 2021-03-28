import React from 'react'

import './CarouselItem.css'

const CarouselItem = ({data}) => {
	return(
		<div className="carousel-item">
			<img className="carousel-item__img" src="https://static.toiimg.com/photo/72975551.cms" alt="name" />
			<div className="carousel-item__details">
				<div className="carousel-item-icon">
					<div className="item-icon">
						<i className="icon-play"></i>
					</div>
					<div className="item-icon">
						<i className="icon-plus"></i>
					</div>
				</div>
				<p className="carousel-item__details--title">Titulo</p>
				<p className="carousel-item__details--video-details">
					2020 +16 1:30
				</p>
			</div>
		</div>
	)
}

export default CarouselItem