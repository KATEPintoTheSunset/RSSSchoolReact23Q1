import React from 'react';
import { OrderCard } from '../../components/order-card/order-card';
import classes from './order-list.module.css';
import { IOrder } from 'interfaces/order';

export function OrderList(props: { localOrders: IOrder[] }) {
  return (
    <div className={classes.posts_container} id="list">
      {props.localOrders.map((order) => (
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
