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
      message: 'مرحبًا {previousValue}، يمكنني المساعده في تشخيصك في بعض امراض العظام الاكثر شيوعاً وترشيح علاج مناسب لك',
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
            { value: '1', label: 'آلام في المفاصل، تورم في المفاصل، تيبس في المفاصل، إعياء', trigger: '8' },
            { value: '2', label: ' آلام في الظهر، كسور في العظام، فقدان الطول، انحناء الظهر', trigger: '10' },
            { value: '3', label: ' آلام في المفاصل، تيبس في المفاصل، تورم في المفاص', trigger: '12' },
            { value: '4', label: ' آلام في أسفل الظهر، تيبس في أسفل الظهر، صعوبة في الانحناء أو الوقوف', trigger: '14' },
          ],
        },
        {
          id: '8',
          message: 'نعتقد انك مصاب بالروماتويد',
          trigger: '9',
        },
        {
          id: '9',
          message: 'العلاج: الأدوية، العلاج الطبيعي، الجراحة في حالات متقدمة',
          end: true,
        },
        {
          id: '10',
          message: 'نعتقد انك مصاب بهشاشة العظام',
          trigger: '11',
        },
        {
          id: '11',
          message: 'العلاج :البيسفوسفونات البيسفوسفونات هي أدوية هشاشة العظام الأكثر انتشارًا التي يصفها الأطباء للرجال والنساء الذين يعانون من هشاشة العظام', 
          end: true,
        },
        {
          id: '12',
          message: 'نعتقد انك مصاب بالتهاب المفاصل',
          trigger: '13',
        },
        {
          id: '13',
          message: 'العلاج : أدوية مثل سالفاسالازين (Azulfidine) أو ميثوتريكسات (Trexall) أو إيتانيرسيبت (Enbrel) يمكنها المساعدة في تخفيف الألم والتورم وتحسين القدرة على الحركة. وفي حالات متقدمة، قد يحتاج المريض إلى جراحة لتبديل المفصل المتضرر',
          end: true,
        },
        {
          id: '14',
          message: 'نعتقد انك مصاب بالانزلاق الغضروفي',
          trigger: '15',
        },
        {
          id: '15',
          message: 'العلاج: العلاج الطبيعي، الأدوية، الجراحة في حالات متقدمة',
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


      const ChatbotBone = () => (
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

      export default ChatbotBone;

