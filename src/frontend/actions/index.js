import axios from 'axios'

export const userLogin = payload => ({
	type: 'USER_LOGIN',
	payload,
})

export const setRegister = payload => ({
	type: 'SET_REGISTER',
	payload,
})

export const userLogOut = payload => ({
	type: 'USER_LOG_OUT',
	payload,
})

export const getVideoSource = payload => ({
	type: 'GET_VIDEO_SOURCE',
	payload,
})

export const setFavorite = payload => ({
	type: 'SET_FAVORITE', 
	payload,
})

export const deleteFavorite = payload => ({
	type: 'DELETE_FAVORITE',
	payload,
})

export const setResponse = payload => ({
	type: 'SET_RESPONSE',
	payload,
})

export const setError = payload => ({
	type: 'SET_ERROR',
	payload,
})

export const registerUser = (payload, redirectUrl) => {
	return (dispatch) => {
		axios.post('/auth/sign-up', payload)
			.then(( {data} ) => dispatch(setRegister(data)))
			.then(() => {
				window.location.href = redirectUrl
			})
			.catch(err => dispatch(setError(err)))
	}
}