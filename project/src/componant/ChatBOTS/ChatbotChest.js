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
    message: 'مرحبًا {previousValue}، يمكنني المساعده في تشخيصك في بعض امراض الصدريه الاكثر شيوعاً وترشيح علاج مناسب لك',
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
      { value: '1', label: "نوبات من ضيق التنفس والسعال والصفير والأزيز في الصدر", trigger: '8' },
      { value: '2', label: "التهاب في الرئة أو جزء منها، نتيجة عدوى بكتيرية أو فيروسية أو فطرية", trigger: '10' },
      { value: '3', label: "ضيق في التنفس وسعال وبلغم وتعب، نتيجة التدخين أو التلوث أو العوامل الوراثية", trigger: '12' },
      { value: '4', label: "ضيق في التنفس وتعب ودوخة وألم في الصدر وانتفاخ في الساقين", trigger: '14' },
      { value: '5', label: "سعال وبلغم وحمى وفقدان الوزن والشهية والتعرق الليلي، نتيجة عدوى بكتيرية تسمى المتفطرة السلية", trigger: '16' },
    ],
  },
  {
    id: '8',
    message: "نعتقد انك مصاب (الربو)",
    trigger: '9',
  },
  {
    id: '9',
    message: "العلاج:مضادات الهيستامين، موسعات الشعب الهوائية، الكورتيزون، الإبر المناعية",
    end: true,
  },
  {
    id: '10',
    message: "نعتقد انك مصاب (التهاب الرئة)",
    trigger: '11',
  },
  {
    id: '11',
    message: "العلاج:المضادات الحيوية أو الفيروسية أو الفطرية حسب نوع العدوى، الراحة، شرب السوائل، تناول مسكنات الألم وخافضات الحرارة",
    end: true,
  },
  {
    id: '12',
    message: "نعتقد انك مصاب (مرض الانسداد الرئوي المزمن)",
    trigger: '13',
  },
  {
    id: '13',
    message: "العلاج:تجنب التدخين والمواد المهيجة، استخدام موسعات الشعب الهوائية والأكسجين والمضادات الالتهابية والمضادات الحيوية حسب الحالة، العلاج الطبيعي والتمارين التنفسية",
    end: true,
  },
  {
    id: '14',
    message: "نعتقد انك مصاب (ارتفاع ضغط الدم الرئوي)",
    trigger: '15',
  },
  {
    id: '15',
    message: "العلاج:الأدوية المخفضة للضغط والمضادة للتخثر والموسعة للأوعية الدموية، الأكسجين، العلاج الجراحي أو القسطرة حسب الحالة",
    end: true,
  },
  {
    id: '16',
    message: "نعتقد انك مصاب (السل)",
    trigger: '17',
  },
  {
    id: '17',
    message: "العلاج:المضادات الحيوية لفترات طويلة، الراحة، التغذية السليمة، العزل الصحي",
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

const ChatbotChest = () => (
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

export default ChatbotChest;

