import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../containers/Home'
import Reproductor from '../containers/Reproductor'
import NotFound from '../components/NotFound'

const App = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/player/:id' component={Reproductor} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
)

export default App