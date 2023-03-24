import React, { useState } from 'react';
import classes from './order-form.module.css';
import pieList from '../../pieList.json';
import { IOrder } from 'interfaces/order';
import { getLocalOrders, writeOrders } from '../../utils/order';

export function OrderForm(props: {
  newInfo: React.Dispatch<React.SetStateAction<boolean>>;
  info: boolean;
}) {
  const [info, setNewInfo] = useState(false);

  const [errors, setErrors] = useState({
    isNameCorrect: true,
    isDateCorrect: true,
    isPieCorrect: true,
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
    const errors: string[] = [];

    const name = inputName.current?.value;
    const isNameRigthValue =
      name !== undefined &&
      name.trim().length > 0 &&
      /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u.test(name) &&
      name.slice(0, 1) === name.slice(0, 1).toUpperCase();

    const img = inputIMG.current?.files;
    const isIMGRigthValue = img !== undefined && img !== null && img?.length !== 0;

    const date = inputData.current?.value;
    const isDateRigthValue = date !== undefined && date !== '';

    const pie = inputPieType.current?.value;
    const isPieRigthValue = pie !== undefined;

    const deliveryType = inputDeliveryType.current?.checked
      ? inputDeliveryType.current?.value
      : inputPickupType.current?.checked
      ? inputDeliveryType.current?.value
      : undefined;
    const isDeliveryTypeRigthValue = deliveryType !== undefined;

    const bd = inputBD.current?.checked ? inputBD.current?.value : 'no';

    if (
      name === undefined ||
      !/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u.test(name) ||
      name.slice(0, 1) !== name.slice(0, 1).toUpperCase()
    ) {
      errors.push('Invalid name');
    }
    if (img === undefined || img === null) {
      errors.push('Invalid img');
    }
    if (date === undefined || date === '') {
      errors.push('Invalid date');
    }
    if (pie === undefined) {
      errors.push('Invalid pie');
    }
    if (deliveryType === undefined) {
      errors.push('Invalid delivery type');
    }

    if (isNameRigthValue && isDateRigthValue && isPieRigthValue && isDeliveryTypeRigthValue) {
      setErrors({
        isNameCorrect: true,
        isDateCorrect: true,
        isPieCorrect: true,
        isDeliveryTypeCorrect: true,
      });
      const totalObject: IOrder = {
        name,
        date,
        pie,
        deliverytype: deliveryType,
        bd,
        id: localOrders.length,
        img: isIMGRigthValue ? URL.createObjectURL(img[0]) : '64572.png',
      };

      localOrders.push(totalObject);

      writeOrders(localOrders);
      event.currentTarget.reset();
      props.newInfo(!props.info);
    } else {
      const errorsState = {
        isNameCorrect: isNameRigthValue,
        isDateCorrect: isDateRigthValue,
        isPieCorrect: isPieRigthValue,
        isDeliveryTypeCorrect: isDeliveryTypeRigthValue,
      };
      setErrors(errorsState);
      setNewInfo(!info);
      alert(errors.join('\n '));
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

  const getInputPie = () => {
    if (!errors.isPieCorrect) {
      return <p className={classes.error}>Invalid pie</p>;
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
        <input ref={inputData} className={classes.input} type="date" min={dataMin} max={dataMax} />
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
        {getInputPie()}
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
