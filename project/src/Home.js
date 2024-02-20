import React, { Component }  from 'react';
import Header from "./componant/Header"
import "./HomePage.css"
import { Link } from "react-router-dom"
//الصور
import HOS from "./componant/Photos/HOS.jpeg"
import CEN from "./componant/Photos/CEN.jpeg"
import COM from "./componant/Photos/COM.jpeg"
import PH from "./componant/Photos/PH.jpeg"
import LAB from "./componant/Photos/LAB.jpeg"
import DOC from "./componant/Photos/DOC.jpeg"
import BOT from "./componant/Photos/bot.gif"
import NEWS from "./componant/Photos/news.jpg"
import TWEA from "./componant/Photos/tweaa.jpg"
import CLC from "./componant/Photos/clac.png"
import FOOC from "./componant/Photos/foodclc.jpg"


import Footer from "./componant/Footer"
import ChatbotHome from './componant/ChatBOTS/ChatbotHome';




export default function Home() {

  return (
    <div>
<Header />
<container>
        <div class="landing">
            <div class="intro-text">
                <h1><b> أختر ما تبحث عنه</b></h1>
                <p>حدد ما تريد الوصول اليه طبيب و مركز طبي ومستشفى</p>
            </div>
        </div>
        <main id="slider">
            <section class="slider-container">
            <div class="slider">
            
            <div class="slider-item">
            <Link to ="/hospital" className="HOMELINK">
                        <div class="slide">
                            <figure class="slide-image">
                                <img src={HOS} alt=""/>
                            </figure>
                            <h4 class="slide-name">مستشفيات</h4>
                        </div>
                        </Link>
                    </div>

                    <div class="slider-item">
                    <Link to ="/centers" className="HOMELINK">
                        <div class="slide">
                            <figure class="slide-image">
                                <img src={CEN} alt=""/>
                            </figure>
                            <h4 class="slide-name">مراكز</h4>
                        </div>
                        </Link>
                    </div>

                    <div class="slider-item">
                    <Link to ="/company" className="HOMELINK">
                        <div class="slide">
                            <figure class="slide-image">
                                <img src={COM} alt=""/>
                            </figure>
                            <h4 class="slide-name">شركات ادويه</h4>
                        </div>
                        </Link>
                    </div>

                  </div>
            </section>
            <section class="slider-container">
                <div class="slider">

                    <div class="slider-item">
                    <Link to ="/pharmacies" className="HOMELINK">
                        <div class="slide">
                            <figure class="slide-image">
                                <img src={PH} alt=""/>
                            </figure>
                            <h4 class="slide-name">صيدليات</h4>
                        </div>
                        </Link>
                    </div>

                    <div class="slider-item">
                    <Link to ="/labs" className="HOMELINK">
                        <div class="slide">
                            <figure class="slide-image">
                                <img src={LAB} alt=""/>
                            </figure>
                            <h4 class="slide-name">معامل</h4>
                        </div>
                        </Link>
                    </div>

                    <div class="slider-item">
                    <Link to ="/doctors" className="HOMELINK">
                        <div class="slide">
                            <figure class="slide-image">
                                <img src={DOC} alt=""/>
                            </figure>
                            <h4 class="slide-name">اطباء</h4>
                        </div>
                    </Link>
                    </div>

                </div>
            </section>

            <section class="slider-container">
                <div class="slider">

                    <div class="slider-item">
                    <Link to ="/bmr" className="HOMELINK">
                    <div class="slide">
                        <figure class="slide-image">
                            <img src={CLC} alt=""/>
                        </figure>
                        <h4 class="slide-name">معدل الأيض</h4>
                    </div>
                    </Link>
                </div>

                <div class="slider-item">
                <Link to ="/foodclc" className="HOMELINK">
                    <div class="slide">
                        <figure class="slide-image">
                            <img src={FOOC} alt=""/>
                        </figure>
                        <h4 class="slide-name">الدليل الغذائي </h4>
                    </div>
                    </Link>
                    </div>

                    <div class="slider-item">
                    <Link to ="/healthawr" className="HOMELINK">
                        <div class="slide">
                            <figure class="slide-image">
                                <img src={TWEA} alt=""/>
                            </figure>
                            <h4 class="slide-name">التوعية الصحية</h4>
                        </div>
                    </Link>
                    </div>

                </div>
            </section>

            <section class="slider-container">
            <div class="slider">


                <div class="slider-item">
                <Link to ="/arti" className="HOMELINK">
                <div class="slide">
                    <figure class="slide-image">
                        <img src={NEWS} alt=""/>
                    </figure>
                    <h4 class="slide-name">مقالات طبية</h4>
                </div>
                </Link>
                </div>

            </div>
        </section>
        </main>
    </container>
    <ChatbotHome/>
    <Footer/>
    </div>
    )
}
