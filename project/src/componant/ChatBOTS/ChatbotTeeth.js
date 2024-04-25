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
    message: 'مرحبًا {previousValue}، يمكنني المساعده في تشخيصك في بعض امراض الأسنان الاكثر شيوعاً وترشيح علاج مناسب لك',
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
      { value: '1', label: "ألم عند تناول الطعام الحلو، حساسية", trigger: '8' },
      { value: '2', label: "نزيف اللثة، احمرار، تورم", trigger: '10' },
      { value: '3', label: "ألم حاد، تورم، حساسية للحرارة", trigger: '12' },
      { value: '4', label: "حساسية للبرد والحار، تغير لون الأسنان", trigger: '14' },
      { value: '5', label: "صعوبة في المضغ، ألم في الفك", trigger: '16' },
    ],
  },
  {
    id: '8',
    message: "نعتقد انك مصاب (تسوس الأسنان)",
    trigger: '9',
  },
  {
    id: '9',
    message: "العلاج:حشو الأسنان",
    end: true,
  },
  {
    id: '10',
    message: "نعتقد انك مصاب (التهاب اللثة)",
    trigger: '11',
  },
  {
    id: '11',
    message: "العلاج:تنظيف اللثة والعناية الفموية الجيدة",
    end: true,
  },
  {
    id: '12',
    message: "نعتقد انك مصاب (تسوس العظم الفكي)",
    trigger: '13',
  },
  {
    id: '13',
    message: "العلاج:جراحة لتصريف الخراج وعلاج مضاد للبكتيريا",
    end: true,
  },
  {
    id: '14',
    message: "نعتقد انك مصاب (تآكل المينا)",
    trigger: '15',
  },
  {
    id: '15',
    message: "العلاج:حماية الأسنان واستخدام معاجين خاصة",
    end: true,
  },
  {
    id: '16',
    message: "نعتقد انك مصاب (انحراف الفك )",
    trigger: '17',
  },
  {
    id: '17',
    message: "العلاج:تقويم الأسنان",
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


const ChatbotTeeth = () => (
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

export default ChatbotTeeth;

