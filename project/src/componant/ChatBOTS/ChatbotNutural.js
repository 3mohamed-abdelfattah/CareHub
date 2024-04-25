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
    message: 'مرحبًا {previousValue}، يمكنني المساعده في تشخيصك في بعض مشاكل العلاج الطبيعي الاكثر شيوعاً وترشيح علاج مناسب لك',
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
      { value: '1', label: 'ألم في العضلات، صعوبة في الحركة، تقلصات عضلية، خشونة في المفاصل', trigger: '8' },
      { value: '2', label: 'ألم في الظهر، تنميل في الأطراف، صعوبة في التحرك، تصلب في العضلات', trigger: '10' },
      { value: '3', label: 'ألم في المفاصل، احمرار، انتفاخ، صعوبة في الحركة', trigger: '12' },
      { value: '4', label: 'تشنجات عضلية، صعوبة في الحركة، ألم مفاجئ، تورم في المنطقة المصابة', trigger: '14' },
      { value: '5', label: 'صعوبة في التوازن، ألم في المفاصل، ضعف عام، تصلب في العضلات', trigger: '16' },
    ],
  },
  {
    id: '8',
    message: 'نعتقد أنك قد تعاني من مشاكل عضلية',
    trigger: '9',
  },
  {
    id: '9',
    message: 'العلاج: يشمل العلاج الطبيعي وتقوية العضلات المتضررة. يُفضل مراجعة أخصائي علاج طبيعي لتقييم الحالة وتحديد البرنامج المناسب',
    end: true,
  },
  {
    id: '10',
    message: 'نعتقد أنك قد تعاني من مشاكل في العمود الفقري',
    trigger: '11',
  },
  {
    id: '11',
    message: 'العلاج: يشمل العلاج الطبيعي، التدليك، وتمارين تقوية الظهر. من المهم مراجعة أخصائي علاج طبيعي للتشخيص والعلاج اللازم',
    end: true,
  },
  {
    id: '12',
    message: 'نعتقد أنك قد تعاني من التهاب المفاصل',
    trigger: '13',
  },
  {
    id: '13',
    message: 'العلاج: يشمل استخدام الأدوية المضادة للالتهاب، والتمارين الطبية، وفي بعض الحالات يُنصح بعلاج طبيعي لتحسين مرونة المفاصل',
    end: true,
  },
  {
    id: '14',
    message: 'نعتقد أنك قد تعاني من تمزق في العضلات أو الأربطة',
    trigger: '15',
  },
  {
    id: '15',
    message: 'العلاج: راحة للمنطقة المتضررة، تطبيق الثلج، وفي بعض الحالات يحتاج المريض إلى جلسات علاج طبيعي لتقوية العضلات وتحسين التوازن',
    end: true,
  },
  {
    id: '16',
    message: 'نعتقد أنك قد تعاني من مشاكل في الجهاز العصبي',
    trigger: '17',
  },
  {
    id: '17',
    message: 'العلاج: يتضمن علاج طبيعي مخصص لتحسين التوازن والتنس coordination، بالإضافة إلى تمارين تقوية للعضلات. يجب مراجعة أخصائي علاج طبيعي للتقييم والعلاج',
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


const ChatbotNutral = () => (
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

export default ChatbotNutral;

