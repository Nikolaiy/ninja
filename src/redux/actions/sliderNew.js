import axios from 'axios';


export const fetchSlider = () => (dispatch) => {
    axios.get('/sales')
        .then(({data})=> (dispatch(sliderNew(data))))

};

export const sliderNew = (items) => ({
    type: 'ADD_SLIDER',
    payload: items 
});