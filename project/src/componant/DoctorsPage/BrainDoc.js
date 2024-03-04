import Header from "../AllBars/Header";
import "./AllDoc.css";
import DOC1 from "../Photos/doc1.jpg"
import DOC2 from "../Photos/nurse.jpg"
import { useState } from "react";
import Footer from "../AllBars/Footer";
import React from 'react';
import ChatbotBrain from "../ChatBOTS/ChatbotBrain";
import ScrollToTopButton from '../SomeStyles/ScrollToTopButton';



export default function AllDoc() {
//Search by name Filter
const [filter,setFilter]=useState("");
const FilterHandler = (e)=> {
  setFilter(e.target.value)
  console.log(filter);
}

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
const [cardtoggle7,setCardToggle7]= useState(false);

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
const ToggleHandler7 = ()=> {
  setCardToggle7(!cardtoggle7);
};


    return (
        <div>
    <Header />


  
    <div className="header-D">
    <h1 className="txtdoc">احصل على أفضل رعاية طبية من اشهر اطباء المخ والاعصاب</h1>
    <h2 style={{color:"#ff0505"}}>...ستجدُ طريقَكَ نحوَ الشفاءِ</h2>
    </div>
  
  
    <div className="landing-D">
        <div className="container-D">
      <div className="search-box-D">
        <input type="text"placeholder="... بحث بالأسم" className="search-input-D" value={filter} onChange={FilterHandler}/>
      </div>
    </div>
    </div>




    <div className="doctors-list-D">
    <div className="container-D">
        <div className="Doctors-D">
    <div className="doctors-data-D">
        <h1>د.أحمد عبداللطيف </h1>
        <h3>مخ واعصاب</h3>
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
            <h3>مخ واعصاب</h3>
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
    <h3>مخ واعصاب</h3>
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
          <h3>مخ واعصاب</h3>
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
  <h3>مخ واعصاب</h3>
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
            <h3>مخ واعصاب</h3>
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
      <h4>ما هي أعراض السكتة الدماغية وكيفية التعامل معها؟</h4>
      <svg width="15"height="10" viewbox="0 0 42 25">
        <path d="M3 3L21 21L39 3" stroke ="white" stroke-width="7" stroke-linecap="round" />
      </svg>
    </div>
    <div className={cardtoggle1 ? "show" : "hide"} style={mystyle}>
    
    
      <p>
      <>.يشمل الوجع الحاد في الرأس وفقدان الوعي أحيانًا. يجب الاتصال بالطوارئ في حالة الاشتباه بالسكتة الدماغية</>
      <br/>
      <br/>
      <>.الوقاية تشمل تحسين نمط الحياة، مثل التغذية الجيدة وممارسة الرياضة بانتظام</>
      </p>
    
    
    </div>
    </div>

    <div className="faq-D" onClick={ToggleHandler2}>
    <div className="question-D">
      <h4>هل هناك طرق لتحسين الذاكرة ووظائف الدماغ؟</h4>
      <svg width="15"height="10" viewbox="0 0 42 25">
        <path d="M3 3L21 21L39 3" stroke ="white" stroke-width="7" stroke-linecap="round" />
      </svg>
    </div>
    <div className={cardtoggle2 ? "show" : "hide"} style={mystyle}>
    
    
      <p>
      <>.التمارين الذهنية مثل حل الألغاز وتعلم شيء جديد يمكن أن تحسن وظائف الدماغ</>
      <br/>
      <br/>
      <>.الحفاظ على نظام غذائي صحي ومتوازن يساهم في دعم صحة الدماغ</>
      </p>
    
    
    </div>
    </div>

    <div className="faq-D" onClick={ToggleHandler3}>
    <div className="question-D">
      <h4>ما هي أعراض مرض الزهايمر وكيف يمكن التعامل معه؟</h4>
      <svg width="15"height="10" viewbox="0 0 42 25">
        <path d="M3 3L21 21L39 3" stroke ="white" stroke-width="7" stroke-linecap="round" />
      </svg>
    </div>
    <div className={cardtoggle3 ? "show" : "hide"} style={mystyle}>
    
    
      <p>
      <>.يتضمن فقدان الذاكرة والتغيرات في الشخصية. الدعم العاطفي والعلاج الطبي يلعبان دورًا هامًا</>
      <br/>
      <br/>
      <>.الحفاظ على التفاعل الاجتماعي وتشجيع الأنشطة العقلية يمكن أن يساعد في تحسين جودة حياة المصاب</>
      </p>
    
    
    </div>
    </div>

    <div className="faq-D" onClick={ToggleHandler4}>
    <div className="question-D">
      <h4>هل الصداع النصفي قابل للعلاج؟</h4>
      <svg width="15"height="10" viewbox="0 0 42 25">
        <path d="M3 3L21 21L39 3" stroke ="white" stroke-width="7" stroke-linecap="round" />
      </svg>
    </div>
    <div className={cardtoggle4 ? "show" : "hide"} style={mystyle}>
    
    
      <p>
      <>.يمكن استخدام الأدوية المضادة للصداع لتخفيف الأعراض، ولكن يجب استشارة الطبيب لتحديد العلاج المناسب</>
      <br/>
      <br/>
      <>.تجنب العوامل المحتملة المسببة للصداع النصفي، مثل التوتر وتغييرات في نمط النوم</>
      </p>
    
    
    </div>
    </div>

    <div className="faq-D" onClick={ToggleHandler5}>
    <div className="question-D">
      <h4>كيفية التعامل مع الشلل الرعاش؟</h4>
      <svg width="15"height="10" viewbox="0 0 42 25">
        <path d="M3 3L21 21L39 3" stroke ="white" stroke-width="7" stroke-linecap="round" />
      </svg>
    </div>
    <div className={cardtoggle5 ? "show" : "hide"} style={mystyle}>
    
    
      <p>
      <>.العلاج الطبي الدوري والعلاج الطبيعي يمكن أن يساعدان في تحسين الحركة والتحكم في العضلات</>
      <br/>
      <br/>
      <>.دعم الدعم النفسي والاجتماعي يلعب دورًا هامًا في تحسين نوعية الحياة للأفراد المتأثرين</>
      </p>
    
    
    </div>
    </div>

    <div className="faq-D" onClick={ToggleHandler6}>
    <div className="question-D">
      <h4>متى يجب إجراء فحوصات للدماغ والأعصاب؟</h4>
      <svg width="15"height="10" viewbox="0 0 42 25">
        <path d="M3 3L21 21L39 3" stroke ="white" stroke-width="7" stroke-linecap="round" />
      </svg>
    </div>
    <div className={cardtoggle6 ? "show" : "hide"} style={mystyle}>
    
    
      <p>
      <>.تشمل الأعراض المثلثة الحادة، مثل الصداع الشديد والغثيان والضعف، دلالات على الحاجة إلى فحوصات دقيقة مثل الرنين المغناطيسي</>
      </p>
    
    
    </div>
    </div>

    <div className="faq-D" onClick={ToggleHandler7}>
    <div className="question-D">
      <h4>ما هي أحدث التقنيات في تشخيص أمراض الدماغ؟</h4>
      <svg width="15"height="10" viewbox="0 0 42 25">
        <path d="M3 3L21 21L39 3" stroke ="white" stroke-width="7" stroke-linecap="round" />
      </svg>
    </div>
    <div className={cardtoggle7 ? "show" : "hide"} style={mystyle}>
    
    
      <p>
      <>.تقنيات مثل الطباعة ثلاثية الأبعاد والتصوير الوظيفي للدماغ توفر رؤية أفضل لهيكل الدماغ ووظائفه</>
      </p>
    
    
    </div>
    </div>
  </section>
    </div>
  </div>
  <ChatbotBrain/>
  <ScrollToTopButton/>
  <Footer/>
        </div>
        )
    }
