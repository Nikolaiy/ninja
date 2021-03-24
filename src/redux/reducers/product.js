const initialState = {
    items: [],
};

const product = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    };
};

export default product;