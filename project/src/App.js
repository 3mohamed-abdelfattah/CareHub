import React from 'react';
import './App.css';
import SignUp from './componant/AdminBoard/SignUp';
import { Route, Routes } from 'react-router-dom';
import Login from './componant/AdminBoard/Login';
import Home from './componant/Home/Home';
import Dashbord from './componant/AdminBoard/Dashbord';
import Users from './componant/AdminBoard/Users';
import UpdateUser from './componant/AdminBoard/UpdateUser';
import CreateUser from './componant/AdminBoard/CreateUser';

import HealthAWR from './componant/HealthAwernesPAge/HealthAWR';

import AdultAWR from './componant/HealthAwernesPAge/AdultAWR';


import AllDoc from './componant/DoctorsPage/AllDoc';

import SkinDoc from './componant/DoctorsPage/SkinDoc';
import ButeDoc from './componant/DoctorsPage/ButeDoc';
import WomanDoc from './componant/DoctorsPage/WomanDoc';
import BrainDoc from './componant/DoctorsPage/BrainDoc';
import NoseDoc from './componant/DoctorsPage/NoseDoc';
import StomchDoc from './componant/DoctorsPage/StomchDoc';
import HeartDoc from './componant/DoctorsPage/HeartDoc';
import SurgryDoc from './componant/DoctorsPage/SurgryDoc';
import EyeDoc from './componant/DoctorsPage/EyeDoc';
import ChildDoc from './componant/DoctorsPage/ChildDoc';
import FoodDoc from './componant/DoctorsPage/FoodDoc';
import NuturlDoc from './componant/DoctorsPage/NuturlDoc';
import BoneDoc from './componant/DoctorsPage/BoneDoc';
import SpeachDoc from './componant/DoctorsPage/SpeachDoc';
import ChestDoc from './componant/DoctorsPage/ChestDoc';
import GlandsDoc from './componant/DoctorsPage/GlandsDoc';
import UrologistDoc from './componant/DoctorsPage/UrologistDoc';
import PsycholoDoc from './componant/DoctorsPage/PsycholoDoc';
import TeethDoc from './componant/DoctorsPage/TeethDoc';

import Calculator from "./componant/HomeComponents/BMR"
import FoodList from './componant/HomeComponents/FoodCL';
import Company from './componant/HomeComponents/Company';
import Centers from './componant/HomeComponents/Centers';
import Pharmacies from './componant/HomeComponents/Pharmacies';
import Labs from './componant/HomeComponents/Labs';
import Hospital from './componant/HomeComponents/Hospital';
import ARTI from './componant/HomeComponents/ARTI';
import FirstAid from './componant/HealthAwernesPAge/FirstAid';
import WomanAWR from './componant/HealthAwernesPAge/WomanAWR';
import IllAWR from './componant/HealthAwernesPAge/IllAWR';


export default function App() {
  return (
    <div>
      <div className='wall'>
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


        <Route path="/healthawr" element={<HealthAWR/>} />
        <Route path="/adult" element={<AdultAWR/>} />


        <Route path="/doctors" element={<AllDoc/>} />
        <Route path="/skin" element={<SkinDoc/>} />
        <Route path="/bute" element={<ButeDoc/>} />
        <Route path="/woman" element={<WomanDoc/>} />
        <Route path="/brain" element={<BrainDoc/>} />
        <Route path="/nose" element={<NoseDoc/>} />
        <Route path="/stomch" element={<StomchDoc/>} />
        <Route path="/heart" element={<HeartDoc/>} />
        <Route path="/surgry" element={<SurgryDoc/>} />
        <Route path="/eye" element={<EyeDoc/>} />
        <Route path="/food" element={<FoodDoc/>} />
        <Route path="/child" element={<ChildDoc/>} />
        <Route path="/nutural" element={<NuturlDoc/>} />
        <Route path="/bone" element={<BoneDoc/>} />
        <Route path="/speach" element={<SpeachDoc/>} />
        <Route path="/chest" element={<ChestDoc/>} />
        <Route path="/gland" element={<GlandsDoc/>} />
        <Route path="/urologist" element={<UrologistDoc/>} />
        <Route path="/psychological" element={<PsycholoDoc/>} />
        <Route path="/teeth" element={<TeethDoc/>} />

        <Route path="/bmr" element={<Calculator/>} />
        <Route path="/foodclc" element={<FoodList/>} />
        <Route path="/company" element={<Company/>} />
        <Route path="/centers" element={<Centers/>} />
        <Route path="/pharmacies" element={<Pharmacies/>} />
        <Route path="/labs" element={<Labs/>} />
        <Route path="/hospital" element={<Hospital/>} />
        <Route path="/arti" element={<ARTI/>} />
        <Route path="/firstaid" element={<FirstAid/>} />
        <Route path="/womanawr" element={<WomanAWR/>} />
        <Route path="/illawr" element={<IllAWR/>} />

      </Routes>
    </div>
  );
}
