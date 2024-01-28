import { useState,useContext, useEffect } from "react";
import axios from "axios";
import Header from './componant/Header';
import { User } from "./context/UserContext";
import { useNavigate } from "react-router-dom";

export default function SignUp(props) {
    const [firstname,setfName]=useState('');
    const [lastname,setlName]=useState('');
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const [passwordR,setpasswordR]=useState('');
    const [phonenum,setphonenum]=useState('');
    const [date,setdate]=useState('');
    const [accept,setAccept]=useState(false);
    const [emailerror,setEmailError]=useState(false);


    const nav =useNavigate();

    //Get User
    const user =useContext(User);
    console.log(user);


    useEffect(()=>{
        setfName(props.name);
        setemail(props.email);
    },[props.name, props.email])

    async function Submit(e){
        e.preventDefault();
        setAccept(true);
        try{
            //state true and send data to server
            let res =await axios.post("http://127.0.0.1:8000/api/register",{
                name: firstname +" "+ lastname,
                email:email,
                password:password,
                password_confirmation:passwordR,
            });
            const token =res.data.data.token;
            console.log(token);
            const UserDetails =res.data.data.user;
            console.log(UserDetails);
            user.setAuth({token,UserDetails});
            nav('/dashboard');
        }catch(err){
            if(err.response.status === 422 ){
                setEmailError(true);
            }
            setAccept(true);
        }
    }



  return (
      <div>
        <Header />
    <div className="parent">
        <div className="SignDiv">
            <form onSubmit={Submit} className="form1">

                {/* <label htmlFor="first-name">الاسم الأول</label>  */}
                <input id="first-name" type="text" placeholder="الاسم الأول" className="placehold" value={firstname} onChange={(e)=>setfName(e.target.value)}/>
                {firstname <2 && accept &&(<p className="error">يرجي ادخال اسم المستخدم</p>)}

                {/* <label htmlFor="last-name">الاسم الأخير</label>  */}
                <input id="last-name" type="text" placeholder="الاسم الأخير" className="placehold" value={lastname} onChange={(e)=>setlName(e.target.value)}/>
                {lastname.length <2 && accept &&(<p className="error">يرجي ادخال الاسم الثاني</p>)}


                {/* <label htmlFor="email">البريد الإلكتروني</label>  */}
                <input id="email" type="email" placeholder="البريد الإلكتروني" className="placehold" value={email} onChange={(e)=>setemail(e.target.value)} />
                { accept && emailerror && (<p className="error">هذا الايميل مستخدم بالفعل</p>)}

                {/* <label htmlFor="password">كلمة المرور</label>  */}
                <input id="password" type="password" placeholder="كلمة المرور" className="placehold" value={password} onChange={(e)=>setpassword(e.target.value)}/>
                {password.length < 8 && accept &&<p className="error">كلمة المرور اقصر من الازم</p>}


                {/* <label htmlFor="password">كلمة المروراعاده</label>  */}
                <input id="password" type="password" placeholder="تأكيد كلمة المرور" className="placehold" value={passwordR} onChange={(e)=>setpasswordR(e.target.value)}/>
                {passwordR !== password && accept &&<p className="error"> كلمه المرور غير متطابقه </p>}


                {/* <label htmlFor="number">رقم الموبايل</label>  */}
                <input id="number" type="number" placeholder="رقم الموبايل" className="placehold" value={phonenum} onChange={(e)=>setphonenum(e.target.value)}/>

                {/* <label htmlFor="date">تاريخ الميلاد</label>  */}
                <input id="date" type="date" placeholder="تاريخ الميلاد" className="placehold" value={date} onChange={(e)=>setdate(e.target.value)}/>

                <div style={{textAlign:"center"}}>
                   <button type="submit">تسجيل</button>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
  }