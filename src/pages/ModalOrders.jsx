import React from "react"

import { Modal, TabNav, Tab } from '../components'
import { Button } from '../components/common'


function ModalOrders (props) {

    const [selected, setSelected] = React.useState('Доставка')

    return (
        <Modal title="Куда доставить" isOpen={props.isOpen} isOpenModal={props.isOpenModal}>
            <TabNav tabs={["Доставка", "Самовывоз"]} selected={selected} setSelected={setSelected}>
                <Tab isSelected={selected === "Доставка"}>
                    <div className="modal__form">
                        <div className="modal__group-input">
                            <input className="input__middle input__value" placeholder="Улица" type="text"/>
                            <input className="input__small input__value" placeholder="Дом" type="text"/>
                        </div>
                        <div className="modal__group-input">
                            <input className="input__small input__value" placeholder="Квартира" type="text"/>
                            <input className="input__small input__value" placeholder="Подьезд" type="text"/>
                            <input className="input__small input__value" placeholder="Этаж" type="text"/>
                            <input className="input__small input__value" placeholder="Код подьезда" type="text"/>
                        </div>
                        <div className="modal__group-input">
                            <input className="input__big input__value" placeholder="Название адреса" type="text"/>
                        </div>
                        <div className="modal__group-input">
                            <textarea className="input__value input__big" placeholder="Комментарии к заказу" type="text"/>
                        </div>
                    </div>
                </Tab>
                <Tab isSelected={selected === "Самовывоз"}>
                    <div className="pickup__address">
                        Адрес Ресторана
                    </div>
                </Tab>
            </TabNav>
            {selected === "Самовывоз"
                ?
                <Button className="modal__btn">Выбрать</Button>
                :
                <Button className="modal__btn">Подтвердить адрес</Button>
            }
            </Modal>
    )
}

export default ModalOrders;