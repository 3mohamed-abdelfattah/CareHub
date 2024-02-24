import { useState, useContext, Fragment } from "react";
import axios from "axios";
import Header from '../AllBars/Header';
import { User } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import Footer from "../AllBars/Footer";
import React from 'react';

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
          setErrors({ password: 'كلمة المرور غير صحيحة، يرجى التحقق من صحة البيانات' });
        } else if (status === 402) {
          setErrors({ email: 'البريد الإلكتروني غير صحيح، يرجى التحقق من صحة البيانات' });
        }
        setAccept(true);
      }
    }
  }

  return (
    <Fragment>
      <div>
        <Header />
        <div className="parent">
          <div className="SignDiv">
            <form onSubmit={Submit} className="form1">
              <input id="email" type="email" placeholder="البريد الإلكتروني" className="placehold" value={email} onChange={(e) => setemail(e.target.value)} />
              
              <input id="password" type="password" placeholder="كلمة المرور" className="placehold" value={password} onChange={(e) => setpassword(e.target.value)} />
              {errors.email && <h1 className="error">{errors.email}</h1>}
              {errors.password && <h1 className="error">{errors.password}</h1>}

              <div style={{ textAlign: "center" }}>
                <button type="submit">تسجيل دخول</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
