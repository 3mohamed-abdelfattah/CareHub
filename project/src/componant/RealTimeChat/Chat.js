import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../AllBars/Header';

const SendMessageForm = ({ receiverID }) => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem('authToken'); // Retrieve authentication token from localStorage
      const config = {
        headers: {
          'Authorization': `Bearer ${token}` // Include token in Authorization header
        }
      };
      const response = await axios.get(`http://localhost:5000/api/messages/660218e7b6bb75293b801c4a`, config);
      setMessages(response.data); // Update state with received messages
    } catch (error) {
      console.error('Error fetching messages:', error);
      if (error.response && error.response.status === 401) {
        setError('You are not authorized to fetch messages. Please log in.');
      } else {
        setError('An error occurred while fetching messages. Please try again later.');
      }
    }
  };

  return (
    <div>
      <Header />
      <div style={{ marginTop: '8%' }}>
        <h2>Messages:</h2>
        {messages.map((message, index) => (
          <div key={index}>{message.text}</div>
        ))}
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </div>
      <div className="map_gogle">
      <iframe
        title="موقع المطعم"
        width="50%"
        height="50%"
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3486.9544948430876!2d31.099319224410525!3d29.077489625424647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145a271b24fb7977%3A0x7aa93b8fdcaabbbb!2z2KjYsdisINin2YTYrdmK2KfZhw!5e0!3m2!1sar!2seg!4v1711564344080!5m2!1sar!2seg"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    </div>
  );
};

export default SendMessageForm;
