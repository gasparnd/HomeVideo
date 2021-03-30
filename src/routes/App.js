import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../containers/Home'
import Reproductor from '../containers/Reproductor'
import Header from '../components/Header'

const App = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/player/:id' component={Reproductor} />
			<Route component={Header} />
		</Switch>
	</BrowserRouter>
)

export default App