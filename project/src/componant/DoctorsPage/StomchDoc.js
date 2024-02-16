import Header from "../Header";
import "./AllDoc.css";
import DOC1 from "../Photos/doc1.jpg"
import DOC2 from "../Photos/nurse.jpg"
import { useState } from "react";
import Footer from "../Footer";




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


  
    <div class="header-D">
    </div>
  
  
    <div class="landing-D">
        <div class="container-D">
        <h1 className="txtdoc">احجز مع افضل أطباء في بني سويف</h1>
      <div class="search-box-D">
        <input type="text"placeholder="... بحث بالأسم" class="search-input-D"onkeyup="search()"/>
      </div>
    </div>
    </div>

  

    
    <div class="doctors-list-D">
    <div class="container-D">
        <div class="Doctors-D">
    <div class="doctors-data-D">
        <h1>د.أحمد عبداللطيف </h1>
        <h3>باطنه</h3>
        <h4>ش مقبل فوق مكتبة تبارك</h4>
    </div>
        <img src={DOC1} alt=""/>
        <button onclick="document.location=''">التفاصيل</button>
    </div>
    </div>
    </div>

    <div class="doctors-list-D">
        <div class="container-D">
            <div class="Doctors-D">
        <div class="doctors-data-D">
            <h1>د.امنية احمد ابراهيم </h1>
            <h3>باطنه</h3>
            <h4>مستشفى الدعوة والحياة جاما عند الزراعيين</h4>
        </div>
            <img src={DOC2} alt=""/>
            <button onclick="document.location=''">التفاصيل</button>
        </div>
        </div>
        </div>

    <div class="doctors-list-D">
    <div class="container-D">
        <div class="Doctors-D">
        <div class="doctors-data-D">
    <h1>د.ياسر رمضان مجاهد</h1>
    <h3>باطنه</h3>
    <h4>ش المدارس برج التوحيد الدور السادس -- القاهرة 15 نادى الصيد الدقي الجيزة</h4>
        </div>
        <img src={DOC1} alt=""/>
    <button onclick="document.location=''">التفاصيل</button>
    </div>
    </div>
    </div>
    
    <div class="doctors-list-D">
      <div class="container-D">
          <div class="Doctors-D">
      <div class="doctors-data-D">
          <h1>د.هبة احمد كمال</h1>
          <h3>باطنه</h3>
          <h4>ميدان حارث برج المرمر بجوار الحسين السجاد</h4>
      </div>
          <img src={DOC2} alt=""/>
          <button onclick="document.location=''">التفاصيل</button>
      </div>
      </div>
      </div>

  <div class="doctors-list-D">
  <div class="container-D">
      <div class="Doctors-D">
      <div class="doctors-data-D">
  <h1>د.ياسين رمضان مجاهد</h1>
  <h3>باطنه</h3>
  <h4>مستشفى اللؤلؤة شرق النيل الحي الأول</h4>
      </div>
      <img src={DOC1} alt=""/>
  <button onclick="document.location=''">التفاصيل</button>
  </div>
  </div>
  </div>
  
    <div class="doctors-list-D">
        <div class="container-D">
            <div class="Doctors-D">
        <div class="doctors-data-D">
            <h1>د.ربيع محمد عبدالله</h1>
            <h3>باطنه</h3>
            <h4>شارع رجائي امام صيدلية العياطي الدور الثاني - مركز روح الحياة</h4>
        </div>
            <img src={DOC1} alt=""/>
            <button onclick="document.location=''">التفاصيل</button>
        </div>
        </div>
        </div>
    

    <div class="common_questions-D">
      <div class="container-D">
  <section>
    <h2 class="title-D">الاسئلة الشائعة</h2>

    <div class="faq-D" onClick={ToggleHandler1}>
    <div class="question-D">
      <h4>كيف يمكن تحسين النظام الغذائي لتعزيز الصحة العامة؟</h4>
      <svg width="15"height="10" viewbox="0 0 42 25">
        <path d="M3 3L21 21L39 3" stroke ="white" stroke-width="7" stroke-linecap="round" />
      </svg>
    </div>
    <div className={cardtoggle1 ? "show" : "hide"} style={mystyle}>
    
      <p>
      <>.يفضل تناول وجبات متوازنة تحتوي على الفواكه والخضروات والبروتينات</>
      <br/>
      <br/>
      <>.يُنصح بتقليل تناول الدهون المشبعة والملح، وزيادة شرب الماء</>
      </p>
    
    </div>
    </div>
    
    <div class="faq-D" onClick={ToggleHandler2}>
    <div class="question-D">
      <h4>ما هي أفضل طرق للتحكم في ضغط الدم؟</h4>
      <svg width="15"height="10" viewbox="0 0 42 25">
        <path d="M3 3L21 21L39 3" stroke ="white" stroke-width="7" stroke-linecap="round" />
      </svg>
    </div>
    <div className={cardtoggle2 ? "show" : "hide"} style={mystyle}>
    
      <p>
      <>.يمكن تحقيق ذلك من خلال الحفاظ على وزن صحي، وممارسة الرياضة بانتظام، وتقليل استهلاك الصوديوم</>
      <br/>
      <br/>
      <>.الاستمرار في تناول الأدوية الموصوفة من قبل الطبيب والمتابعة الدورية للضغط</>
      </p>
    
    </div>
    </div>
    
    
    <div class="faq-D" onClick={ToggleHandler3}>
    <div class="question-D">
      <h4>كيف يمكن التعامل مع مرض السكري بشكل فعال؟</h4>
      <svg width="15"height="10" viewbox="0 0 42 25">
        <path d="M3 3L21 21L39 3" stroke ="white" stroke-width="7" stroke-linecap="round" />
      </svg>
    </div>
    <div className={cardtoggle3 ? "show" : "hide"} style={mystyle}>
    
      <p>
      <>.يُنصح بمراقبة مستويات السكر بانتظام واتباع نظام غذائي صحي</>
      <br/>
      <br/>
      <>.تناول الأدوية كما وصفها الطبيب وممارسة الرياضة بشكل منتظم</>
      </p>
    
    </div>
    </div>
    
    
    <div class="faq-D" onClick={ToggleHandler4}>
    <div class="question-D">
      <h4>ما هي الإجراءات الوقائية لأمراض القلب والشرايين؟</h4>
      <svg width="15"height="10" viewbox="0 0 42 25">
        <path d="M3 3L21 21L39 3" stroke ="white" stroke-width="7" stroke-linecap="round" />
      </svg>
    </div>
    <div className={cardtoggle4 ? "show" : "hide"} style={mystyle}>
    
      <p>
      <>.الامتناع عن التدخين والحفاظ على وزن صحي</>
      <br/>
      <br/>
      <>.ممارسة الرياضة بانتظام وتناول طعام غني بالألياف والأوميجا-3</>
      </p>
    
    </div>
    </div>
    
    
    <div class="faq-D" onClick={ToggleHandler5}>
    <div class="question-D">
      <h4>كيف يمكن تحسين صحة الجهاز الهضمي؟</h4>
      <svg width="15"height="10" viewbox="0 0 42 25">
        <path d="M3 3L21 21L39 3" stroke ="white" stroke-width="7" stroke-linecap="round" />
      </svg>
    </div>
    <div className={cardtoggle5 ? "show" : "hide"} style={mystyle}>
    
      <p>
      <>.زيادة تناول الألياف من الخضروات والفواكه والحبوب الكاملة</>
      <br/>
      <br/>
      <>.الشرب الكافي من الماء وتجنب الأطعمة الدسمة والحارة قبل النوم</>
      </p>
    
    </div>
    </div>
    
    
    <div class="faq-D" onClick={ToggleHandler6}>
    <div class="question-D">
      <h4>ما هي أعراض التهاب المعدة وكيف يمكن علاجها؟</h4>
      <svg width="15"height="10" viewbox="0 0 42 25">
        <path d="M3 3L21 21L39 3" stroke ="white" stroke-width="7" stroke-linecap="round" />
      </svg>
    </div>
    <div className={cardtoggle6 ? "show" : "hide"} style={mystyle}>
    
      <p>
      <>.الأعراض قد تشمل الغثيان والألم في البطن، يُفضل استشارة الطبيب لتقييم الحالة</>
      <br/>
      <br/>
      <>.قد يُوصف العلاج بمضادات الحموضة أو الأدوية المضادة للالتهابات حسب الحاجة</>
      </p>
    
    </div>
    </div>
    
  </section>
    </div>
  </div>
  <Footer/>

        </div>
        )
    }
