import { useState, useContext, Fragment } from "react";
import axios from "axios";
import Header from '../AllBars/Header';
import { User } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import Footer from "../AllBars/Footer";
import React from 'react';
import "./Log&Sign.css"
import { ToastContainer,toast } from 'react-toastify';
import Sound from 'react-sound';
import NOtifi from "../Photos/sound.mp3"


export default function SignUp() {
  const [firstname,setfName]=useState('');
  const [lastname,setlName]=useState('');
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const [passwordR,setpasswordR]=useState('');
  const [accept, setAccept] = useState(false);
  const [errors, setErrors] = useState({});
  const [playStatus, setPlayStatus] = useState(Sound.status.STOPPED);

  const nav = useNavigate();
  const navigate = useNavigate();

  // Get User
  const user = useContext(User);
  console.log(user);

  const options = {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  }

  async function Submit(e) {
    e.preventDefault();
    setAccept(true);

    // Regular Expression for checking if email contains "@master.com" or "@admin.com"
    const emailRegex = /@(master|admin)\.com$/i;

    if (emailRegex.test(email)) {
      setPlayStatus(Sound.status.PLAYING);
      toast.error("Email addresses with master or admin domains are not allowed for usres.", options);
      return;
    }

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
        setTimeout(() => {
          navigate('/'); // Redirect using useNavigate hook
        }, 800);
        setPlayStatus(Sound.status.PLAYING);
        toast.success("Registration successful! You have been logged in.",options);
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
          setPlayStatus(Sound.status.PLAYING);
          toast.error(
            "This email is already registered. If you forgot your password, contact the support team",options
          );
        } else if (status === 401) {
          setPlayStatus(Sound.status.PLAYING);
          toast.error("Passwords do not match. Please check and ensure the password is entered correctly",options);
        } else {
          setPlayStatus(Sound.status.PLAYING);
          toast.error("An error occurred. Please try again later.",options);
        }
        setAccept(true);
      }
    }
  }

  return (
    <Fragment>
        <Header />
<form className="formlogin" onSubmit={Submit}>
  <p className="titlelogin">Register </p>
  <p className="messagelogin">.Register now and get full access to our Website</p>
  <div className="flex">
  <label>
  <input required placeholder type="text" className="inputlogin" id="last-name" value={lastname} onChange={(e)=>setlName(e.target.value)}/>
  <span>Lastname</span>
  </label>
  <label>
    <input required placeholder type="text" className="inputlogin" id="first-name" value={firstname} onChange={(e)=>setfName(e.target.value)}/>
    <span>Firstname</span>
  </label>
  </div>  
  <label>
    <input required placeholder type="email" className="inputlogin" id="email" value={email} onChange={(e)=>setemail(e.target.value)}/>
    <span>Email</span>
  </label> 
  {errors.email && <h1 className="error">{errors.email}</h1>}
  <label>
    <input required placeholder type="password" className="inputlogin" id="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
    <span>Password</span>
  </label>
  <label>
    <input required placeholder type="password" className="inputlogin" id="password" value={passwordR} onChange={(e)=>setpasswordR(e.target.value)}/>
    <span>Confirm password</span>
  </label>
  {errors.password && <h1 className="error">{errors.password}</h1>}
  <button className="buttonlog">
    <span>Submit</span>
    <div className="top" />
    <div className="left" />
    <div className="bottom" />
    <div className="right" />
  </button>  <p className="signin">Already have an account ?<a href="login">Login</a> </p>
</form>

      <Footer />
      <Sound
      url={NOtifi}
      playStatus={playStatus}
      onFinishedPlaying={() => setPlayStatus(Sound.status.STOPPED)}
    />
    </Fragment>
)
}