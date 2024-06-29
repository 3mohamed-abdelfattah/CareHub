import React, { useState, useEffect, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
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
import "./RealChat.css";
import { toast } from 'react-toastify';
import Sound from 'react-sound';
import NOtifis from "../Photos/sounds.mp3"
import NOtifie from "../Photos/sounde.mp3"

const avatarImages = [AV1, AV2, AV3, AV4, AV5, AV6, AV7, AV8, AV9];

const MessagesComponent = () => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [userAvatars, setUserAvatars] = useState({});
  const [intervalId, setIntervalId] = useState(null);
  const userID = window.localStorage.getItem('_id');
  const [playStatus, setPlayStatus] = useState(Sound.status.STOPPED);
  const [playStatue, setPlayStatue] = useState(Sound.status.STOPPED);

  useEffect(() => {
    const storedSelectedUser = localStorage.getItem('selectedUser');
    if (storedSelectedUser) {
      const user = users.find(user => user._id === storedSelectedUser);
      setSelectedUser(user);
    }
  }, [users]);

  useEffect(() => {
    if (selectedUser) {
      fetchMessages();
      const id = setInterval(fetchMessages, 1000);
      setIntervalId(id);
    }
  }, [selectedUser]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/otherusers/${userID}`)
      .then(response => {
        if (!response.ok) {
          toast.success('Success to fetch other users', options);
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
        const storedSelectedUser = localStorage.getItem('selectedUser');
        if (storedSelectedUser) {
          const user = data.find(user => user._id === storedSelectedUser);
          setSelectedUser(user);
        }
      })
      .catch(error => {
        setError(error.message);
        toast.error('Failed to fetch other users', options);
        setPlayStatue(Sound.status.PLAYING);
      });
    return () => clearInterval(intervalId);
  }, [userID]);

  const fetchMessages = () => {
    if (selectedUser) {
      fetch(`http://localhost:5000/api/messages/${userID}/${selectedUser._id}`)
        .then(response => {
          if (!response.ok) {
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
  };

  const handleSendMessage = () => {
    if (selectedUser) {
      axios.post(`http://localhost:5000/api/sendmsg/${userID}/${selectedUser._id}`, {
        message: newMessage
      })
        .then(response => {
          if (response.data.success) {
            toast.success('Success to send message', options);
            setPlayStatus(Sound.status.PLAYING);
          }
          setNewMessage('');
        })
        .catch(error => {
          setError(error.message);
          setPlayStatue(Sound.status.PLAYING);
        });
    }
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    localStorage.setItem('selectedUser', user._id);
    window.location.reload(); // Refresh the page after selecting a new user
  };

  const options = {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  }

  return (
    <Fragment>
      <Header />
      <Box sx={{ display: 'flex', height: 'calc(100vh - 64px)', overflow: 'hidden', marginTop: '4.5%' }}>
        <Box sx={{ flex: 0.9, borderRight: 1, borderColor: 'divider', paddingRight: 2, overflowY: 'auto', maxHeight: '100%', minWidth: '200px' }}>
          <div className="sidebar">
            <List>
              <ListItem
                style={{ marginLeft: '2%' }}
                key="all-users"
                sx={{
                  borderBottom: '1px solid #eee',
                  padding: '10px 0',
                  cursor: 'pointer',
                  "&:hover": { backgroundColor: "#f0f0f0" }
                }}
              >
              </ListItem>
              {users.map(user => (
                <ListItem
                  style={{ marginLeft: '2%' }}
                  key={user.email}
                  onClick={() => handleUserSelect(user)}
                  sx={{
                    borderBottom: '1px solid #eee',
                    padding: '10px 0',
                    cursor: 'pointer',
                    "&:hover": { backgroundColor: "#f0f0f0" }
                  }}
                >
                  <NavLink to={`/realtimechat/${user._id}`} style={{ textDecoration: 'none', width: '100%' }}>
                    <ListItemAvatar sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar alt="User Avatar" src={userAvatars[user._id]} />
                      <ListItemText
                        primary={user.firstname + ' ' + user.lastname}
                        secondary={user.email + '  [ ' + user.role + ' ] '}
                        primaryTypographyProps={{ color: 'primary', fontWeight: 'bold' }}
                      />
                    </ListItemAvatar>
                  </NavLink>
                </ListItem>
              ))}
            </List>
          </div>
        </Box>
        <Box sx={{ flex: 3, paddingLeft: 1, marginRight: 0.5, overflowY: 'auto', maxHeight: '100%', height: 'calc(100vh - 64px - 56px)', minWidth: '400px', position: 'relative' }}>
          <Box sx={{ height: 'calc(100% - 56px)', overflowY: 'auto' }}>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
              {messages.length === 0 ? (
                <ListItem sx={{ justifyContent: 'center' }}>
                  <h2 style={{ textAlign: 'center', fontWeight: 'bolder' }}>Currently, there are no messages. Please send a message to the user you want. 📩</h2>
                </ListItem>
              ) : (
                messages.slice().reverse().map((message, index) => ( // Reverse the order of messages here
                  <ListItem alignItems="flex-start" key={message._id} sx={{ flexDirection: userID === message.senderId ? 'row' : 'row-reverse', justifyContent: 'flex-start', color: userID === message.senderId ? 'text.secondary' : 'text.secondary', backgroundColor: userID === message.senderId ? '#DEF7E5' : '#f0f0f0', borderRadius: '20px', padding: '10px', marginBottom: '10px' }}>
                    <ListItemAvatar sx={{ marginLeft: userID === message.senderId ? '0' : '10px', marginRight: userID === message.senderId ? '10px' : '0' }}>
                      <Avatar alt="Sender Avatar" src={userAvatars[message.senderId]} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={userID === message.senderId ? 'You' : selectedUser.firstname + ' ' + selectedUser.lastname}
                      secondary={
                        <Fragment>
                          <Typography
                            className="message-text"
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
                ))
              )}
            </List>
          </Box>
          <Box sx={{ position: 'absolute', bottom: '0px', right: '0px', width: 'calc(100% - 0px)', backgroundColor: 'white', padding: '10px 10px 0 10px', borderTop: '5px solid #1F5357', display: 'flex', alignItems: 'center' }}>
            <div className="messageBox">
              <div className="fileUploadWrapper">
                <label htmlFor="file">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 337 337">
                    <circle
                      strokeWidth="20"
                      stroke="#6c6c6c"
                      fill="none"
                      r="158.5"
                      cy="168.5"
                      cx="168.5"
                    ></circle>
                    <path
                      strokeLinecap="round"
                      strokeWidth="25"
                      stroke="#6c6c6c"
                      d="M167.759 79V259"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeWidth="25"
                      stroke="#6c6c6c"
                      d="M79 167.138H259"
                    ></path>
                  </svg>
                  <span className="tooltip">Add an image</span>
                </label>
                <input type="file" id="file" name="file" />
              </div>
              <input
                required=""
                placeholder="Write here..."
                type="text"
                id="messageInput"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button id="sendButton" onClick={handleSendMessage}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 664 663">
                  <path
                    fill="none"
                    d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
                  ></path>
                  <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="33.67"
                    stroke="#6c6c6c"
                    d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
                  ></path>
                </svg>
              </button>
            </div>
          </Box>
        </Box>
      </Box>
      <Footer />
      <Sound
        url={NOtifis}
        playStatus={playStatus}
        onFinishedPlaying={() => setPlayStatus(Sound.status.STOPPED)}
      />
      <Sound
        url={NOtifie}
        playStatus={playStatue}
        onFinishedPlaying={() => setPlayStatue(Sound.status.STOPPED)}
      />
    </Fragment>
  );
};

export default MessagesComponent;
