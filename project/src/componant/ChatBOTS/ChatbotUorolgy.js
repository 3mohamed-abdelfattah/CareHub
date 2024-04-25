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
      }
      else return true;
    },
  },
  {
    id: '3',
    message: 'مرحبًا {previousValue}، يمكنني المساعده في تشخيصك في بعض امراض المسالك الاكثر شيوعاً وترشيح علاج مناسب لك',
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
      { value: '1', label: "آلام أثناء التبول، زيادة في التردد البولي، حرارة", trigger: '8' },
      { value: '2', label: " حمى، ألم في الظهر، التبول المؤلم", trigger: '10' },
      { value: '3', label: "آلام حادة في الظهر، دم في البول", trigger: '12' },
      { value: '4', label: "صعوبة في التبول، التبول الليلي المتكرر", trigger: '14' },
      { value: '5', label: "حكة، التبول المؤلم", trigger: '16' },
    ],
  },
  {
    id: '8',
    message: "نعتقد انك مصاب (التهاب المثانة)",
    trigger: '9',
  },
  {
    id: '9',
    message: "العلاج:مضادات حيوية وشرب كميات كافية من الماء",
    end: true,
  },
  {
    id: '10',
    message: "نعتقد انك مصاب (التهاب الكلية)",
    trigger: '11',
  },
  {
    id: '11',
    message: "العلاج:مضادات حيوية قوية والراحة",
    end: true,
  },
  {
    id: '12',
    message: "نعتقد انك مصاب (حصوات الكلى )",
    trigger: '12',
  },
  {
    id: '13',
    message: "العلاج:شرب كميات كبيرة من الماء للتساعد في تمرير الحصوات، وفي بعض الحالات، الجراحة",
    end: true,
  },
  {
    id: '14',
    message: "نعتقد انك مصاب (التضخم البروستاتي)",
    trigger: '15',
  },
  {
    id: '15',
    message: "العلاج:الأدوية لتقليل حجم البروستاتا أو الجراحة في حالات أكثر تقدمًا",
    end: true,
  },
  {
    id: '16',
    message: "نعتقد انك مصاب (التهاب الأمعاء البولية)",
    trigger: '17',
  },
  {
    id: '17',
    message: "العلاج:مضادات حيوية وتجنب المثيرات",
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


const ChatbotUorolgy = () => (
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
    />;
  </ThemeProvider>
);

export default ChatbotUorolgy;

