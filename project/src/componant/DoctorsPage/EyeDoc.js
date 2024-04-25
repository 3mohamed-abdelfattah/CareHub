import { useState, useEffect } from "react";
import axios from 'axios';
import Header from "../AllBars/Header";
import "./AllDoc.css";
import Footer from "../AllBars/Footer";
import DOCM from "../Photos/doctorphoto.png";
import DOCW from "../Photos/doctorimg.png";
import ScrollToTopButton from '../SomeStyles/ScrollToTopButton';
import { toast } from "react-toastify";
import Stars from "../SomeStyles/Stars";
import { Link } from "react-router-dom/dist";
import ChatbotEye from "../ChatBOTS/ChatbotEye";

const itemsPerPage = 5;

export default function EyeDoc() {

  useEffect(() => {
    if (!window.localStorage.getItem('email')) {
      window.location = "/login";
    }
  }, [])


  const mystyle = {
    overflow: 'hidden',
    transition: 'max-height 0.6s ease',
    WebkitTransition: 'max-height 0.6s ease',
    MozTransition: 'max-height 0.6s ease',
    MsTransition: 'max-height 0.6s ease',
    OTransition: 'max-height 0.6s ease',
    maxHeight: "100",
    animation: 'fade 0.6s ease-in-out',
    WebkitAnimation: 'fade 0.6s ease-in-out',
  };
  const options = {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };


  const [doctorsData, setDoctorsData] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);


  const [cardtoggle1, setCardToggle1] = useState(false);
  const [cardtoggle2, setCardToggle2] = useState(false);
  const [cardtoggle3, setCardToggle3] = useState(false);
  const [cardtoggle4, setCardToggle4] = useState(false);
  const [cardtoggle5, setCardToggle5] = useState(false);
  const [cardtoggle6, setCardToggle6] = useState(false);

  const ToggleHandler1 = () => {
    setCardToggle1(!cardtoggle1);
  };
  const ToggleHandler2 = () => {
    setCardToggle2(!cardtoggle2);
  };
  const ToggleHandler3 = () => {
    setCardToggle3(!cardtoggle3);
  };
  const ToggleHandler4 = () => {
    setCardToggle4(!cardtoggle4);
  };
  const ToggleHandler5 = () => {
    setCardToggle5(!cardtoggle5);
  };
  const ToggleHandler6 = () => {
    setCardToggle6(!cardtoggle6);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/doctors/Ophthalmologist");
        setDoctorsData(response.data);
        setFilteredDoctors(response.data.slice(0, itemsPerPage));
        setIsLoading(false); // تحديث عند اكتمال التحميل
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false); // في حالة حدوث خطأ
      }
    };

    fetchData();
  }, []);

  const handleSearch = (doctorName) => {
    const filteredData = doctorsData.filter((doctor) =>
      doctor.name.toLowerCase().includes(doctorName.toLowerCase())
    );
    if (filteredData.length === 0) {
      console.log("No results found!");
      toast.error("No results found!", options);
    }

    setFilteredDoctors(filteredData.slice(0, itemsPerPage));
    setCurrentPage(1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      const startIndex = (currentPage - 2) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setFilteredDoctors(doctorsData.slice(startIndex, endIndex));
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setFilteredDoctors(doctorsData.slice(startIndex, endIndex));
    setCurrentPage(currentPage + 1);
  };

  const doctorElements = filteredDoctors.map((doctor, index) => (
    <div className="Doctors-D" key={index}>
      <div className="doctors-data-D">
        <h1>د.{doctor.name}</h1>
        <h3>تخصص {doctor.specialization}</h3>
        <h4>{doctor.address}</h4>
        <h4><Stars /></h4>
      </div>
      {doctor.gender === 'Male' ? (
        <img src={DOCM} alt={`Doctor ${index + 1}`} />
      ) : (
        <img src={DOCW} alt={`Doctor ${index + 1}`} />
      )}
      <div className="button-lovation">
        <Link to={`./${doctor._id}`}>
          <button className="buttondet">
            <span className="button_lg">
              <span className="button_sl" />
              <span className="button_text">التفــــاصيل</span>
            </span>
          </button>
        </Link>
      </div>
    </div>
  ));





  return (
    <div>
      <Header />
      <div className="header-D"></div>
      <h1 className="txtdoc">عيونك تستحق أفضل رعاية</h1>
      <h1 style={{ color: '#ff0505', textAlign: 'center' }}>...مع أفضل أطباء العيون في بني سويف</h1>
      <div className="landing-D">
        <div className="container-D">
          <div className="InputContainer">
            <input type="text" name="text" className="inputss" id="inputss" placeholder="....ابحــث" onInput={(event) => handleSearch(event.target.value)} />
            <label htmlFor="input" className="labelforsearch">
              <svg viewBox="0 0 512 512" className="searchIcon"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
            </label>
            <div className="border" />
            <button className="micButton"><svg viewBox="0 0 384 512" className="micIcon"><path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z" /></svg>
            </button>
          </div>



        </div>
      </div>

      <div className="doctors-list-D">
        <div className="container-D">{doctorElements}</div>
        {isLoading &&
          <div className="loaderload">
            <div className="wrapperload">
              <div className="circle" />
              <div className="line-1" />
              <div className="line-2" />
              <div className="line-3" />
              <div className="line-4" />
            </div>
          </div>
        }

      </div>

      <div className="pagination-buttons">

        <div className="btn-conteinerr" onClick={handleNextPage}
          disabled={filteredDoctors.length < itemsPerPage}>
          <a href="#" className="btn-content">
            <span className="icon-arrow">
              <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 66 43" height="30px" width="30px">
                <g fillRule="evenodd" fill="none" strokeWidth={1} stroke="none" id="arrow">
                  <path fill="#9ee5fa" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" id="arrow-icon-one" />
                  <path fill="#9ee5fa" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" id="arrow-icon-two" />
                  <path fill="#9ee5fa" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" id="arrow-icon-three" />
                </g>
              </svg>
            </span>
          </a>
        </div>



        <div className="btn-conteiner" onClick={handlePreviousPage} disabled={currentPage === 1}>
          <a href="#" className="btn-content">
            <span className="icon-arrow">
              <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 66 43" height="30px" width="30px">
                <g fillRule="evenodd" fill="none" strokeWidth={1} stroke="none" id="arrow">
                  <path fill="#9ee5fa" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" id="arrow-icon-one" />
                  <path fill="#9ee5fa" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" id="arrow-icon-two" />
                  <path fill="#9ee5fa" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" id="arrow-icon-three" />
                </g>
              </svg>
            </span>
          </a>
        </div>

      </div>

      <div className="common_questions-D">
        <div className="container-D">

          <section>
            <h2 className="title-D">الاسئلة الشائعة</h2>

            <div className="faq-D" onClick={ToggleHandler1}>
              <div className="question-D">
                <h4>كيف يمكن الحفاظ على صحة العيون بشكل عام؟</h4>
                <svg width="15" height="10" viewbox="0 0 42 25">
                  <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round" />
                </svg>
              </div>
              <div className={cardtoggle1 ? "show" : "hide"} style={mystyle}>

                <p>
                  <>.يُنصح بتناول الأطعمة الغنية بفيتامين A واستخدام واقي الشمس للحفاظ على صحة العيون</>
                  <br />
                  <br />
                  <>.تجنب الجلوس لفترات طويلة أمام الشاشات والتأكد من الراحة البصرية بالراحة</>
                </p>

              </div>
            </div>

            <div className="faq-D" onClick={ToggleHandler2}>
              <div className="question-D">
                <h4>ما هي الأعراض التحذيرية لمشاكل في النظر؟</h4>
                <svg width="15" height="10" viewbox="0 0 42 25">
                  <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round" />
                </svg>
              </div>
              <div className={cardtoggle2 ? "show" : "hide"} style={mystyle}>

                <p>
                  <>.تشمل الأعراض الشائعة الرؤية الضبابية، الحكة، والعصبية المستمرة. يُنصح بزيارة طبيب العيون في حالة ظهور هذه الأعراض</>
                </p>

              </div>
            </div>


            <div className="faq-D" onClick={ToggleHandler3}>
              <div className="question-D">
                <h4>ما هي العوامل التي يجب مراعاتها عند اختيار النظارات؟</h4>
                <svg width="15" height="10" viewbox="0 0 42 25">
                  <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round" />
                </svg>
              </div>
              <div className={cardtoggle3 ? "show" : "hide"} style={mystyle}>

                <p>
                  <>.يجب مراعاة درجة النظر وشكل الوجه لاختيار الإطار المناسب</>
                  <br />
                  <br />
                  <>.يُنصح بالتحدث مع طبيب العيون للحصول على توجيه حول العدسات المناسبة</>
                </p>

              </div>
            </div>


            <div className="faq-D" onClick={ToggleHandler4}>
              <div className="question-D">
                <h4>كيفية العناية بالعدسات اللاصقة؟</h4>
                <svg width="15" height="10" viewbox="0 0 42 25">
                  <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round" />
                </svg>
              </div>
              <div className={cardtoggle4 ? "show" : "hide"} style={mystyle}>

                <p>
                  <>.يجب غسل اليدين جيدًا قبل لمس العدسات، وتنظيفها بمحلول مخصص</>
                  <br />
                  <br />
                  <>.تجنب استخدام العدسات لفترات طويلة واتباع إرشادات الاستخدام</>
                </p>

              </div>
            </div>


            <div className="faq-D" onClick={ToggleHandler5}>
              <div className="question-D">
                <h4>ما هي الشروط المؤهلة لإجراء جراحة الليزك؟</h4>
                <svg width="15" height="10" viewbox="0 0 42 25">
                  <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round" />
                </svg>
              </div>
              <div className={cardtoggle5 ? "show" : "hide"} style={mystyle}>

                <p>
                  <>.يجب أن يكون الشخص قادرًا على تحمل الجراحة ويتمتع بصحة عامة جيدة</>
                  <br />
                  <br />
                  <>.يُجرى فحص شامل لتحديد ملاءمة الشخص للجراحة</>
                </p>

              </div>
            </div>


            <div className="faq-D" onClick={ToggleHandler6}>
              <div className="question-D">
                <h4>كيف يمكن العناية بالعين بعد عمليات الليزك؟</h4>
                <svg width="15" height="10" viewbox="0 0 42 25">
                  <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round" />
                </svg>
              </div>
              <div className={cardtoggle6 ? "show" : "hide"} style={mystyle}>

                <p>
                  <>.يتم توجيه الشخص إلى استخدام قطرات العين وتجنب الحركات القوية للعين للمساعدة في التعافي</>
                </p>

              </div>
            </div>
          </section>


        </div>
      </div>
      <ScrollToTopButton />
      <ChatbotEye />
      <Footer />
    </div>
  );
}
