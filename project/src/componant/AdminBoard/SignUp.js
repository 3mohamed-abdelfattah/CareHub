import { useState, useContext, Fragment } from "react";
import axios from "axios";
import Header from '../AllBars/Header';
import { User } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import Footer from "../AllBars/Footer";
import React from 'react';
import "./Log&Sign.css"

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
          setErrors({ email: ".This email is already registered with us. If you forgot your password, contact the support team"
        });
        } else if (status === 401) {
          setErrors({ password: ".The password does not match. Please check and ensure the password is entered correctly" });
        } 
        setAccept(true);
      }
    }
  }

  return (
    <Fragment>
        <Header />
<form className="form" onSubmit={Submit}>
  <p className="title">Register </p>
  <p className="message">.Register now and get full access to our Website</p>
  <div className="flex">
    <label>
      <input required placeholder type="text" className="input" id="first-name" value={firstname} onChange={(e)=>setfName(e.target.value)}/>
      <span>Firstname</span>
    </label>
    <label>
      <input required placeholder type="text" className="input" id="last-name" value={lastname} onChange={(e)=>setlName(e.target.value)}/>
      <span>Lastname</span>
    </label>
  </div>  
  <label>
    <input required placeholder type="email" className="input" id="email" value={email} onChange={(e)=>setemail(e.target.value)}/>
    <span>Email</span>
  </label> 
  {errors.email && <h1 className="error">{errors.email}</h1>}
  <label>
    <input required placeholder type="password" className="input" id="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
    <span>Password</span>
  </label>
  <label>
    <input required placeholder type="password" className="input" id="password" value={passwordR} onChange={(e)=>setpasswordR(e.target.value)}/>
    <span>Confirm password</span>
  </label>
  {errors.password && <h1 className="error">{errors.password}</h1>}
  <button className="submit">Submit</button>
  <p className="signin">Already have an account ?<a href="login">Login</a> </p>
</form>

      <Footer />
    </Fragment>
)
}