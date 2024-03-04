import Header from "../AllBars/Header";
import "./AllDoc.css";
import DOC1 from "../Photos/doc1.jpg"
import DOC2 from "../Photos/nurse.jpg"
import { useState } from "react";
import Footer from "../AllBars/Footer";
import ChatbotBute from "../ChatBOTS/ChatbotBute";
import ScrollToTopButton from '../SomeStyles/ScrollToTopButton';




export default function AllDoc() {

const mystyle ={
   overflow: 'hidden',
    transition: 'max-height 0.6s ease',
     WebkitTransition: 'max-height 0.6s ease',
      MozTransition: 'max-height 0.6s ease',
       MsTransition: 'max-height 0.6s ease',
        OTransition: 'max-height 0.6s ease',
        maxHeight: "100",
    animation: 'fade 0.6s ease-in-out',
    WebkitAnimation: 'fade 0.6s ease-in-out',
}

const [cardtoggle1,setCardToggle1]= useState(false);
const [cardtoggle2,setCardToggle2]= useState(false);
const [cardtoggle3,setCardToggle3]= useState(false);
const [cardtoggle4,setCardToggle4]= useState(false);
const [cardtoggle5,setCardToggle5]= useState(false);
const [cardtoggle6,setCardToggle6]= useState(false);

const ToggleHandler1 = ()=> {
  setCardToggle1(!cardtoggle1);
};
const ToggleHandler2 = ()=> {
  setCardToggle2(!cardtoggle2);
};
const ToggleHandler3 = ()=> {
  setCardToggle3(!cardtoggle3);
};
const ToggleHandler4 = ()=> {
  setCardToggle4(!cardtoggle4);
};
const ToggleHandler5 = ()=> {
  setCardToggle5(!cardtoggle5);
};
const ToggleHandler6 = ()=> {
  setCardToggle6(!cardtoggle6);
};


    return (
        <div>
    <Header />



    <div className="header-D">
    </div>


    <div className="landing-D">
        <div className="container-D">
        <h1 className="txtdoc">احجز مع افضل أطباء في بني سويف</h1>
      <div className="search-box-D">
        <input type="text"placeholder="... بحث بالأسم" className="search-input-D"onkeyup="search()"/>
      </div>
    </div>
    </div>




    <div className="doctors-list-D">
    <div className="container-D">
        <div className="Doctors-D">
    <div className="doctors-data-D">
        <h1>د.أحمد عبداللطيف </h1>
        <h3>تجميل</h3>
        <h4>ش مقبل فوق مكتبة تبارك</h4>
    </div>
        <img src={DOC1} alt=""/>
        <button onclick="document.location=''">التفاصيل</button>
    </div>
    </div>
    </div>

    <div className="doctors-list-D">
        <div className="container-D">
            <div className="Doctors-D">
        <div className="doctors-data-D">
            <h1>د.امنية احمد ابراهيم </h1>
            <h3>تجميل</h3>
            <h4>مستشفى الدعوة والحياة جاما عند الزراعيين</h4>
        </div>
            <img src={DOC2} alt=""/>
            <button onclick="document.location=''">التفاصيل</button>
        </div>
        </div>
        </div>

    <div className="doctors-list-D">
    <div className="container-D">
        <div className="Doctors-D">
        <div className="doctors-data-D">
    <h1>د.ياسر رمضان مجاهد</h1>
    <h3>تجميل</h3>
    <h4>ش المدارس برج التوحيد الدور السادس -- القاهرة 15 نادى الصيد الدقي الجيزة</h4>
        </div>
        <img src={DOC1} alt=""/>
    <button onclick="document.location=''">التفاصيل</button>
    </div>
    </div>
    </div>

    <div className="doctors-list-D">
      <div className="container-D">
          <div className="Doctors-D">
      <div className="doctors-data-D">
          <h1>د.هبة احمد كمال</h1>
          <h3>تجميل</h3>
          <h4>ميدان حارث برج المرمر بجوار الحسين السجاد</h4>
      </div>
          <img src={DOC2} alt=""/>
          <button onclick="document.location=''">التفاصيل</button>
      </div>
      </div>
      </div>

  <div className="doctors-list-D">
  <div className="container-D">
      <div className="Doctors-D">
      <div className="doctors-data-D">
  <h1>د.ياسين رمضان مجاهد</h1>
  <h3>تجميل</h3>
  <h4>مستشفى اللؤلؤة شرق النيل الحي الأول</h4>
      </div>
      <img src={DOC1} alt=""/>
  <button onclick="document.location=''">التفاصيل</button>
  </div>
  </div>
  </div>

    <div className="doctors-list-D">
        <div className="container-D">
            <div className="Doctors-D">
        <div className="doctors-data-D">
            <h1>د.ربيع محمد عبدالله</h1>
            <h3>تجميل</h3>
            <h4>شارع رجائي امام صيدلية العياطي الدور الثاني - مركز روح الحياة</h4>
        </div>
            <img src={DOC1} alt=""/>
            <button onclick="document.location=''">التفاصيل</button>
        </div>
        </div>
        </div>


    <div className="common_questions-D">
      <div className="container-D">
  <section>
    <h2 className="title-D">الاسئلة الشائعة</h2>

    <div className="faq-D" onClick={ToggleHandler1}>
    <div className="question-D">
      <h4>ما هي العمليات التجميلية الشائعة وكيف يمكن تحديد المناسبة لي؟</h4>
      <svg width="15"height="10" viewbox="0 0 42 25">
        <path d="M3 3L21 21L39 3" stroke ="white" stroke-width="7" stroke-linecap="round" />
      </svg>
    </div>
    <div className={cardtoggle1 ? "show" : "hide"} style={mystyle}>
      <p>

      <>.يُنصح بالتحدث مع طبيب التجميل لتقييم الاحتياجات الشخصية وتحديد الإجراءات المناسبة، مثل تجميل الوجه، وشد الجلد، وزراعة الشعر
      </>

      </p>
    </div>
    </div>


    <div className="faq-D" onClick={ToggleHandler2}>
<div className="question-D">
  <h4> هل هناك آثار جانبية لإجراءات التجميل؟</h4>
  <svg width="15"height="10" viewbox="0 0 42 25">
    <path d="M3 3L21 21L39 3" stroke ="white" stroke-width="7" stroke-linecap="round" />
  </svg>
</div>
<div className={cardtoggle2 ? "show" : "hide"} style={mystyle}>
  <p>

  <>.يمكن أن تتفاوت الآثار الجانبية باختلاف الإجراء، ويفضل الحديث مع الطبيب حول المخاطر المحتملة والتوقعات  </>

  </p>
</div>
</div>


<div className="faq-D" onClick={ToggleHandler3}>
<div className="question-D">
  <h4>كيف يمكن تحسين مظهر البشرة بدون جراحة؟</h4>
  <svg width="15"height="10" viewbox="0 0 42 25">
    <path d="M3 3L21 21L39 3" stroke ="white" stroke-width="7" stroke-linecap="round" />
  </svg>
</div>
<div className={cardtoggle3 ? "show" : "hide"} style={mystyle}>
  <p>

  <>.يمكن استخدام إجراءات غير جراحية مثل حقن التجميل وعلاجات الليزر لتحسين مظهر البشرة
  </>

  </p>
</div>
</div>


<div className="faq-D" onClick={ToggleHandler4}>
<div className="question-D">
  <h4>هل هناك نصائح للعناية بالبشرة بعد الإجراءات التجميلية؟</h4>
  <svg width="15"height="10" viewbox="0 0 42 25">
    <path d="M3 3L21 21L39 3" stroke ="white" stroke-width="7" stroke-linecap="round" />
  </svg>
</div>
<div className={cardtoggle4 ? "show" : "hide"} style={mystyle}>
  <p>

  <>.يفضل اتباع إرشادات الطبيب بعد الإجراء للحفاظ على النتائج وتجنب التعرض المفرط للشمس واستخدام منتجات العناية الموصى بها  </>

  </p>
</div>
</div>


<div className="faq-D" onClick={ToggleHandler5}>
<div className="question-D">
  <h4>هل يمكن تحقيق نتائج دائمة من إجراءات التجميل غير الجراحية؟</h4>
  <svg width="15"height="10" viewbox="0 0 42 25">
    <path d="M3 3L21 21L39 3" stroke ="white" stroke-width="7" stroke-linecap="round" />
  </svg>
</div>
<div className={cardtoggle5 ? "show" : "hide"} style={mystyle}>
  <p>

  <>.تعتمد مدى دوام النتائج على نوع الإجراء، وفي الغالب تكون النتائج طويلة الأمد ولكن قد تتطلب جلسات صيانة</>

  </p>
</div>
</div>


<div className="faq-D" onClick={ToggleHandler6}>
<div className="question-D">
  <h4>ما هي العوامل التي يجب أخذها في اعتبار لتحديد مناسبة إجراء التجميل؟</h4>
  <svg width="15"height="10" viewbox="0 0 42 25">
    <path d="M3 3L21 21L39 3" stroke ="white" stroke-width="7" stroke-linecap="round" />
  </svg>
</div>
<div className={cardtoggle6 ? "show" : "hide"} style={mystyle}>
  <p>
  <>.تشمل العوامل الفيزيولوجية والصحية والتوقعات الشخصية، ويُفضل استشارة الطبيب لتحديد الإجراء الأمثل</>
<>في حالة اضطرابات مستمرة، يجب استشارة الطبيب لتقييم الحالة ووصف العلاج المناسب.
</>
  </p>
</div>
</div>
  </section>
    </div>
  </div>
  <ChatbotBute/>
  <ScrollToTopButton/>
  <Footer/>
        </div>
        )
    }
