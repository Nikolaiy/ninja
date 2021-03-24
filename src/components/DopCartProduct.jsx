import React from "react"

import Button from './common/Button'

function DopCartProduct(props) {
    return (
        <div className="add__product-wrapper">
            <h2>Cоусы к бортикам и закускам</h2>
            <div className="add__product">
                <div className="add__product-wrap">
                    <img className="add__product-img" src="https://dodopizza-a.akamaihd.net/static/Img/Products/eb0666267fe147e1aeefa26fe5026266_146x146.jpeg" alt=""/>
                    <div className="add__product-title">Сырный соус</div>
                    <Button className="add__product-price">30 Р</Button>
                </div>
                <div className="add__product-wrap">
                    <img className="add__product-img" src="https://dodopizza-a.akamaihd.net/static/Img/Products/c590ad6347004f9880d24c4c6e13390f_146x146.jpeg" alt=""/>
                    <div className="add__product-title">Барбекю</div>
                    <Button className="add__product-price">30 Р</Button>
                </div>
                <div className="add__product-wrap">
                    <img className="add__product-img" src="https://dodopizza-a.akamaihd.net/static/Img/Products/c7ea87ae29664effad534587d64dc49f_146x146.jpeg" alt=""/>
                    <div className="add__product-title">Ранч</div>
                    <Button className="add__product-price">30 Р</Button>
                </div>
                <div className="add__product-wrap">
                    <img className="add__product-img" src="https://dodopizza-a.akamaihd.net/static/Img/Products/fd31628ecf754216b160d5116967d32f_146x146.jpeg" alt=""/>
                    <div className="add__product-title">Сгущенка</div>
                    <Button className="add__product-price">30 Р</Button>
                </div>
                <div className="add__product-wrap">
                    <img className="add__product-img" src="https://dodopizza-a.akamaihd.net/static/Img/Products/154d7042f6484c12bea3864d67292343_146x146.jpeg" alt=""/>
                    <div className="add__product-title">Малиновое варенье</div>
                    <Button className="add__product-price">30 Р</Button>
                </div>
            </div>
        </div>
    )
}

export default DopCartProduct