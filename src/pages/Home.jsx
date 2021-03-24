import React from 'react';

import {Header, Footer, Menu, Categories, Products, ProductPopap, FlyBasket} from '../components';
import {SliderTop, SliderNew, SliderPopular} from '../components/slider';


import '../scss/app.scss';

function Home(props) {

    return (
        <>
            <Header />
            <Categories item = {props.product} className="categories__big"/>
            <div className="blocks__sliders">
                <SliderTop />
            </div>
            <Categories item = {props.product} className="categories__small"/>
            <Products product = {props.product}/>
            <FlyBasket />
            <Footer />
            <ProductPopap />
        </>
    );
}

export default Home;
