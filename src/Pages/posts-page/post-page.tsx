import React, { useState } from 'react';
import { MyPost } from '../../components/MyPost/my-post';
import { MyHeader } from '../../components/MyHeader/my-header';
import classes from './post-page.module.css';
import { IData } from '../../interfaces/data';
import { PopUp } from '../../components/pop-up/pop-up';
import { useGetCharactersQuery } from '../../states/tlotr-api';

export function PostsPage() {
  const [search, setSearch] = useState('');
  const [popUp, setPopUp] = useState(false);
  const [chosenCharacter, setChosenCharacter] = useState({
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

  let someError = '';

  const { data = { docs: [] }, error, isLoading } = useGetCharactersQuery(search);
  if (error) {
    someError = 'error' in error ? error.error : 'some error';
  }

  function getIndex(id: string) {
    setChosenCharacter(
      data.docs[
        data.docs.findIndex((value: IData) => {
          return value._id == id;
        })
      ]
    );
  }

  const body = document.getElementById('body');

  if (popUp && body != null) {
    body.classList.add('body');
  } else if (!popUp && body != null) {
    body.classList.remove('body');
  }

  return (
    <div>
      <MyHeader active={'post'} setSearch={setSearch}></MyHeader>
      <PopUp
        gender={chosenCharacter.gender}
        name={chosenCharacter.name}
        race={chosenCharacter.race}
        birth={chosenCharacter.birth}
        death={chosenCharacter.death}
        hair={chosenCharacter.hair}
        height={chosenCharacter.height}
        realm={chosenCharacter.realm}
        spouse={chosenCharacter.spouse}
        wikiUrl={chosenCharacter.wikiUrl}
        key={chosenCharacter._id}
        visible={popUp}
        setChosenCharacter={setChosenCharacter}
        setVisible={setPopUp}
      ></PopUp>
      <div className={classes.posts_container}>
        {data.docs.length === 0 ? (
          someError === '' ? (
            isLoading ? (
              <h1>Loading...</h1>
            ) : (
              <h1>Nothing found</h1>
            )
          ) : (
            <h1>Sorry, {someError}</h1>
          )
        ) : (
          data.docs.map((character) => (
            <MyPost
              gender={character.gender}
              name={character.name}
              race={character.race}
              key={character._id}
              onClick={(event) => {
                getIndex(character._id);
                setPopUp(true);
                event.preventDefault();
              }}
            />
          ))
        )}
      </div>
    </div>
  );
}
