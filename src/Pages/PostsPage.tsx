import React, { useState } from 'react'
import { MyInput } from '../components/MyInput/MyInput'
import { MyPost } from '../components/MyPost/MyPost'
import { MyHeader } from '../components/MyHeader/MyHeader'
import pieList from "../pieList.json"

export function PostsPage() {
  const [value, setValue] = useState(localStorage.getItem('search'))
  return (
    <div>
      <MyHeader></MyHeader>
      <MyInput 
        onBlur={(e:any) => {
          if (e.target.value) {
            localStorage.setItem('search', e.target.value);
            setValue(localStorage.getItem('search'))
          }
        }}
        placeholder="Search..."
        list="SearchInput"
        />
      <datalist id="SearchInput">
        <option id='tips'>{value}</option>
      </datalist>
      <div>
        {pieList.map(pie => <MyPost name={pie.name} img={pie.img} price={pie.price} info={pie.info} type={pie.type} key={pie.id}/>)}
      </div>
    </div>
  );
}
