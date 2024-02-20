import Header from "./Header";
import "./DoctorsPage/AllDoc.css";
import PHAR from "./Photos/PHAR.jpg"
import Footer from "./Footer";
import { Fragment } from "react";


export default function Pharmacies() {

    return (
        <Fragment>
    <Header />


  
    <div class="header-D">
    </div>
  
  
    <div class="landing-D">
        <div class="container-D">
        <h1 className="txtdoc">اشهر الصيدليات  في بني سويف</h1>
      <div class="search-box-D">
        <input type="text"placeholder="... بحث بالأسم" class="search-input-D"onkeyup="search()"/>
      </div>
    </div>
    </div>

  

    
    <div class="doctors-list-D">
    <div class="container-D">
        <div class="Doctors-D">
    <div class="doctors-data-D">
        <h1>ابن سينا فارما — فرع بني سويف</h1>
        <h3>082 2285541</h3>
        <h4>مركز بنى سويف، محافظة بني سويف 2731106، مصر, بياض العرب, المنيا - الواسطى</h4>
    </div>
        <img src={PHAR} alt=""/>
        <button onclick="document.location=''">التفاصيل</button>
    </div>
    </div>
    </div>

    <div class="doctors-list-D">
        <div class="container-D">
            <div class="Doctors-D">
        <div class="doctors-data-D">
            <h1>شركة الإتحاد لتجارة وتوزيع الأدوية</h1>
            <h3>011 55973307</h3>
            <h4> مصر, بنى سويف الجديدة, بياض العرب، بني سويف</h4>
        </div>
        <img src={PHAR} alt=""/>
            <button onclick="document.location=''">التفاصيل</button>
        </div>
        </div>
        </div>

    <div class="doctors-list-D">
    <div class="container-D">
        <div class="Doctors-D">
        <div class="doctors-data-D">
    <h1>بارك فيل للأدوية</h1>
    <h3>01276500500</h3>
    <h4>ش الروضة متفرع من احمد عرابي</h4>
        </div>
        <img src={PHAR} alt=""/>
    <button onclick="document.location=''">التفاصيل</button>
    </div>
    </div>
    </div>

  <Footer/>
        </Fragment>
        )
    }
