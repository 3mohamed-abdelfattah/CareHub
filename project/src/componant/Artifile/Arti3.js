import React, { Fragment } from "react";
import "../HomeComponents/ARTI.css";
import SOLC from "../Photos/اعراض-نقص-المغنيسيوم.jpg"
import SOHP from "../Photos/اعراض-عرق-النسا.jpg"
import SOBC from "../Photos/اعراض-التسمم.jpg"
import SOGP from "../Photos/اعراض-الحمل.jpg"
import SOIW from "../Photos/اعراض-التهاب-البول.jpg"
import SOLP from "../Photos/اعراض-نقص-فيتامين-د.jpg"
import SONG from "../Photos/اعراض-الحرارة-الداخلية.jpg"
import ABGS from "../Photos/علامات-انفجار-البويضة-ونزولها.jpg"
import SOPS from "../Photos/أعراض-ضعف-الحيوانات-المنوية-عند-الرجل.jpg"
import DWA from "../Photos/اعراض-ضعف-الانتصاب.jpg"

import Header from "../AllBars/Header";
import Footer from "../AllBars/Footer";
import ScrollToTopButton from "../SomeStyles/ScrollToTopButton";
import { Link } from "react-router-dom"


export default function Arti3() {
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
        {/* أعراض-مرض-الإيدز. */}
        <img src={SOLC} alt="" />
        <div className="ArticlesList-pages">
          <h2 className="Articles-A">
          <a href>اعراض نقص الماغنيسيوم في الجسم</a>
          </h2>
          <p className="content-A">
            المغنيسيوم أحد أهم العناصر الغذائية والمعادن في الجسم، فله العديد
            من الفوائد التي تعتمد عليها وظائف الجسم المختلفة خاصة عملية الأيض
            أو التمثيل الغذائي، وإذا حدث نقص في هذا العنصر يترتب عليه عديد من
            ال...
          </p>
          <h4 style={{color:'#ff0505'}}>قراءة المزيد</h4>
        </div>
      </div>
      <div className="Section-ArticlesList">
        {/* اعراض-عرق-النسا. */}
        <img src={SOHP} alt=""/>
        <div className="ArticlesList-pages">
          <h2 className="Articles-A">
            <a href>اعراض عرق النسا: وكيف تؤثر عليك؟</a>
          </h2>
          <p className="content-A1">
            عرق النسا أحد الحالات الصحية الشائعة، وتكون ناتجة عن مشكلة ما في
            العصب الوركي في جسم الإنسان، تتسبب هذه الحالة ألم شديد وقد يكون
            غير محتمل وقد يؤثر على أنشطة المصاب اليومية، فتعرفوا معنا على
            اعراض عرق...
          </p>
          <h4 style={{color:'#ff0505'}}>قراءة المزيد</h4>
        </div>
      </div>
      <div className="Section-ArticlesList">
        {/* اعراض -التسمم. */}
        <img src={SOBC} alt="" />
        <div className="ArticlesList-pages">
          <h2 className="Articles-A">
            <a href>اعراض التسمم وأنواعه </a>
          </h2>
          <p className="content-A">
            التسمم Poisoning من أشهر المشاكل الصحية التي قد تصيب الكبار
            والصغار، وهي حالة مهددة للحياة إذا لم يتم التعامل معها بحذر وبشكل
            صحيح، وتختلف اعراض التسمم وفقاً لنوع التسمم، سواء كانت تسمم غذائي
            أو دوائي...
          </p>
          <h4 style={{color:'#ff0505'}}>قراءة المزيد</h4>
        </div>
      </div>
      <div className="Section-ArticlesList">
        {/* اعراض-الحمل. */}
        <img src={SOGP} alt="" />
        <div className="ArticlesList-pages">
          <h2 className="Articles-A">
            <a href> اعراض الحمل بالتفصيل</a>
          </h2>
          <p className="content-A">
            تتساءل الكثير من النساء عن اعراض الحمل، لكي تكون مستعدة وعلى دراية
            ببداية فترة حملها، ولهذا السبب قررنا أن نوضح لكم كافة اعراض الحمل،
            ومتى تظهر وتفاصيل كثيرة تخص كل امرأة، فتابعوا معنا. متى تظهر
            اعراض...
          </p>
          <h4 style={{color:'#ff0505'}}>قراءة المزيد</h4>
        </div>
      </div>
      <div className="Section-ArticlesList">
        <img src={SOIW} alt="" />
        <div className="ArticlesList-pages">
          <h2 className="Articles-A">
            <a href>اشهر اعراض التهاب البول وأسبابه</a>
          </h2>
          <p className="content-A">
            التهاب البول أو كما يعرف بالتهاب المسالك البولية أو التهاب مجرى
            البول، هي حالة منتشرة تحدث للكبير والصغير، وهي نوع شهير من أنواع
            الالتهابات البكتيرية التي تصيب الجسم، فتعالوا نتعرف معاً على اشهر
            اعراض...
          </p>
          <h4 style={{color:'#ff0505'}}>قراءة المزيد</h4>
        </div>
      </div>
      <div className="Section-ArticlesList">
        {/* اعراض-نقص-فيتامين-د. */}
        <img src={SOLP} alt="" />
        <div className="ArticlesList-pages">
          <h2 className="Articles-A">
            <a href>اعراض نقص فيتامين د: علامات يجب أن تنتبه لها</a>
          </h2>
          <p className="content-A">
            نقص فيتامين د من أكثر المشاكل الصحية انتشاراً بين ملايين الأشخاص
            حول العالم، لكن على الرغم من ذلك، فإن اعرض نقص فيتامين د تكون في
            كثير من الأحيان خفية وغير ظاهرة بوضوح، وقد تتشابه مع أعراض ومشاكل
            وحال...
          </p>
          <h4 style={{color:'#ff0505'}}>قراءة المزيد</h4>
        </div>
      </div>
      <div className="Section-ArticlesList">
        {/* اعراض-الحرارة-الداخلية. */}
        <img src={SONG} alt="" />
        <div className="ArticlesList-pages">
          <h2 className="Articles-A">
            <a href> اعراض الحرارة الداخلية وأسبابها</a>
          </h2>
          <p className="content-A">
            الحرارة الداخلية أو السخونية الداخلية هي واحدة من الحالات الشهيرة،
            يتعرض لهذا الحالة الأطفال والكبار، وهي من الحالات التي يجب التعامل
            معها بحذر وبشكل صحيح، لتجنب أي مضاعفات، فتعالوا نتعرف على اعراض
            ال...
          </p>
          <h4 style={{color:'#ff0505'}}>قراءة المزيد</h4>
        </div>
      </div>
      <div className="Section-ArticlesList">
        <img src={ABGS} alt="" />
        <div className="ArticlesList-pages">
          <h2 className="Articles-A">
            <a href>علامات انفجار البويضة ونزولها ومعلومات هامة</a>
          </h2>
          <p className="content-A">
            انفجار البويضة ونزولها بالتأكيد يصاحبه بعض الأعراض، حيث أن المبايض
            تطلق بويضة أو أكثر كل شهر، وإذا لم يحدث تخصيب لهذه البويضة أثناء
            فترة التبويض أو الإباضة، فتنزل هذه البويضة ويتخلص منها الجسم على
            هيئ...
          </p>
          <h4 style={{color:'#ff0505'}}>قراءة المزيد</h4>
        </div>
      </div>
      <div className="Section-ArticlesList">
        <img src={SOPS} alt="" />
        <div className="ArticlesList-pages">
          <h2 className="Articles-A">
            <a href>أعراض ضعف الحيوانات المنوية عند الرجل</a>
          </h2>
          <p className="content-A">
            بالتأكيد أي مشكلة تخص الخصوبة والحيوانات المنوية لدى الرجال، هي
            مشكلة مقلقة ومخفية، نظراً لما يترتب عليها من مضاعفات ومخاطر قد
            تهدد الحياة الجنسية والتناسلية للرجل، ولهذا ففي المقال التالي
            سنتحدث معكم...
          </p>
          <h4 style={{color:'#ff0505'}}>قراءة المزيد</h4>
        </div>
      </div>
      <div className="Section-ArticlesList">
        {/* اعراض-ضعف-الانتصاب. */}
        <img src={DWA} alt="" />
        <div className="ArticlesList-pages">
          <h2 className="Articles-A">
            <a href>اعراض ضعف الانتصاب عند الرجال</a>
          </h2>
          <p className="content-A">
            بالتأكيد سمعت جملة ضعف الانتصاب من قبل، ولكن الكثير من الأشخاص قد
            لا يعرفون تفاصيل كثيرة عنها، وبالأخص الرجال لأنها مشكلة خاصة بهم،
            ولهذا في المقال التالي سنوضح لك أهم وأبرز اعراض ضعف الانتصاب عند
            الر...
          </p>
          <h4 style={{color:'#ff0505'}}>قراءة المزيد</h4>
          </div>
      </div>
    </div>
    <div className="pageNumber">
    <div className="numberOfPages">
      <nav className="ArticlesPages">
        <ul className="pagesList">
          <li className="pageA"></li>
          <Link to ="/artic">
          <span className="page-link">1</span>
          </Link>
          <li className="pageA">
          <Link to="/arti2">
          <span className="page-link">2</span>
          </Link>
          </li>
          <li className="pageA">
          <li className="page-item a">
          <Link to="/arti3">
          <span className="page-link">3</span>
          </Link>
          </li>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</div>
<ScrollToTopButton/>
<Footer/>
</Fragment>
  )
}
