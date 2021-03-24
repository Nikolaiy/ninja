import React from "react";
import { useHistory } from "react-router-dom";
// import { useData } from "./DataContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import Button from "../common/Button";
import { MainContainer } from "./MainContainer";
import { Form } from "./Form";
import * as yup from "yup";
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { Address } from "./Address";
import { Payment } from "./Payment";
import { Contacts } from "./Contacts";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .required("First name is a required field"),
  email: yup
    .string()
    .email("Email should have correct format")
    .required("Email is a required field"),
});

const normalizePhoneNumber = (value) => {
  const phoneNumber = parsePhoneNumberFromString(value)
  if(!phoneNumber){
    return value
  }

  return (
    phoneNumber.formatInternational() 
  );
};

function Orders () {
  const { setValues, data } = React.useState();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    // defaultValues: { 
    //   firstName: data.firstName, 
    //   email: data.email,
    //   hasPhone: data.hasPhone,
    //   phoneNumber: data.phoneNumber, },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setValues(data);
  };

  return (
    <div className="orders__conteiner">
      <h2>Оформить заказ</h2>
    <MainContainer>
      <h3>Контакты</h3>
      <Contacts onSubmit={handleSubmit(onSubmit)}/>
      </MainContainer>
    <MainContainer>
      <h3>Адрес</h3>
      <Address onSubmit={handleSubmit(onSubmit)}/>
    </MainContainer>
    <MainContainer>
      <h3>Способы оплаты</h3>
      <Payment onSubmit={handleSubmit(onSubmit)}/>
    </MainContainer>
    <MainContainer>
      <h3>Комментарии</h3>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <textarea className="order__textarea"></textarea>
      </Form>
    </MainContainer>
    </div>
  );
};


export default Orders;