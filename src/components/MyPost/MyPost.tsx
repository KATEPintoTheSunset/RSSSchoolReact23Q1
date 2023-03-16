import React from 'react'
import classes from './MyPost.module.css'

export function MyPost(props:any) {
    return (
        <div className={classes.div} {...props}>
            <img className={classes.img} src={props.img}></img>
            <h1 className={classes.h1}>{props.name}</h1>
            <h2 className={classes.h2}>{props.price}</h2>
            <h2 className={classes.h2}>{props.info.length > 105 ? props.info.slice(0, 103) + '...' : props.info}</h2>
            <h3 className={classes.h3}>{props.type}</h3>
        </div>
    )
}