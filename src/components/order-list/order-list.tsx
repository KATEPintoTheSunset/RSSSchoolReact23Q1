import React from 'react';
import { OrderCard } from '../../components/order-card/order-card';
import classes from './order-list.module.css';
// import { IOrder } from 'interfaces/order';
import { useSelector } from 'react-redux';
import type { RootState } from '../../states/store';

export function OrderList() {
  const orders = useSelector((state: RootState) => state.pie.orders);

  return (
    <div className={classes.posts_container} id="list">
      {orders.map((order) => (
        <OrderCard
          name={order.name}
          date={order.date}
          img={order.img}
          pie={order.pie}
          deliverytype={order.deliverytype}
          bd={order.bd}
          key={order.id}
        />
      ))}
    </div>
  );
}
