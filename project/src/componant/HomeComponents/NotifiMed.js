// NotifiMED.js

import React, { useState, useEffect, Fragment } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sound from 'react-sound';
import styled from 'styled-components';
import SOund from "../Photos/sound.mp3"
import Footer from '../AllBars/Footer';
import Header from '../AllBars/Header';
import axios from 'axios';

const sendSMS = async (to, message) => {
  const accountSid = 'AC4733132059226d63403ca72b235dd749';
  const authToken = '18cb20c7ce2dbac9f2ec2e297e34a6be';
  const twilioNumber = '+14302373415';

  const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;

  try {
    const response = await axios.post(
      url,
      `To=${encodeURIComponent(to)}&From=${encodeURIComponent(twilioNumber)}&Body=${encodeURIComponent(message)}`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString('base64')}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    console.log('SMS sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending SMS:', error);
  }
};



const AppContainer = styled.div`
  max-width: 100%;
  margin: 50px auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  text-align: center;

  h1 {
    color: #333;
  }

  input {
    width: 40%;
    padding: 8px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  button {
    background-color: #92E3A9;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 20%;

  }

  table {
    width: 100%;
    margin-top: 20px;
    border-collapse: collapse;
    text-align: left;

    th, td {
      padding: 12px;
      border-bottom: 1px solid #ddd;
    }

    th {
      background-color: #1F5357;
      color: white;
    }
  }
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    margin: 5px;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
  }

  .edit {
    background-color: #2196f3;
    color: white;
    border: 1px solid #2196f3;
  }

  .delete {
    background-color: #f44336;
    color: white;
    border: 1px solid #f44336;
  }
`;
const options = {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  }
const NotifiMED = () => {
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    dateTime: '',
    medName: '',
  });
  const [editIndex, setEditIndex] = useState(null);
  const [playStatus, setPlayStatus] = useState(Sound.status.STOPPED);

  const addAppointment = () => {
    if (editIndex !== null) {
      const updatedAppointments = [...appointments];
      updatedAppointments[editIndex] = newAppointment;
      setAppointments(updatedAppointments);
      toast.success('تم تعديل الموعد بنجاح',options);
      setNewAppointment({ dateTime: '', medName: '' });
      setEditIndex(null);
    } else {
      setAppointments([...appointments, newAppointment]);
      toast.success('تمت إضافة الموعد بنجاح',options);
      setNewAppointment({ dateTime: '', medName: '' });

    }
    setPlayStatus(Sound.status.PLAYING);
    // Exemplary usage
    sendSMS('+201101201745', 'Hello from your React app!');

  };

  const handleDelete = (index) => {
    const updatedAppointments = [...appointments];
    updatedAppointments.splice(index, 1);
    setAppointments(updatedAppointments);
    toast.error('تم حذف الموعد بنجاح',options);
    setPlayStatus(Sound.status.PLAYING);
    
  };

  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
    sendSMS('+201101201745', 'Hello from your React app!');

  }, [appointments]);

  useEffect(() => {
    appointments.forEach((appointment) => {
      const timeDiff = new Date(appointment.dateTime) - new Date();
      if (timeDiff > 0) {
        setTimeout(() => {
          toast.info(`حان وقت تناول ${appointment.medName}`,options);
          setPlayStatus(Sound.status.PLAYING);
        }, timeDiff);
      }
    });
  }, [appointments]);

  return (
    <Fragment>
    <Header/>
    <AppContainer>
    <h1>..لا تنسَ أدويتك! نساعدك على تنظيم مواعيد ألادوية</h1>
    <div>
      <input
      placeholder='اسم الدواء'
      style={{textAlign:"center"}}
        type="text"
        value={newAppointment.medName}
        onChange={(e) =>
          setNewAppointment({ ...newAppointment, medName: e.target.value })
        }
      />
    </div>
      <div>
        <input
        placeholder='اسم الدواء'
        style={{textAlign:"center"}}
          type="datetime-local"
          value={newAppointment.dateTime}
          onChange={(e) =>
            setNewAppointment({ ...newAppointment, dateTime: e.target.value })
          }
        />
      </div>
      <button onClick={addAppointment}>إضافة موعد</button>
      <h2>:المواعيد المحددة</h2>
      <table>
        <thead>
          <tr>
          <th>خيارات</th>
          <th>التاريخ والوقت</th>
          <th>اسم الدواء</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
            <td>
            <ActionButtons>
            <button className="delete" onClick={() => handleDelete(index)}>
            حذف
            </button>
            <button className="edit" onClick={() => setNewAppointment(appointment)}>
              تعديل
            </button>
                    </ActionButtons>
                    </td>
                    <td>{appointment.dateTime}</td>
                    <td>{appointment.medName}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
      <Sound
        url={SOund}
        playStatus={playStatus}
        onFinishedPlaying={() => setPlayStatus(Sound.status.STOPPED)}
      />
      </AppContainer>
      <Footer/>
    </Fragment>
  );
};

export default NotifiMED;
