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
      message: 'مرحبًا {previousValue}، يمكنني المساعده في تشخيصك في بعض امراض الباطنه الاكثر شيوعاً وترشيح علاج مناسب لك',
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
        { value: '1', label: "ألم في الصدر، ضيق في التنفس، خفقان القلب، التعب، الدوخة.", trigger: '8' },
        { value: '2', label: "العطش الشديد، كثرة التبول، التعب، فقدان الوزن، جفاف الفم", trigger: '10' },
        { value: '3', label: "حرقة المعده الشعور بالإمساك اوالإسهال او ألم في المعدة", trigger: '12' },
        { value: '4', label: "تورم في القدمين والكاحلين او تغير في كمية التبول او وجود دم في البول", trigger: '14' },
        { value: '5', label: "ألم في الصدر و خفقان القلب و ضيق في التنفس", trigger: '16' },
      ],
    },
    {
      id: '8',
      message: "نعتقد انك مصاب بأمراض القلب",
      trigger: '9',
    },
    {
      id: '9',
      message: "العلاج:يعتمد على نوع مرض القلب، ويشتمل على الأدوية، الجراحة، تغيير نمط الحياة",
      end: true,
    },
    {
      id: '10',
      message: "نعتقد انك مصاب بالسكري",
      trigger: '11',
    },
    {
      id: '11',
      message: "العلاج:هناك العديد من أنواع الأدوية الفموية المختلفة التي يمكن استخدامها لعلاج مرض السكري من النوع 2، ويمكن أن تكون الحقن اليومية بالأنسولين ضرورية في بعض الحالات و تعمل هذه الأدوية على خفض مستويات السكر في الدم. ومن المهم أيضاً تغيير نمط الحيا",
      end: true,
    },
    {
      id: '12',
      message: "نعتقد انك مصاب بأمراض الجهاز الهضمي",
      trigger: '13',
    },
    {
      id: '13',
      message: "العلاج:شرب الماء بكثرة، وتناول الأعشاب، واستخدام الكمادات الدافئة مضادات الحموضة، ومضادات الإسهال، ومضادات القيء",
      end: true,
    },
    {
      id: '14',
      message: "نعتقد انك مصاب بأمراض الكلى",
      trigger: '15',
    },
    {
      id: '15',
      message: "العلاج:مثل تناول الكثير من الفواكه والخضروات والحبوب الكاملة و الادويه مثل مسكنات الألم ومضادات الاحتقان ومضادات السعال و شرب الكثير من الماء",
      end: true,
    },
    {
      id: '16',
      message: "نعتقد انك مصاب بأمراض القلب",
      trigger: '17',
    },
    {
      id: '17',
      message: "العلاج: تناول الأدوية: مثل مسكنات الألم ومضادات الاحتقان ومضادات السعال اتباع نظام غذائي صحي: مثل تناول الكثير من الفواكه والخضروات والحبوب الكاملة",
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



      const ChatbotStomch = () => (
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

      export default ChatbotStomch;

