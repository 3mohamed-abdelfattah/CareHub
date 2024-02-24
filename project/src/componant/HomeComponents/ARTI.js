import React, { useEffect, useState } from 'react';

export default function ARTI() {

  const [data,setData]=useState([]);
  const dataShow = data.map((item) => item);

console.log(dataShow);
useEffect(()=>{
  fetch('http://localhost:5000/api/users')
  .then(res => res.json())
  .then(data => setData(data.map((item) => item.firstname)));
},[]);

  return (
    <div><p>{dataShow}</p></div>
  );
}
