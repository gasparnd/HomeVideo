const reducer = (state, action) => {
	switch (action.type) {
		case 'GET_VIDEO_SOURCE':
			const concat = state.originals.concat(state.trends)
			const video = concat.find( item => item.id === Number(action.payload))
			return{
				...state,
				playing: video ? video : false
			}
		case 'SET_FAVORITE':
			const exist = state.myList.find( item => item.id === action.payload.id)
			if(exist) return {...state}
			return{
				...state,
				myList: [...state.myList, action.payload]
			}
		case 'DELETE_FAVORITE':
			return{
				...state,
				myList: state.myList.filter( item => item.id !== action.payload)
			}
		default:
			return state
	}
}

export default reducer