export const setCart = (productObj) => ({
    type: 'ADD_PRODUCT_CART',
    payload: productObj
});

export const clearCart = () => ({
    type: 'CLEAR_CART'
});

export const removeItemCart = (id) => ({
    type: 'REMOVE_ITEM_CART',
    payload: id
});

export const plusItemCart = (id) => ({
    type: 'PLUS_ITEM_CART',
    payload: id
});

export const minusItemCart = (id) => ({
    type: 'MINUS_ITEM_CART',
    payload: id
});