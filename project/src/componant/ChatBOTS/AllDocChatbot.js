import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';
import "./ChatHome.css"
import { Link } from "react-router-dom";

const StyledFragment = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  textAlign: 'center',
  fontFamily: 'Cairo',
  padding: 5,
  margin: 1,
  border: '2px solid #1F5357',
  borderRadius: 5,
  backgroundColor: 'white',
};

const ColumnContainer = {
  flexDirection: 'column',
};

const RowContainer = {
  display: 'flex',
  justifyContent: 'space-around',
  width: '100%',
};

const Specialization = ({ to, children }) => (
  <Link to={to}>
    <div style={{ ...StyledFragment, width: '100px' }}>
      {children}
    </div>
  </Link>
);

const steps = [
  {
    id: '1',
    message: '...مرحبا! يسعدنا مساعدتك في العثور على الطبيب المناسب. يرجى اختيار التخصص الطبي الذي ترغب في زيارته',
    trigger: '2',
  },
  {
    id: '2',
    component: (
      <div style={{ ...ColumnContainer }}>
        <div style={{ ...RowContainer }}>
          <Specialization to="/surgery">جراحة</Specialization>
          <Specialization to="/heart">قلب</Specialization>
          <Specialization to="/eye">عيون</Specialization>
        </div>
        <div style={{ ...RowContainer }}>
          <Specialization to="/chest">جهاز تنفسي</Specialization>
          <Specialization to="/brain">مخ وأعصاب</Specialization>
          <Specialization to="/nose">أنف وأذن</Specialization>
        </div>
        <div style={{ ...RowContainer }}>
          <Specialization to="/stomch">باطنه</Specialization>
          <Specialization to="/skin">جلديه</Specialization>
          <Specialization to="/bute">تجميل</Specialization>
        </div>
        <div style={{ ...RowContainer }}>
          <Specialization to="/woman">نساء وتوليد</Specialization>
          <Specialization to="/child">اطفال</Specialization>
          <Specialization to="/food">تغذيه</Specialization>
        </div>
        <div style={{ ...RowContainer }}>
          <Specialization to="/nutural">علاج طبيعي</Specialization>
          <Specialization to="/gland">غدد</Specialization>
          <Specialization to="/psychological">نفسي</Specialization>
        </div>
        <div style={{ ...RowContainer }}>
          <Specialization to="/urologist">مسالك بوليه</Specialization>
          <Specialization to="/teeth">أسنان</Specialization>
        </div>
      </div>
    ),
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

const AllDocChatbot = () => (
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

export default AllDocChatbot;

