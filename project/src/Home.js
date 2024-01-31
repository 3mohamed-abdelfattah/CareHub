import Header from "./componant/Header"
import "./HomePage.css"
import { Link } from "react-router-dom"
//الصور
import Brain from "./componant/Photos/brain.png"
import Nose from "./componant/Photos/nose.png"
import BT from "./componant/Photos/BT.png"
import GL from "./componant/Photos/GL.svg"
import BU from "./componant/Photos/BU.svg"
import MS from "./componant/Photos/MS.svg"
import HEART from "./componant/Photos/HEART.svg"
import SR from "./componant/Photos/SR.svg"
import EYE from "./componant/Photos/EYE.svg"
import HOS from "./componant/Photos/HOS.jpeg"
import CEN from "./componant/Photos/CEN.jpeg"
import COM from "./componant/Photos/COM.jpeg"
import PH from "./componant/Photos/PH.jpeg"
import LAB from "./componant/Photos/LAB.jpeg"
import DOC from "./componant/Photos/DOC.jpeg"
import BG from "./componant/Photos/bg.jpg"




export default function Home() {

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

            <section class="slider-container">
                <div class="slider">
                    <div class="slider-item">
                    <Link to ="/stomch" className="HOMELINK">
                        <div class="slide">
                            <figure class="slide-image">
                                <img src={GL} alt=""/>
                            </figure>
                            <h4 class="slide-name">جلديه</h4>
                            <div class="custom-line"></div>
                            <div class="row">
                                <p>60 دكتور</p>
                                <strong>•</strong>
                                <p>4 مراكز</p>
                            </div>
                            </div>
                            </Link>
                    </div>
                    <div class="slider-item">
                    <Link to ="/stomch" className="HOMELINK">
                        <div class="slide">
                            <figure class="slide-image">
                                <img src={BU} alt=""/>
                            </figure>
                            <h4 class="slide-name">تجميل</h4>
                            <div class="custom-line"></div>
                            <div class="row">
                                <p>20 دكتور</p>
                                <strong>•</strong>
                                <p>5 مراكز</p>
                            </div>
                            </div>
                            </Link>
                    </div>
                    <div class="slider-item">
                    <Link to ="/stomch" className="HOMELINK">
                        <div class="slide">
                            <figure class="slide-image">
                                <img src={MS} alt=""/>
                            </figure>
                            <h4 class="slide-name">نساء وتوليد</h4>
                            <div class="custom-line"></div>
                            <div class="row">
                                <p>30 دكتور</p>
                                <strong>•</strong>
                                <p>1 مراكز</p>
                            </div>
                    </div>
                    </Link>
                    </div>
                </div>
            </section>



            <section class="slider-container">
                <div class="slider">
                    <div class="slider-item">
                        <Link to ="/brain" className="HOMELINK">

                        <div class="slide">
                            <figure class="slide-image">
                                <img src={Brain} alt=""/>
                            </figure>
                            <h4 class="slide-name">مخ واعصاب</h4>
                            <div class="custom-line"></div>
                            <div class="row">
                                <p>60 دكتور</p>
                                <strong>•</strong>
                                <p>4 مراكز</p>
                            </div>
                            </div>
                        </Link>
                    </div>
                    <div class="slider-item">
                    <Link to ="/nose" className="HOMELINK">
                        <div class="slide">
                            <figure class="slide-image">
                                <img src={Nose} alt=""/>
                            </figure>
                            <h4 class="slide-name">انف واذن</h4>
                            <div class="custom-line"></div>
                            <div class="row">
                                <p>20 دكتور</p>
                                <strong>•</strong>
                                <p>5 مراكز</p>
                            </div>   
                            </div>
                            </Link>
                    </div>
                    <div class="slider-item">
                    <Link to ="/stomch" className="HOMELINK">
                        <div class="slide">
                            <figure class="slide-image">
                                <img src={BT} alt=""/>
                            </figure>
                            <h4 class="slide-name">باطنه</h4>
                            <div class="custom-line"></div>
                            <div class="row">
                                <p>30 دكتور</p>
                                <strong>•</strong>
                                <p>1 مراكز</p>
                            </div>
                            </div>
                            </Link>
                    </div>
                </div>
            </section>





            <section class="slider-container">
                <div class="slider">
                    <div class="slider-item">
                    <Link to ="/stomch" className="HOMELINK">
                        <div class="slide">
                            <figure class="slide-image">
                                <img src={HEART} alt=""/>
                            </figure>
                            <h4 class="slide-name">قلب</h4>
                            <div class="custom-line"></div>
                            <div class="row">
                                <p>60 دكتور</p>
                                <strong>•</strong>
                                <p>4 مراكز</p>
                            </div>
                            </div>
                            </Link>
                    </div>
                    <div class="slider-item">
                    <Link to ="/stomch" className="HOMELINK">
                        <div class="slide">
                            <figure class="slide-image">
                                <img src={SR} alt=""/>
                            </figure>
                            <h4 class="slide-name">جراحه</h4>
                            <div class="custom-line"></div>
                            <div class="row">
                                <p>20 دكتور</p>
                                <strong>•</strong>
                                <p>5 مراكز</p>
                            </div>
                            </div>
                            </Link>
                    </div>
                    <div class="slider-item">
                    <Link to ="/stomch" className="HOMELINK">
                        <div class="slide">
                            <figure class="slide-image">
                                <img src={EYE} alt=""/>
                            </figure>
                            <h4 class="slide-name">عيون</h4>
                            <div class="custom-line"></div>
                            <div class="row">
                                <p>30 دكتور</p>
                                <strong>•</strong>
                                <p>1 مراكز</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
            </section>
            
        </main>
        
        <div class="landing">
            <div class="intro-text">
                <h1><b> أختر ما تبحث عنه</b></h1>
                <p>حدد ما تريد الوصول اليه طبيب و مركز طبي ومستشفى ...<a href="#">اكثر</a></p>
            </div>
        </div>
        <main id="slider">
            <section class="slider-container">
                <div class="slider">
                    <div class="slider-item">
                        <div class="slide">
                            <figure class="slide-image">
                                <img src={HOS} alt=""/>
                            </figure>
                            <h4 class="slide-name">مستشفيات</h4>
                        </div>
                    </div>
                    <div class="slider-item">
                        <div class="slide">
                            <figure class="slide-image">
                                <img src={CEN} alt=""/>
                            </figure>
                            <h4 class="slide-name">مراكز</h4>
                        </div>
                    </div>
                    <div class="slider-item">
                        <div class="slide">
                            <figure class="slide-image">
                                <img src={COM} alt=""/>
                            </figure>
                            <h4 class="slide-name">شركات ادويه</h4>
                        </div>
                    </div>
                  </div>
            </section>
            <section class="slider-container">
                <div class="slider">
                    <div class="slider-item">
                        <div class="slide">
                            <figure class="slide-image">
                                <img src={PH} alt=""/>
                            </figure>
                            <h4 class="slide-name">صيدليات</h4>
                        </div>
                    </div>
                    <div class="slider-item">
                        <div class="slide">
                            <figure class="slide-image">
                                <img src={LAB} alt=""/>
                            </figure>
                            <h4 class="slide-name">معامل</h4>
                        </div>
                    </div>
                    <div class="slider-item">
                        <div class="slide">
                            <figure class="slide-image">
                                <img src={DOC} alt=""/>
                            </figure>
                            <h4 class="slide-name">اطباء</h4>
                        </div>
                    </div>
                </div>
            </section>
            
        </main>


    </container>

    </div>
    )
}
