import React from 'react';
import classes from './order-card.module.css';

export function OrderCard(props: {
  name: string;
  date: string;
  pie: string;
  deliverytype: string;
  bd: string;
  key: number;
  img: string;
}) {
  return (
    <div role="post" className={classes.div} {...props}>
      <img className={classes.img} src={props.img}></img>
      <h1 className={classes.h1}>
        <i>Customer name:</i> {props.name}
      </h1>
      <h2 className={classes.h2}>
        <i>Order for a date:</i> {props.date}
      </h2>
      <h2 className={classes.h2}>
        <i>Pie type:</i> {props.pie}
      </h2>
      <h3 className={classes.h3}>
        <i>Delivery Type:</i> {props.deliverytype}
      </h3>
      <h3 className={classes.h3}>
        <i>This is a gift?:</i> {props.bd}
      </h3>
    </div>
  );
}
