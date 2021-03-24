import React from 'react';

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import { Logo } from '../components/common'
import { Footer } from '../components'
import FormOrders from '../components/orders/FormOrders'
import ModalOrders from "./ModalOrders"

function Orders() {
    
    const [active, setActive] = React.useState(false)

    const {items, totalPrice, itemsCount} = useSelector(({cart}) =>({
        items: cart.items,
        totalPrice: cart.totalPrice,
        itemsCount: cart.itemsCount
    }));

    const allProduct = Object.keys(items).map((key) => {
        return items[key].items[0]
    });
    
    return (
        <div>
            <ModalOrders isOpen={active} isOpenModal={setActive}/>
            <div className="wrapper">
                <div className="container">
                    <div className="header-top">
                        <div className="header-wrap">
                            <Logo />
                        </div>
                        <div className="orders__step">
                            <div className="step step_1">
                                <div className="step__circle chicked">&#10003;</div>
                                <div className="step__title">Корзина</div>
                            </div>
                            <div className="step step_2">
                                <div className="step__circle active">2</div>
                                <div className="step__title">Оформление заказа</div>
                            </div>
                            <div className="step step_3">
                                <div className="step__circle">3</div>
                                <div className="step__title">Закза принят</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="orders__border"/>
            <div className="orders__wrap">
                <div className="orders__container">
                    <div className="orders__form">
                        <h2 className="orders__title">Заказ на доставку</h2>
                        <FormOrders isOpenModal={setActive}/>
                        <div className="cart__bottom-buttons">
                            <a href="/" className="button button--outline button--add go-back-btn">
                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                                <Link to="/cart">
                                    <span>Вернуться назад</span>
                                </Link>
                            </a>
                            <div className="button pay-btn">
                                <span>Оформить заказ</span>
                            </div>
                        </div>
                    </div>
                    <div className="orders__cart">
                        <div className="orders__composition">
                            <div className="composition__body">
                                <h3 className="composition__title">Карточка заказа</h3>
                                
                                    
                                        {
                                            allProduct.map((item) => {
                                                return (
                                                    <div className="composition__info">
                                                        <div className="composition__info-group">
                                                            <div className="composition__product">{item.name}</div>
                                                            <div className="composition__count">{itemsCount} шт</div>
                                                        </div>
                                                        <div className="composition__price">{totalPrice} Р</div>
                                                     </div>
                                                )
                                            })
                                        }
                                        
                                        
                               
                                <div className="composition__totlaprice">
                                    <div className="totlaprice__title">Стоимость заказа</div>
                                    <div className="totlaprice__number">695 Р</div>
                                </div>
                            </div>
                            <div className="composition__footer">
                                <p>Доставка бесплатная</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Orders;
