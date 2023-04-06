import React, { useEffect, useState } from 'react';
import { MyPost } from '../../components/MyPost/my-post';
import { MyHeader } from '../../components/MyHeader/my-header';
import classes from './post-page.module.css';
import { IData } from '../../interfaces/data';
import { getCharacters } from '../../utils/requests/get-characters-list';
import { getCharacter } from '../../utils/requests/get-character';
import { PopUp } from '../../components/pop-up/pop-up';

export function PostsPage() {
  const [data, setData] = useState<IData[]>([]);
  const [error, setError] = useState('');
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

  async function getIndex(id: string) {
    try {
      const data = await getCharacter(id);
      setChosenCharacter(data.docs[0]);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  }

  useEffect(() => {
    async function getAll() {
      try {
        const data = await getCharacters(search);
        if (data.docs.length === 0) {
          setError('Nothing found');
        }
        setData(data.docs);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }
    }
    getAll();
  }, [search]);

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
        error={error}
        setChosenCharacter={setChosenCharacter}
        setVisible={setPopUp}
      ></PopUp>
      <div className={classes.posts_container}>
        {data.length === 0 ? (
          error === '' ? (
            <h1>Loading...</h1>
          ) : (
            <h1>Sorry, {error}</h1>
          )
        ) : (
          data.map((character) => (
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
