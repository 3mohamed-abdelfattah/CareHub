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
    message: 'مرحبًا {previousValue}، يمكنني المساعده في تشخيصك في بعض امراض الغدد الاكثر شيوعاً وترشيح علاج مناسب لك',
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
      { value: '1', label: 'تورم في العنق، صعوبة في البلع، تغير في الوزن دون سبب واضح، تعب غير مبرر', trigger: '8' },
      { value: '2', label: 'تسارع في ضربات القلب، ارتفاع في درجة حرارة الجسم، هزات الجسم، فقدان في الوزن', trigger: '10' },
      { value: '3', label: 'تعب غير عادي، كثرة التعرق ليلاً، تغير في وزن الجسم، ارتفاع في درجة حرارة الجسم', trigger: '12' },
      { value: '4', label: 'فقدان الشهية، ضعف عام، زيادة في حجم الغدة الدرقية، تغير في وزن الجسم', trigger: '14' },
      { value: '5', label: 'جفاف في الفم والحلق، صعوبة في البلع، تغير في حجم الغدة الدرقية، تعب غير مبرر', trigger: '16' },
    ],
  },
  {
    id: '8',
    message: 'نعتقد أن هناك اضطرابًا في الغدة الدرقية',
    trigger: '9',
  },
  {
    id: '9',
    message: 'العلاج: يتضمن العلاج استخدام الأدوية المثبطة للغدة الدرقية ومتابعة دورية مع الطبيب لمراقبة الحالة',
    end: true,
  },
  {
    id: '10',
    message: 'نعتقد أن هناك اضطرابًا في الغدة الكظرية',
    trigger: '11',
  },
  {
    id: '11',
    message: 'العلاج: يتضمن العلاج استخدام الأدوية التي تعزز وظيفة الغدة الكظرية ومتابعة دورية مع الطبيب لضبط الجرعات',
    end: true,
  },
  {
    id: '12',
    message: 'نعتقد أن هناك اضطرابًا في الباراتيروئيد',
    trigger: '13',
  },
  {
    id: '13',
    message: 'العلاج: يشمل العلاج إدارة الهرمونات والمتابعة الدورية مع الطبيب لتقييم الاستجابة',
    end: true,
  },
  {
    id: '14',
    message: 'نعتقد أن هناك اضطرابًا في الغدة النخامية',
    trigger: '15',
  },
  {
    id: '15',
    message: 'العلاج: يتضمن العلاج استخدام الهرمونات المفقودة ومتابعة دورية مع الطبيب لضبط الجرعات',
    end: true,
  },
  {
    id: '16',
    message: 'نعتقد أن هناك اضطرابًا في الغدة الكظرية',
    trigger: '17',
  },
  {
    id: '17',
    message: 'العلاج: يتضمن العلاج استخدام الأدوية التي تعزز وظيفة الغدة الكظرية ومتابعة دورية مع الطبيب لضبط الجرعات',
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

const ChatbotGland = () => (
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

export default ChatbotGland;

