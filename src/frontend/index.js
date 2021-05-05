import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'

import reducer from './reducers'

import App from './routes/App'

import './assets/styles/global.css'

const history = createBrowserHistory()
const preloadState = window.__PRELOADED_STATE__
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, preloadState, composeEnhancers())

delete window.__PRELOADED_STATE

ReactDOM.hydrate(
	<Provider store={store}>
        <Router history={ history }>
		    <App />
        </Router>
	</Provider>,
	document.getElementById('app')
)