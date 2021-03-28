import React from 'react'
import ReactDOM from 'react-dom'

import App from './routes/App'
import Home from './containers/Home'
import Header from './components/Header'
import Carousel from './components/Carousel'
import CarouselItem from './components/CarouselItem'

import './assets/styles/global.css'

ReactDOM.render(
	<Home />,
	document.getElementById('app')
)