import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { Link } from "react-router-dom";
import Slogan from '../SomeStyles/Slogan';
import SloganM from '../SomeStyles/SolganM';
import "../SomeStyles/LogoutBT.css";

export default function Header() {

  const userEmail = window.localStorage.getItem('email');
  const [firstname, setfName] = useState('');
  const [lastname, setlName] = useState('');
  const [email, setemail] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const isMaster = userEmail && userEmail.split('@')[1] === "master.com";
  const isAdmin = userEmail && userEmail.split('@')[1] === "admin.com";
  
  useEffect(() => {
    fetch(`http://localhost:5000/api/users?email=${encodeURIComponent(userEmail)}`)
      .then((res) => res.json())
      .then((data) => {
        // التحقق من وجود بيانات
        if (data.length > 0) {
          // البحث عن المستخدم الذي يتطابق مع البريد الإلكتروني
          const user = data.find((user) => user.email === userEmail);
          if (user) {
            // إعداد البيانات في الحالة فقط إذا تم العثور على المستخدم
            setemail(user.email);
            setfName(user.firstname);
            setlName(user.lastname);
          } else {
            console.log('User not found');
          }
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => console.error('Error fetching user data:', error));
  },);

  function handleDropdownToggle() {
    setDropdownOpen(!dropdownOpen);
  }

  function HandleLog() {
    window.localStorage.removeItem('email');
    window.localStorage.removeItem('_id');
    window.location.pathname = "/login";
  }

  return (
    <div className="containerH">
      <div className="d-flex container top-bar shadow">
        <SloganM />
        <Slogan />
        {(userEmail) && <Link to="/">
          <button className="BtnH">
            <div className="svgWrapperH">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={50} height={40} viewBox="0,0,256,256">
                <g transform="translate(38.4,38.4) scale(0.7,0.7)"><g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.12,5.12)"><path d="M25,1.05078c-0.2175,0 -0.43414,0.06898 -0.61914,0.20898l-23,17.95117c-0.43,0.34 -0.50992,0.9682 -0.16992,1.4082c0.34,0.43 0.9682,0.50992 1.4082,0.16992l1.38086,-1.07812v26.28906c0,0.55 0.45,1 1,1h14v-18h12v18h14c0.55,0 1,-0.45 1,-1v-26.28906l1.38086,1.07812c0.19,0.14 0.39914,0.21094 0.61914,0.21094c0.3,0 0.58906,-0.13086 0.78906,-0.38086c0.34,-0.44 0.26008,-1.0682 -0.16992,-1.4082l-23,-17.95117c-0.185,-0.14 -0.40164,-0.20898 -0.61914,-0.20898zM35,5v1.05078l6,4.67969v-5.73047z" /></g></g></g>
              </svg>
              <div className="textH">Home</div>
            </div>
          </button>
        </Link>}
        {(isMaster || isAdmin) && <Link to="/dashboard">
          <button className="BtnDB">
            <div className="svgWrapper">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 42 42" className="svgIcon1">
                <path strokeWidth={5} stroke="#fff" d="M9.14073 2.5H32.8593C33.3608 2.5 33.8291 2.75065 34.1073 3.16795L39.0801 10.6271C39.3539 11.0378 39.5 11.5203 39.5 12.0139V21V37C39.5 38.3807 38.3807 39.5 37 39.5H5C3.61929 39.5 2.5 38.3807 2.5 37V21V12.0139C2.5 11.5203 2.6461 11.0378 2.91987 10.6271L7.89266 3.16795C8.17086 2.75065 8.63921 2.5 9.14073 2.5Z" />
                <rect strokeWidth={3} stroke="#fff" rx={2} height={4} width={11} y="18.5" x="15.5" />
                <path strokeWidth={5} stroke="#fff" d="M1 12L41 12" />
              </svg>
              <div className="textDB">Dashboard</div>
            </div>
          </button></Link>}
        {!window.localStorage.getItem('email') ?
          (<Fragment>
            <Link to='/login'>
              <button className="Btnin">
                <div className="sign"><svg viewBox="0 0 512 512"><path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" /></svg></div>
                <div className="textin">Login</div>
              </button>
            </Link>
          </Fragment>) :
          <Fragment>
            <button className="Btnout" onClick={HandleLog}>
              <div className="signout"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" /></svg></div>
              <div className="texttt">Logout</div>
            </button>
            <button id="btn-message" className="button-message" onClick={handleDropdownToggle}
            >
              <div className="content-avatar">
                <div className="status-user" />
                <div className="avatar">
                  <svg className="user-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,12.5c-3.04,0-5.5,1.73-5.5,3.5s2.46,3.5,5.5,3.5,5.5-1.73,5.5-3.5-2.46-3.5-5.5-3.5Zm0-.5c1.66,0,3-1.34,3-3s-1.34-3-3-3-3,1.34-3,3,1.34,3,3,3Z" /></svg>
                </div>
              </div>
              <div className="notice-content">
                <div className="username">{firstname + " " + lastname}</div>
                <div className="user-id">{email}</div>
              </div>
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu">
                {/* dropdown options here */}
                <Link to="/profileUpdate">Profile</Link>
                <Link to="/settings">Settings</Link>
                <Link to="/realtimechat">Chat</Link>
                <Link to="/support">Support</Link>
                <Link to="/requests">Orders</Link>
                <Link to="/notifimid">Reminder</Link>
              </div>
            )}
          </Fragment>
        }
      </div>
    </div>
  )
}
