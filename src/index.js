import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducer from './reducers'

import App from './routes/App'

import './assets/styles/global.css'

const store = createStore(reducer, initialState)
const initialState = []


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
)