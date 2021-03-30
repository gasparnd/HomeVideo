const reducer = (state, action) => {
	switch (action.type) {
		case 'GET_VIDEO_SOURCE':
			const concat = state.originals.concat(state.trends)
			return{
				...state,
				playing: concat.find( item => item.id === Number(action.payload))
			}
		default:
			return state
	}
}

export default reducer