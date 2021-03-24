import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link as Reference, animateScroll as scroll } from "react-scroll";

import {Button} from './common';

import cart from './../assets/img/cart.svg';

function Categories(props) {
	const {totalPrice, itemsCount} = useSelector(({cart}) => ({
		totalPrice: cart.totalPrice,
		itemsCount: cart.itemsCount
	}));

	const items = useSelector(({ product }) => product.items);

    return (
        <div className={`"header__wrap fixed-bar " + ${props.className}`}>
			<div className="header">
				<div className="wrapper navigation">
					<div className="container">
						<nav className="categories">
							<ul>
								{items.map((elem, index) => {
									return (<li key={`${elem}_${index}`}>
										<Reference 
											className="categories__link"
											activeClass="active"
											to={elem.name} 
											spy={true}
											smooth={true}
											offset={-100}
											duration= {500}>
										{elem.name}
										</Reference></li>)
								})}
								<li><a href="#">Акции</a></li>
							</ul>
						</nav>
						<div className="header__cart">
							<Link rel="stylesheet" to="/cart">
								<Button className="button--cart" >
								<span>{totalPrice} ₽</span>
								<div className="button__delimiter"></div>
								<img src={cart} alt="" />
								<span>{itemsCount}</span>
							</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

Categories.propTypes = {

}

export default Categories

