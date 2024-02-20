import { NavLink } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faUsers,faUserPlus} from '@fortawesome/free-solid-svg-icons'
import React, { Component }  from 'react';


export default function SideBar() {
  return (
    <div className="side-bar">
        <NavLink to="/dashboard/user" className="user-link">المستخدمين
        <FontAwesomeIcon icon={faUsers}  size="sm" className="icons" />
        </NavLink>
        <NavLink to="/dashboard/users/create" className="user-link">مستخدم جديد
        <FontAwesomeIcon icon={faUserPlus}  size="sm" className="icons" />
        </NavLink>
    </div>
  )
}
