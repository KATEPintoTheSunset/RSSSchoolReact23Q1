import React from 'react'
import classes from './my-post.module.css'

export function MyPost(props:{name: string, img:string, price:string, info:string, type:string, key:number}) {
    return (
        <div role="post" className={classes.div} {...props}>
            <img className={classes.img} src={props.img} alt={props.name}></img>
            <h1 className={classes.h1}>{props.name}</h1>
            <h2 className={classes.h2}>{props.price}</h2>
            <h2 className={classes.h2}>{props.info.length > 105 ? props.info.slice(0, 103) + '...' : props.info}</h2>
            <h3 className={classes.h3}>{props.type}</h3>
        </div>
    )
}