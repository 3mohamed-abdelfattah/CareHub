import React from 'react';
import Header from "../AllBars/Header";
import Footer from "../AllBars/Footer";
import { Link } from "react-router-dom"
import "../Home/HomePage.css"
//الصور
import Brain from "../Photos/brain.png"
import Nose from "../Photos/nose.png"
import BT from "../Photos/BT.png"
import GL from "../Photos/GL.svg"
import BU from "../Photos/BU.svg"
import MS from "../Photos/MS.svg"
import HEART from "../Photos/HEART.svg"
import SR from "../Photos/SR.svg"
import EYE from "../Photos/EYE.svg"
import SUB from "../Photos/suplment.jpg"
import CHILD from "../Photos/Child.svg"
import NUT from "../Photos/nutural.jpg"
import CST from "../Photos/chest.jpg"
import TKB from "../Photos/tkhtb.jpg"
import BON from "../Photos/bone.jpg"
import MSK from "../Photos/msalk.jpg"
import NFS from "../Photos/nfsy.jpg"
import DO1 from "../Photos/Gluds.png"
import TEE from "../Photos/teath.svg"




export default function AllDoc() {


    return (
        <div>
    <Header />
    <container>
            <div>
              <div className="landing">
                <div className="intro-text">
                    <h1><b>التخصصات الاكثر شيوعاً</b> </h1>
                    <p>ابحث عن افضل الاطباء  والمراكز  فى اكثر التخصصات شيوعاً </p>
                </div>
              </div>
            </div>
            <main id="slider">
    
                <section className="slider-container">
                    <div className="slider">
                        <div className="slider-item">
                        <Link to ="/skin" className="HOMELINK">
                            <div className="slide">
                                <figure className="slide-image">
                                    <img src={GL} alt=""/>
                                </figure>
                                <h4 className="slide-name">جلديه</h4>
                                <div className="custom-line"></div>
                                <div className="row">
                                    <p>60 دكتور</p>
                                    <strong>•</strong>
                                    <p>4 مراكز</p>
                                </div>
                                </div>
                                </Link>
                        </div>
                        <div className="slider-item">
                        <Link to ="/bute" className="HOMELINK">
                            <div className="slide">
                                <figure className="slide-image">
                                    <img src={BU} alt=""/>
                                </figure>
                                <h4 className="slide-name">تجميل</h4>
                                <div className="custom-line"></div>
                                <div className="row">
                                    <p>20 دكتور</p>
                                    <strong>•</strong>
                                    <p>5 مراكز</p>
                                </div>
                                </div>
                                </Link>
                        </div>
                        <div className="slider-item">
                        <Link to ="/woman" className="HOMELINK">
                            <div className="slide">
                                <figure className="slide-image">
                                    <img src={MS} alt=""/>
                                </figure>
                                <h4 className="slide-name">نساء وتوليد</h4>
                                <div className="custom-line"></div>
                                <div className="row">
                                    <p>30 دكتور</p>
                                    <strong>•</strong>
                                    <p>1 مراكز</p>
                                </div>
                        </div>
                        </Link>
                        </div>
                    </div>
                </section>



                <section className="slider-container">
                    <div className="slider">
                        <div className="slider-item">
                        <Link to ="/brain" className="HOMELINK">
    
                            <div className="slide">
                                <figure className="slide-image">
                                    <img src={Brain} alt=""/>
                                </figure>
                                <h4 className="slide-name">مخ واعصاب</h4>
                                <div className="custom-line"></div>
                                <div className="row">
                                    <p>60 دكتور</p>
                                    <strong>•</strong>
                                    <p>4 مراكز</p>
                                </div>
                                </div>
                            </Link>
                        </div>
                        <div className="slider-item">
                        <Link to ="/nose" className="HOMELINK">
                            <div className="slide">
                                <figure className="slide-image">
                                    <img src={Nose} alt=""/>
                                </figure>
                                <h4 className="slide-name">انف واذن</h4>
                                <div className="custom-line"></div>
                                <div className="row">
                                    <p>20 دكتور</p>
                                    <strong>•</strong>
                                    <p>5 مراكز</p>
                                </div>   
                                </div>
                                </Link>
                        </div>
                        <div className="slider-item">
                        <Link to ="/stomch" className="HOMELINK">
                            <div className="slide">
                                <figure className="slide-image">
                                    <img src={BT} alt=""/>
                                </figure>
                                <h4 className="slide-name">باطنه</h4>
                                <div className="custom-line"></div>
                                <div className="row">
                                    <p>30 دكتور</p>
                                    <strong>•</strong>
                                    <p>1 مراكز</p>
                                </div>
                                </div>
                                </Link>
                        </div>
                    </div>
                </section>
    
    
    
    
    
                <section className="slider-container">
                    <div className="slider">
                        <div className="slider-item">
                        <Link to ="/heart" className="HOMELINK">
                            <div className="slide">
                                <figure className="slide-image">
                                    <img src={HEART} alt=""/>
                                </figure>
                                <h4 className="slide-name">قلب</h4>
                                <div className="custom-line"></div>
                                <div className="row">
                                    <p>60 دكتور</p>
                                    <strong>•</strong>
                                    <p>4 مراكز</p>
                                </div>
                                </div>
                                </Link>
                        </div>
                        <div className="slider-item">
                        <Link to ="/surgry" className="HOMELINK">
                            <div className="slide">
                                <figure className="slide-image">
                                    <img src={SR} alt=""/>
                                </figure>
                                <h4 className="slide-name">جراحه</h4>
                                <div className="custom-line"></div>
                                <div className="row">
                                    <p>20 دكتور</p>
                                    <strong>•</strong>
                                    <p>5 مراكز</p>
                                </div>
                                </div>
                                </Link>
                        </div>
                        <div className="slider-item">
                        <Link to ="/eye" className="HOMELINK">
                            <div className="slide">
                                <figure className="slide-image">
                                    <img src={EYE} alt=""/>
                                </figure>
                                <h4 className="slide-name">عيون</h4>
                                <div className="custom-line"></div>
                                <div className="row">
                                    <p>30 دكتور</p>
                                    <strong>•</strong>
                                    <p>1 مراكز</p>
                                </div>
                            </div>
                            </Link>
                        </div>
                    </div>
                </section>



                <section className="slider-container">
                    <div className="slider">
                        <div className="slider-item">
                        <Link to ="/child" className="HOMELINK">
                            <div className="slide">
                                <figure className="slide-image">
                                    <img src={CHILD} alt=""/>
                                </figure>
                                <h4 className="slide-name">اطفال</h4>
                                <div className="custom-line"></div>
                                <div className="row">
                                    <p>20 دكتور</p>
                                    <strong>•</strong>
                                    <p>5 مراكز</p>
                                </div>
                                </div>
                                </Link>
                        </div>
                        <div className="slider-item">
                        <Link to ="/food" className="HOMELINK">
                            <div className="slide">
                                <figure className="slide-image">
                                    <img src={SUB} alt=""/>
                                </figure>
                                <h4 className="slide-name">تغذية</h4>
                                <div className="custom-line"></div>
                                <div className="row">
                                    <p>22 دكتور</p>
                                    <strong>•</strong>
                                    <p>3 مراكز</p>
                                </div>
                                </div>
                                </Link>
                        </div>
                        <div className="slider-item">
                        <Link to ="/nutural" className="HOMELINK">
                            <div className="slide">
                                <figure className="slide-image">
                                    <img src={NUT} alt=""/>
                                </figure>
                                <h4 className="slide-name">علاج طبيعي</h4>
                                <div className="custom-line"></div>
                                <div className="row">
                                    <p>33 دكتور</p>
                                    <strong>•</strong>
                                    <p>9 مراكز</p>
                                </div>
                        </div>
                        </Link>
                        </div>
                    </div>
                </section>


                <section className="slider-container">
                    <div className="slider">
                        <div className="slider-item">
                        <Link to ="/bone" className="HOMELINK">
                            <div className="slide">
                                <figure className="slide-image">
                                    <img src={BON} alt=""/>
                                </figure>
                                <h4 className="slide-name">عظام</h4>
                                <div className="custom-line"></div>
                                <div className="row">
                                    <p>60 دكتور</p>
                                    <strong>•</strong>
                                    <p>4 مراكز</p>
                                </div>
                                </div>
                                </Link>
                        </div>
                        <div className="slider-item">
                        <Link to ="/speach" className="HOMELINK">
                            <div className="slide">
                                <figure className="slide-image">
                                    <img src={TKB} alt=""/>
                                </figure>
                                <h4 className="slide-name">تخاطب</h4>
                                <div className="custom-line"></div>
                                <div className="row">
                                    <p>20 دكتور</p>
                                    <strong>•</strong>
                                    <p>5 مراكز</p>
                                </div>
                                </div>
                                </Link>
                        </div>
                        <div className="slider-item">
                        <Link to ="/chest" className="HOMELINK">
                            <div className="slide">
                                <figure className="slide-image">
                                    <img src={CST} alt=""/>
                                </figure>
                                <h4 className="slide-name">صدر وجهاز تنفسي</h4>
                                <div className="custom-line"></div>
                                <div className="row">
                                    <p>30 دكتور</p>
                                    <strong>•</strong>
                                    <p>1 مراكز</p>
                                </div>
                        </div>
                        </Link>
                        </div>
                    </div>
                </section>


                <section className="slider-container">
                    <div className="slider">
                        <div className="slider-item">
                        <Link to ="/gland" className="HOMELINK">
                            <div className="slide">
                                <figure className="slide-image">
                                    <img src={DO1} alt=""/>
                                </figure>
                                <h4 className="slide-name">غدد</h4>
                                <div className="custom-line"></div>
                                <div className="row">
                                    <p>60 دكتور</p>
                                    <strong>•</strong>
                                    <p>4 مراكز</p>
                                </div>
                                </div>
                                </Link>
                        </div>
                        <div className="slider-item">
                        <Link to ="/psychological" className="HOMELINK">
                            <div className="slide">
                                <figure className="slide-image">
                                    <img src={NFS} alt=""/>
                                </figure>
                                <h4 className="slide-name">نفسي</h4>
                                <div className="custom-line"></div>
                                <div className="row">
                                    <p>20 دكتور</p>
                                    <strong>•</strong>
                                    <p>5 مراكز</p>
                                </div>
                                </div>
                                </Link>
                        </div>
                        <div className="slider-item">
                        <Link to ="/urologist" className="HOMELINK">
                            <div className="slide">
                                <figure className="slide-image">
                                    <img src={MSK} alt=""/>
                                </figure>
                                <h4 className="slide-name">مسالك بوليه</h4>
                                <div className="custom-line"></div>
                                <div className="row">
                                    <p>30 دكتور</p>
                                    <strong>•</strong>
                                    <p>1 مراكز</p>
                                </div>
                        </div>
                        </Link>
                        </div>
                    </div>
                </section>




                <section className="slider-container">
                    <div className="slider">
                        <div className="slider-item">
                        <Link to ="/teeth" className="HOMELINK">
                            <div className="slide">
                                <figure className="slide-image">
                                    <img src={TEE} alt=""/>
                                </figure>
                                <h4 className="slide-name">أسنان</h4>
                                <div className="custom-line"></div>
                                <div className="row">
                                    <p>60 دكتور</p>
                                    <strong>•</strong>
                                    <p>4 مراكز</p>
                                </div>
                                </div>
                                </Link>
                        </div>
                    </div>
                </section>

            </main>
        </container>
        <Footer/>
        </div>
        )
    }
