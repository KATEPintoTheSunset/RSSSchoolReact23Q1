import React, { useState } from 'react';
import { MyHeader } from '../../components/MyHeader/my-header';
import classes from './order-page.module.css';
import { OrderForm } from '../../components/order-form/order-form';
import { IOrder } from 'interfaces/order';
import { OrderList } from '../../components/order-list/order-list';
import { getLocalOrders } from '../../utils/order';

export function OrderPage() {
  const [, setSearch] = useState('');
  const [info, setNewInfo] = useState(false);
  const localOrders: IOrder[] = getLocalOrders();
  return (
    <div>
      <MyHeader active={'orders'} setSearch={setSearch}></MyHeader>
      <div className={classes.container} id="order">
        <OrderForm newInfo={setNewInfo} info={info} />
        <OrderList localOrders={localOrders} />
      </div>
    </div>
  );
}
