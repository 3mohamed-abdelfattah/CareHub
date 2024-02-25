import { useState, useContext, Fragment } from "react";
import axios from "axios";
import Header from '../AllBars/Header';
import { User } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import Footer from "../AllBars/Footer";
import React from 'react';
import "./Log&Sign.css"

export default function Login() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
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
      let res = await axios.post("http://localhost:5000/api/login", {
        email: email,
        password: password,
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
          setErrors({ email: 'يجب ملء الحقول' });
        } else if (status === 401) {
          setErrors({ password: ".The password is incorrect, please verify the accuracy of the information" });
        } else if (status === 402) {
          setErrors({ email: '.The email address is not valid, please verify the accuracy of the information' });
        }
        setAccept(true);
      }
    }
  }

  return (
    <Fragment>
        <Header />
<form className="form" onSubmit={Submit} >
  <p className="title">Login</p>
  <p className="message">.Login now and get full access to our Website</p> 
  <label>
    <input required placeholder type="email" className="input" id="email" value={email} onChange={(e) => setemail(e.target.value)}/>
    <span>Email</span>
  </label> 
  {errors.email && <h1 className="error">{errors.email}</h1>}
  <label>
    <input required placeholder type="password" className="input" id="password" value={password} onChange={(e) => setpassword(e.target.value)}/>
    <span>Password</span>
  </label>
  {errors.password && <h1 className="error">{errors.password}</h1>}
  <button className="submit">Submit</button>
  <p className="signin">Don't have account ? <a href="register">Registration</a> </p>
</form>

      <Footer />
    </Fragment>
  );
}
