import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faUserPen,faTrashCan } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import { Link } from "react-router-dom"





export default function Users() {
    const [user,setUser]=useState([]);
    const [runUseEffect,setRun] = useState(0);


    useEffect(() => {
      fetch("http://127.0.0.1:8000/api/user/show")
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
            {showUsers}
        </tbody>
      </table>
    </div>
  )
}
