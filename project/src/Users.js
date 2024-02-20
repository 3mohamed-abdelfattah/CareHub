import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faUserPen,faTrashCan } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import { Link } from "react-router-dom"
import React, { Component }  from 'react';





export default function Users() {
    const [user,setUser]=useState([]);
    const [runUseEffect,setRun] = useState(0);


    useEffect(() => {
      fetch("")
      .then((res) => res.json())
      .then((data) =>setUser(data));
    }, [runUseEffect])

async function deleteUser(id) {
    try{
        const res=await axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`);
        if(res.status===200){
            setRun((prev)=>prev+1);
        }
    }catch{
        console.log("null");
    }
}


const showUsers = user.map((user,index) =>(
    <tr key={index}>
        <td>{index+1}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>Pataint</td>
        <td>
        <Link to={`./${user.id}`}>
        <FontAwesomeIcon icon={faUserPen} fade size="lg" style={{color: "rgb(106, 178, 155)",paddingRight:"12px", cursor:"pointer"}} />
        </Link>
        <FontAwesomeIcon onClick={()=>deleteUser(user.id)} icon={faTrashCan}  size="lg" style={{color: "red",cursor:"pointer",paddingLeft:"12px"}} />
        </td>

    </tr>
));




  return (
    <div style={{padding:'20px'}}>
      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>USER</th>
                <th>MAIL</th>
                <th>JOP</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
          <tr>

        <td>Alaa Omar</td>
        <td>FD23</td>
        <td>CCW12@gmail.com</td>
        <td>Doctor</td>
        <td>
        <Link to={`./${user.id}`}>
        <FontAwesomeIcon icon={faUserPen} fade size="lg" style={{color: "#5dbafda8",paddingRight:"12px", cursor:"pointer"}} />
        </Link>
        <FontAwesomeIcon onClick={()=>deleteUser(user.id)} icon={faTrashCan}  size="lg" style={{color: "red",cursor:"pointer",paddingLeft:"12px"}} />
        </td>
          </tr>
          <tr>

<td>Eman Youssef</td>
<td>CE33</td>
<td>dda2@gmail.com</td>
<td>Pataint</td>
<td>
<Link to={`./${user.id}`}>
<FontAwesomeIcon icon={faUserPen} fade size="lg" style={{color: "#5dbafda8",paddingRight:"12px", cursor:"pointer"}} />
</Link>
<FontAwesomeIcon onClick={()=>deleteUser(user.id)} icon={faTrashCan}  size="lg" style={{color: "red",cursor:"pointer",paddingLeft:"12px"}} />
</td>
  </tr>
  <tr>

<td>Ahmed Mohamed</td>
<td>AM19</td>
<td>m273@gmail.com</td>
<td>Pataint</td>
<td>
<Link to={`./${user.id}`}>
<FontAwesomeIcon icon={faUserPen} fade size="lg" style={{color: "#5dbafda8",paddingRight:"12px", cursor:"pointer"}} />
</Link>
<FontAwesomeIcon onClick={()=>deleteUser(user.id)} icon={faTrashCan}  size="lg" style={{color: "red",cursor:"pointer",paddingLeft:"12px"}} />
</td>
  </tr>
  <tr>

<td>Nour Eldeen </td>
<td>wd12</td>
<td>d2dacs@gmail.com</td>
<td>Pataint</td>
<td>
<Link to={`./${user.id}`}>
<FontAwesomeIcon icon={faUserPen} fade size="lg" style={{color: "#5dbafda8",paddingRight:"12px", cursor:"pointer"}} />
</Link>
<FontAwesomeIcon onClick={()=>deleteUser(user.id)} icon={faTrashCan}  size="lg" style={{color: "red",cursor:"pointer",paddingLeft:"12px"}} />
</td>
  </tr>
  <tr>

<td>Marwa Sayed</td>
<td>1rf2</td>
<td>ssmar1@gmail.com</td>
<td>Nurse</td>
<td>
<Link to={`./${user.id}`}>
<FontAwesomeIcon icon={faUserPen} fade size="lg" style={{color: "#5dbafda8",paddingRight:"12px", cursor:"pointer"}} />
</Link>
<FontAwesomeIcon onClick={()=>deleteUser(user.id)} icon={faTrashCan}  size="lg" style={{color: "red",cursor:"pointer",paddingLeft:"12px"}} />
</td>
  </tr>
  <tr>

<td>Mohamed Mohamed</td>
<td>cew2</td>
<td>abf2@icloud.com</td>
<td>Admin</td>
<td>
<Link to={`./${user.id}`}>
<FontAwesomeIcon icon={faUserPen} fade size="lg" style={{color: "#5dbafda8",paddingRight:"12px", cursor:"pointer"}} />
</Link>
<FontAwesomeIcon onClick={()=>deleteUser(user.id)} icon={faTrashCan}  size="lg" style={{color: "red",cursor:"pointer",paddingLeft:"12px"}} />
</td>
  </tr>
  <tr>

<td>Ramy Ashraf</td>
<td>ghd4</td>
<td>dwad1@gmail.com</td>
<td>Doctor</td>
<td>
<Link to={`./${user.id}`}>
<FontAwesomeIcon icon={faUserPen} fade size="lg" style={{color: "#5dbafda8",paddingRight:"12px", cursor:"pointer"}} />
</Link>
<FontAwesomeIcon onClick={()=>deleteUser(user.id)} icon={faTrashCan}  size="lg" style={{color: "red",cursor:"pointer",paddingLeft:"12px"}} />
</td>
  </tr>
  <tr>

<td>Ahmed Emad</td>
<td>dw12</td>
<td>ddc22@gmail.com</td>
<td>Pataint</td>
<td>
<Link to={`./${user.id}`}>
<FontAwesomeIcon icon={faUserPen} fade size="lg" style={{color: "#5dbafda8",paddingRight:"12px", cursor:"pointer"}} />
</Link>
<FontAwesomeIcon onClick={()=>deleteUser(user.id)} icon={faTrashCan}  size="lg" style={{color: "red",cursor:"pointer",paddingLeft:"12px"}} />
</td>
  </tr>
  <tr>

<td>Mohamed Sayed</td>
<td>fw2d</td>
<td>dwad@gmail.com</td>
<td>Pataint</td>
<td>
<Link to={`./${user.id}`}>
<FontAwesomeIcon icon={faUserPen} fade size="lg" style={{color: "#5dbafda8",paddingRight:"12px", cursor:"pointer"}} />
</Link>
<FontAwesomeIcon onClick={()=>deleteUser(user.id)} icon={faTrashCan}  size="lg" style={{color: "red",cursor:"pointer",paddingLeft:"12px"}} />
</td>
  </tr>
  <tr>

<td>Aya Mohamed</td>
<td>2eda</td>
<td>vse3@yahoo.com</td>
<td>Nurse</td>
<td>
<Link to={`./${user.id}`}>
<FontAwesomeIcon icon={faUserPen} fade size="lg" style={{color: "#5dbafda8",paddingRight:"12px", cursor:"pointer"}} />
</Link>
<FontAwesomeIcon onClick={()=>deleteUser(user.id)} icon={faTrashCan}  size="lg" style={{color: "red",cursor:"pointer",paddingLeft:"12px"}} />
</td>
  </tr>
  <tr>

<td>Rana Mohamed</td>
<td>Ada9</td>
<td>2fd3@icloud.com</td>
<td>Doctor</td>
<td>
<Link to={`./${user.id}`}>
<FontAwesomeIcon icon={faUserPen} fade size="lg" style={{color: "#5dbafda8",paddingRight:"12px", cursor:"pointer"}} />
</Link>
<FontAwesomeIcon onClick={()=>deleteUser(user.id)} icon={faTrashCan}  size="lg" style={{color: "red",cursor:"pointer",paddingLeft:"12px"}} />
</td>
  </tr>



        </tbody>
      </table>
    </div>
  )
}
