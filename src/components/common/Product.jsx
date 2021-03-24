import React from 'react'
import PropTypes from 'prop-types'
import Button from "./Button";

function Product({ id, imageUrl, name, description, price, onAddProductToCart }) {

    return (
            <div className="product__wrap">
                <div className="product__main">
                    <div className="product__img">
                        <img
                        сlass="product__image"
                        src={imageUrl}
                        alt=""/>
                    </div>
                    <div className="product__info">
                        <h4 className="product__title">{name}</h4>
                        <div className="product__text">{description}</div>
                        <Button
                        onClick={() => { onAddProductToCart({id, imageUrl, name, description, price}) }}
                        className="button button--outline button__price">
                        {price} ₽
                    </Button>
                    </div>
                </div>
                <div class="product__bottom">
                    <div class="product__price">{price} ₽</div>
                    <Button
                        onClick={() => { onAddProductToCart({id, imageUrl, name, description, price}) }}
                        className="button button--outline">
                        В корзину
                    </Button>
                </div>
            </div>
    )
}

Product.propTypes = {

}

export default Product

