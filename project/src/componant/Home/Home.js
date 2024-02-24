import React from 'react';
import Header from "../AllBars/Header"
import "./HomePage.css"
import { Link } from "react-router-dom"
//الصور
import HOS from "../Photos/HOS.jpeg"
import CEN from "../Photos/CEN.jpeg"
import COM from "../Photos/COM.jpeg"
import PH from "../Photos/PH.jpeg"
import LAB from "../Photos/LAB.jpeg"
import DOC from "../Photos/DOC.jpeg"
import NEWS from "../Photos/news.jpg"
import TWEA from "../Photos/tweaa.jpg"
import CLC from "../Photos/clac.png"
import FOOC from "../Photos/foodclc.jpg"

import Footer from "../AllBars/Footer"
import ChatbotHome from '../ChatBOTS/ChatbotHome';




export default function Home() {

  return (
      <div>
      <Header />
      <div className="landing">
      <div className="intro-text">
      <h1><b> أختر ما تبحث عنه</b></h1>
                <p>حدد ما تريد الوصول اليه طبيب و مركز طبي ومستشفى</p>
            </div>
        </div>
        <main id="slider">
            <section className="slider-container">
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
            </section>
            <section className="slider-container">
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
            </section>

            <section className="slider-container">
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
            </section>

            <section className="slider-container">
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

            </div>
        </section>
        </main>
    <ChatbotHome/>
    <Footer/>
    </div>
    )
}
