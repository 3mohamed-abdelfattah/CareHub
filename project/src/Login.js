import { useState,useContext, useEffect, Fragment } from "react";
import axios from "axios";
import Header from './componant/Header';
import { User } from "./context/UserContext";
import { useNavigate } from "react-router-dom";
import Footer from "./componant/Footer";
import React, { Component }  from 'react';

export default function SignUp() {
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const [accept,setAccept]=useState(false);
    const [Err,setErr]=useState(false);



    const nav =useNavigate();

    //Get User
    const user =useContext(User);
    console.log(user);

    async function Submit(e){
        e.preventDefault();
        setAccept(true);
        try{
            //state true and send data to server
            let res =await axios.post("http://127.0.0.1:8000/api/login",{
                email:email,
                password:password,
            });
            const token =res.data.data.token;
            const UserDetails =res.data.data.user;
            user.setAuth({token,UserDetails});
            nav("/dashboard");
        }catch(err){
            if (err.response&&err.response.status === 401 ){
                setErr(true);
            }
            setAccept(true);
        }
    }



  return (
    <Fragment>
    <div>
      <Header />
  <div className="parent">
      <div className="SignDiv">
          <form onSubmit={Submit} className="form1">

              {/* <label htmlFor="email">البريد الإلكتروني</label>  */}
              <input id="email" type="email" placeholder="البريد الإلكتروني" className="placehold" value={email} onChange={(e)=>setemail(e.target.value)} />

              {/* <label htmlFor="password">كلمة المرور</label>  */}
              <input id="password" type="password" placeholder="كلمة المرور" className="placehold" value={password} onChange={(e)=>setpassword(e.target.value)}/>
              {password < 8 && accept &&<p className="error">كلمة المرور اقصر من الازم</p>}

              <div style={{textAlign:"center"}}>
                 <button type="submit">تسجيل دخول</button>
              </div>
              { accept && Err && <p className="error">البيانات غير صحيحه</p>}
          </form>
      </div>
  </div>
  </div>
  <Footer/>
  </Fragment>
  )
  }
