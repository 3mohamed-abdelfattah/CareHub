import axios from "axios";
import { useState,useEffect, Fragment } from "react";
import React from 'react';
import { ToastContainer,toast } from 'react-toastify';
import Sound from 'react-sound';
import NOtifi from "../Photos/sound.mp3"
import { useNavigate } from "react-router-dom";

export default function UpdateUser() {
    const [firstname,setfName]=useState('');
    const [lastname,setlName]=useState('');
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const [Role,setRole]=useState('');
    const [accept,setaccept]=useState(false);
    const navigate = useNavigate();
    const [playStatus, setPlayStatus] = useState(Sound.status.STOPPED);

    const options = {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    }
    
    const id =window.location.pathname.split("/").slice(-1)[0];

    useEffect(()=>{
        fetch(`http://localhost:5000/api/users/${id}`)
        .then((res)=>res.json())
        .then((data)=>{
            setemail(data.email);
            setfName(data.firstname);
            setlName(data.lastname);
            setpassword(data.password);
            setRole(data.role);


            console.log(data)
        });
    }, []);

    async function Submit(e){
        let sub=true
        e.preventDefault();
        setaccept(true);
        //استقبال البيانات عند الارسال
        if (firstname ==="" || password.length<0  || Role ===""){
            sub = false
        }else sub=true;
        try{

        if(sub){ 
            //state true and send data to server
            let res =await axios.patch(`http://localhost:5000/api/update/${id}`,{
                id: id,
                newFirstname: firstname,
                newLastname: lastname,
                newEmail:email,
                newPassword:password,
                newRole:Role,
            });
            if(res.status=== 200 ){
                window.localStorage.setItem("email",email);
                setTimeout(() => {
                    navigate('/dashboard/user'); // Redirect using useNavigate hook
                }, 800);
                setPlayStatus(Sound.status.PLAYING);
                    toast.success(".تم تحديث بيانات المستخدم بنجاح",options);
            }
        }
        }catch(err){
        console.log(err)
        }
        
    }



return (
    <Fragment>
        <h1 className="Updateuser">تحديث بيانات المستخدم</h1>
    <div className="parent1">
        <div className="UpdateDiv">
            <form onSubmit={Submit} className="form2">

                <input id="first-name" type="text" placeholder="الاسم الأول" className="Updateuser" value={firstname} onChange={(e)=>setfName(e.target.value)}/>
                {firstname ===''&&accept&&<p className="error">يرجي ادخال اسم المستخدم</p>}

                <input id="last-name" type="text" placeholder="الاسم الأخير" className="Updateuser" value={lastname} onChange={(e)=>setlName(e.target.value)}/>
                {lastname ===''&&accept&&<p className="error">يرجي ادخال اسم المستخدم</p>}

                <input id="email" type="email" placeholder="البريد الإلكتروني" className="Updateuser" value={email} onChange={(e)=>setemail(e.target.value)} />

                <input id="password" type="text" placeholder="كلمة المرور" className="Updateuser" value={password} onChange={(e)=>setpassword(e.target.value)}/>
                {password<4 && accept &&<p className="error">كلمة المرور اقصر من الازم</p>}


                <select value={Role} onChange={(e)=>setRole(e.target.value)} className="Updateuser" style={{border:'#000'}}>
                <option value="User">مستخدم</option>
                <option value="Admin">مسؤول</option>
                <option value="Master">مطور برمجيات</option>
                <option value="Doctor">طبيب</option>

                </select>
            

                <div style={{textAlign:"center"}}>
                    <button type="submit"><span className="box">تحديث</span></button>
                </div>
            </form>
        </div>
    </div>
    <Sound
    url={NOtifi}
    playStatus={playStatus}
    onFinishedPlaying={() => setPlayStatus(Sound.status.STOPPED)}
    />
    </Fragment>
)
}