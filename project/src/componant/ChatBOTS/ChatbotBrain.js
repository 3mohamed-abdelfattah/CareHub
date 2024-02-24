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
      message: 'مرحبًا {previousValue}، يمكنني المساعده في تشخيصك في بعض امراض المخ والأعصاب الاكثر شيوعاً وترشيح علاج مناسب لك',
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
            { value: '1', label: "ألم شديد في أحد جانبي الرأس، غثيان وقيء، حساسية للضوء والصوت", trigger: '8' },
            { value: '2', label: "رتج، بطء في الحركة، تيبس في العضلات، صعوبة في التوازن والمشي، اضطرابات النوم، تغيرات في الوظائف الإدراكية", trigger: '10' },
            { value: '3', label: " تنميل أو وخز في الأطراف، ضعف في العضلات، إجهاد، صعوبة في الرؤية، مشاكل في التوازن والمشي، اضطرابات المثانة والأمعاء", trigger: '12' },
            { value: '4', label: "خدر أو ضعف مفاجئ في الوجه أو الذراع أو الساق، صعوبة في الكلام أو فهمه، تدلي في جانب واحد من الوجه، صعوبة في الرؤية في إحدى العينين أو كلتيهما، صعوبة في المشي، فقدان التوازن، الصداع الشديد", trigger: '14' },
          ],
        },
        {
          id: '8',
          message: "نعتقد انك مصاب بالصداع النصفى",
          trigger: '9',
        },
        {
          id: '9',
          message: "يمكن علاج الصداع النصفي بالأدوية و مسكنات الالم والعلاجات الطبيعية",
          end: true,
        },
        {
          id: '10',
          message: "نعتقد انك مصاب بمرض باركنسون",
          trigger: '11',
        },
        {
          id: '11',
          message: "يمكن علاج مرض باركنسون بالأدوية و العلاج الطبيعي والتغذية السليمة والعلاج النفسي",
          end: true,
        },
        {
          id: '12',
          message: "نعتقد انك مصاب بمرض التصلب العصبي المتعدد",
          trigger: '13',
        },
        {
          id: '13',
          message: "هناك أدوية يمكن أن تساعد في تعديل مسار المرض وتخفيف الأعراض و هناك أدوية يمكن أن تساعد في تعديل مسار المرض وتخفيف الأعراض ولكن يجس استشاره الطبيب للحصول على العلاج المناسب",
          end: true,
        },
        {
          id: '14',
          message: "نعتقد انك مصاب بالسكتة الدماغية",
          trigger: '15',
        },
        {
          id: '15',
          message: "يجب الذهاب الى المستشفى على الفور والاتصال بالاسعاف لانقاذ الحالة",
          end: true,
        },
      ];
  

      const theme = {
        background: '#f5f8fb',
        fontFamily: 'Cairo',
        headerBgColor: 'rgba(93, 186, 253, 0.7)',
        headerFontColor: '#000',
        headerFontSize: '20px',
        botBubbleColor: 'rgba(93, 186, 253, 0.7)',
        botFontColor: '#000',
        userBubbleColor: 'lightgrey',
        userFontColor: '#000',
        navigationPrevColor: '#5dba', // لون الرابط السابق
        navigationNextColor: '#5dfd',
      };


      const ChatbotBrain = () => (
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

      export default ChatbotBrain;

