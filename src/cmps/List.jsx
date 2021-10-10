import React, { useEffect, useState } from 'react';
import Item from './Item';

export default function List({arr}) {

console.log(arr);

  return (
        <div className="list">
           {
           arr.map((item,idx)=> (
          <Item key={idx} item={item} />
           ))
           }
        </div>
  )
}

