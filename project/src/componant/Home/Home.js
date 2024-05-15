import React, { useEffect, useState } from 'react';
import Header from "../AllBars/Header"
import "./HomePage.css"
import { Link } from "react-router-dom"
import Footer from "../AllBars/Footer"
import ChatbotHome from '../ChatBOTS/ChatbotHome';
import ScrollToTopButton from '../SomeStyles/ScrollToTopButton';

//الصور
import HOS from "../Photos/HOspital.png"
import CEN from "../Photos/Centar.png"
import COM from "../Photos/Company.png"
import PH from "../Photos/Pharma.png"
import LAB from "../Photos/Labs.png"
import DOC from "../Photos/DOCtor.png"
import NEWS from "../Photos/ARTI.png"
import TWEA from "../Photos/TEWAA.png"
import CLC from "../Photos/CALC.png"
import FOOC from "../Photos/FOOD.png"
import TIME from "../Photos/time.png"
import CHT from "../Photos/Chatreal.png"
import MED from "../Photos/MED.jpg"

export default function Home() {
    const [email, setemail] = useState('');
    const [id, setid] = useState('');
    const userEmail = window.localStorage.getItem('email');

    useEffect(() => {
        fetch(`http://localhost:5000/api/users?email=${encodeURIComponent(userEmail)}`)
            .then((res) => res.json())
            .then((data) => {
                // التحقق من وجود بيانات
                if (data.length > 0) {
                    // البحث عن المستخدم الذي يتطابق مع البريد الإلكتروني
                    const user = data.find((user) => user.email === userEmail);
                    if (user) {
                        // إعداد البيانات في الحالة فقط إذا تم العثور على المستخدم
                        setemail(user.email);
                        setid(user._id);
                        window.localStorage.setItem('_id', user._id);
                    } else {
                        console.log('User not found');
                    }
                } else {
                    console.log('No data available');
                }
            })
            .catch((error) => console.error('Error fetching user data:', error));
    }, []);

    useEffect(() => {
        if (!window.localStorage.getItem('email')) {
            window.location = "/login";
        }
    }, [])

    return (
        <div>
            <Header />
            <div className="landing">
                <div className="intro-text">
                    <h1 data-aos="zoom-in"><b>رحلة مُبسّطة للوصول إلى أفضل رعاية طبية</b></h1>
                    <p data-aos="zoom-in"><h5>...حدد ما تبحث عنه من طبيب مختص أو مركز طبي مُجهز أو مستشفى مُتخصصة في بني سويف</h5></p>
                </div>
            </div>
            <main id="slider">
                <section className="slider-container">
                    <div className="slider">
                        <div className="slider-item">
                            <Link to="/pharmacies" className="HOMELINK">
                                <div className="slide">
                                    <figure className="slide-image">
                                        <img src={PH} alt="" />
                                    </figure>
                                    <h4 data-aos="fade-up" className="slide-name">صيدليات</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="slider-item">
                            <Link to="/labs" className="HOMELINK">
                                <div className="slide">
                                    <figure className="slide-image">
                                        <img src={LAB} alt="" />
                                    </figure>
                                    <h4 data-aos="fade-up" className="slide-name">معامل</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="slider-item">
                            <Link to="/doctors" className="HOMELINK">
                                <div className="slide">
                                    <figure className="slide-image">
                                        <img src={DOC} alt="" />
                                    </figure>
                                    <h4 data-aos="fade-up" className="slide-name">أطباء</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="slider-container">
                    <div className="slider">
                        <div className="slider-item">
                            <Link to="/hospital" className="HOMELINK">
                                <div className="slide">
                                    <figure className="slide-image">
                                        <img src={HOS} alt="" />
                                    </figure>
                                    <h4 data-aos="fade-up" className="slide-name">مستشفيات</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="slider-item">
                            <Link to="/centers" className="HOMELINK">
                                <div className="slide">
                                    <figure className="slide-image">
                                        <img src={CEN} alt="" />
                                    </figure>
                                    <h4 data-aos="fade-up" className="slide-name">مراكز</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="slider-item">
                            <Link to="/company" className="HOMELINK">
                                <div className="slide">
                                    <figure className="slide-image">
                                        <img src={COM} alt="" />
                                    </figure>
                                    <h4 data-aos="fade-up" className="slide-name">شركات ادويه</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="slider-container">
                    <div className="slider">
                        <div className="slider-item">
                            <Link to="/bmr" className="HOMELINK">
                                <div className="slide">
                                    <figure className="slide-image">
                                        <img src={CLC} alt="" />
                                    </figure>
                                    <h4 data-aos="fade-up" className="slide-name">معدل الأيض</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="slider-item">
                            <Link to="/foodclc" className="HOMELINK">
                                <div className="slide">
                                    <figure className="slide-image">
                                        <img src={FOOC} alt="" />
                                    </figure>
                                    <h4 data-aos="fade-up" className="slide-name">الدليل الغذائي</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="slider-item">
                            <Link to="/healthawr" className="HOMELINK">
                                <div className="slide">
                                    <figure className="slide-image">
                                        <img src={TWEA} alt="" />
                                    </figure>
                                    <h4 data-aos="fade-up" className="slide-name">التوعية الصحية</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="slider-container">
                    <div className="slider">
                        <div className="slider-item">
                            <Link to="/arti" className="HOMELINK">
                                <div className="slide">
                                    <figure className="slide-image">
                                        <img src={NEWS} alt="" />
                                    </figure>
                                    <h4 data-aos="fade-up" className="slide-name">مقالات طبية</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="slider-item">
                            <Link to="/notifimid" className="HOMELINK">
                                <div className="slide">
                                    <figure className="slide-image">
                                        <img src={TIME} alt="" />
                                    </figure>
                                    <h4 data-aos="fade-up" className="slide-name">أدوية اليوم</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="slider-item">
                            <Link to="/realtimechat" className="HOMELINK">
                                <div className="slide">
                                    <figure className="slide-image">
                                        <img src={CHT} alt="" />
                                    </figure>
                                    <h4 data-aos="fade-up" className="slide-name">المحادثات المباشرة</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="slider-container">
                    <div className="slider">
                        <div className="slider-item">
                            <Link to="/medicine" className="HOMELINK">
                                <div className="slide">
                                    <figure className="slide-image">
                                        <img src={MED} alt="" />
                                    </figure>
                                    <h4 data-aos="fade-up" className="slide-name">الأدوية الشائعة</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <ScrollToTopButton />
            <ChatbotHome />
            <Footer />
        </div>
    )
}