import React, { useState } from 'react';
import classes from './order-form.module.css';
import pieList from '../../pieList.json';
import { IOrder } from 'interfaces/order';
import { getLocalOrders, writeOrders } from '../../utils/order';
import formNameValidate from '../../utils/validation/form-fields/name';
import formIMGValidate from '../../utils/validation/form-fields/img';
import formDateValidate from '../../utils/validation/form-fields/date';
import formDeliveryTypeValidate from '../../utils/validation/form-fields/delivery-type';

export function OrderForm(props: {
  newInfo: React.Dispatch<React.SetStateAction<boolean>>;
  info: boolean;
}) {
  const [info, setNewInfo] = useState(false);
  const [errors, setErrors] = useState({
    isNameCorrect: true,
    isDateCorrect: true,
    isDeliveryTypeCorrect: true,
  });

  const inputName = React.createRef<HTMLInputElement>();
  const inputIMG = React.createRef<HTMLInputElement>();
  const inputData = React.createRef<HTMLInputElement>();
  const inputPieType = React.createRef<HTMLSelectElement>();
  const inputDeliveryType = React.createRef<HTMLInputElement>();
  const inputPickupType = React.createRef<HTMLInputElement>();
  const inputBD = React.createRef<HTMLInputElement>();

  const today = new Date();
  const dataMin = `${today.getFullYear()}-${
    today.getMonth() + 1 > 9 ? today.getMonth() + 1 : '0' + (today.getMonth() + 1)
  }-${today.getDate()}`;
  const dataMax = `${today.getFullYear()}-${
    today.getMonth() + 2 > 9 ? today.getMonth() + 2 : '0' + (today.getMonth() + 2)
  }-${today.getDate()}`;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const localOrders: IOrder[] = getLocalOrders();

    const name = inputName.current?.value;
    const isNameRightValue = formNameValidate(name);

    const img = inputIMG.current?.files;
    const isIMGRightValue = formIMGValidate(img);

    const date = inputData.current?.value;
    const isDateRightValue = formDateValidate(date);

    const pie = inputPieType.current?.value;

    const deliverytype = inputDeliveryType.current?.checked
      ? inputDeliveryType.current?.value
      : inputPickupType.current?.checked
      ? inputPickupType.current?.value
      : undefined;
    const isDeliveryTypeRightValue = formDeliveryTypeValidate(deliverytype);

    const bd = inputBD.current?.checked ? inputBD.current?.value : 'no';

    if (
      name &&
      isNameRightValue &&
      img &&
      date &&
      isDateRightValue &&
      pie &&
      deliverytype &&
      isDeliveryTypeRightValue
    ) {
      setErrors({
        isNameCorrect: true,
        isDateCorrect: true,
        isDeliveryTypeCorrect: true,
      });
      const totalObject: IOrder = {
        name,
        date,
        pie,
        deliverytype,
        bd,
        id: localOrders.length,
        img: isIMGRightValue ? URL.createObjectURL(img[0]) : '64572.png',
      };

      localOrders.push(totalObject);

      writeOrders(localOrders);
      event.currentTarget.reset();
      props.newInfo(!props.info);
    } else {
      const errorsState = {
        isNameCorrect: isNameRightValue,
        isDateCorrect: isDateRightValue,
        isDeliveryTypeCorrect: isDeliveryTypeRightValue,
      };
      setErrors(errorsState);
      setNewInfo(!info);
    }
    event.preventDefault();
  }

  const getInputName = () => {
    if (!errors.isNameCorrect) {
      return <p className={classes.error}>Invalid name</p>;
    }
  };

  const getInputDate = () => {
    if (!errors.isDateCorrect) {
      return <p className={classes.error}>Invalid date</p>;
    }
  };

  const getInputDeliveryType = () => {
    if (!errors.isDeliveryTypeCorrect) {
      return <p className={classes.error}>Invalid delivery type</p>;
    }
  };

  return (
    <form onSubmit={handleSubmit} className={classes.inputs_container}>
      <h1>Order</h1>
      <div className={classes.input_container}>
        <h3>Order for a name</h3>
        <input ref={inputName} className={classes.input} placeholder="Name" />
        {getInputName()}
      </div>
      <div className={classes.input_container}>
        <h3>Image</h3>
        <input ref={inputIMG} className={classes.input} type="file" accept="image/*,image/jpeg" />
      </div>
      <div className={classes.input_container}>
        <h3>Date of delivery</h3>
        <input
          data-testid="date-input"
          ref={inputData}
          className={classes.input}
          type="date"
          min={dataMin}
          max={dataMax}
        />
        {getInputDate()}
      </div>
      <div className={classes.input_container}>
        <h3>Type of pie</h3>
        <select ref={inputPieType} className={classes.input} name="pie" id="pie-select">
          {pieList.map((pie) => (
            <option value={pie.name.trim()} key={pie.id}>
              {pie.name}
            </option>
          ))}
        </select>
      </div>
      <div className={classes.input_container}>
        <h3>Delivery type</h3>
        <input ref={inputDeliveryType} type="radio" name="typeDelivery" value="Delivery" /> Delivery
        <input ref={inputPickupType} type="radio" name="typeDelivery" value="Pickup" />
        Pickup
        {getInputDeliveryType()}
      </div>
      <div className={classes.input_container}>
        <h3>This is a gift?</h3>
        <input ref={inputBD} type="checkbox" name="gift" value="yes" />
        Yes
      </div>
      <input className={classes.input} type="submit" value="Order" />
    </form>
  );
}
