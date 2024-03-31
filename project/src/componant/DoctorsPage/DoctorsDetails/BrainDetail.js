import React, { Fragment, useEffect, useState } from "react";
import "./Doctordetail.css";
import Header from "../../AllBars/Header";
import Footer from "../../AllBars/Footer";
import DOCM from "../../Photos/doctorphoto.png";
import DOCW from "../../Photos/doctorimg.png";
import Checkout from "../../SomeStyles/Checkout";
import Stars from "../../SomeStyles/Stars";
import { Link } from 'react-router-dom';
import PayPal from "../../Payment/PayPal";
import "../../SomeStyles/Whatsappp.css";

export default function BrainDetail() {
  const id = window.location.pathname.split("/").slice(-1)[0];
  const [doctorData, setDoctorData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!window.localStorage.getItem('email')) {
        window.location= "/login";
    }
}, [])

  const handleLinkedW = () => {
    let phoneNumber = doctorData.phoneNumber;
    const phoneNumbersArray = phoneNumber.split('-'); // تقسيم الأرقام بواسطة الخط تحتي
    
    // اختيار أول رقم يبدأ بـ "010"، ثم "012"، ثم "011"، ثم "015"
    phoneNumber = phoneNumbersArray.find(number => number.startsWith("010")) ||
                  phoneNumbersArray.find(number => number.startsWith("012")) ||
                  phoneNumbersArray.find(number => number.startsWith("011")) ||
                  phoneNumbersArray.find(number => number.startsWith("015"));
  
    if (phoneNumber) {
      window.location.href = `https://wa.me/+2${phoneNumber}`;
    } else {
      // لا يوجد رقم يبدأ بـ "010", "012", "011", أو "015"
      console.log("No phone number starting with '010', '012', '011', or '015' found.");
    }
  };

  const body = {
    direction: "rtl",
    margin: 2,
    fontSize: "var(--bs-body-font-size)",
    fontWeight: "var(--bs-body-font-weight)",
    lineHeight: "var(--bs-body-line-height)",
    textAlign: "var(--bs-body-text-align)",
    backgroundColor: "var(--bs-body-bg)",
    WebkitTextSizeAdjust: "100%",
    WebkitTapHighlightColor: "transparent",
    marginTop: "7%",
  };

  useEffect(() => {
    setLoading(true); // Start loading

    fetch(`http://localhost:5000/api/doctors/Neurologist/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDoctorData(data);
        console.log(data);
      })
      .finally(() => setLoading(false)); // End loading
  }, []);

  return (
    <Fragment>
      <Header />
      <div style={body}>
        <h1 className="txtdoc">لا تجعل الألم يزعجك</h1>
        <h1 style={{ color: "#ff0505", textAlign: "center" }}>
          احجز موعدًا مع طبيب مخ واعصاب اليوم
        </h1>
        {loading ? (
          <div
            style={{
              position: "relative",
              right: "23%",
              transform: "scaley(1)",
            }}
            className="loaderload"
          >
            <div className="wrapperload">
              <div className="circle" />
              <div className="line-1" />
              <div className="line-2" />
              <div className="line-3" />
              <div className="line-4" />
            </div>
          </div>
        ) : (
          <div className="testimonials" id="testimonials">
            <div className="containerD">
              <div className="boxD">
                {doctorData.gender === "Male" ? (
                  <img src={DOCM} alt="" />
                ) : (
                  <img src={DOCW} alt="" />
                )}
                <div className="buttonsD0">
                <PayPal/>
                </div>
                <div className="buttonsD1">
                <Link to='./ordernow'>
                <Checkout/>
                </Link>
                </div>
                <h1 style={{ color: "#1F5357" }}>د.{doctorData.name}</h1>
                <h2>طبيب {doctorData.specialization}</h2>
                <h3>{doctorData.phoneNumber}</h3>
                <div style={{ position: "relative", right: "26%" }}>
                  <Stars />
                </div>
                <p>{doctorData.address}</p>
              </div>
            </div>

            <div className="massgedoc">
            <Link to="/realtimechat">
            <button id="Massgebtn">
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" />
                  </svg>
                </div>
              </div>
              <span>Chat Now</span>
            </button>
            </Link>
            </div>

            <div className="map_gogle">
            <iframe
              title="موقع الطبيب"
              width="500"
              height="300"
              loading="lazy"
              allowFullScreen
              src={doctorData.link}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>


          <div className="whats">
          <button className="button2" onClick={handleLinkedW}>
          WhatsApp
      <svg viewBox="0 0 48 48" y="0px" x="0px" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z" fill="#fff" /><path d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z" fill="#fff" /><path d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z" fill="#cfd8dc" /><path d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z" fill="#40c351" /><path clipRule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" fillRule="evenodd" fill="#fff" />
      </svg>
      </button>
          </div>


            <hr className="hrdoc" />
            <div className="containerD">
              <div className="opinionsD">
                <div className="opsD">
                  <div className="evaluateD">
                    <h3>اضف تقييمك الان</h3>
                  </div>
                  <div className="textareaD">
                    <h4> شارك تجربتك</h4>
                    <textarea
                      name
                      className="formsD"
                      placeholder="شكرا لمشاركتك"
                      defaultValue={""}
                    />
                  </div>
                  <div className="userD">
                    <h4>الاسم</h4>
                    <input
                      type="text"
                      className="formsD"
                      required
                      placeholder="الاسم هنا"
                    />
                  </div>
                  <div className="userD">
                    <h4>البريد الالكتروني</h4>
                    <input
                      type="email"
                      className="formsD"
                      required
                      placeholder="بريدك الالكتروني"
                    />
                  </div>
                  <div className="btn-groupD">
                    <button type="submit" className="btn submit">
                      ارسال التقييم
                    </button>
                    <button type="reset" className="btn cancel">
                      الغاء
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </Fragment>
);
}