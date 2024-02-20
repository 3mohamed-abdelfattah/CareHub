import React, { Fragment, useEffect, useState } from 'react'

export default function ARTI() {

  const [name,setName]=useState("");
  const [password,setPassword]=useState("");

  useEffect(()=>{
    if(name || password) {
    console.log("meow");
  }
  },[name,password]);


  return (
    <Fragment>
    <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder='Name' style={{width:"55%",height:"1px",fontSize:"50px"}}/>
    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='password' style={{width:"55%",height:"1px",fontSize:"50px"}}/>

    <p style={{fontSize:"50px"}}>
    name:{name}
    <hr />
    password:{password}
    </p>

    </Fragment>
  )
}
