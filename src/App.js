import React from 'react';
import { Route } from "react-router-dom";
import {fetchProduct} from './redux/actions/product';
import {fetchSlider} from './redux/actions/sliderNew';

import { Home, Cart, Sales, Orders, ModalOrders } from './pages'
import {useDispatch} from "react-redux";



function App() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        console.log(dispatch(fetchProduct()))
    }, []);

    React.useEffect(() => {
        console.log(dispatch(fetchSlider()))
    }, []);


  return (
    <div className="App">
        <Route exact path='/' component = { Home }  />
        <Route exact path='/cart' component={ Cart } />
        <Route exact path='/sales' component={ Sales } />
        <Route exact path='/cart/orders' component={ Orders } />
    </div>
  );
}

export default App;
