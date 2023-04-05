import React, { useEffect, useState } from 'react';
import { MyPost } from '../../components/MyPost/my-post';
import { MyHeader } from '../../components/MyHeader/my-header';
import classes from './post-page.module.css';
import { IData } from '../../interfaces/data';
import { getCharacters } from '../../requests/get-characters-list';

export function PostsPage() {
  const [data, setData] = useState<IData[]>([]);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');

  async function getAll() {
    try {
      const data = await getCharacters(search);
      setData(data.docs);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  }

  useEffect(() => {
    getAll();
    // setSearch('');
  }, [search]);

  return (
    <div>
      <MyHeader active={'post'} setSearch={setSearch}></MyHeader>
      <div className={classes.posts_container}>
        {data.length === 0 ? (
          error === '' ? (
            <h1>Loading...</h1>
          ) : (
            <h1>Sorry, there error {error}</h1>
          )
        ) : (
          data.map((character) => (
            <MyPost
              gender={character.gender}
              name={character.name}
              race={character.race}
              key={character._id}
            />
          ))
        )}
      </div>
    </div>
  );
}
