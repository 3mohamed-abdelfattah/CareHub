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
    message: 'مرحبًا {previousValue}، يمكنني المساعده في تشخيصك في بعض مشاكل التخاطب الاكثر شيوعاً وترشيح علاج مناسب لك',
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
      { value: '1', label: 'صعوبة في التخاطب، ضعف في السمع، إزدواج الكلام، حساسية للضوء', trigger: '8' },
      { value: '2', label: 'ألم في الأذن، احمرار في الأذن، صداع، صعوبة في فهم الكلام', trigger: '10' },
      { value: '3', label: 'حكة في الأذن، إفرازات، شعور بالامتلاء، إرهاق في السمع', trigger: '12' },
      { value: '4', label: 'غيرات في الكلام، صعوبة في فهم الكلام، فقدان القدرة على التحدث', trigger: '14' },
      { value: '5', label: 'صعوبة في استخدام الصوت، تأخر في التطور اللغوي، إشكاليات في التواصل', trigger: '16' },
    ],
  },
  {
    id: '8',
    message: 'نعتقد أن لديك صعوبات في التخاطب',
    trigger: '9',
  },
  {
    id: '9',
    message: 'التقييم: يفضل مراجعة أخصائي التخاطب لتقييم الحالة وتحديد الخطوات اللازمة',
    end: true,
  },
  {
    id: '10',
    message: 'نعتقد أن لديك مشاكل في السمع والأذن',
    trigger: '11',
  },
  {
    id: '11',
    message: 'التقييم: يجب إجراء اختبارات السمع وفحص الأذن لتحديد السبب والعلاج المناسب',
    end: true,
  },
  {
    id: '12',
    message: 'نعتقد أن لديك مشاكل في السمع والأذن',
    trigger: '13',
  },
  {
    id: '13',
    message: 'التقييم: يجب فحص الأذن وتقييم مستوى السمع لتحديد العلاج المناسب',
    end: true,
  },
  {
    id: '14',
    message: 'نعتقد أن لديك صعوبات في التخاطب',
    trigger: '15',
  },
  {
    id: '15',
    message: 'التقييم: يفضل استشارة أخصائي التخاطب لتحديد أسباب وسبل علاج صعوبات التخاطب',
    end: true,
  },
  {
    id: '16',
    message: 'نعتقد أن لديك مشاكل في التواصل اللغوي',
    trigger: '17',
  },
  {
    id: '17',
    message: 'التقييم: يفضل استشارة أخصائي التخاطب لتقييم التواصل اللغوي وتقديم الدعم اللازم',
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



const ChatbotTkatb = () => (
  <ThemeProvider theme={theme}>
    <ChatBot steps={steps}
      speechSynthesis={{ enable: false, lang: 'ar' }}
      floating={true}
      headerTitle="Digital Doctor"
      floatingStyle={{ left: '25px', bottom: '25px' }}
      opened={false}
      enableSmoothScroll={true}
      handleEnd={null}
      hideBotAvatar={false}
      hideUserAvatar={false}
      recognitionEnable={true}
      placeholder="...اكتب رسالتك"
      recognitionLang="en-US"
    />
  </ThemeProvider>
);

export default ChatbotTkatb;

