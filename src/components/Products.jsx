import React from "react";
import PropTypes from "prop-types";

import { setCart } from '../redux/actions/cart'

import { Product } from "./common";
import {useSelector, useDispatch} from "react-redux";

function Products() {
    const dispatch = useDispatch();
    const product = useSelector(({ product }) => product.items);
    
    const handleAddPizzaToCart = (obj) => {
      dispatch({
        type: 'ADD_PRODUCT_CART',
        payload: obj,
      });
    };

  return (
      <div className="wrapper">
        <div className="content">
          <div className="container">
            {product.map((elem, index) => {
              return (
                  <div className="products__sections" id={elem.name}>
                      <h2 className="content__title">
                          <a key={`${elem}_${index}`} elem={elem.name}>{elem.name}</a>
                      </h2>
                      <div  className="content__items">
                          {elem.descr.map((obj) => (<Product {...obj} key={obj.id} onAddProductToCart={handleAddPizzaToCart}/>
                          ))}
                      </div>
                  </div>
              );

          })}
          </div>
        </div>
      </div>
  );
}

Product.propTypes = {};

export default Products;
