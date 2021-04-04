import React from 'react'
import { connect } from 'react-redux'

import { setFavorite, deleteFavorite } from '../../actions'

import './CarouselItem.css'

const CarouselItem = props => {

	const { cover, title, duration, year, contentRating, id, isList } = props

	const handleFavorite = () => {
		props.setFavorite({
			cover, title, year, contentRating, duration, id
		})
	}

	const handleDeleteFavorite = id => {
		props.deleteFavorite(id)
	}

	return(
		<div className="carousel-item">
			<img className="carousel-item__img" src={cover} alt={title} />
			<div className="carousel-item__details">
				<div className="carousel-item-icon">
					<a className="styles-link" href={ `/player/${id}` }>
						<div className="item-icon">
							<i className="icon-play"></i>
						</div>
					</a>
					{ !isList &&
						<div className="item-icon" onClick={ handleFavorite }>
							<i className="icon-add"></i>
						</div>
					}
					
					{ isList &&
						<div className="item-icon" onClick={ () => handleDeleteFavorite(id) }>
							<i className="icon-delete"></i>
						</div>
					}
				</div>
				<p className="carousel-item__details--title">{title}</p>
				<p className="carousel-item__details--video-details">
					{`${year} ${contentRating} ${duration} minuts`}
				</p>
			</div>
		</div>
	)
}

const mapDispatchToProps = {
	setFavorite,
	deleteFavorite,
}

export default connect(null, mapDispatchToProps)(CarouselItem)