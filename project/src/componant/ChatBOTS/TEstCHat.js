import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';
import "./ChatHome.css"


















    const steps = [


        {
            id: '1',
            message: 'What is your name?',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'fsssdsasc',
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


      const TESTCHAt = () => (
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

      export default TESTCHAt;

