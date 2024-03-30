import React, { useState, useEffect, Fragment } from 'react';
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography, TextField, Button, Input } from '@mui/material';
import Footer from '../AllBars/Footer';
import Header from '../AllBars/Header';
import AV1 from '../Photos/avatar1.jpg';
import AV2 from '../Photos/avatar9.jpg';
import AV3 from '../Photos/avatar2.jpg';
import AV4 from '../Photos/avatar3.jpg';
import AV5 from '../Photos/avatar4.jpg';
import AV6 from '../Photos/avatar5.jpg';
import AV7 from '../Photos/avatar6.jpg';
import AV8 from '../Photos/avatar7.jpg';
import AV9 from '../Photos/avatar8.jpg';
import axios from 'axios';

const avatarImages = [AV1, AV2, AV3, AV4, AV5, AV6, AV7, AV8, AV9];

const MessagesComponent = () => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [userAvatars, setUserAvatars] = useState({});

  const userID = window.localStorage.getItem('_id');

  useEffect(() => {
    if (selectedUser) {
      fetch(`http://localhost:5000/api/messages/${userID}/${selectedUser._id}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch messages');
          }
          return response.json();
        })
        .then(data => {
          setMessages(data);
        })
        .catch(error => {
          setError(error.message);
        });
    }
  }, [selectedUser]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/otherusers/${userID}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch other users');
        }
        return response.json();
      })
      .then(data => {
        setUsers(data);
        const avatars = {};
        data.forEach(user => {
          avatars[user._id] = avatarImages[Math.floor(Math.random() * avatarImages.length)];
        });
        setUserAvatars(avatars);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  const handleSendMessage = () => {
    axios.post(`http://localhost:5000/api/sendmsg/${userID}/${selectedUser._id}`, {
      message: newMessage
    })
    .then(response => {
      if (response.data.success) {
        throw new Error('Failed to send message');
      }
      setNewMessage('');
    })
    .catch(error => {
      setError(error.message);
    });
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  return (
    <Fragment>
      <Header/>
      <Box sx={{ display: 'flex', height: 'calc(100vh - 64px)', overflow: 'hidden',marginTop:'4.5%' }}>
      {/* Sidebar */}
      <Box sx={{ flex: 0.9, borderRight: 1, borderColor: 'divider', paddingRight: 2, overflowY: 'auto', maxHeight: '100%', minWidth: '200px' }}>
        <div className="sidebar">
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <List>
            {users.map(user => (
              <ListItem style={{ marginLeft: '2%' }} key={user.email} onClick={() => handleUserSelect(user)} sx={{ borderBottom: '1px solid #eee', padding: '10px 0', cursor: 'pointer' }}>
                <ListItemAvatar sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar alt="User Avatar" src={userAvatars[user._id]} />
                </ListItemAvatar>
                <ListItemText
                  primary={user.firstname + ' ' + user.lastname}
                  secondary={user.email + '  [ ' + user.role + ' ] '}
                  primaryTypographyProps={{ color: 'primary', fontWeight: 'bold' }}
                />
              </ListItem>
            ))}
          </List>
        </div>
      </Box>
      {/* Main chat window */}
      <Box sx={{ flex: 3, paddingLeft: 1, marginRight:0.5, overflowY: 'auto', maxHeight: '100%', height: 'calc(100vh - 64px - 56px)', minWidth: '400px', position: 'relative' }}>
      <Box sx={{ height: 'calc(100% - 56px)', overflowY: 'auto' }}>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {messages.map((message, index) => (
            <ListItem alignItems="flex-start" key={message._id} sx={{ flexDirection: userID === message.senderId ? 'row' : 'row-reverse', justifyContent: 'flex-start', color: userID === message.senderId ? 'text.secondary' : 'text.secondary', backgroundColor: userID === message.senderId ? '#f0f0f0' : '#DEF7E5', borderRadius: '20px', padding: '10px', marginBottom: '10px' }}>
              <ListItemAvatar sx={{ marginLeft: userID === message.senderId ? '0' : '10px', marginRight: userID === message.senderId ? '10px' : '0' }}>
                <Avatar alt="Sender Avatar" src={userAvatars[message.senderId]} />
              </ListItemAvatar>
              <ListItemText
                primary={userID === message.senderId ? 'You' : selectedUser.firstname + ' ' + selectedUser.lastname}
                secondary={
                  <Fragment>
                    <Typography
                      sx={{ display: 'inline', fontSize: 20, fontWeight: 'bold' }}
                      component="span"
                      variant="body2"
                      color={userID === message.senderId ? 'text.primary' : '#1F5357'}
                    >
                      {message.message}
                    </Typography>
                    <br />
                    <Typography
                      sx={{ display: 'inline', fontSize: 10 }}
                      component="span"
                      variant="body2"
                      color={userID === message.senderId ? 'text.secondary' : 'text.secondary'}
                    >
                      {new Date(message.createdAt).toLocaleString()}
                    </Typography>
                  </Fragment>
                }
                sx={{ textAlign: userID === message.senderId ? 'left' : 'right' }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
      {/* Input field for typing and sending messages */}
      <Box sx={{ position: 'absolute', bottom: '0px', right: '0px', width: 'calc(100% - 0px)', backgroundColor: 'white', padding: '10px 10px 0 10px', borderTop: '5px solid #1F5357', display: 'flex', alignItems: 'center' }}>
        <Input
          id="message-input"
          label="Type your message here"
          variant="outlined"
          fullWidth
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          sx={{ marginRight: '10px' }}
        />
        <Button variant="contained" onClick={handleSendMessage} sx={{ backgroundColor: '#128C7E', color: 'white' }}>
          Send
        </Button>
      </Box>
    </Box>
    
    </Box>
    <Footer/>
    
    </Fragment>
  );
};

export default MessagesComponent;
