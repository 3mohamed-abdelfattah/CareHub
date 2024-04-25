import React, { useEffect } from 'react';
import Header from "../AllBars/Header";
import Footer from "../AllBars/Footer";
import { Link } from "react-router-dom"
import "../Home/HomePage.css"
import ScrollToTopButton from '../SomeStyles/ScrollToTopButton';
import AllDocChatbot from '../ChatBOTS/AllDocChatbot';

//الصور
import Brain from "../Photos/BRAIN.png"
import Nose from "../Photos/nose.png"
import BT from "../Photos/STOMCH.png"
import GL from "../Photos/Awram.png"
import BU from "../Photos/bute.png"
import MS from "../Photos/WOMAN.png"
import HEART from "../Photos/HEART.png"
import SR from "../Photos/sergry.png"
import EYE from "../Photos/EYE.png"
import SUB from "../Photos/FOOD.png"
import CHILD from "../Photos/Children.png"
import NUT from "../Photos/nural.png"
import CST from "../Photos/CHEST.png"
import TKB from "../Photos/TKATB.png"
import BON from "../Photos/BONE.png"
import MSK from "../Photos/MASLAK.png"
import NFS from "../Photos/NAfSY.png"
import DO1 from "../Photos/glads.png"
import TEE from "../Photos/teeth.png"

