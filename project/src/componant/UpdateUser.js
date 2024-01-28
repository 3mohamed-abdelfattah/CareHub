import axios from "axios";
import { useState,useEffect } from "react";

export default function UpdateUser() {
    const [firstname,setfName]=useState('');
    const [lastname,setlName]=useState('');
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const [passwordR,setpasswordR]=useState('');
    const [accept,setaccept]=useState(false);
    const [emailerror,setemailerror]=useState("");


    const id =window.location.pathname.split("/").slice(-1)[0];

    useEffect(()=>{
        fetch(`http://127.0.0.1:8000/api/user/showbyid/${id}`)
        .then((res)=>res.json())
        .then((data)=>{
            setemail(data[0].email);
            setfName(data[0].name);

        });
    }, []);

    async function Submit(e){
        let sub=true
        e.preventDefault();
        setaccept(true);
        //استقبال البيانات عند الارسال
        if (firstname ==="" || password.length<8 || passwordR !== password){
            sub = false
        }else sub=true;
        try{

        if(sub){ 
            //state true and send data to server
            let res =await axios.post(`http://127.0.0.1:8000/api/user/update/${id}`,{
                name: firstname + lastname,
                email:email,
                password:password,
                password_confirmation:passwordR,
            });
            if(res.status=== 200 ){
                window.localStorage.setItem("email",email);
                window.location.pathname="/dashboard/user";

            }
        }
        }catch(err){
           console.log(err)
        }
        
    }



  return (
    <>
        <h1 className="Updateuser">تحديث بيانات المستخدم</h1>
    <div className="parent1">
        <div className="UpdateDiv">
            <form onSubmit={Submit} className="form2">

                <input id="first-name" type="text" placeholder="الاسم الأول" className="Updateuser" value={firstname} onChange={(e)=>setfName(e.target.value)}/>
                {firstname ===''&&accept&&<p className="error">يرجي ادخال اسم المستخدم</p>}

                <input id="email" type="email" placeholder="البريد الإلكتروني" className="Updateuser" value={email} onChange={(e)=>setemail(e.target.value)} />

                <input id="password" type="password" placeholder="كلمة المرور" className="Updateuser" value={password} onChange={(e)=>setpassword(e.target.value)}/>
                {password<8 && accept &&<p className="error">كلمة المرور اقصر من الازم</p>}


                <input id="password" type="password" placeholder="تأكيد كلمة المرور" className="Updateuser" value={passwordR} onChange={(e)=>setpasswordR(e.target.value)}/>
                {passwordR !== password && accept &&<p className="error"> كلمه المرور غير متطابقه </p>}


                <div style={{textAlign:"center"}}>
                   <button type="submit" >تحديث</button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
  }
