import {
	combineReducers
} from "redux";

import cart from './cart';
import product from './product';
import sliderNew from './sliderNew';
import form from './ordersForm';

const rootReducer = combineReducers({
	cart,
	product,
	sliderNew,
	form
});

export default rootReducer;