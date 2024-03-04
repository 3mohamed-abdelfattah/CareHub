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
      message: 'مرحبًا {previousValue}، يمكنني المساعده في تشخيصك في بعض امراض العيون الاكثر شيوعاً وترشيح علاج مناسب لك',
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
            { value: '1', label: 'ضبابية الرؤية، صعوبة في الرؤية الليلية، إزدواج الرؤية، حساسية للضوء', trigger: '8' },
            { value: '2', label: 'ألم في العين، احمرار العين، صداع، ضبابية الرؤية، فقدان البصر المحيطي', trigger: '10' },
            { value: '3', label: 'حرقة في العين، حكة، احمرار، شعور بوجود رمل في العين، إرهاق العين', trigger: '12' },
            { value: '4', label: 'غيرات في الرؤية، ظهور بقع داكنة في الرؤية، ضبابية الرؤية، فقدان البصر', trigger: '14' },
            { value: '5', label: 'صعوبة في رؤية الأشياء البعيدة، ضبابية الرؤية، إجهاد العين', trigger: '16' },
          ],
        },
        {
          id: '8',
          message: 'نعتقد انك مصاب بالماء الابيض',
          trigger: '9',
        },
        {
          id: '9',
          message: 'العلاج: استبدال العدسة الطبيعية بعدسة اصطناعية و يجب عليك مراجعة الطبيب للتأكد من التشخيص', 
          end: true,
        },
        {
          id: '10',
          message: 'نعتقد انك مصاب بالجلوكوما (الماء الأزرق)',
          trigger: '11',
        },
        {
          id: '11',
          message: 'العلاج: العلاج يشمل العلاج الدوائي والجراحي ويجب عليك مراجعة الطبيب للتأكد من التشخيص',
          end: true,
        },
        {
          id: '12',
          message: 'نعتقد انك مصاب بجفاف العين',
          trigger: '13',
        },
        {
          id: '13',
          message: 'العلاج: استخدام قطرات العين والابتعاد عن الشاشات والتدخين',
          end: true,
        },
        {
          id: '14',
          message: 'نعتقد انك مصاب بإعتلال الشبكية السكري',
          trigger: '15',
        },
        {
          id: '15',
          message: 'العلاج : التحكم في مستويات السكر في الدم',
          end: true,
        },
        {
          id: '16',
          message: 'نعتقد انك مصاب بالضعف البصري',
          trigger: '17',
        },
        {
          id: '17',
          message: 'العلاج: العلاج يشمل النظارات والعدسات اللاصقة',
          end: true,
        },
      ];
  

      const theme = {
        background: '#f5f8fb',
        fontFamily: 'Cairo',
        headerBgColor: '#94E18D',
        headerFontColor: 'white',
        headerFontSize: '20px',
        botBubbleColor: '#94E18D',
        botFontColor: 'white',
        userBubbleColor: 'lightgrey',
        userFontColor: '#000',
      };



      const ChatbotEye = () => (
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

      export default ChatbotEye;

