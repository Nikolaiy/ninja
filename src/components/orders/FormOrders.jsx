import React from 'react'

import { useSelector } from "react-redux";

function FormOrders(props) {

	const [active, setActive] = React.useState(true)
	const { street, home, flat } = useSelector(({ form }) => ({
		street: form.street,
		home: form.home,
		flat: form.flat
	}))


	return (
		<>
			<div className="input__wrap">
				<div className="input__body">
					<div className="input__title">Имя*</div>
					<div className="input__group">
						<input className="input__value" type="text" placeholder="Введите ваше имя" required />
					</div>
				</div>
				<div className="input__error error">Поля "Имя" обязательное для заполнения</div>
			</div>
			<div className="input__wrap">
				<div className="input__body">
					<div className="input__title">Номер телефона*</div>
					<div className="input__group">
						<input className="input__value" type="text" placeholder="Введите номер телефона" required />
					</div>
				</div>
				<div className="input__error error">Поля "Телефон" обязательное для заполнения</div>
			</div>
			<div className="delivery__wrap">
				<div className="delivery__body">
					<div className="delivery__title">{active ? "Адрес ресторана" : "Адрес доставки"}</div>
					<div className="delivery__info">
						<div className="delivery__descr">
							<div className="delivery__info-block">
								{(street == null)
									?
									<div className="delivery__address">141281, Московская обл., г. Ивантеевка, Центральный проезд, д.7</div>
									:
									<>
										<div className="delivery__where"></div>
										<div className="delivery__address">г. Ивантеевка, {street}, д.{home}</div>
									</>
								}
							</div>
							{!(street == null) && <div className="delivery__btn-change delivery__btn-margin" onClick={() => props.isOpenModal(true)}>Изменить</div>}
						</div>
						<div className="delivery__btn-group">
							{(street == null)
								?
								<a className="delivery__btn-choice" onClick={() => props.isOpenModal(true)}>Выбрать доставку</a>
								:
								<a className="delivery__btn-choice" onClick={() => props.isOpenModal(true)}>Выбрать самовывоз</a>
							}
						</div>
					</div>
				</div>
			</div>
			<div className="cart__promo">
				<h2 className="orders__title">Промокод</h2>
				<input type="text" placeholder="Ввести промокод" className="cart__promo-value" />
				<button className="cart__promo-btn">Применить</button>
			</div>
			<div className="payment__wrap">
				<h2 className="payment__title">Способ оплаты</h2>
				<div className="payment__block">
					<div className="paymeny__group">
						<input type="radio" name='pay' id="cash" checked /><label className="payment__label" checked htmlFor="cash">Наличными</label>
					</div>
					<div className="paymeny__group">
						<input type="radio" name='pay' id="google_pay" disabled /><label className="payment__label" htmlFor="google_pay" >Google Pay</label>
					</div>
					<div className="paymeny__group">
						<input type="radio" name='pay' id="credit_cart" disabled /><label className="payment__label" htmlFor="credit_cart" >Картой на сайте</label>
					</div>
				</div>
			</div>
		</>
	)
}

export default FormOrders
