import React from 'react';
import Header from "../AllBars/Header"
import "./HomePage.css"
import { Link } from "react-router-dom"
import { useSpring, animated } from 'react-spring';

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

import Footer from "../AllBars/Footer"
import ChatbotHome from '../ChatBOTS/ChatbotHome';
import ScrollToTopButton from '../SomeStyles/ScrollToTopButton';




export default function Home() {


    const slideProps = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 500 },
    });


    return (
        <div>
        <Header />
        <div className="landing">
        <div className="intro-text">
        <h1><b>رحلة مُبسّطة للوصول إلى أفضل رعاية طبية</b></h1>
                <p><h5>...حدد ما تبحث عنه من طبيب مختص أو مركز طبي مُجهز أو مستشفى مُتخصصة في بني سويف</h5></p>
            </div>
        </div>
        <main id="slider">

            <section className="slider-container">
            <animated.div style={slideProps}>
                <div className="slider">
                    <div className="slider-item">
                    <Link to ="/pharmacies" className="HOMELINK">
                        <div className="slide">
                            <figure className="slide-image">
                                <img src={PH} alt=""/>
                            </figure>
                            <h4 className="slide-name">صيدليات</h4>
                        </div>
                        </Link>
                    </div>
                    
                    <div className="slider-item">
                    <Link to ="/labs" className="HOMELINK">
                    <div className="slide">
                            <figure className="slide-image">
                                <img src={LAB} alt=""/>
                            </figure>
                            <h4 className="slide-name">معامل</h4>
                        </div>
                        </Link>
                    </div>

                    <div className="slider-item">
                    <Link to ="/doctors" className="HOMELINK">
                        <div className="slide">
                            <figure className="slide-image">
                                <img src={DOC} alt=""/>
                            </figure>
                            <h4 className="slide-name">اطباء</h4>
                        </div>
                    </Link>
                    </div>

                </div>
                    </animated.div>
            </section>
            <section className="slider-container">
            <animated.div style={slideProps}>
            <div className="slider">
            
            <div className="slider-item">
            <Link to ="/hospital" className="HOMELINK">
                        <div className="slide">
                            <figure className="slide-image">
                                <img src={HOS} alt=""/>
                            </figure>
                            <h4 className="slide-name">مستشفيات</h4>
                        </div>
                        </Link>
                    </div>

                    <div className="slider-item">
                    <Link to ="/centers" className="HOMELINK">
                        <div className="slide">
                            <figure className="slide-image">
                                <img src={CEN} alt=""/>
                            </figure>
                            <h4 className="slide-name">مراكز</h4>
                        </div>
                        </Link>
                    </div>

                    <div className="slider-item">
                    <Link to ="/company" className="HOMELINK">
                        <div className="slide">
                            <figure className="slide-image">
                                <img src={COM} alt=""/>
                            </figure>
                            <h4 className="slide-name">شركات ادويه</h4>
                        </div>
                        </Link>
                    </div>

                    </div>
                    </animated.div>

            </section>
            <section className="slider-container">
            <animated.div style={slideProps}>

                <div className="slider">

                    <div className="slider-item">
                    <Link to ="/bmr" className="HOMELINK">
                    <div className="slide">
                        <figure className="slide-image">
                            <img src={CLC} alt=""/>
                        </figure>
                        <h4 className="slide-name">معدل الأيض</h4>
                    </div>
                    </Link>
                </div>

                <div className="slider-item">
                <Link to ="/foodclc" className="HOMELINK">
                    <div className="slide">
                        <figure className="slide-image">
                            <img src={FOOC} alt=""/>
                        </figure>
                        <h4 className="slide-name">الدليل الغذائي </h4>
                    </div>
                    </Link>
                    </div>

                    <div className="slider-item">
                    <Link to ="/healthawr" className="HOMELINK">
                        <div className="slide">
                            <figure className="slide-image">
                                <img src={TWEA} alt=""/>
                            </figure>
                            <h4 className="slide-name">التوعية الصحية</h4>
                        </div>
                    </Link>
                    </div>

                </div>
                </animated.div>
            </section>

            <section className="slider-container">
            <animated.div style={slideProps}>

            <div className="slider">


                <div className="slider-item">
                <Link to ="/arti" className="HOMELINK">
                <div className="slide">
                    <figure className="slide-image">
                        <img src={NEWS} alt=""/>
                    </figure>
                    <h4 className="slide-name">مقالات طبية</h4>
                </div>
                </Link>
                </div>

                
                <div className="slider-item">
                <Link to ="/notifimid" className="HOMELINK">
                <div className="slide">
                    <figure className="slide-image">
                        <img src={TIME} alt=""/>
                    </figure>
                    <h4 className="slide-name">أدوية اليوم</h4>
                </div>
                </Link>
                </div>

            </div>
            </animated.div>
        </section>
        </main>
        <ScrollToTopButton/>
    <ChatbotHome/>
    <Footer/>
    </div>
    )
}
