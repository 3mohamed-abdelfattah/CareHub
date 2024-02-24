import React, { Fragment, useState } from 'react';
import Header from '../AllBars/Header';
import Footer from '../AllBars/Footer';

const Calculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [result, setResult] = useState(null);
  const [hovered, setHovered] = useState(false);

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
  };

  return (
    <Fragment>
      <Header />
      <div style={styles.pageContainer}>
        <div style={styles.calculatorContainer}>
          <h2 style={styles.heading}>حاسبة السعرات الحرارية</h2>
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
              <label style={styles.label}>الجنس
              <select value={gender} onChange={(e) => setGender(e.target.value)} style={styles.input}>
                <option value="male">ذكر</option>
                <option value="female">أنثى</option>
              </select>
            </label>
            </label>
            
          </div>
          <button
            style={{
              ...styles.calculateBtn,
              backgroundColor: hovered ? '#00ff228c' : '#032522bb',
            }}
            onClick={calculateCalories}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            حساب
          </button>
          {result && <p style={styles.result}>السعرات الحرارية: {result}</p>}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  calculatorContainer: {
    width: '60%',
    padding: '30px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
  },
  heading: {
    color: 'black',
    fontSize: '28px',
    marginBottom: '20px',
    fontWeight: 'bolder',
    fontStyle: 'oblique',
    fontFamily: 'serif',
    textShadow: '2px 2px lightgray',
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
    fontSize: '16px',
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '6px',
  },
  calculateBtn: {
    width: '100%',
    padding: '12px',
    color: '#fff',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: '0.3s',
    border: '2px solid rgb(0, 0, 0)',
    fontWeight: 'bold',
  },
  result: {
    marginTop: '25px',
    color: '#4caf50',
    fontSize: '18px',
    fontWeight: 'bold',
  },
};

export default Calculator;
