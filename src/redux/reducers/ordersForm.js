const initialState = {
	street: null,
	home: null,
	flat: null,

}


const form = (state = initialState, action) => {
	switch (action.type) {
		case "ADDED__ADDRESS":
			return {
				...state,
				street: action.payload.street,
					home: action.payload.home,
					flat: action.payload.flat,
			}
			default:
				return state
	}
}

export default form;