export default function AllDoc() {

    useEffect(() => {
        if (!window.localStorage.getItem('email')) {
            window.location = "/login";
        }
    }, [])

    return (
        <div>
            <Header />
            <container>
                <div className='COLOR'>
                    <div className="landing">
                        <div className="intro-text">
                            <h1 data-aos="zoom-in"><b>رحلة نحو الصحة بمساعدة نخبة من أفضل الأطباء</b> </h1>
                            <p data-aos="zoom-in"><h5>...غوص عميق في مختلف التخصصات الطبية، وتعرف على أطباء مختصين بكل مجال</h5></p>
                        </div>
                    </div>
                </div>
                <main id="slider">
                    <section className="slider-container">
                        <div className="slider">
                            <div className="slider-item">
                                <Link to="/heart" className="HOMELINK">
                                    <div className="slide">
                                        <figure className="slide-image">
                                            <img src={HEART} alt="" />
                                        </figure>
                                        <h4 data-aos="zoom-out" className="slide-name">قلب</h4>
                                        <div className="custom-line"></div>
                                        <div className="row">
                                            <p>دكتور</p><p>29</p>
                                            <strong>•</strong>
                                            <p>مراكز</p><p>0</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="slider-item">
                                <Link to="/surgry" className="HOMELINK">
                                    <div className="slide">
                                        <figure className="slide-image">
                                            <img src={SR} alt="" />
                                        </figure>
                                        <h4 data-aos="zoom-out" className="slide-name">جراحه</h4>
                                        <div className="custom-line"></div>
                                        <div className="row">
                                            <p>دكتور</p><p>107</p>
                                            <strong>•</strong>
                                            <p>مراكز</p><p>2</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="slider-item">
                                <Link to="/eye" className="HOMELINK">
                                    <div className="slide">
                                        <figure className="slide-image">
                                            <img src={EYE} alt="" />
                                        </figure>
                                        <h4 data-aos="zoom-out" className="slide-name">عيون</h4>
                                        <div className="custom-line"></div>
                                        <div className="row">
                                            <p>دكتور</p><p>39</p>
                                            <strong>•</strong>
                                            <p>مراكز</p><p>2</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </section>

                    <section className="slider-container">
                        <div className="slider">
                            <div className="slider-item">
                                <Link to="/bone" className="HOMELINK">
                                    <div className="slide">
                                        <figure className="slide-image">
                                            <img src={BON} alt="" />
                                        </figure>
                                        <h4 data-aos="zoom-out" className="slide-name">عظام</h4>
                                        <div className="custom-line"></div>
                                        <div className="row">
                                            <p>دكتور</p><p>22</p>
                                            <strong>•</strong>
                                            <p>مراكز</p><p>0</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="slider-item">
                                <Link to="/speach" className="HOMELINK">
                                    <div className="slide">
                                        <figure className="slide-image">
                                            <img src={TKB} alt="" />
                                        </figure>
                                        <h4 data-aos="zoom-out" className="slide-name">تخاطب</h4>
                                        <div className="custom-line"></div>
                                        <div className="row">
                                            <p>دكتور</p><p>4</p>
                                            <strong>•</strong>
                                            <p>مراكز</p><p>5</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="slider-item">
                                <Link to="/chest" className="HOMELINK">
                                    <div className="slide">
                                        <figure className="slide-image">
                                            <img src={CST} alt="" />
                                        </figure>
                                        <h4 data-aos="zoom-out" className="slide-name">صدر وجهاز تنفسي</h4>
                                        <div className="custom-line"></div>
                                        <div className="row">
                                            <p>دكتور</p><p>19</p>
                                            <strong>•</strong>
                                            <p>مراكز</p><p>0</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </section>

                    <section className="slider-container">
                        <div className="slider">
                            <div className="slider-item">
                                <Link to="/awram" className="HOMELINK">
                                    <div className="slide">
                                        <figure className="slide-image">
                                            <img src={GL} alt="" />
                                        </figure>
                                        <h4 data-aos="zoom-out" className="slide-name">الأورام</h4>
                                        <div className="custom-line"></div>
                                        <div className="row">
                                            <p>دكتور</p><p>6</p>
                                            <strong>•</strong>
                                            <p>مراكز</p><p>0</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="slider-item">
                                <Link to="/bute" className="HOMELINK">
                                    <div className="slide">
                                        <figure className="slide-image">
                                            <img src={BU} alt="" />
                                        </figure>
                                        <h4 data-aos="zoom-out" className="slide-name">تجميل</h4>
                                        <div className="custom-line"></div>
                                        <div className="row">
                                            <p>دكتور</p><p>11</p>
                                            <strong>•</strong>
                                            <p>مراكز</p><p>10</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="slider-item">
                                <Link to="/woman" className="HOMELINK">
                                    <div className="slide">
                                        <figure className="slide-image">
                                            <img src={MS} alt="" />
                                        </figure>
                                        <h4 data-aos="zoom-out" className="slide-name">نساء وتوليد</h4>
                                        <div className="custom-line"></div>
                                        <div className="row">
                                            <p>دكتور</p><p>32</p>
                                            <strong>•</strong>
                                            <p>مراكز</p><p>2</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </section>

                    <section className="slider-container">
                        <div className="slider">
                            <div className="slider-item">
                                <Link to="/teeth" className="HOMELINK">
                                    <div className="slide">
                                        <figure className="slide-image">
                                            <img src={TEE} alt="" />
                                        </figure>
                                        <h4 data-aos="zoom-out" className="slide-name">أسنان</h4>
                                        <div className="custom-line"></div>
                                        <div className="row">
                                            <p>دكتور</p><p>76</p>
                                            <strong>•</strong>
                                            <p>مراكز</p><p>17</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="slider-item">
                                <Link to="/nose" className="HOMELINK">
                                    <div className="slide">
                                        <figure className="slide-image">
                                            <img src={Nose} alt="" />
                                        </figure>
                                        <h4 data-aos="zoom-out" className="slide-name">انف واذن</h4>
                                        <div className="custom-line"></div>
                                        <div className="row">
                                            <p>دكتور</p><p>22</p>
                                            <strong>•</strong>
                                            <p>مراكز</p><p>0</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="slider-item">
                                <Link to="/stomch" className="HOMELINK">
                                    <div className="slide">
                                        <figure className="slide-image">
                                            <img src={BT} alt="" />
                                        </figure>
                                        <h4 data-aos="zoom-out" className="slide-name">باطنه</h4>
                                        <div className="custom-line"></div>
                                        <div className="row">
                                            <p>دكتور</p><p>21</p>
                                            <strong>•</strong>
                                            <p>مراكز</p><p>0</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </section>

                    <section className="slider-container">
                        <div className="slider">
                            <div className="slider-item">
                                <Link to="/child" className="HOMELINK">
                                    <div className="slide">
                                        <figure className="slide-image">
                                            <img src={CHILD} alt="" />
                                        </figure>
                                        <h4 data-aos="zoom-out" className="slide-name">اطفال</h4>
                                        <div className="custom-line"></div>
                                        <div className="row">
                                            <p>دكتور</p><p>88</p>
                                            <strong>•</strong>
                                            <p>مراكز</p><p>3</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="slider-item">
                                <Link to="/food" className="HOMELINK">
                                    <div className="slide">
                                        <figure className="slide-image">
                                            <img src={SUB} alt="" />
                                        </figure>
                                        <h4 data-aos="zoom-out" className="slide-name">تغذية</h4>
                                        <div className="custom-line"></div>
                                        <div className="row">
                                            <p>دكتور</p><p>12</p>
                                            <strong>•</strong>
                                            <p>مراكز</p><p>1</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="slider-item">
                                <Link to="/nutural" className="HOMELINK">
                                    <div className="slide">
                                        <figure className="slide-image">
                                            <img src={NUT} alt="" />
                                        </figure>
                                        <h4 data-aos="zoom-out" className="slide-name">علاج طبيعي</h4>
                                        <div className="custom-line"></div>
                                        <div className="row">
                                            <p>دكتور</p><p>19</p>
                                            <strong>•</strong>
                                            <p>مراكز</p><p>4</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </section>

                    <section className="slider-container">
                        <div className="slider">
                            <div className="slider-item">
                                <Link to="/gland" className="HOMELINK">
                                    <div className="slide">
                                        <figure className="slide-image">
                                            <img src={DO1} alt="" />
                                        </figure>
                                        <h4 data-aos="zoom-out" className="slide-name">غدد</h4>
                                        <div className="custom-line"></div>
                                        <div className="row">
                                            <p>دكتور</p><p>130</p>
                                            <strong>•</strong>
                                            <p>مراكز</p><p>0</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="slider-item">
                                <Link to="/psychological" className="HOMELINK">
                                    <div className="slide">
                                        <figure className="slide-image">
                                            <img src={NFS} alt="" />
                                        </figure>
                                        <h4 data-aos="zoom-out" className="slide-name">نفسي</h4>
                                        <div className="custom-line"></div>
                                        <div className="row">
                                            <p>دكتور</p><p>13</p>
                                            <strong>•</strong>
                                            <p>مراكز</p><p>0</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="slider-item">
                                <Link to="/urologist" className="HOMELINK">
                                    <div className="slide">
                                        <figure className="slide-image">
                                            <img src={MSK} alt="" />
                                        </figure>
                                        <h4 data-aos="zoom-out" className="slide-name">جلدية وتناسلية</h4>
                                        <div className="custom-line"></div>
                                        <div className="row">
                                            <p>دكتور</p><p>45</p>
                                            <strong>•</strong>
                                            <p>مراكز</p><p>0</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </section>

                    <section className="slider-container">
                        <div className="slider">
                            <div className="slider-item">
                                <Link to="/brain" className="HOMELINK">
                                    <div className="slide">
                                        <figure className="slide-image">
                                            <img src={Brain} alt="" />
                                        </figure>
                                        <h4 data-aos="zoom-out" className="slide-name">مخ واعصاب</h4>
                                        <div className="custom-line"></div>
                                        <div className="row">
                                            <p>دكتور</p><p>20</p>
                                            <strong>•</strong>
                                            <p>مراكز</p><p>0</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </section>

                </main>
            </container>
            <ScrollToTopButton />
            <AllDocChatbot />
            <Footer />
        </div>
    )
}
