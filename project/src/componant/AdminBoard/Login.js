import React, { useState, useContext, Fragment } from "react";
import axios from "axios";
import Header from "../AllBars/Header";
import { User } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import Footer from "../AllBars/Footer";
import { toast } from "react-toastify"; // Assuming you're using react-toastify
import Sound from 'react-sound';
import NOtifis from "../Photos/sounds.mp3"
import NOtifie from "../Photos/sounde.mp3"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accept, setAccept] = useState(false);
  const [errors, setErrors] = useState({});
  const [playStatus, setPlayStatus] = useState(Sound.status.STOPPED);
  const [playStatue, setPlayStatue] = useState(Sound.status.STOPPED);
  const navigate = useNavigate();
  const nav = useNavigate();
  const user = useContext(User);

  const options = {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  async function Submit(e) {
    e.preventDefault();
    setAccept(true);
    try {
      let res = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      if (res.status === 200) {
        setPlayStatus(Sound.status.PLAYING);
        toast.success("successful! You have been logged in.", options);
        window.localStorage.setItem("email", email);
        setTimeout(() => {
          navigate('/'); // Redirect using useNavigate hook
        }, 1200);
      } else {
        // Handle unexpected successful response (for robustness)
        console.warn("Unexpected successful response:", res);
      }
      const token = res.data.data.token;
      const UserDetails = res.data.data.user;
      user.setAuth({ token, UserDetails });
      nav("/dashboard");
    } catch (Err) {
      if (Err.response) {
        const status = Err.response.status;
        setErrors({});
        switch (status) {
          case 400:
            setPlayStatue(Sound.status.PLAYING);
            toast.error("Please fill out the fields", options);
            break;
          case 401:
            setPlayStatue(Sound.status.PLAYING);
            toast.error(
              "The password is incorrect, please verify the accuracy of the information", options
            );
            break;
          case 402:
            setPlayStatue(Sound.status.PLAYING);
            toast.error(
              "The email address is not valid, please verify the accuracy of the information", options
            );
            break;
          default:
            setPlayStatue(Sound.status.PLAYING);
            toast.error("An unexpected error occurred. Please try again later.", options);
        }
      } else {
        setPlayStatue(Sound.status.PLAYING);
      }
      setAccept(true);
    }
  }

  return (
    <Fragment>
      <Header />
      <form className="formlogin" onSubmit={Submit}>
        <p className="titlelogin">Login</p>
        <p className="messagelogin">
          Login now and get full access to our Website
        </p>
        <label>
          <input
            required
            placeholder="Email"
            className="inputlogin"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>Email</span>
        </label>
        {errors.email && <h1 className="error">{errors.email}</h1>}
        <label>
          <input
            required
            placeholder="Password"
            className="inputlogin"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <span>Password</span>
        </label>
        {errors.password && <h1 className="error">{errors.password}</h1>}
        <button className="buttonlog">
          <span>Login</span>
          <div className="top" />
          <div className="left" />
          <div className="bottom" />
          <div className="right" />
        </button>
        <p className="signin">
          Don't have account ? <a href="register">Registration</a>
        </p>
      </form>
      <Footer />
      <Sound
        url={NOtifis}
        playStatus={playStatus}
        onFinishedPlaying={() => setPlayStatus(Sound.status.STOPPED)}
      />
      <Sound
        url={NOtifie}
        playStatus={playStatue}
        onFinishedPlaying={() => setPlayStatue(Sound.status.STOPPED)}
      />
    </Fragment>
  );
}