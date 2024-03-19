import { NavLink } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faUsers,faUserPlus,faCircleExclamation,faBell} from '@fortawesome/free-solid-svg-icons'
import React from 'react';


export default function SideBar() {
  return (
    <div className="side-bar">
        <NavLink to="/dashboard/user" className="user-link" style={{fontWeight:'bold'}}>المستخدمين
        <FontAwesomeIcon icon={faUsers}  size="m" className="icons" style={{marginLeft:'5%'}}/>
        </NavLink>
        <NavLink to="/dashboard/users/create" className="user-link" style={{fontWeight:'bold'}}>مستخدم جديد
        <FontAwesomeIcon icon={faUserPlus}  size="m" className="icons" style={{marginLeft:'5%'}}/>
        </NavLink>
        <NavLink to="/dashboard/problems" className="user-link" style={{fontWeight:'bold'}}>الاستفسارات
        <FontAwesomeIcon icon={faCircleExclamation}  size="m" className="icons" style={{marginLeft:'5%'}} />
        </NavLink>
        <NavLink to="/dashboard/orders" className="user-link" style={{fontWeight:'bold'}}>الطلبات
        <FontAwesomeIcon icon={faBell}  size="m" className="icons" style={{marginLeft:'5%'}} />
        </NavLink>
    </div>
  )
}
