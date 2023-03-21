import React from 'react'
import { MyPost } from '../../components/MyPost/my-post'
import { MyHeader } from '../../components/MyHeader/my-header'
import classes from './order-page.module.css'

export function OrderPage() {
  return (
    <div>
      <MyHeader active={'orders'}></MyHeader>
      <div className={classes.posts_container}>
        {/* {pieList.map(pie => <MyPost name={pie.name} img={pie.img} price={pie.price} info={pie.info} type={pie.type} key={pie.id}/>)} */}
      </div>
    </div>
  );
}
