import React from 'react';
import classes from './pop-up.module.css';
import { choseImg } from '../../utils/chose-Img';

export function PopUp(props: {
  gender: string;
  name: string;
  race: string;
  key: string;
  birth: string;
  death: string;
  hair: string;
  height: string;
  realm: string;
  spouse: string;
  wikiUrl: string;
  visible: boolean;
  setChosenCharacter: React.Dispatch<
    React.SetStateAction<{
      birth: string;
      death: string;
      gender: string;
      hair: string;
      height: string;
      name: string;
      race: string;
      realm: string;
      spouse: string;
      wikiUrl: string;
      _id: string;
    }>
  >;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const classContainer = [classes.container];
  if (!props.visible) {
    classContainer.push(classes.closed);
  }
  function close() {
    props.setVisible(false);
    props.setChosenCharacter({
      birth: '',
      death: '',
      gender: '',
      hair: '',
      height: '',
      name: '',
      race: '',
      realm: '',
      spouse: '',
      wikiUrl: '',
      _id: '',
    });
  }

  return (
    <div className={classContainer.join(', ')} onClick={close}>
      <p onClick={close}>x</p>
      <div role="pop-up" className={classes.div} onClick={(e) => e.stopPropagation()}>
        <div className={classes.container_img}>
          <img className={classes.img} src={choseImg(props.gender, props.race)}></img>
        </div>
        <h1 className={classes.h1}>
          <i>Character name:</i> {props.name || 'unknown'}
        </h1>
        <h2 className={classes.h2}>
          <i>Character gender:</i> {props.gender || 'unknown'}
        </h2>
        <h2 className={classes.h2}>
          <i>Character race:</i> {props.race || 'unknown'}
        </h2>
        <h2 className={classes.h2}>
          <i>Character birth:</i> {props.birth || 'unknown'}
        </h2>
        <h2 className={classes.h2}>
          <i>Character death:</i> {props.death || 'unknown'}
        </h2>
        <h2 className={classes.h2}>
          <i>Character hair:</i> {props.hair || 'unknown'}
        </h2>
        <h2 className={classes.h2}>
          <i>Character height:</i> {props.height || 'unknown'}
        </h2>
        <h2 className={classes.h2}>
          <i>Character realm:</i> {props.realm || 'unknown'}
        </h2>
        <h2 className={classes.h2}>
          <i>Character spouse:</i> {props.spouse || 'unknown'}
        </h2>
        <h2 className={classes.h2}>
          <i>More on wiki:</i>
        </h2>
        <a href={props.wikiUrl}>{props.wikiUrl || 'unknown'}</a>
      </div>
    </div>
  );
}
