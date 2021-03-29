import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../containers/Home'
import Reproductor from '../containers/Reproductor'

const App = props => {
	return(
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/watch' component={Reproductor} />
			</Switch>
		</BrowserRouter>
	)
}

export default App