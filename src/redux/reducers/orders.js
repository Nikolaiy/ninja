const initialState = {
    items: {},
    totalPrice: 0,
    itemsCount: 0,
};

const orders = (state = initialState, action) => {
    switch (action.type) {
        case "":
            return {
                state,
                ...state.item
            }
        default:
            return state

    }
}
