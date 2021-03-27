import React from 'react'
import ReactDOM from 'react-dom'

import App from './routes/App'
import Header from './components/Header'

import './assets/styles/global.css'

ReactDOM.render(
	<Header />,
	document.getElementById('app')
)