import React from 'react'
import classes from './my-input.module.css'

export function MyInput(props:any) {
    return <input className={classes.input} {...props}></input>
}