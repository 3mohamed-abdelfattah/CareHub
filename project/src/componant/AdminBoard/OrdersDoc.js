import React, { useState, Fragment, useEffect } from 'react';
import Header from '../AllBars/Header';
import Footer from '../AllBars/Footer';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import Sound from 'react-sound';
import NOtifi from "../Photos/sound.mp3";
import { useNavigate } from 'react-router-dom';

export default function OrdersDoc() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [order, setOrder] = useState('');
    const [file, setFile] = useState(null); // حالة لتخزين الملف المرفوع
    const [accept, setAccept] = useState(false);
    const [playStatus, setPlayStatus] = useState(Sound.status.STOPPED);
    const navigate = useNavigate();

    useEffect(() => {
        if (!window.localStorage.getItem('email')) {
            window.location= "/login";
        }
    }, [])
    
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
            const formData = new FormData();
            formData.append('name', name);
            formData.append('address', address);
            formData.append('phoneNumber', number);
            formData.append('order', order);
            formData.append('file', file); // إرفاق الملف مع بيانات النموذج

            let res = await axios.post("http://localhost:5000/api/orders", formData);
            if (res.status === 201) {
                setTimeout(() => {
                    navigate('/'); // Redirect using useNavigate hook
                }, 1000);
                setPlayStatus(Sound.status.PLAYING);
                toast.success("تم استلام طلبك بنجاح!وسنعمل جاهدين على توصيله في أقرب وقت ممكن", options);
            }
        } catch (Err) {
            // تعامل مع الأخطاء هنا
        }
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", minHeight: "100vh" }}>
        <Header/>
            <h2 style={{ marginTop: '8%', color: '#ff0505' }}>نجعل كل خطوة في رحلتك مميزة ومثمرة</h2>
            <h2 style={{ color: '#1F5357' }}>!...احجز الآن وانغمس في عالـم من الرفاهية الطبية</h2>
            <Fragment>
                <div className="form-container">
                    <form className="form" onSubmit={Submit}>
                        <div className="form-group">
                            <input required name="name" id="name" type="text" placeholder='الاسم' value={name} onChange={(e) => setName(e.target.value)} />
                            <input required name="email" id="email" type="text" placeholder='العنوان' value={address} onChange={(e) => setAddress(e.target.value)} />
                            <input required name="number" id="number" type="text" placeholder='الرقم' value={number} onChange={(e) => setNumber(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="textarea">ادخل الفترات التي تناسبك من المواعيد الشاغرة، وسنقوم بحجز موعد لك في الوقت المحدد</label>
                            <textarea required cols={50} rows={10} id="textarea" name="textarea" defaultValue={""} value={order} onChange={(e) => setOrder(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="file">اختر ملفًا:</label>
                            <input type="file" id="file" name="file" onChange={(e) => setFile(e.target.files[0])} />
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
            <Footer/>
        </div>
    )
}
