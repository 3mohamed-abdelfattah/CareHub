import React from 'react'
import Header from '../AllBars/Header'
import Footer from '../AllBars/Footer'
import { useState, useContext, Fragment } from "react";
import axios from "axios";
import { ToastContainer,toast } from 'react-toastify';
import Sound from 'react-sound';
import NOtifi from "../Photos/sound.mp3"


export default function Problems() {


    const [name,setName]=useState('');
    const [email,setemail]=useState('');
    const [number,setNumber]=useState('');
    const [problem,setProblem]=useState('');
    const [accept, setAccept] = useState(false);
    const [errors, setErrors] = useState({}); // State to hold specific errors
    const [playStatus, setPlayStatus] = useState(Sound.status.STOPPED);


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
        let res = await axios.post("http://localhost:5000/api/complaint", {
                    name: name,
                    email:email,
                    phoneNumber:number,
                    problem:problem,
        });
        if (res.status === 200) {
        window.localStorage.setItem('email', email);
        setPlayStatus(Sound.status.PLAYING);
        toast.success("تم استلام استفسارك بنجاح! نحن نقدر اهتمامك بالتواصل معنا، وسنعمل جاهدين على الرد عليك في أقرب وقت ممكن",options);
        }

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
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", minHeight: "100vh" }}>
    <Header />
    <h2 style={{marginTop:'8%',color:'#1F5357'}}>نحن نهتم بتجربتك كمستخدم لدينا ونسعى جاهدين لتقديم الدعم اللازم</h2>
    <Fragment>
      <div className="form-container">
        <form className="form" onSubmit={Submit}>
          <div className="form-group">
            <input required name="name" id="name" type="text" placeholder='الاسم' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input required name="email" id="email" type="text" placeholder='الايميل' value={email} onChange={(e)=>setemail(e.target.value)} />
            <input required name="number" id="number" type="text" placeholder='الرقم' value={number} onChange={(e)=>setNumber(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">كيف يمكننا مساعدتك؟</label>
            <textarea required cols={50} rows={10} id="textarea" name="textarea" defaultValue={""} value={problem} onChange={(e)=>setProblem(e.target.value)} />
          </div>
          <button type="submit" className="form-submit-btn">ارسال</button>
        </form>
      </div>
    </Fragment>
    <Footer />
    <Sound
    url={NOtifi}
    playStatus={playStatus}
    onFinishedPlaying={() => setPlayStatus(Sound.status.STOPPED)}
  />
  </div>
  
  )
}
