import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import React from 'react';
import { toast } from 'react-toastify';
import Sound from 'react-sound';
import NOtifi from "../Photos/sounds.mp3"
import { useNavigate } from "react-router-dom";
import Header from "../AllBars/Header";
import Footer from "../AllBars/Footer";

export default function Updateme() {
    const [firstname, setfName] = useState('');
    const [lastname, setlName] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [accept, setaccept] = useState(false);
    const navigate = useNavigate();
    const [playStatus, setPlayStatus] = useState(Sound.status.STOPPED);
    const userID = window.localStorage.getItem('_id');

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
        fetch(`http://localhost:5000/api/users/${userID}`)
            .then((res) => res.json())
            .then((data) => {
                setemail(data.email);
                setfName(data.firstname);
                setlName(data.lastname);
                setpassword(data.password);
                console.log(data)
            });
    },[]);

    async function Submit(e) {
        let sub = true
        e.preventDefault();
        setaccept(true);
        //استقبال البيانات عند الارسال
        if (firstname === "" || password.length < 0) {
            sub = false
        } else sub = true;
        try {
            if (sub) {
                //state true and send data to server
                let res = await axios.patch(`http://localhost:5000/api/update/${userID}`, {
                    id: userID,
                    newFirstname: firstname,
                    newLastname: lastname,
                    newEmail: email,
                    newPassword: password,
                });
                if (res.status === 200) {
                    window.localStorage.removeItem("email", email);
                    window.localStorage.removeItem("_id", userID);
                    setTimeout(() => {
                        navigate('/login'); // Redirect using useNavigate hook
                    }, 800);
                    setPlayStatus(Sound.status.PLAYING);
                    toast.success(".تم تحديث بيانات المستخدم بنجاح", options);
                }
            }
        } catch (err) {
        }
    }

    return (
        <Fragment>
            <Header />
            <div className="containerform1" style={{ marginTop: '5.5%' }}>
                <h1 className="Updateuser" style={{ textAlign: 'center' }}>حـدث بيـاناتك</h1>
                <div className="parent1">
                    <div className="UpdateDiv">
                        <form onSubmit={Submit} className="form2">
                            <input id="first-name" type="text" placeholder="الاسم الأول" className="Updateuser" value={firstname} onChange={(e) => setfName(e.target.value)} />
                            {firstname === '' && accept && <p className="error">يرجي ادخال اسم المستخدم</p>}
                            <input id="last-name" type="text" placeholder="الاسم الأخير" className="Updateuser" value={lastname} onChange={(e) => setlName(e.target.value)} />
                            {lastname === '' && accept && <p className="error">يرجي ادخال اسم المستخدم</p>}
                            <input id="email" type="email" placeholder="البريد الإلكتروني" className="Updateuser" value={email} onChange={(e) => setemail(e.target.value)} />
                            <input id="password" type="text" placeholder="كلمة المرور" className="Updateuser" value={password} onChange={(e) => setpassword(e.target.value)} />
                            {password < 4 && accept && <p className="error">كلمة المرور اقصر من الازم</p>}
                            <div style={{ textAlign: "center" }}>
                                <button type="submit"><span className="box">تحديث</span></button>
                            </div>
                        </form>
                    </div>
                </div>
                <Sound
                    url={NOtifi}
                    playStatus={playStatus}
                    onFinishedPlaying={() => setPlayStatus(Sound.status.STOPPED)}
                />
            </div>
            <Footer />
        </Fragment>
    )
}