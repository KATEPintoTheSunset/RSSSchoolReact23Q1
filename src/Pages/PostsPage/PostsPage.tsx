import React from 'react'
import { MyPost } from '../../components/MyPost/MyPost'
import { MyHeader } from '../../components/MyHeader/MyHeader'
import classes from './PostsPage.module.css'
import pieList from "../../pieList.json"

export function PostsPage() {
  return (
    <div>
      <MyHeader active={'post'}></MyHeader>
      <div className={classes.posts_container}>
        {pieList.map(pie => <MyPost name={pie.name} img={pie.img} price={pie.price} info={pie.info} type={pie.type} key={pie.id}/>)}
      </div>
    </div>
  );
}
