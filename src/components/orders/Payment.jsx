import React from 'react'
import PropTypes from 'prop-types'

import Button from "../common/Button";
import { Form } from "./Form";

export const Payment = (props) => {

    const [activeBtn, setActiveBtn] = React.useState(true)

    return (
        <Form onSubmit={props.onSubmit}>
        <div className="order__btn-group"> 
        <Button 
          className={`order__btn btn__cash ${activeBtn ? "" : "active"}`}
          onClick={() => setActiveBtn(true)}>
              Оплата курьеру
        </Button>
        <Button 
          className={`order__btn btn__paiment ${activeBtn ? "active" : ""}`}
          onClick={() => setActiveBtn(false)}>
              Оплата онлайн
        </Button>
        </div>
      </Form>
    )
}

Payment.propTypes = {

}
