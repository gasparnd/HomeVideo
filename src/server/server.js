import express from 'express'
import dotenv from 'dotenv'
import webpack from 'webpack'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import { renderRoutes } from 'react-router-config'
import { StaticRouter } from 'react-router-dom'
import serverRoutes from '../frontend/routes/serverRoutes'
import reducer from '../frontend/reducers'
import initialState from '../frontend/initialState'
import helmet from 'helmet'
import getManifest from './getManifest'

import cookieParser from 'cookie-parser'
import boom from '@hapi/boom'
import passport from 'passport'
import axios from 'axios'

dotenv.config()

const { ENV, PORT } = process.env
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(passport.initialize())
app.use(passport.session())

require('./utils/auth/strategies/basic')

if(ENV === 'development') {
	console.log('Development config')
	const webpackConfig = require('../../webpack.config')
	const webpackDevMiddleware = require('webpack-dev-middleware')
	const webpackHotMiddleware = require('webpack-hot-middleware')
	const compiler = webpack(webpackConfig)
	const serverConfig = {
		port: PORT,
		hot: true
	}

	app.use(webpackDevMiddleware(compiler, serverConfig))
	app.use(webpackHotMiddleware(compiler))
} else {
	app.use((req, res, next) => {
		if(!req.hashManifest) req.hashManifest = getManifest()
		next()
	})
	app.use(express.static(`${__dirname}/public`))
	app.use(helmet())
	app.use(helmet.permittedCrossDomainPolicies())
  	app.disable('x-powered-by')
}

const setResponse = (html, preloadedState, manifest) => {
	const maniStyles = manifest ? manifest['vendors.css'] : 'assets/app.css'
	const mainBuild = manifest ? manifest['main.js'] : 'assets/app.js'
	const vendorBuild = manifest ? manifest['vendors.js'] : 'assets/vendor.js'
	
	return(`
		<!DOCTYPE html>
			<html lang="en">
				<head>
					<meta name="viewport" content="width=device-width, initial-scale=1">
					<meta charset="utf-8">
					<link rel="stylesheet" href="${maniStyles}" type="text/css" />
					<title>Home Video</title>
				</head>
				<body>
					<div id="app">${html}</div>
					<script>
						window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            				/</g,
            				'\\u003c'
          				)}
					</script>
					<script src="${mainBuild}" type="text/javascript"></script>
					<script src="${vendorBuild}" type="text/javascript"></script>
				</body>
			</html>
	`)
}

const renderApp = (req, res) => {
	if(ENV != "development"){

        res.set("Content-Security-Policy", 
        	"default-src'self'; img-src'self' https://dummyimage.com; script-src'self''sha256-xgXo3/qL+rdiFoc10qGzDhNUQy5kzBpO9vJyTN/xAds='; style-src-elem 'self' https://fonts.googleapis.com; font-src https://fonts.gstatic.com");
 	}
	const store = createStore(reducer, initialState)
	const preloadedState = store.getState()
	const html = renderToString(
		<Provider store={store}>
			<StaticRouter location={req.url} context={{}}>
				{renderRoutes(serverRoutes)}
			</StaticRouter>
		</Provider>
	)

	res.send(setResponse(html, preloadedState, req.hashManifest))
}

app.post('/auth/sign-in', async (req, res, next) => {
	const { rememberMe } = req.body;

	passport.authenticate('basic', (error, data) => {
		try {
			if(error || !data) {
				next(boom.unauthorized())
			}

			req.login(data, { session: false }, async error => {
				if(error) {
					next(error)
				}

				const { token, ...user } = data

				res.cookie("token", token, {
					httpOnly: !config.dev,
					secure: !config.dev,
					maxAge: rememberMe ? THIRTY_DAYS_IN_SEC : TWO_HOURS_IN_SEC
				})

				res.status(200).json(user)
			})
		} catch(err) {
			next(err)
		}
	})(req, res, next)
})

app.post('/auth/sign-up', async (req, res, next) => {
	const { body: user } = req

	try {
		const userData = await axios({
			url: `${process.env.API_URL}/api/auth/sign-up`,
			method: 'post',
			data: {
				'email': user.email,
				'name': user.name,
				'password': user.password
			}
		})

		res.status(201).json({
			name: req.body.name,
			email: req.body.email,
			id: userData.data.id
		})
	} catch(err) {
		next(err)
	}
})

app.get('*', renderApp)

app.listen(PORT, err => {
	if(err) console.log(err)
	else console.log(`Server running on localhost:${PORT}`)
})