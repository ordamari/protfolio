import React, { useEffect, useState } from 'react';

export default function Item({ item }) {



  return (
    <div className="item">
      <p>{item}</p>
    </div>
  )
}

