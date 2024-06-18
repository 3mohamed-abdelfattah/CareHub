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
    message: 'مرحبًا {previousValue}، يمكنني المساعده في تشخيصك في بعض امراض الانف والاذن الاكثر شيوعاً وترشيح علاج مناسب لك',
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
      { value: '1', label: "سيلان الأنف، احتقان الأنف، العطس، الحكة في الأنف، ألم في الوجه", trigger: '8' },
      { value: '2', label: "انسداد الأنف، ألم في الوجه، إفرازات أنفية سميكة، صداع، سعال، ارتفاع في درجة الحرارة", trigger: '10' },
      { value: '3', label: "سيلان الأنف، احتقان الأنف، العطس، الحكة في الأنف، حكة في العين، دموع", trigger: '12' },
      { value: '4', label: "ألم في الأذن، حمى، صعوبة في السمع، إفرازات من الأذن", trigger: '14' },
      { value: '5', label: "صعوبة في سماع الأصوات، طنين في الأذن، عدم وضوح الكلام", trigger: '16' },
    ],
  },
  {
    id: '8',
    message: "نعتقد انك مصاب بالتهاب الأنف",
    trigger: '9',
  },
  {
    id: '9',
    message: "العلاج : يعتمد على نوع التهاب الأنف (حساسية، فيروسي، بكتيري)العلاجات المنزلية: شرب الكثير من السوائل، استخدام بخاخات الأنف المالحة، غسل الأنف بالماء والملح",
    end: true,
  },
  {
    id: '10',
    message: "نعتقد انك مصاب بالتهاب الجيوب الأنفية",
    trigger: '11',
  },
  {
    id: '11',
    message: "مضادات حيوية (في حالة العدوى البكتيرية)، مضادات احتقان، مسكنات الألم، بخاخات الأنف الستيرويدية.العلاجات المنزلية: شرب الكثير من السوائل، استخدام بخاخات الأنف المالحة، غسل الأنف بالماء والملح، وضع كمادات دافئة على الوجه.",
    end: true,
  },
  {
    id: '12',
    message: "نعتقد انك مصاب بحساسية الأنف",
    trigger: '13',
  },
  {
    id: '13',
    message: "العلاج: مضادات الهيستامين، بخاخات الأنف الستيرويدية، قطرات العين المضادة للحساسية.العلاجات المنزلية: تجنب مسببات الحساسية، شرب الكثير من السوائل، استخدام بخاخات الأنف المالحة، غسل الأنف بالماء والملح",
    end: true,
  },
  {
    id: '14',
    message: "نعتقد انك مصاب بالتهاب الأذن الوسطى",
    trigger: '15',
  },
  {
    id: '15',
    message: "العلاج: مضادات حيوية (في حالة العدوى البكتيرية)، مسكنات الألم، قطرات الأذن.العلاجات المنزلية: شرب الكثير من السوائل، وضع كمادات دافئة على الأذن.",
    end: true,
  },
  {
    id: '16',
    message: "نعتقد انك مصاب بفقدان السمع",
    trigger: '17',
  },
  {
    id: '17',
    message: "العلاج: يعتمد على سبب فقدان السمع (عمري، مرضي، وراثي، مكان الإصابة).العلاجات المنزلية: استخدام سماعات الأذن، العلاج الطبيعي، العلاج السلوكي، العلاج النفسي.",
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


const ChatbotNose = () => (
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
      width="40%"
      style={{ height: '70%' }}
    />
  </ThemeProvider>
);

export default ChatbotNose;

