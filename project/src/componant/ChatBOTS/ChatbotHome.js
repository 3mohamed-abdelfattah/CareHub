import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';
import UpdateUser from "../UpdateUser";
import Signup from "../../SignUp"
import Login from "../../Login"
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";



const StyledButton = {
  backgroundColor: '#4CAF50', // لون الخلفية
  color: 'white', // لون النص
  padding: '10px 15px', // حجم الهوامش الداخلية
  fontSize: '16px', // حجم الخط
  border: 'none', // حذف حدود الزر
  borderRadius: '5px', // تقويس زوايا الزر
  cursor: 'pointer', // تغيير شكل المؤشر عند التحويل
  transition: 'background-color 0.3s', // تأثير التحول على لون الخلفية
};


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
          message: 'شكرًا! سيتم توجيهك إلى الصفحة المحددة.',
          end: true,
        },
        {
          id: '101',
          message: 'يرجي توضيح المشكله وسنعمل علي حلها ',
          trigger: '102',
        },
        {
            id: '102',
            user: true,
            trigger: '103',
          },
          {
            id: '103',
            message: 'يرجي ترك الرقم للتواصل وسيتم التواصل معك من جهه الدعم الفني',
            trigger: '104',
          },
          {
            id: '104',
            user: true,
            trigger: '105',
          },
          {
            id: '105',
            message: "انتظر مكالمتنا قريبا",
            trigger: '10',
        },
        
        
      ];

      const theme = {
        background: '#f5f8fb',
        fontFamily: 'Cairo',
        headerBgColor: 'rgba(93, 186, 253, 0.7)',
        headerFontColor: '#000',
        headerFontSize: '20px',
        botBubbleColor: 'rgba(93, 186, 253, 0.7)',
        botFontColor: '#000',
        userBubbleColor: 'lightgrey',
        userFontColor: '#000',
        navigationPrevColor: '#5dba', // لون الرابط السابق
        navigationNextColor: '#5dfd',
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

