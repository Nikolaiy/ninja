import axios from 'axios';


export const fetchProduct = () => (dispatch) => {
    axios.get('/categories')
        .then(({data})=> (dispatch(setProduct(data))))

}

export const setProduct = (items) => ({
    type: 'ADD_PRODUCT',
    payload: items
});