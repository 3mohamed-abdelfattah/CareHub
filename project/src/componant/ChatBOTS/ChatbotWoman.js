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
          return 'يرجي ادخال اسمك';}
          else return true;
      },



    },
    {
      id: '3',
      message: 'مرحبًا {previousValue}، يمكنني المساعده في تشخيصك في بعض الأمراض النسائية الاكثر شيوعاً وترشيح علاج مناسب لك',
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
          { value: '1', label: "تورم في الثدي، تغيير في حجم الثدي، ألم", trigger: '8' },
          { value: '2', label: " ألم في منطقة الحوض، تغيير في دورة الحيض", trigger: '10' },
          { value: '3', label: "اضطرابات في التبويض، تضيق في قنوات فالوب، مشاكل هرمونية", trigger: '12' },
          { value: '4', label: "تقلصات مبكرة، نزول دم، ضغط في الحوض", trigger: '14' },
          { value: '5', label: "الهبوط الهرموني، الهبوط العاطفي، فقدان الحيوية", trigger: '16' },
        ],
      },

      {
        id: '8',
        message: "نعتقد انك مصابه (سرطان الثدي)",
        trigger: '9',
      },
      {
        id: '9',
        message: "العلاج:فحص الثدي الدوري، الأشعة والعلاج الكيميائي",
        end:true,
      },


      {
        id: '10',
        message: "نعتقد انك مصابه (التهاب المبيض)",
        trigger: '11',
      },
      {
        id: '11',
        message: "العلاج:فحص الدم، الأشعة، والمضادات الحيوية",
        end:true,
      },



      {
        id: '12',
        message: "نعتقد انك مصابه (العقم)",
        trigger: '11',
      },
      {
        id: '13',
        message: "العلاج:علاج أسباب العقم المحددة، العلاج الهرموني، التلقيح الصناعي",
        end:true,
      },


      {
        id: '14',
        message: "نعتقد انك مصابه (الولادة المبكرة)",
        trigger: '11',
      },
      {
        id: '15',
        message: "العلاج: الرعاية الجيدة أثناء الحمل، المتابعة الدورية",
        end:true,
      },


      {
        id: '16',
        message: "نعتقد انك مصابه (التغيرات الهرمونية في سن اليأس)",
        trigger: '11',
      },
      {
        id: '17',
        message: "العلاج:الهرمونات التعويضية، نمط حياة صحي",
        end:true,
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


      const ChatbotWoman = () => (
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

      export default ChatbotWoman;

