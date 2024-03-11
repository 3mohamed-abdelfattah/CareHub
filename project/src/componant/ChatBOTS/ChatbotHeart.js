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
      message: 'مرحبًا {previousValue}، يمكنني المساعده في تشخيصك في بعض امراض القلب الاكثر شيوعاً وترشيح علاج مناسب لك',
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
      { value: '1', label: 'ألم في الصدر، ضيق في التنفس، ضيق في التنفس أثناء النشاط البدني، تعب غير مبرر', trigger: '8' },
      { value: '2', label: 'ألم في الذراع الأيسر، ضيق في التنفس، غثيان، عرق شديد', trigger: '10' },
      { value: '3', label: 'تعب غير مبرر، ضيق في التنفس، انتفاخ في القدمين والساقين، زيادة في الوزن', trigger: '12' },
      { value: '4', label: 'إجهاد غير مبرر، دقات قلب غير منتظمة، دوخة، فقدان الوعي', trigger: '14' },
      { value: '5', label: 'إجهاد غير مبرر، ضيق في التنفس، تعب سريع، انخفاض القدرة على التحمل', trigger: '16' },
    ],
  },
  {
    id: '8',
    message: 'نعتقد أن لديك مشاكل قلبية',
    trigger: '9',
  },
  {
    id: '9',
    message: 'العلاج: يجب عليك مراجعة طبيب القلب لتقييم حالتك وتحديد الخطوات اللازمة للعلاج',
    end: true,
  },
  {
    id: '10',
    message: 'نعتقد أن لديك نوبة قلبية',
    trigger: '11',
  },
  {
    id: '11',
    message: 'العلاج: اتصل بالطوارئ على الفور ولا تتردد في طلب المساعدة الطبية',
    end: true,
  },
  {
    id: '12',
    message: 'نعتقد أن لديك قصور في القلب',
    trigger: '13',
  },
  {
    id: '13',
    message: 'العلاج: يمكن أن يشمل الأدوية والتغييرات في نمط الحياة، ويجب عليك استشارة الطبيب للحصول على تقييم دقيق',
    end: true,
  },
  {
    id: '14',
    message: 'نعتقد أن لديك اضطراب في نظم القلب',
    trigger: '15',
  },
  {
    id: '15',
    message: 'العلاج: يمكن أن يشمل الأدوية أو الإجراءات الإجرائية لاستعادة النظم الطبيعي للقلب، يجب مراجعة الطبيب',
    end: true,
  },
  {
    id: '16',
    message: 'نعتقد أن لديك ارتفاع في ضغط الدم',
    trigger: '17',
  },
  {
    id: '17',
    message: 'العلاج: قد يتضمن تغييرات في نمط الحياة والأدوية، من الضروري مراجعة الطبيب لفحص الضغط بانتظام',
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



      const ChatbotHeart = () => (
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

      export default ChatbotHeart;

