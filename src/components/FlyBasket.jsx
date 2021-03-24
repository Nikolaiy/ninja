import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const FlyBasket = (props) => {

    const {itemsCount} = useSelector(({cart}) =>({
        itemsCount: cart.itemsCount
    }));

    console.log()

    return (
        <>
        {itemsCount
        &&
        <div className="fly-basket__wrap">
            <Link className="fly-basket__link" href="" data-active="false" data-type="primary">
                <span className="fly-basket__count">{itemsCount}</span>
                <i className="fly-basket__icon">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8184 0.564191L9.44012 0L5.58105 9.16835H7.64865C8.33801 9.16835 8.75124 8.88625 9.02689 8.32206L11.5077 2.39806C11.7834 1.69257 11.5077 0.846287 10.8184 0.564191Z"
                            fill="white"></path>
                        <path
                            d="M22.0034 0L20.7628 0.564191C20.0734 0.846287 19.7978 1.69257 20.0734 2.39806L22.4166 8.32206C22.6923 8.88625 23.106 9.16835 23.6573 9.16835H25.7249L22.0034 0Z"
                            fill="white"></path>
                        <path
                            d="M29.0376 10.9907H23.9924H7.453H2.27015H0V14.5084C0 15.3546 0.551296 15.9188 1.37824 15.9188H30.6189C31.4458 15.9188 31.9971 15.3546 31.9971 14.5084V10.9907H29.0376Z"
                            fill="white"></path>
                        <path
                            d="M2.08032 17.8872L3.92769 30.8641C4.06527 31.5696 4.61705 31.9925 5.30593 31.9925H26.6904C27.3797 31.9925 27.931 31.4283 28.0686 30.8641L29.916 17.8872H2.08032ZM20.9333 27.4701H10.9273C10.2427 27.4701 9.83238 26.9099 9.83238 26.3496C9.83238 25.7893 10.3799 25.229 10.9273 25.229H20.9333C21.6174 25.229 22.0282 25.7893 22.0282 26.3496C22.0282 26.9099 21.6179 27.4701 20.9333 27.4701ZM22.624 22.7787H9.37233C8.68823 22.7787 8.27738 22.2184 8.27738 21.6581C8.27738 21.0978 8.82486 20.5375 9.37233 20.5375H22.624C23.3081 20.5375 23.7189 21.0978 23.7189 21.6581C23.7189 22.2184 23.3081 22.7787 22.624 22.7787Z"
                            fill="white"></path>
                    </svg>
                </i>
            </Link>
        </div>
        }
        </>

    );
}

export default FlyBasket;