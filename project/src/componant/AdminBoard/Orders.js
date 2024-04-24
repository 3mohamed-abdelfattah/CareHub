import React, { useState, Fragment, useEffect } from 'react';
import Header from '../AllBars/Header';
import Footer from '../AllBars/Footer';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import Sound from 'react-sound';
import NOtifi from "../Photos/sound.mp3";
import { useNavigate } from 'react-router-dom';
import './Order.css'; // استيراد ملف السي إس إس لتنسيق الصفحة

export default function Orders() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [order, setOrder] = useState('');
    const [file, setFile] = useState(null);
    const [accept, setAccept] = useState(false);
    const [playStatus, setPlayStatus] = useState(Sound.status.STOPPED);
    const navigate = useNavigate();

    useEffect(() => {
        if (!window.localStorage.getItem('email')) {
            window.location = "/login";
        }
    }, [])

    async function Submit(e) {
        e.preventDefault();
        setAccept(true);
        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('address', address);
            formData.append('phoneNumber', number);
            formData.append('order', order.trim());
            formData.append('file', file);

            let res = await axios.post("http://localhost:5000/api/orders", formData);
            if (res.status === 201) {
                setTimeout(() => {
                    navigate('/');
                }, 1000);
                setPlayStatus(Sound.status.PLAYING);
                toast.success("تم استلام طلبك بنجاح! وسنعمل جاهدين على توصيله في أقرب وقت ممكن",options);
            }
        } catch (Err) {
            // التعامل مع الأخطاء هنا
        }
    }

    const options = {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    }
    

    return (
        <div className="orders-container">
            <Header />
            <h2 className="main-heading">نجعل كل خطوة في رحلتك مميزة ومثمرة</h2>
            <h2 className="sub-heading">!...اطلب الآن وانغمس في عالـم من الرفاهية الطبية</h2>
            <Fragment>
            <div className="form-container">
                <form className="form" onSubmit={Submit}>
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">الاسم</label>
                        <input required name="name" id="name" type="text" className="form-input" value={name} onChange={(e) => setName(e.target.value)} />
                        <label htmlFor="address" className="form-label">العنوان</label>
                        <input required name="address" id="address" type="text" className="form-input" value={address} onChange={(e) => setAddress(e.target.value)} />
                        <label htmlFor="number" className="form-label">الرقم</label>
                        <input required name="number" id="number" type="text" className="form-input" value={number} onChange={(e) => setNumber(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="textarea" className="form-label">ما هو طلبك؟</label>
                        <textarea required cols={50} rows={10} id="textarea" className="form-textarea" value={order} onChange={(e) => setOrder(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="file" className="form-label" style={{color:'#1F5357',fontSize:'20px',fontWeight:'bolder',cursor:'pointer'}}>اختر ملفًا</label>
                        <input type="file" id="file" name="file" className="form-file" onChange={(e) => setFile(e.target.files[0])} />
                    </div>
                    <button type="submit" className="form-submit-btn">ارسال</button>
                </form>
            </div>
        </Fragment>
            <Sound
                url={NOtifi}
                playStatus={playStatus}
                onFinishedPlaying={() => setPlayStatus(Sound.status.STOPPED)}
            />
            <Footer />
        </div>
    )
}
