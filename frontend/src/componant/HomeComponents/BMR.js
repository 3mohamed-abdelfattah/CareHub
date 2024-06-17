import React, { Fragment, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../AllBars/Header';
import Footer from '../AllBars/Footer';
import Sound from 'react-sound';
import NOtifis from "../Photos/sounds.mp3"

const Calculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [result, setResult] = useState(null);
  const [hovered, setHovered] = useState(false);
  const [playStatus, setPlayStatus] = useState(Sound.status.STOPPED);

  useEffect(() => {
    if (!window.localStorage.getItem('email')) {
      window.location = "/login";
    }
  }, [])

  const activityLevels = {
    sedentary: 1.2,
    lightlyActive: 1.375,
    moderatelyActive: 1.55,
    veryActive: 1.725,
    extremelyActive: 1.9,
  };

  const calculateCalories = () => {
    const bmr = gender === 'male'
      ? 10 * parseFloat(weight) + 6.25 * parseFloat(height) - 5 * parseFloat(age) + 5
      : 10 * parseFloat(weight) + 6.25 * parseFloat(height) - 5 * parseFloat(age) - 161;
    const totalCalories = Math.round(bmr * activityLevels[activityLevel]);
    setResult(totalCalories);
    // Display the result as a 
    setPlayStatus(Sound.status.PLAYING);
    toast.success(`السعرات الحرارية: ${totalCalories}`, {
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <Fragment>
      <Header />
      <div style={styles.pageContainer}>
        <div style={styles.calculatorContainer}>
          <h2 style={styles.heading}>اِحصل على جسدٍ مثاليٍ من خلال حساب دقيقٍ لسعرات جسمك</h2>
          <div style={styles.inputContainer}>
            <label style={styles.label}>الوزن (كغ) <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} style={styles.input} /></label>
            <label style={styles.label}>الطول (سم) <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} style={styles.input} /></label>
            <label style={styles.label}>العمر <input type="text" value={age} onChange={(e) => setAge(e.target.value)} style={styles.input} /></label>
            <label style={styles.label}>مستوى النشاط
              <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)} style={styles.input}>
                <option value="sedentary">ثابت</option>
                <option value="lightlyActive">خفيف</option>
                <option value="moderatelyActive">متوسط</option>
                <option value="veryActive">عالي</option>
                <option value="extremelyActive">رياضي بشدة عالي</option>
              </select>
            </label>
            <label style={styles.label}>الجنس
              <select value={gender} onChange={(e) => setGender(e.target.value)} style={styles.input}>
                <option value="male">ذكر</option>
                <option value="female">أنثى</option>
              </select>
            </label>
          </div>
          <button
            style={{
              ...styles.calculateBtn,
              backgroundColor: hovered ? '#92E3A9' : '#1F5357',
            }}
            onClick={calculateCalories}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            حساب
          </button>
        </div>
      </div>
      <Footer />
      <ToastContainer position="bottom-left" autoClose={3000} hideProgressBar />
      <Sound
        url={NOtifis}
        playStatus={playStatus}
        onFinishedPlaying={() => setPlayStatus(Sound.status.STOPPED)}
      />
    </Fragment>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: "5%",
    marginBottom: "5%",
  },
  calculatorContainer: {
    width: '60%',
    padding: '30px',
    textAlign: 'center',
  },
  heading: {
    color: 'black',
    fontSize: '28px',
    marginBottom: '25px',
    fontWeight: 'bolder',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '22px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    textAlign: 'right',
    fontSize: '15px',
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '20px',
  },
  calculateBtn: {
    width: '100%',
    padding: '12px',
    color: '#fff',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: '0.3s',
    border: '2px solid rgb(0, 0, 0)',
    fontWeight: 'bold',
  },
};

export default Calculator;
