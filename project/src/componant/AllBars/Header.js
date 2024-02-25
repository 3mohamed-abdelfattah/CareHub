import React, { Fragment } from 'react';
import { Link } from "react-router-dom"
import PG1 from "../Photos/PG1.jpg"
import Slogan from '../SomeStyles/Slogan';
import SloganM from '../SomeStyles/SolganM';



export default function Header() {


    function HandleLog(){
        window.localStorage.removeItem('email');
        window.location.pathname="/login";
    }

  return (
    <div className="d-flex container top-bar shadow" style={{ backgroundImage:`url(${PG1})` }}>
    <SloganM/>
    <Slogan/>
        <Link to ="/" className="lol">الدليل الطبي </Link>
        <Link to="/dashboard" className="lol">لوحه التحكم</Link>
        {!window.localStorage.getItem('email')?
            (<Fragment><Link to='/register' className="lol">تسجيل</Link>
            <Link to='/login' className="lol">تسجيل دخول</Link>
            </Fragment>):(<div className="lol" style={{backgroundColor:"#ff0505c7",color:"white"}} onClick={HandleLog}>تسجيل خروج</div>)}
    </div>
)}
