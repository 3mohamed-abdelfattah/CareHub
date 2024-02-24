import { isEmptyObj } from "openai/core";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';

const steps = [
    {
      id: '1',
      message: 'مرحبا بك, ما هو اسمك؟',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
      validator: (value) => {
        if (isEmptyObj(value)) {
          return 'يرجي ادخال اسمك';
        } else {
          return true;
        }
      },
    },
    {
      id: '3',
      message: 'مرحبًا {previousValue}، يمكنني المساعده في تشخيصك في بعض المشاكل التجميلية الاكثر شيوعاً وترشيح علاج مناسب لك',
      trigger: '4',
    },
    {
      id: '4',
      message: "يجب عليك دائمًا استشارة الطبيب لتشخيص دقيق وخطة علاج مناسبة. ومع ذلك، يمكنني تقديم معلومات عامة حول بعض الأمراض الشائعة",
      trigger: '5',
    },
    {
      id: '5',
      options: [
        { value: '1', label: 'حسنا', trigger: '6' },
      ],
    },
    {
      id: '6',
      message: "قم بأختيار الاعراض التي تشعر بها ",
      trigger: '7',
    },
    {
          id: '7',
          options: [
            { value: '1', label: " خطوط رفيعة أو عميقة على الوجه، خاصة حول العينين والفم", trigger: '8' },
            { value: '2', label: "بثور، رؤوس سوداء، رؤوس بيضاء، ندبات", trigger: '10' },
            { value: '3', label: "مناطق من الجلد أغمق من المناطق المحيطة.", trigger: '12' },
            { value: '4', label: "دوائر داكنة تحت العينين", trigger: '14' },
            { value: '5', label: "تكوّن نتوءات على سطح الجلد، خاصة على الفخذين والأرداف", trigger: '16' },
          ],
        },
        {
          id: '8',
          message: "نعتقد انك مصاب بالتجاعيد",
          trigger: '9',
        },
        {
          id: '9',
          message: "العلاج:حقن البوتوكس: تمنع تقلص العضلات المسببة للتجاعيد.الحشوات: تُستخدم لملء التجاعيد والخطوط.التقشير الكيميائي: يُزيل الطبقة الخارجية من الجلد، مما يُحفز إنتاج الكولاجين والإيلاستين.الليزر: يُستخدم لتحفيز إنتاج الكولاجين والإيلاستين",
          end: true,
        },
        {
          id: '10',
          message: "نعتقد انك مصاب بحب الشباب",
          trigger: '11',
        },
        {
          id: '11',
          message: "العلاجات الموضعية: مثل كريمات أو جل مضادة للبكتيريا أو حمض الساليسيليك.العلاجات الفموية: مثل المضادات الحيوية",
          end: true,
        },
        {
          id: '12',
          message: "نعتقد انك مصاب بالبقع الداكنة",
          trigger: '13',
        },
        {
          id: '13',
          message: "العلاج:كريمات التفتيح: تُستخدم لتقليل إنتاج الميلانين.التقشير الكيميائي: يُزيل الطبقة الخارجية من الجلد، مما يُحفز إنتاج خلايا جديدة.",
          end: true,
        },
        {
          id: '14',
          message: "نعتقد انك مصاب بالهالات السوداء",
          trigger: '15',
        },
        {
          id: '15',
          message: "العلاج:كريمات التفتيح: تُستخدم لتقليل إنتاج الميلانين.الحقن: تُستخدم لتقليل الانتفاخ وتحسين مظهر الهالات السوداء.",
          end: true,
        },
        {
          id: '16',
          message: "نعتقد انك مصاب بالسيلوليت",
          trigger: '17',
        },
        {
          id: '17',
          message: "العلاج:الليزر: يُستخدم لتحفيز إنتاج الكولاجين والإيلاستين.التدليك: يُستخدم لتحسين تدفق الدم وتقليل الانتفاخ.الحقن: تُستخدم لتقليل الانتفاخ وتحسين مظهر السيلوليت.",
          end: true,
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


      const ChatbotBute = () => (
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

      export default ChatbotBute;

