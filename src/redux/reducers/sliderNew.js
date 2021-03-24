

const initialState = {
    items: []
}

const sliderNew = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_SLIDER":
            return {
                ...state,
                items: action.payload
            };
        default:
            return state
    };
};

export default sliderNew;