import React from 'react';
import classes from './my-post.module.css';
import icoList from 'ico-list.json';

export function MyPost(props: { gender: string; name: string; race: string; key: string }) {
  return (
    <div role="post" className={classes.div} {...props}>
      <img
        className={classes.img}
        src={
          props.gender === undefined || props.gender === 'NaN' || props.gender === null
            ? 'gollum+lord+of+the+rings+smeagol+icon-1320166691516135718.png'
            : props.gender === 'Male'
            ? icoList[Math.floor(Math.random() * icoList.length)].img
            : 'lady+lord+of+the+ring+princess+icon-1320166691779710425.png'
        }
        alt={props.name}
      ></img>
      <h1 className={classes.h1}>{props.name}</h1>
      <h2 className={classes.h2}>{props.gender}</h2>
      <h2 className={classes.h2}>{props.race}</h2>
      {/* <h3 className={classes.h3}>{props.type}</h3> */}
    </div>
  );
}

// {
//   "img": "gollum+lord+of+the+rings+smeagol+icon-1320166691516135718.png"
// },
// {
//   "img": "lady+lord+of+the+ring+princess+icon-1320166691779710425.png"
// },
