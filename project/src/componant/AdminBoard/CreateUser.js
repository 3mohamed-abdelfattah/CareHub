import { useState, Fragment } from "react";
import axios from "axios";
import React from 'react';
import { toast } from 'react-toastify';
import Sound from 'react-sound';
import NOtifis from "../Photos/sounds.mp3"
import NOtifie from "../Photos/sounde.mp3"
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
  const [firstname, setfName] = useState('');
  const [lastname, setlName] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [accept, setAccept] = useState(false);
  const [errors, setErrors] = useState({}); // State to hold specific errors
  const [playStatus, setPlayStatus] = useState(Sound.status.STOPPED);
  const [playStatue, setPlayStatue] = useState(Sound.status.STOPPED);
  const navigate = useNavigate();

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
    try {
      // State true and send data to server
      let res = await axios.post("http://localhost:5000/api/registeration", {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        passwordAgin: password,
      });
      if (res.status === 200) {
        setTimeout(() => {
          navigate('/dashboard/user'); // Redirect using useNavigate hook
        }, 1000);
        setPlayStatus(Sound.status.PLAYING);
        toast.success(".تم انشاء المستخدم بنجاح", options);
      }
    } catch (Err) {
      if (Err.response) {
        const status = Err.response.status;
        setErrors({}); // Clear errors on each attempt
        if (status === 400) {
          setPlayStatue(Sound.status.PLAYING);
          toast.error(
            "This email is already registered. If you forgot your password, contact the support team", options
          );
        } else if (status === 401) {
          setPlayStatue(Sound.status.PLAYING);
          toast.error("Passwords do not match. Please check and ensure the password is entered correctly", options);
        } else {
          setPlayStatue(Sound.status.PLAYING);
          toast.error("An error occurred. Please try again later.", options);
        }
        setAccept(true);
      }
    }
  }

  return (
    <Fragment>
      <h1 className="Updateuser">انشاء مستخدم جديد</h1>
      <div className="parent1">
        <div className="UpdateDiv">
          <form onSubmit={Submit} className="form2">
            <input id="first-name" type="text" placeholder="الاسم الأول" className="Updateuser" value={firstname} onChange={(e) => setfName(e.target.value)} />
            <input required placeholder="الاسم الأخير" type="text" className="Updateuser" id="last-name" value={lastname} onChange={(e) => setlName(e.target.value)} />
            <input id="email" type="email" placeholder="البريد الإلكتروني" className="Updateuser" value={email} onChange={(e) => setemail(e.target.value)} />
            {errors.email && <h1 className="error">{errors.email}</h1>}
            <input id="password" type="password" placeholder="كلمة المرور" className="Updateuser" value={password} onChange={(e) => setpassword(e.target.value)} />
            <div style={{ textAlign: "center" }}>
              <button type="submit"><span className="box">إنشاء</span></button>
            </div>
          </form>
        </div>
      </div>
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
  )
}
