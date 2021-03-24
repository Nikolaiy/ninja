
const initialState = {
    items: {},
    totalPrice: 0,
    itemsCount: 0,
};

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0)

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_CART': {
            const currentProductItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload]

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentProductItems,
                    totalPrice: getTotalPrice(currentProductItems)
                }
            };

            const items = Object.values(newItems).map((obj) => obj.items)

            const allProduct = [].concat.apply([], items);
            const totalPrice = getTotalPrice(allProduct);

            return {
                ...state,
                items: newItems,
                totalPrice,
                itemsCount: allProduct.length,
            }
        }
        case 'REMOVE_ITEM_CART': {
            const newItems = {...state.items};
            const currentTotalPrice = newItems[action.payload].totalPrice;
            const currentItemCount = newItems[action.payload].items.length;
            delete newItems[action.payload];
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                itemsCount: state.itemsCount - currentItemCount,
            };
        };
        case 'PLUS_ITEM_CART':{
            const newItems = [...state.items[action.payload].items, state.items[action.payload].items[0]];
            const currentPlusItem = state.items[action.payload].items[0].price;

            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload]: {
                        items: newItems,
                        totalPrice: getTotalPrice(newItems)
                    }
                },
                totalPrice: state.totalPrice + currentPlusItem,
                // itemsCount: state.itemsCount + 1
            };
        };
        case 'MINUS_ITEM_CART':{
            const oldItems = state.items[action.payload].items;
            const newItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
            const currentMinusItem = state.items[action.payload].items[0].price;

            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload]: {
                        items: newItems,
                        totalPrice: getTotalPrice(newItems)
                    }
                },
            };
        }
        case 'CLEAR_CART':
            return {
                items: {},
                totalPrice: 0,
                itemsCount: 0
            };
        default:
            return state;
    }
};

export default cart;