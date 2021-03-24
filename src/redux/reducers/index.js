import { combineReducers } from "redux";

import cart from './cart';
import product from './product';
import sliderNew from './sliderNew';

const rootReducer = combineReducers({
    cart,
    product,
    sliderNew
});

export default rootReducer;