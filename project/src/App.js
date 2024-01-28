import React from 'react';
import './App.css';
import SignUp from './SignUp';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Dashbord from './componant/Dashbord';
import Users from './Users';
import UpdateUser from './componant/UpdateUser';
import CreateUser from './CreateUser';
import BN from './componant/bndoc';
import Wallpaper from './componant/Wall'; // Import your background component

export default function App() {
  return (
    <div>
      <div className='wall'>
      {/*<Wallpaper />*/}
       {/* Use the Background component as a background */}
      </div>
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashbord />}>
          <Route path="user" element={<Users />} />
          <Route path="user/:id" element={<UpdateUser />} />
          <Route path="users/create" element={<CreateUser />} />
        </Route>
        <Route path='/brain' element={<BN/>} />
      </Routes>
    </div>
  );
}
