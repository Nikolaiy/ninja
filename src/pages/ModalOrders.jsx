import React from "react"
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form";
import { setOrdersForm } from "../redux/actions/ordersForm"


import { Modal, TabNav, Tab } from '../components'
import { Button } from '../components/common'


function ModalOrders(props) {

	const dispatch = useDispatch()

	const [selected, setSelected] = React.useState('Доставка')
	const { register, handleSubmit, watch, errors, reset } = useForm();
	const onSubmit = (data) => {
		dispatch(setOrdersForm(data))
	};

	return (
		<Modal title="Куда доставить" isOpen={props.isOpen} isOpenModal={props.isOpenModal}>
			<TabNav tabs={["Доставка", "Самовывоз"]} selected={selected} setSelected={setSelected}>
				<Tab isSelected={selected === "Доставка"}>
					<form className="modal__form" onSubmit={handleSubmit(onSubmit)}>
						<div className="modal__group-input">
							<input className="input__middle input__value" placeholder="Улица" type="text" name="street" ref={register({ required: true })} />
							<input className="input__small input__value" placeholder="Дом" type="text" name="home" ref={register({ required: true })} />
						</div>
						<div className="modal__group-input">
							<input className="input__small input__value" placeholder="Квартира" type="text" name="flat" ref={register} />
							<input className="input__small input__value" placeholder="Подьезд" type="text" name="entrance" ref={register} />
							<input className="input__small input__value" placeholder="Этаж" type="text" name="floor" ref={register} />
							<input className="input__small input__value" placeholder="Код подьезда" type="text" name="kod" ref={register} />
						</div>
						<div className="modal__group-input">
							<input className="input__big input__value" placeholder="Название адреса" type="text" name="nameAddress" ref={register} />
						</div>
						<div className="modal__group-input">
							<textarea className="input__value input__big" placeholder="Комментарии к заказу" type="text" name="comments" ref={register} />
						</div>
						<Button className="modal__btn" type="submit" onClick={() => props.isOpenModal(false)}>Подтвердить адрес</Button>
					</form>
				</Tab>
				<Tab isSelected={selected === "Самовывоз"}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="pickup__address">
							141281, Московская обл., г. Ивантеевка, Центральный проезд, д.7
						</div>
						<Button className="modal__btn" type="submit" onClick={() => props.isOpenModal(false)}>Выбрать</Button>
					</form>
				</Tab>
			</TabNav>
		</Modal>
	)
}

export default ModalOrders;