import React, { Fragment } from 'react';
import { Link } from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHospital } from '@fortawesome/free-solid-svg-icons'
import PG1 from "../Photos/PG1.jpg"


export default function Header() {


    function HandleLog(){
        window.localStorage.removeItem('email');
        window.location.pathname="/login";
    }

  return (
    <div className="d-flex container top-bar shadow" style={{ backgroundImage:`url(${PG1})` }}>
        <FontAwesomeIcon icon={faHospital} fade size="2xl" className="nabd1" />
        <Link to ="/" className="lol">الدليل الطبي </Link>
        <Link to="/dashboard" className="lol">لوحه التحكم</Link>
        {!window.localStorage.getItem('email')?
            (<Fragment><Link to='/register' className="lol">تسجيل</Link>
            <Link to='/login' className="lol">تسجيل دخول</Link>
            </Fragment>):(<div className="lol" style={{backgroundColor:"#ff0505c7",color:"white"}} onClick={HandleLog}>تسجيل خروج</div>)}
    </div>
)}
