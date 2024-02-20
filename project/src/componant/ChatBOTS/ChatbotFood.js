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
          return 'يرجي ادخال اسمك';}
          else return true;
      },



    },
    {
      id: '3',
      message: 'مرحبًا {previousValue}، يمكنني المساعده في اعطائك بعض النصائح حول نظام حياه صحي',
      trigger: '4',
    },

    {
        id: '4',
        message: "يجب عليك دائمًا استشارة الطبيب لتشخيص دقيق وخطة علاج مناسبة. ومع ذلك، يمكنني تقديم معلومات عامة",
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
        message: "قم بأختيار ما تريد معرفه المزيد عنه",
        trigger: '7',
      },

      {
        id: '7',
        options: [
          { value: '1', label: "تنوع في النظام الغذائي", trigger: '8' },
          { value: '2', label: "تناول الخضروات والفواكه", trigger: '10' },
          { value: '3', label: "شرب الماء", trigger: '12' },
          { value: '4', label: "تجنب السكريات المضافة", trigger: '14' },
          { value: '5', label: "تقليل الأطعمة العالية بالدهون المشبعة", trigger: '16' },
          { value: '6', label: "تناول الأطعمة الغنية بالألياف", trigger: '18' },
        ],
      },

      {
        id: '8',
        message: "يُفضل تناول مجموعة متنوعة من الأطعمة لضمان الحصول على جميع العناصر الغذائية الضرورية",
        trigger: '7',
      },

      {
        id: '10',
        message: "تحتوي الخضروات والفواكه على فيتامينات ومعادن هامة وتعزز الصحة العامة",
        trigger: '7',
      },

      {
        id: '12',
        message: "الحفاظ على هضم سليم وصحة الجلد من خلال شرب كميات كافية من الماء يوميًا ثلاث او اربع لترات",
        trigger: '7',
      },

      {
        id: '14',
        message: "يجب الحد من تناول السكريات المضافة لتجنب مشاكل صحية مثل السمنة وأمراض القلب",
        trigger: '7',
      },

      {
        id: '16',
        message: "يجب تقليل تناول اللحوم الحمراء والأطعمة العالية بالدهون المشبعة للحفاظ على صحة القلب",
        trigger: '7',
      },
      {
        id: '18',
        message: "الحبوب الكاملة والخضروات والفواكه تحتوي على الألياف التي تساعد في هضم جيد وصحة الأمعاء",
        trigger: '7',
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


      const ChatbotFood = () => (
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

      export default ChatbotFood;

