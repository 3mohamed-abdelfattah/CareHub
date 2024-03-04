import Header from "../AllBars/Header";
import "../DoctorsPage/AllDoc.css";
import PHAR from "../Photos/PHAR.jpg"
import Footer from "../AllBars/Footer";
import { Fragment } from "react";
import ScrollToTopButton from "../SomeStyles/ScrollToTopButton";


export default function Pharmacies() {


    const head1={
        color: '#000000',
        fontSize: 33,
        fontWeight: 'bold',
        margin: '1%',
        textAlign: 'center',
        position: 'relative',
        top: 60,
    }
    const head2={
        color: '#ff0505',
        fontSize: 30,
        margin: '5%',
        textAlign: 'center',
        position: 'relative',
        top: 40,
    }


    return (
        <Fragment>
    <Header />
    <div className="header-D">
    <h1>نُقدم لك دواءً لكل داء، ونُشاركك رحلتك نحو الصحة والعافية</h1>
    <h5 style={{color:"#ff0505",fontSize:"25px"}}>...مع أشهر الصيدليات</h5>
    </div>
    <div className="landing-D">
        <div className="container-D">
        <div className="search-box-D">
        <input type="text"placeholder="... بحث بالأسم" className="search-input-D"onkeyup="search()"/>
      </div>
        </div>
        </div>
    <div className="doctors-list-D">
    <div className="container-D">
        <div className="Doctors-D">
    <div className="doctors-data-D">
        <h1>ابن سينا فارما — فرع بني سويف</h1>
        <h3>082 2285541</h3>
        <h4>مركز بنى سويف، محافظة بني سويف 2731106، مصر, بياض العرب, المنيا - الواسطى</h4>
    </div>
        <img src={PHAR} alt=""/>
        <button onclick="document.location=''">التفاصيل</button>
    </div>
    </div>
    </div>
    <div className="doctors-list-D">
        <div className="container-D">
            <div className="Doctors-D">
        <div className="doctors-data-D">
            <h1>شركة الإتحاد لتجارة وتوزيع الأدوية</h1>
            <h3>011 55973307</h3>
            <h4> مصر, بنى سويف الجديدة, بياض العرب، بني سويف</h4>
        </div>
        <img src={PHAR} alt=""/>
            <button onclick="document.location=''">التفاصيل</button>
        </div>
        </div>
        </div>

    <div className="doctors-list-D">
    <div className="container-D">
        <div className="Doctors-D">
        <div className="doctors-data-D">
    <h1>بارك فيل للأدوية</h1>
    <h3>01276500500</h3>
    <h4>ش الروضة متفرع من احمد عرابي</h4>
        </div>
        <img src={PHAR} alt=""/>
    <button onclick="document.location=''">التفاصيل</button>
    </div>
    </div>
    </div>
    <ScrollToTopButton/>
  <Footer/>
        </Fragment>
        )
    }
