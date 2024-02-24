import { useState, useContext, Fragment } from "react";
import axios from "axios";
import Header from '../AllBars/Header';
import { User } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import Footer from "../AllBars/Footer";
import React from 'react';

export default function SignUp() {
  const [firstname,setfName]=useState('');
  const [lastname,setlName]=useState('');
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const [passwordR,setpasswordR]=useState('');
  const [accept, setAccept] = useState(false);
  const [errors, setErrors] = useState({}); // State to hold specific errors

  const nav = useNavigate();

  // Get User
  const user = useContext(User);
  console.log(user);

  async function Submit(e) {
    e.preventDefault();
    setAccept(true);
    try {
      // State true and send data to server
      let res = await axios.post("http://localhost:5000/api/registeration", {
                    firstname: firstname,
                    lastname: lastname,
                    email:email,
                    password:password,
                    passwordAgin:passwordR,
      });
      if (res.status === 200) {
        window.localStorage.setItem('email', email);
        window.location.pathname = "/";
      }
      const token = res.data.data.token;
      const UserDetails = res.data.data.user;
      user.setAuth({ token, UserDetails });
      nav("/dashboard");
    } catch (Err) {
      if (Err.response) {
        const status = Err.response.status;
        setErrors({}); // Clear errors on each attempt
        if (status === 400) {
          setErrors({ email: ".هذا البريد الإلكتروني مسجل لدينا بالفعل. إذا نسيت كلمة المرور، تواصل مع فريق الدعم"});
        } else if (status === 401) {
          setErrors({ password: ".كلمة المرور غير متطابقة" });
        } 
        setAccept(true);
      }
    }
  }

  return (
    <div>
      <Header />
  <div className="parentS" >
      <div className="SignDivS">
          <form onSubmit={Submit} className="form1S">

              <input id="first-name" type="text" placeholder="الاسم الأول" className="placeholdS" value={firstname} onChange={(e)=>setfName(e.target.value)} required/>

              <input id="last-name" type="text" placeholder="الاسم الأخير" className="placeholdS" value={lastname} onChange={(e)=>setlName(e.target.value)} required/>


              <input id="email" type="email" placeholder="البريد الإلكتروني" className="placeholdS" value={email} onChange={(e)=>setemail(e.target.value)} />

              <input id="password" type="password" placeholder="كلمة المرور" className="placeholdS" value={password} onChange={(e)=>setpassword(e.target.value)}/>

              <input id="password" type="password" placeholder="تأكيد كلمة المرور" className="placeholdS" value={passwordR} onChange={(e)=>setpasswordR(e.target.value)}/>
              {errors.email && <h1 className="error">{errors.email}</h1>}
              {errors.password && <h1 className="error">{errors.password}</h1>}

              <div style={{textAlign:"center"}}>
                 <button type="submit">تسجيل</button>
              </div>
          </form>
      </div>
  </div>
  <Footer/>

  </div>
)
}