import React, { Fragment } from "react";
import "./ARTI.css";
import SOLC from "../Photos/SOLC.jpg"
import SOHP from "../Photos/SOHP.jpg"
import SOBC from "../Photos/SOBC.jpg"
import SOGP from "../Photos/SOGB.jpg"
import SOIW from "../Photos/SOIW.jpg"
import SOLP from "../Photos/SOLP.jpg"
import SONG from "../Photos/SONG.jpg"
import ABGS from "../Photos/ABGS.jpg"
import SOPS from "../Photos/SOPS.jpg"
import Header from "../AllBars/Header";
import Footer from "../AllBars/Footer";
import ScrollToTopButton from "../SomeStyles/ScrollToTopButton";
import { Link } from "react-router-dom"


const ArticlesList = () => {
  return (
    <Fragment>
    <Header/>
    <div className="ArticlesList">
      <div className="Do-home-text">
        <h1 className="title-pages">المقالات الطبية، رحلة المعرفة نحو عالم الصحة</h1>
        <h2 style={{color:'#ff0505'}}>...تُقدم لك أحدث المعلومات الصحية</h2>
      </div>
      <div className="section-wapp">
        <div className="Section-ArticlesList">
          <img src={SOLC} alt=""></img>
          <div className="ArticlesList-pages">
          <h2 className="Articles-A">
          اعراض جلطة الساق الأولية والخطيرة انتبه لها 
          </h2>
          <p className="content-A">
          بالتأكيد كلنا نسمع عن الجلطات ومدى انتشار الإصابة بها بين الشباب
          والكبار، ومن أشهر أنواع الجلطات انتشاراً جلطة الساق، حيث يحدث تجلط
          بدون أسباب أو إصابة في الساقين، ولأنها حالة منتشرة فتعرفوا معنا
          على ...
          </p>
          <Link to ="/legwarn">
          <h4 style={{color:'#ff0505'}}>قراءة المزيد</h4>
          </Link>
          </div>
        </div>
        <div className="Section-ArticlesList">
        <img src={SOHP} alt=""></img>
        <div className="ArticlesList-pages">
            <h2 className="Articles-A">
              اعراض الضغط المنخفض الشائعة وأنواعه
            </h2>
            <p className="content-A">
              انخفاض ضغط الدم من أشهر الحالات الطبية التي يتعرض لها الكثير من
              الأشخاص في مختلف مراحل العمر، وهذه الحالة تؤدي للشعور بالدوخة
              والدوار وعدم الاتزان، لكن ما هي باقي اعراض الضغط المنخفض؟ وكيف
              يمكن تشخيصه...
            </p>
            <Link to ="/lowar">
            <h4 style={{color:'#ff0505'}}>قراءة المزيد</h4>
            </Link>
            </div>
        </div>
        <div className="Section-ArticlesList">
        <img src={SOPS} alt=""></img>
          <div className="ArticlesList-pages">
            <h2 className="Articles-A">
              اعراض السكري الكاذب والفرق بينه وبين مرض السكري
            </h2>
            <p className="content-A">
              مرض السكري من أكثر الأمراض المزمنة انتشاراً، وهي حالة تتطلب معرفة
              كل المعلومات حول المرض للتحكم به وإدارته، لكن ماذا عن السكري
              الكاذب؟ هذه الحالة قد تكون فخاً لكثير من الأشخاص، ولهذا تعرف معنا
              على اع...
            </p>
            <Link to ="/sugerl">
            <h4 style={{color:'#ff0505'}}>قراءة المزيد</h4>
            </Link>
            </div>
        </div>
        <div className="Section-ArticlesList">
        <img src={SONG} alt=""></img>
          <div className="ArticlesList-pages">
            <h2 className="Articles-A">
              ما هي اعراض غازات البطن؟ ومتى تذهب للطبيب؟
            </h2>
            <p className="content-A">
              يشكو العديد من الأشخاص من مشكلة غازات البطن، وقد تتشابه اعراض
              غازات البطن مع بعض أعراض اضطرابات الجهاز الهضمي، وفي المقال التالي
              سنتعرف أكثر على ما هي غازات البطن؟ وما هي أعراضها؟ ما هي غازات
              البطن؟ م...
            </p>
            <Link to ="/stomchar">
            <h4 style={{color:'#ff0505'}}>قراءة المزيد</h4>
            </Link>
            </div>
        </div>
        <div className="Section-ArticlesList">
        <img src={SOBC} alt=""></img>
          <div className="ArticlesList-pages">
            <h2 className="Articles-A">
              أعراض سرطان الثدي الشائعة بين النساء
            </h2>
            <p className="content-A">
              سرطان الثدي أحد أكثر أنواع السرطان انتشاراً، وهو من الحالات
              المخيفة والمقلقة والخطيرة، يتعرض له عدد كبير جداً من النساء في
              مختلف مراحل أعمارهم، والتوعية به وبأعراضه هامة جداً للاكتشاف
              المبكر للمرض وعل...
            </p>
            <Link to ="/cancer">
            <h4 style={{color:'#ff0505'}}>قراءة المزيد</h4>
            </Link>
            </div>
        </div>
        <div className="Section-ArticlesList">
        <img src={SOLP} alt=""></img>
          <div className="ArticlesList-pages">
            <h2 className="Articles-A">
            اعراض ارتفاع الضغط الأولية والخطيرة
            </h2>
            <p className="content-A">
              ارتفاع ضغط الدم أحد الحالات الشائعة والشهيرة، وتقريباً تجد على
              الأقل شخص واحد في العائلة مصاب بهذا المرض، ولأنه مرض مقلق فالكثير
              من الأشخاص تتساءل عن اعراض ارتفاع الضغط والعلامات التي تشير على
              الإصابة...
            </p>
            <Link to ="/highd">
            <h4 style={{color:'#ff0505'}}>قراءة المزيد</h4>
            </Link>
            </div>
        </div>
        <div className="Section-ArticlesList">
        <img src={SOIW} alt=""></img>
          <div className="ArticlesList-pages">
            <h2 className="Articles-A">
               اعراض عسر الهضم المختلفة وكيف تكتشفها؟ 
            </h2>
            <p className="content-A">
              يعتبر عسر الهضم من أشهر المشاكل الهضمية التي تصيب عدد كبير من
              الأشخاص، إن لم يكن جميعهم في مرحلة ما من حياتهم، وهي مشكلة صعبة
              تتسبب في أعراض مزعجة للغاية، فما هي اعراض عسر الهضم؟ وكيف يمكن
              اكتشاف الإص...
            </p>
            <Link to ="/stomchrsom">
            <h4 style={{color:'#ff0505'}}>قراءة المزيد</h4>
            </Link>
            </div>
        </div>
        <div className="Section-ArticlesList">
        <img src={SONG} alt=""></img>
          <div className="ArticlesList-pages">
            <h2 className="Articles-A">
              تعرف على اعراض ديدان الامعاء
            </h2>
            <p className="content-A">
              تعد ديدان الامعاء، والمعروفة أيضًا باسم الديدان الطفيلية، واحدة من
              الأنواع الرئيسية للطفيليات المعوية لدى البشر، والتي توجد بشكل شائع
              في المناطق شبه الاستوائية والاستوائية، وتتسبب معظمها مرضًا خفيفًا
              ...
            </p>
            <Link to ="/snstake">
            <h4 style={{color:'#ff0505'}}>قراءة المزيد</h4>
            </Link>
            </div>
        </div>
        <div className="Section-ArticlesList">
        <img src={ABGS} alt=""></img>
          <div className="ArticlesList-pages">
            <h2 className="Articles-A">
              هل تمثل اعراض المعدة العصبية خطرًا على صحتك؟ 
            </h2>
            <p className="content-A">
              بالرغم من أن وجود المعدة العصبية قد يكون أمرًا شائعًا لدى بعض
              الأشخاص، فهي ليست حالة رسمية أو قابلة للتشخيص، وذلك وفقًا للأطباء،
              فتعرف معنا من خلال المقال التالي على اعراض المعدة العصبية، وهل
              تمثل خطر...
            </p>
            <Link to ="/stomchasb">
            <h4 style={{color:'#ff0505'}}>قراءة المزيد</h4>
            </Link>
            </div>
        </div>
        <div className="Section-ArticlesList">
        <img src={SOGP} alt=""></img>
          <div className="ArticlesList-pages">
            <h2 className="Articles-A">
              ما هي اعراض جرثومة المعدة؟
            </h2>
            <p className="content-A">
              جرثومة المعدة هي بكتيريا تصيب حوالي ثلثي سكان العالم، وغالبًا ما
              تنتشر بنسبة أكبر بين الأطفال، وبالرغم من ذلك فحوالي 20٪ فقط من
              المصابين تظهر عليهم الأعراض، وتاليًا سنتعرف على أهم اعراض جرثومة
              المعدة....
            </p>
            <Link to ="/stomchgrso">
            <h4 style={{color:'#ff0505'}}>قراءة المزيد</h4>
            </Link>
            </div>
        </div>
      </div>
      <div className="pageNumber">
        <div className="numberOfPages">
          <nav className="ArticlesPages">
            <ul className="pagesList">
              <li className="pageA"></li>
              <li className="page-item a">
              <Link to ="/artic">
                <span className="page-link">1</span>
                </Link>
              </li>
              <li className="pageA">
              <Link to="/arti2">
              <span className="page-link">2</span>
              </Link>
              </li>
              <li className="pageA">
              <Link to="/arti3">
              <span className="page-link">3</span>
              </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <ScrollToTopButton/>
    <Footer/>
    </Fragment>
  );
};
export default ArticlesList;
