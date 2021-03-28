import React from 'react'
import ReactDOM from 'react-dom'

import App from './routes/App'
import Home from './containers/Home'
import Reproductor from './containers/Reproductor'

import './assets/styles/global.css'

ReactDOM.render(
	<Reproductor />,
	document.getElementById('app')
)