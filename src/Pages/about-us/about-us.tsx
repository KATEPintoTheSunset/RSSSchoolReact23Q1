import React, { useState } from 'react';
import { MyHeader } from '../../components/MyHeader/my-header';

export function AboutUs() {
  const [, setSearch] = useState('');
  return (
    <div>
      <MyHeader active={'about'} setSearch={setSearch}></MyHeader>
      <h1>Hello! Sorry, there is nothing special here yet, but it may appear later</h1>;
    </div>
  );
}
