export const getVideoSource = payload => ({
	type: 'GET_VIDEO_SOURCE',
	payload
})

export const setFavorite = payload => ({
	type: 'SET_FAVORITE', 
	payload,
})

export const deleteFavorite = payload => ({
	type: 'DELETE_FAVORITE',
	payload
})