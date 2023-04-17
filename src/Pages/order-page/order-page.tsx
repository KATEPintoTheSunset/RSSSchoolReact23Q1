import React, { useState } from 'react';
import { MyHeader } from '../../components/MyHeader/my-header';
import classes from './order-page.module.css';
import { OrderForm } from '../../components/order-form/order-form';
import { OrderList } from '../../components/order-list/order-list';
// import { useSelector } from 'react-redux';
// import type { RootState } from '../../states/store';

export function OrderPage() {
  const [, setSearch] = useState('');
  return (
    <div>
      <MyHeader active={'orders'} setSearch={setSearch}></MyHeader>
      <div className={classes.container} id="order">
        <OrderForm />
        <OrderList />
      </div>
    </div>
  );
}
