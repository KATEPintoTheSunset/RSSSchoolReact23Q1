import React from 'react';
import classes from './my-post.module.css';
import { choseImg } from '../../utils/chose-Img';

export function MyPost(props: {
  gender: string;
  name: string;
  race: string;
  key: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}) {
  return (
    <div role="post" className={classes.div} {...props}>
      <img className={classes.img} src={choseImg(props.gender, props.race)} alt={props.name}></img>
      <h1 className={classes.h1}>{props.name}</h1>
      <h2 className={classes.h2}>{props.gender}</h2>
      <h2 className={classes.h2}>{props.race}</h2>
    </div>
  );
}
