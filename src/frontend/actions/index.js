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