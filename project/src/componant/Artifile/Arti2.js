import React, { Fragment } from "react";
import "../HomeComponents/ARTI.css";
import SOLC from "../Photos/أعراض-مرض-الإيدز.jpg"
import SOHP from "../Photos/اعراض-حصى-المرارة.jpg"
import SOBC from "../Photos/اعراض-الفتق-السري.jpg"
import SOGP from "../Photos/اعراض-الفتق.jpg"
import SOIW from "../Photos/اعراض-جفاف-العين.jpg"
import SOLP from "../Photos/اعراض-الروماتويد.jpg"
import SONG from "../Photos/اعراض-الجلطة-الدماغية.jpg"
import ABGS from "../Photos/اعراض-تليف-الكبد.jpg"
import SOPS from "../Photos/اعراض-سرطان-البروستاتا.jpg"
import DWA from "../Photos/اعراض-دوالي-الخصية.jpg"

import Header from "../AllBars/Header";
import Footer from "../AllBars/Footer";
import ScrollToTopButton from "../SomeStyles/ScrollToTopButton";
import { Link } from "react-router-dom"


export default function Arti2() {
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
            <a href>اكتشف أعراض مرض الإيدز الأولية والخطيرة</a>
          </h2>
          <p className="content-A">
            مرض الإيدز واحداً من أكثر الأمراض رعباً في العالم، فمجرد السماع
            عنه يصيبك الخوف والقلق، وذلك لأن هذا المرض مهدد للحياة ويشكل خطورة
            عليك بشكل كبير، فما هي أعراض مرض الإيدز؟ وكيف يمكن اكتشاف الإصابة
            به ...
          </p>
          <h4 style={{color:'#ff0505'}}>قراءة المزيد</h4>
        </div>
      </div>
      <div className="Section-ArticlesList">
        {/* اعراض-حصى-المرارة. */}
        <img src={SOHP} alt=""/>
        <div className="ArticlesList-pages">
          <h2 className="Articles-A">
            <a href>ما هي اعراض حصى المرارة؟ وهل هي خطيرة؟</a>
          </h2>
          <p className="content-A">
            المرارة هي أحد أعضاء جسم الإنسان المهمة، فهي تقوم بتخزين الصفراء،
            والتي تعمل على تكسير الدهون من الطعام في الأمعاء الدقيقة، وبالتالي
            امتصاص الجسم للفيتامينات والعناصر الغذائية المذابة في الدهون،
            وتحدث...
          </p>
          <h4 style={{color:'#ff0505'}}>قراءة المزيد</h4>
          </div>
      </div>
      <div className="Section-ArticlesList">
        {/* اعراض-الفتق-السري. */}
        <img src={SOBC} alt="" />
        <div className="ArticlesList-pages">
          <h2 className="Articles-A">
            <a href>اعراض الفتق السري عند الأطفال والكبار</a>
          </h2>
          <p className="content-A">
            الفتق السري واحداً من حالات الفتق الشائعة والتي تحدث للأطفال الرضع
            والكبار سواء نساءاً أو رجال، هذه الحالة المقلقة قد تبث داخلك الخوف
            والفزع خاصة من شكلها، لكن هل تعرف ما هي اعراض الفتق السري كاملة؟
            و...
          </p>
          <h4 style={{color:'#ff0505'}}>قراءة المزيد</h4>
          </div>
      </div>
      <div className="Section-ArticlesList">
        {/* اعراض-الفتق. */}
        <img src={SOGP} alt="" />
        <div className="ArticlesList-pages">
          <h2 className="Articles-A">
            <a href> اعراض الفتق بأنواعه وعلامات تشير إلى الإصابة به </a>
          </h2>
          <p className="content-A">
            الفتق من الحالات الطبية الشائعة، لكنه حالة مقلقة وليست هينة
            والتعامل معه يكون بشكل خاص وبحرص لتجنب المضاعفات والمشاكل التي قد
            يتسبب فيها، لكن ما هي اعراض الفتق الشائعة؟ وكيف يمكن اكتشاف
            الإصابة بالفتق...
          </p>
          <h4 style={{color:'#ff0505'}}>قراءة المزيد</h4>
          </div>
      </div>
      <div className="Section-ArticlesList">
        {/* اعراض-جفاف-العين. */}
        <img src={SOIW} alt="" />
        <div className="ArticlesList-pages">
          <h2 className="Articles-A">
            <a href>اعراض جفاف العين الشائعة</a>
          </h2>
          <p className="content-A">
            جفاف العين من الحالات الشائعة جداً، ويعاني منها الكبير والصغير
            وتتسبب في مضاعفات كثيرة بجانب الشعور بالألم، لكن هل تعرف ما هي
            اعراض جفاف العين وما هي العلامات التي تشير على الإصابة بهذه الحالة
            ؟ تعرف ...
          </p>
          <h4 style={{color:'#ff0505'}}>قراءة المزيد</h4>
          </div>
      </div>
      <div className="Section-ArticlesList">
        {/* اعراض-الروماتويد. */}
        <img src={SOLP} alt="" />
        <div className="ArticlesList-pages">
          <h2 className="Articles-A">
            <a href>اعراض الروماتويد في مناطق الجسم المختلفة </a>
          </h2>
          <p className="content-A">
            الروماتويد أحد الحالات المؤلمة والمزعجة التي يتعرض لها عدد كبير من
            الأشخاص، ومن أشهر حالته روماتويد المفاصل، ولأنه قد يهاجم جسمك في
            أي وقت وعمر، تابع معنا هذا المقال سنوضح لك اعراض الروماتويد وأهم
            علا...
          </p>
          <h4 style={{color:'#ff0505'}}>قراءة المزيد</h4>
          </div>
      </div>
      <div className="Section-ArticlesList">
        {/* اعراض-الجلطة-الدماغية. */}
        <img src={SONG} alt="" />
        <div className="ArticlesList-pages">
          <h2 className="Articles-A">
            <a href> اعراض الجلطة الدماغية: علامات تكشف لك الإصابة بها</a>
          </h2>
          <p className="content-A">
            الجلطة الدماغية واحدة من أكثر الأمراض الصحية خطورة، فهي تهدد حياة
            الشخص المصاب بها بشكل واضح، وللأسف الشباب معرضين لها وليس كبار
            السن فقط، فتعالوا نتعرف على اعراض الجلطة الدماغية لكي تستطيعوا أن
            تكتشف...
          </p>
          <h4 style={{color:'#ff0505'}}>قراءة المزيد</h4>
          </div>
      </div>
      <div className="Section-ArticlesList">
        {/* اعراض-تليف-الكبد. */}
        <img src={ABGS} alt="" />
        <div className="ArticlesList-pages">
          <h2 className="Articles-A">
            <a href>تعرف على اعراض تليف الكبد وما هي مدى خطورته؟</a>
          </h2>
          <p className="content-A">
            تليف الكبد هو حالة مرضية يحل فيها النسيج الندبي محل خلايا الكبد
            السليمة بشكل تدريجي، مما يؤدي مع مرور الوقت لتطور اعراض تليف الكبد
            وظهور المضاعفات الخطيرة التي قد تؤثر على وظائف الكبد. ما هو تليف
            الكب...
          </p>
          <h4 style={{color:'#ff0505'}}>قراءة المزيد</h4>
          </div>
      </div>
      <div className="Section-ArticlesList">
        {/* اعراض-سرطان-البروستاتا. */}
        <img src={SOPS} alt="" />
        <div className="ArticlesList-pages">
          <h2 className="Articles-A">
            <a href>اعراض سرطان البروستاتا الشائعة</a>
          </h2>
          <p className="content-A">
            سرطان البروستاتا من الأمراض المنتشرة بين الرجال وتسبب لهم القلق
            الكبير، لكن على الرغم من ذلك قد لا يعرف الكثير منهم معلومات كثيرة
            عن هذا المرض، لهذا كان لابد أن نوضح لك عزيزي الرجل أبرز وأهم اعراض
            سرط...
          </p>
          <h4 style={{color:'#ff0505'}}>قراءة المزيد</h4>
          </div>
      </div>
      <div className="Section-ArticlesList">
        {/* اعراض-دوالي-الخصية. */}
        <img src={DWA} alt="" />
        <div className="ArticlesList-pages">
          <h2 className="Articles-A">
            <a href> اعراض دوالي الخصية ومؤشرات هامة انتبه لها</a>
          </h2>
          <p className="content-A">
            دوالي الخصية من أشهر الأمراض المقلقة للرجال، حيث أنها تتسبب في
            الإصابة بالتوتر والقلق لكل من يعاني منها، خاصة إذا كان لا يعرف
            عنها الكثير، فما هي اعراض دوالي الخصية ؟ وكيف يمكن أن تكتشف إصابتك
            بها خاص...
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
          <li className="page-item a">
          <Link to="/arti2">
          <span className="page-link">2</span>
          </Link>
          </li>
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
  )
}
