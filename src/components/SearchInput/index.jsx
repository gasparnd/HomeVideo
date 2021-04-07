import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { setResponse } from '../../actions'

import './SearchInput.css'

const SearchInput = ({ searchResults, setResponse }) => {

	const [ query, setQuery ] = useState('')
	const searchHash = Object.keys(searchResults).length > 0

	const handleSearch = e => {
		if(e.target.value) {
			const lowerCase = e.target.value.toLowerCase()
			setQuery(e.target.value)
			setResponse(lowerCase)
		} 
		if(e.target.value === '') {
			setQuery(e.target.value)
			setResponse('')
		}
	}

	return(
		<section className="Search">
			<h2 className="Search__title">What do you want to watch?</h2>
			<input className="input-search" 
				type="text" 
				placeholder="Search..." 
				name="search" 
				onChange={ handleSearch }
			/>
			{searchHash &&
				<div className="Search__results">
					{searchResults.map( item => ( 
						<a className="Search__results--item" 
							href={`/player/${item.id}`} 
							key={item.id} >
							{item.title}
						</a>
					))}
				</div>
			}
		</section>
	)
}

const mapStateToProps = state => {
	return{
		searchResults: state.searchResults
	}
}

const mapDispatchToProps = {
	setResponse,
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)