import React from 'react'
import PropTypes from 'prop-types'

import buttom from './../assets/img/buttom.svg';

function ProductPopap(props) {
    return (
        <div className="product__background">
		<div className="product__background-wrap">
			<div className="button-close">
				<i className="sc-1lk7lib-0 lmohzF svg-icon k0j10-4 jjZOby">
					<img src={buttom} alt=""/>
				</i>
			</div>
			<div className="product__wrapper">
				<div className="product__img">
					<img src="https://api.сытыйниндзя.рф/storage/0d935ea25b7c1edc559d5747e847540a_fit_300_168_center.jpg" alt="" />
				</div>
				<div className="product__block">
					<div className="product__block-info">    
						<div className="product__title">
							<h2>Гурман</h2>
							<span>Грамовка 530 гр.</span>
						</div>
						<div className="product__descr">
							<p>Пицца соус, томаты, сыр Моцарелла, базилик</p>
						</div>
						<div className="product__options-wrap">
							<h3>Добавить начинку</h3>
							<div className="product__options">
								<buttom className="option__cart active">
									<img src="https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA5E376B4DF" alt="" />
									<h3>Оливки</h3>
									<span className="price">
										<span className="money">300</span>
										<span className="span currency">Р</span>
									</span>
								</buttom>
								<buttom className="option__cart">
									<img src="https://dodopizza-a.akamaihd.net/static/Img/Ingredients/d18f364cbd6a43a88bfefb38abd43fa2.png" alt="" />
									<h3>Оливки</h3>
									<span className="price">
										<span className="money">300</span>
										<span className="span currency">Р</span>
									</span>
								</buttom>
								<buttom className="option__cart">
									<img src="https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA5E376B4DF" alt="" />
									<h3>Оливки</h3>
									<span className="price">
										<span className="money">300</span>
										<span className="span currency">Р</span>
									</span>
								</buttom>
								<buttom className="option__cart">
									<img src="https://dodopizza-a.akamaihd.net/static/Img/Ingredients/d18f364cbd6a43a88bfefb38abd43fa2.png" alt="" />
									<h3>Оливки</h3>
									<span className="price">
										<span className="money">300</span>
										<span className="span currency">Р</span>
									</span>
								</buttom>
								<buttom className="option__cart">
									<img src="https://dodopizza-a.akamaihd.net/static/Img/Ingredients/d18f364cbd6a43a88bfefb38abd43fa2.png" alt="" />
									<h3>Оливки</h3>
									<span className="price">
										<span className="money">300</span>
										<span className="span currency">Р</span>
									</span>
								</buttom>
								<buttom className="option__cart">
									<img src="https://dodopizza-a.akamaihd.net/static/Img/Ingredients/d18f364cbd6a43a88bfefb38abd43fa2.png" alt="" />
									<h3>Оливки</h3>
									<span className="price">
										<span className="money">300</span>
										<span className="span currency">Р</span>
									</span>
								</buttom>
							</div>
						</div>
					</div>
					<div className="product__btn button button--outline">
						<span>Добавить в корзину</span>
						<span className="price">
							<span className="money">299</span>
							<span className="span currency">Р</span>
						</span>
					</div>
				</div>
            </div>
		</div>
	</div>
    )
}

ProductPopap.propTypes = {

}

export default ProductPopap

