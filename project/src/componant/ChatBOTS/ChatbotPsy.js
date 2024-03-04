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
      message: 'مرحبًا {previousValue}، يمكنني المساعده في تشخيصك في بعض الامراض النفسيه الاكثر شيوعاً وترشيح علاج مناسب لك',
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
            { value: '1', label: 'تشوش في التفكير، صعوبة في التركيز، تغير في المزاج، عدم القدرة على التحمل النفسي', trigger: '8' },
            { value: '2', label: 'ألم نفسي، انخراط اجتماعي ضعيف، ضغوط نفسية، اضطرابات النوم، توتر زائد', trigger: '10' },
            { value: '3', label: 'شعور بالعزلة، فقدان الاهتمام بالأشياء، تغيرات في الشهية، هلع، تشوش في التفكير', trigger: '12' },
            { value: '4', label: 'اضطرابات في الذاكرة، صعوبة في اتخاذ القرارات، تشوش في الفهم، هموم زائدة', trigger: '14' },
            { value: '5', label: 'توتر عصبي، رهاب اجتماعي، اضطرابات في الأداء الوظيفي، قلق زائد', trigger: '16' },
          ],
        },
        {
          id: '8',
          message: 'نعتقد أنك تعاني من اضطرابات نفسية',
          trigger: '9',
        },
        {
          id: '9',
          message: 'العلاج: البحث عن الدعم النفسي المناسب والتحدث مع أخصائي علاج نفسي للتشخيص الدقيق ووضع خطة علاجية مناسبة', 
          end: true,
        },
        {
          id: '10',
          message: 'نعتقد أنك قد تعاني من اضطرابات نفسية أكثر تعقيدًا',
          trigger: '11',
        },
        {
          id: '11',
          message: 'العلاج: التوجه إلى أخصائي نفسي لتقييم أعمق وتحديد الخطوات العلاجية المناسبة لحالتك',
          end: true,
        },
        {
          id: '12',
          message: 'نعتقد أنك تعاني من اضطرابات نفسية معينة',
          trigger: '13',
        },
        {
          id: '13',
          message: 'العلاج: البحث عن الدعم النفسي المتخصص والالتزام بجلسات العلاج للتعامل مع التحديات النفسية',
          end: true,
        },
        {
          id: '14',
          message: 'نعتقد أنك تعاني من ضغوط نفسية وتوتر',
          trigger: '15',
        },
        {
          id: '15',
          message: 'العلاج: تعلم استراتيجيات التحكم في التوتر واستشارة أخصائي علاج نفسي لدعمك في التغلب على التحديات',
          end: true,
        },
        {
          id: '16',
          message: 'نعتقد أنك تعاني من اضطرابات القلق',
          trigger: '17',
        },
        {
          id: '17',
          message: 'العلاج: التوجه إلى أخصائي علاج نفسي لتقييم وتحديد العلاج المناسب لتحسين حالتك النفسية',
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


      const ChatbotPhy = () => (
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

      export default ChatbotPhy;

