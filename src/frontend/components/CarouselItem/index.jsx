import React from 'react'
import { connect } from 'react-redux'
import { 
	FaPlay, 
	FaPlus, 
	FaTrash, 
	IconContext } from "react-icons/fa"

import { setFavorite, deleteFavorite } from '../../actions'

import './CarouselItem.css'

const CarouselItem = props => {

	const { cover, title, duration, year, contentRating, id, isList } = props

	let iconStyles = { color: "white", fontSize: "1.5em" }
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
							<FaPlay />
						</div>
					</a>
					{ !isList &&
						<div className="item-icon" onClick={ handleFavorite }>
							<FaPlus />
						</div>
					}
					
					{ isList &&
						<div className="item-icon" onClick={ () => handleDeleteFavorite(id) }>
							<FaTrash />
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