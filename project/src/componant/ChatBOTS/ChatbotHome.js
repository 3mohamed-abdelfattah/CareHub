import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';
import UpdateUser from "../AdminBoard/UpdateUser";
import Signup from "../AdminBoard/SignUp"
import { Link } from "react-router-dom";
import { Fragment } from "react";
import "./ChatHome.css"


const StyledFragment ={

  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center', // لوضع النص في وسط الـ div
  textAlign: 'center', // لتوسيع النص بشكل كامل
  fontFamily: 'Cairo',
  padding: 5,
  margin: 1,
  border: '2px solid #1F5357',
  borderRadius: 5,
  backgroundColor: 'white',
}



    const steps = [
        {
          id: '1',
          message: 'مرحبا بك في موقعنا, ما هو اسمك',
          trigger: '2',
        },
        {
          id: '2',
          user: true,
          trigger: '3',
        },
        {
          id: '3',
          message: 'مرحبًا {previousValue}، كيف يمكنني مساعدتك اليوم؟',
          trigger: '4',
        },
        {
          id: '4',
          options: [
            { value: 1, label: 'يوجد لدي مشكله', trigger: '5' },
            { value: 2, label: 'التوجه الي صفحه بشكل اسرع', trigger: '14' },
            { value: 3, label: 'اريد التواصل مع الدعم الفني', trigger: '101' },
          ],
        },
        {
          id: '5',
          message: 'ما المشكله التي تواجهها',
          trigger: '6',
        },
        {
          id: '6',
          options: [
            { value: '1', label: 'اريد تحديث بياناتي', trigger: '7' },
            { value: '2', label: 'مشكله تسجيل الدخول', trigger: '9' },
            { value: '3', label: 'مشكله انشاء حساب', trigger: '10' },
          ],
        },
        {
          id: '7',
          message: "...سنقوم الان بتوجيهك الي صفحه لتقوم بتديث بياناتك",
          trigger: '8',
        },
        {
          id: '8',
          component: (
            <UpdateUser/>
          ),
          end:true,
        },
        {
          id: '9',
          message: "يرجي التأكد من بياناتك والمحاوله مره اخري,اذا استمرت المشكله قم بالتواصل معنا من خلال الدعم الفني لتحديث بياناتك",
          trigger: '12',
        },
        {
          id: '10',
          message: "يرجي اتباع تعليمات انشاء حساب جديد وهي ان يكون البريد الالكتروني غير مستخدم سابقا في قواعد بياناتنا وان لا تقل كلمه المرور عن سته احرف مع تطابقها وسيتم توجيهك لصفحه عمل الحساب للمحاوله مجددا",
          trigger: '11',
        },
        {
          id: '11',
          component: (
            <Signup/>
          ),
          end:true,
        },
        {
          id: '12',
          message: "سيتم تحويلك لصفحه تسجيل الدخول للمحاوله مجددا",
          trigger: '13',
        },
        {
          id: '13',
          component: (
            <Link to ="/login">
            <div>Go To Login</div>
            </Link>
          ),
          end:true,
        },

        {
          id: '14',
          component: (
            <Fragment>
            <Link to ="/">
            <div style={StyledFragment}>الصفحه الرئيسيه</div>
            </Link>
            <Link to ="/register">
            <div style={StyledFragment}>دليل غذائي</div>
            </Link>
            <Link to ="/doctors">
            <div style={StyledFragment}>الاطباء</div>
            </Link>
            <Link to ="/arti">
            <div style={StyledFragment}>مقالات</div>
            </Link>
            </Fragment>
          ),
          trigger: '4',
        },
        {
          id: '101',
          message: 'يرجي توضيح المشكله وسنعمل علي حلها ',
          trigger: '102',
        },
        {
            id: '102',
            component: (
              <Fragment>
                <div className="form-container">
                  <form className="form">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input required name="email" id="email" type="text" />
                      <label htmlFor="number">Number</label>
                      <input required name="number" id="number" type="text" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="textarea">?How Can We Help You</label>
                      <textarea required cols={50} rows={10} id="textarea" name="textarea" defaultValue={"          "} />
                    </div>
                    <button type="submit" className="form-submit-btn">Submit</button>
                  </form>
                </div>
              </Fragment>
            ),
            end: true,
          },
      ];

      const theme = {
        background: '#f5f8fb',
        fontFamily: 'Cairo',
        headerBgColor: '#1F5357',
        headerFontColor: 'white',
        headerFontSize: '20px',
        botBubbleColor: '#1F5357',
        botFontColor: 'white',
        userBubbleColor: 'lightgrey',
        userFontColor: '#000',
      };


      const ChatbotHome = () => (
        <ThemeProvider theme={theme}>
          <ChatBot steps={steps} 
          speechSynthesis={{ enable: false, lang: 'ar' }}
          floating={true}
          headerTitle="Digital Doctor"
          floatingStyle={{ left: '25px', bottom: '25px'}}
          opened={false}
          enableSmoothScroll={true}
          handleEnd={null}
          hideBotAvatar={false}
          hideUserAvatar={false}
          recognitionEnable={true}
          placeholder="...اكتب رسالتك"
          recognitionLang="en-US"
          />;
        </ThemeProvider>
      );

      export default ChatbotHome;

