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
          message: 'مرحبًا {previousValue}، يمكنني المساعده في تشخيصك في بعض امراض الجلديه الاكثر شيوعاً وترشيح علاج مناسب لك',
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
              { value: '1', label: 'ظهور بثور ورؤوس سوداء وبيضاء على الوجه والظهر', trigger: '8' },
              { value: '2', label: 'التهاب واحمرار وتشقق وحكة في بقع محددة من الجلد', trigger: '10' },
              { value: '3', label: 'ظهور بقع حمراء سميكة ومتقشرة على الجلد', trigger: '12' },
              { value: '4', label: 'ظهور بثور صغيرة مملوءة بالسائل على الشفاه أو حول الفم', trigger: '14' },
              { value: '5', label: 'ظهور نتوءات صغيرة وخشنة على الجلد، خاصة في اليدين أو القدمين أو الأعضاء التناسلية', trigger: '16' },
            ],
          },

          {
            id: '8',
            message: "نعتقد انك مصاب (حب الشباب)",
            trigger: '9',
          },
          {
            id: '9',
            message: "العلاج:تنظيف البشرة بمنظفات خفيفة، تجنب العناصر المهيجة والدهنية، استخدام كريمات أو أدوية مضادة للالتهاب أو البكتيريا أو الهرمونات حسب الحالة",
            end:true,
          },


          {
            id: '10',
            message: "نعتقد انك مصاب (الإكزيما)",
            trigger: '11',
          },
          {
            id: '11',
            message: "تجنب العوامل المسببة للحساسية أو الالتهاب، ترطيب البشرة بمراهم أو كريمات، استخدام مضادات الهيستامين أو الكورتيزون أو المناعة حسب الحالة",
            end:true,
          },



          {
            id: '12',
            message: "نعتقد انك مصاب (الصدفية)",
            trigger: '13',
          },
          {
            id: '13',
            message: "تجنب العوامل المسببة للتهيج أو الجفاف، ترطيب البشرة بمراهم أو كريمات، استخدام أدوية مضادة للالتهاب أو الجهاز المناعي أو الفيتامينات حسب الحالة",
            end:true,
          },


          {
            id: '14',
            message: "نعتقد انك مصاب (القرحة الباردة)",
            trigger: '15',
          },
          {
            id: '15',
            message: "تجنب العوامل المسببة للتفاعل الفيروسي مثل التعب أو الإجهاد أو التعرض للشمس، تطبيق كريمات أو أدوية مضادة للفيروسات حسب الحالة",
            end:true,
          },


          {
            id: '16',
            message: "نعتقد انك مصاب (الثآليل)",
            trigger: '17',
          },
          {
            id: '17',
            message: "تجنب العدوى أو الانتشار بالتغطية أو التعقيم أو التجفيف، استخدام مواد كيميائية أو تجميد أو جراحة لإزالة الثآليل حسب الحالة",
            end:true,
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



      const ChatbotSkin = () => (
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

      export default ChatbotSkin;

