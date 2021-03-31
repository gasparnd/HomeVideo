const reducer = (state, action) => {
	switch (action.type) {
		case 'GET_VIDEO_SOURCE':
			const concat = state.originals.concat(state.trends)
			const video = concat.find( item => item.id === Number(action.payload))
			return{
				...state,
				playing: video ? video : false
			}
		default:
			return state
	}
}

export default reducer