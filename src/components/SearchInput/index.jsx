import React, { useState } from 'react'
import { connect } from 'react-redux'

import './SearchInput.css'

const SearchInput = () => {

	const [ query, setQuery ] = useState('')

	const handleSearch = e => {
		setQuery(e.target.value)
	}

	return(
		<section className="Search">
			<h2 className="Search__title">What do you watch?</h2>
			<input className="input-search" 
				type="text" 
				placeholder="Search..." 
				name="search" 
				onChange={ handleSearch }
			/>
		</section>
	)
}

export default connect(null, null)(SearchInput)