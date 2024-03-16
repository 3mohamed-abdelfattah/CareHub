import { NavLink } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faUsers,faUserPlus,faCircleExclamation} from '@fortawesome/free-solid-svg-icons'
import React from 'react';


export default function SideBar() {
  return (
    <div className="side-bar">
        <NavLink to="/dashboard/user" className="user-link">المستخدمين
        <FontAwesomeIcon icon={faUsers}  size="sm" className="icons" style={{marginLeft:'5%'}}/>
        </NavLink>
        <NavLink to="/dashboard/users/create" className="user-link">مستخدم جديد
        <FontAwesomeIcon icon={faUserPlus}  size="sm" className="icons" style={{marginLeft:'5%'}}/>
        </NavLink>
        <NavLink to="/dashboard/problems" className="user-link">الاستفسارات
        <FontAwesomeIcon icon={faCircleExclamation}  size="sm" className="icons" style={{marginLeft:'5%'}} />
        </NavLink>
    </div>
  )
}
