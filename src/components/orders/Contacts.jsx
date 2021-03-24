import React from 'react'
import PropTypes from 'prop-types'
// import { Input } from "./Input";

export const Contacts = (props) => {

    return (
      <form onSubmit={props.onSubmit}
      className="input__conteiners">

      <div className="input__wrap">
        <div className="input__body">
          <div className="input__title">Имя</div>
          <input className="input__value" type="text" required/>
          <div className="input__placeholder" placeholder="">Введите ваше имя</div>
        </div>
        <div className="input__error error">Поля "Имя" обязательное для заполнения</div>
      </div>
      <div className="input__wrap">
        <div className="input__body">
          <div className="input__title">Телефон</div>
          <input className="input__value" type="text" required/>
          <div className="input__placeholder" placeholder="">Введите номер телефона</div>
        </div>
        <div className="input__error error">Поля "Телефон" обязательное для заполнения</div>
      </div>
      <div className="input__wrap">
        <div className="input__body">
          <div className="input__title">E-mail</div>
          <input className="input__value" type="text" required/>
          <div className="input__placeholder" placeholder="">Введите E-mail</div>
        </div>
        <div className="input__error error">Поля "E-mail" обязательное для заполнения</div>
      </div>

      {/* <Input
          ref={register}
          id="firstName"
          type="text"
          label="First Name"
          name="firstName"
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
      />
      <Input
        ref={register}
        id="email"
        type="email"
        label="Email"
        name="email"
        error={!!errors.email}
        helperText={errors?.email?.message}
        required
      />
        <Input
          ref={register}
          id="phoneNumber"
          type="tel"
          label="Phone Number"
          name="phoneNumber"
          onChange={(event) => {
            event.target.value = normalizePhoneNumber(event.target.value);
          }}
        /> */}
    </form>
  
    )
}

Contacts.propTypes = {

}


