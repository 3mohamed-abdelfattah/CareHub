import React, { useEffect } from 'react'
import Header from '../AllBars/Header'
import Footer from '../AllBars/Footer'
import { useState, Fragment } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import Sound from 'react-sound';
import NOtifis from "../Photos/sounds.mp3"
import NOtifie from "../Photos/sounde.mp3"
import { useNavigate } from 'react-router-dom';

export default function Problems() {

  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [number, setNumber] = useState('');
  const [problem, setProblem] = useState('');
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

  useEffect(() => {
    if (!window.localStorage.getItem('email')) {
      window.location = "/login";
    }
  }, [])

  async function Submit(e) {
    e.preventDefault();
    setAccept(true);
    try {
      // State true and send data to server
      let res = await axios.post("http://localhost:5000/api/complaint", {
        name: name,
        email: email,
        phoneNumber: number,
        problem: problem,
      });
      if (res.status === 200) {
        setPlayStatus(Sound.status.PLAYING);
        toast.success("تم استلام استفسارك بنجاح! نحن نقدر اهتمامك بالتواصل معنا، وسنعمل جاهدين على الرد عليك في أقرب وقت ممكن", options);
        setTimeout(() => {
          navigate('/'); // Redirect using useNavigate hook
        }, 2000);
      }
    } catch (Err) {
      if (Err.response) {
        const status = Err.response.status;
        setErrors({}); // Clear errors on each attempt
        if (status === 400) {
          setPlayStatue(Sound.status.PLAYING);
          toast.error(
            ".هناك مشكله في بياناتك يرجي مراجعه البيانات مره اخري", options
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
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <h2 style={{ marginTop: '8%', color: '#1F5357' }}>نحن نهتم بتجربتك كمستخدم لدينا ونسعى جاهدين لتقديم الدعم اللازم</h2>
      <Fragment>
        <div className="form-container">
          <form className="form" onSubmit={Submit}>
            <div className="form-group">
              <input required name="name" id="name" type="text" placeholder='الاسم' value={name} onChange={(e) => setName(e.target.value)} />
              <input required name="email" id="email" type="text" placeholder='الايميل' value={email} onChange={(e) => setemail(e.target.value)} />
              <input required name="number" id="number" type="text" placeholder='الرقم' value={number} onChange={(e) => setNumber(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="textarea">كيف يمكننا مساعدتك؟</label>
              <textarea required cols={50} rows={10} id="textarea" name="textarea" defaultValue={""} value={problem} onChange={(e) => setProblem(e.target.value)} />
            </div>
            <button type="submit" className="form-submit-btn">ارسال</button>
          </form>
        </div>
      </Fragment>
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
    </div>
  )
}