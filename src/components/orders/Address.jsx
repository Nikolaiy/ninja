import React from 'react'
import PropTypes from 'prop-types'

import { Form } from "./Form";
import Button from "../common/Button"


export const  Address = (props) => {

    const [activeBtn, setActiveBtn] = React.useState(true)

    return (
        <Form onSubmit={props.onSubmit}>
        <div className="order__btn-group"> 
          <Button 
            className={`order__btn btn__delivery ${activeBtn ? "active" : ""}`} 
            onClick={() => setActiveBtn(false)}>
                Самовывоз
          </Button>
          <Button 
            className={`order__btn btn__pickup ${activeBtn ? "" : "active"}`} 
            onClick={() => setActiveBtn(true)}>
                Навынос
          </Button>
        </div>
        {activeBtn ? 
                    <div className="order__pickup">
                        <div className="order__address">
                            <div className="pickup__city">г. Ивантеевка</div>
                            <div className="pickup__street">ул. Советская дом 592</div>
                        </div>
                        <div className="pickup__restaurant">Ресторан "Сытый Ниндзя"</div>
                    </div>
                    :
                    <form className="">
                        <div className="input__delivery">
                            <div className="input__wrap">
                                <div className="disabled input__body">
                                    <div className="input__title">Город</div>
                                    <input className="input__value" type="text" disabled />
                                    <div className="input__placeholder default" placeholder="">Ивантеевка</div>
                                </div>
                            </div>
                            <div className="input__wrap">
                                <div className="input__body">
                                    <div className="input__title">Улица</div>
                                    <input className="input__value" type="text"/>
                                    <div className="input__placeholder" placeholder="">Введите улицу</div>
                                </div>
                            </div>
                        </div>
                        <div className="input__delivery1">
                            <div className="input__wrap">
                                <div className="input__body">
                                    <div className="input__title">Дом</div>
                                    <input className="input__value" type="text"/>
                                    <div className="input__placeholder" placeholder="">Введите дом</div>
                                </div>
                            </div>
                            <div className="input__wrap">
                                <div className="input__body">
                                    <div className="input__title">Квартира</div>
                                    <input className="input__value" type="text"/>
                                    <div className="input__placeholder" placeholder="">Введите квартиру</div>
                                </div>
                            </div>
                            <div className="input__wrap">
                                <div className="input__body">
                                    <div className="input__title">Подьезд</div>
                                    <input className="input__value" type="text"/>
                                    <div className="input__placeholder" placeholder="">Введите подьезд</div>
                                </div>
                            </div>
                            <div className="input__wrap">
                                <div className="input__body">
                                    <div className="input__title">Этаж</div>
                                    <input className="input__value" type="text"/>
                                    <div className="input__placeholder" placeholder="">Введите этаж</div>
                                </div>
                            </div>
                        </div>
                    </form>}
                
      </Form>
        
    )
}

Address.propTypes = {

}

