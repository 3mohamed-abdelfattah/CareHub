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
import { ToastContainer } from 'react-toastify';

import HealthAWR from './componant/HealthAwernesPAge/HealthAWR';

import AdultAWR from './componant/HealthAwernesPAge/AdultAWR';


import AllDoc from './componant/DoctorsPage/AllDoc';

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
import AwramDoc from './componant/DoctorsPage/Awram';


import Calculator from "./componant/HomeComponents/BMR"
import FoodList from './componant/HomeComponents/FoodCL';
import Company from './componant/HomeComponents/Company';
import Centers from './componant/HomeComponents/Centers';
import Pharmacies from './componant/HomeComponents/Pharmacies';
import Labs from './componant/HomeComponents/Labs';
import Hospital from './componant/HomeComponents/Hospital';
import FirstAid from './componant/HealthAwernesPAge/FirstAid';
import WomanAWR from './componant/HealthAwernesPAge/WomanAWR';
import IllAWR from './componant/HealthAwernesPAge/IllAWR';
import AWRChild from './componant/HealthAwernesPAge/AWRChild';
import AWRTeeth from './componant/HealthAwernesPAge/AWRTeeth';
import ArticlesList from './componant/HomeComponents/ARTI';


import LefWarn from './componant/Artifile/LefWarn';
import LowD from './componant/Artifile/LowD';
import Sugerl from './componant/Artifile/Sugerl';
import Stomchar from './componant/Artifile/Stomchar';
import Cancer from './componant/Artifile/Cancer';
import Highd from './componant/Artifile/Highd';
import Arti2 from './componant/Artifile/Arti2';
import Arti3 from './componant/Artifile/Arti3';
import STomASR from './componant/Artifile/STOMRSM';
import StomkDo from './componant/Artifile/StomchDO';
import Stomkasb from './componant/Artifile/Stomkasb';
import Stomkgrs from './componant/Artifile/Stomkgrsom';


import NotifiMED from './componant/HomeComponents/NotifiMed';
import HealthGame from './componant/HomeComponents/HealthyGame';
import Fawry from './componant/Payment/Fawry';


import BoneDetail from './componant/DoctorsPage/DoctorsDetails/BoneDetail';
import AwramDetail from './componant/DoctorsPage/DoctorsDetails/AwramDetail';
import BrainDetail from './componant/DoctorsPage/DoctorsDetails/BrainDetail';
import ChestDetail from './componant/DoctorsPage/DoctorsDetails/ChestDetail';
import ButeDetail from './componant/DoctorsPage/DoctorsDetails/ButeDetail';
import ChildDetail from './componant/DoctorsPage/DoctorsDetails/ChildDetail';
import EyeDetail from './componant/DoctorsPage/DoctorsDetails/EyeDetail';
import FoodDetail from './componant/DoctorsPage/DoctorsDetails/FoodDetail';
import GlandsDetail from './componant/DoctorsPage/DoctorsDetails/GlandsDetail';
import TeethDetail from './componant/DoctorsPage/DoctorsDetails/TeethDetail';
import HeartDetail from './componant/DoctorsPage/DoctorsDetails/HeartDetail';
import NoseDetail from './componant/DoctorsPage/DoctorsDetails/NoseDetail';
import NuturlDetail from './componant/DoctorsPage/DoctorsDetails/NuturlDetail';
import PsycholoDetail from './componant/DoctorsPage/DoctorsDetails/PsycholoDetail';
import SpeachDetail from './componant/DoctorsPage/DoctorsDetails/SpeachDetail';
import StomchDetail from './componant/DoctorsPage/DoctorsDetails/StomchDetail';
import SurgryDetail from './componant/DoctorsPage/DoctorsDetails/SurgryDetail';
import UrologistDetail from './componant/DoctorsPage/DoctorsDetails/UrologistDetail';
import WomanDetail from './componant/DoctorsPage/DoctorsDetails/WomanDetail';



export default function App() {
  return (
    <div>
    <ToastContainer/>
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
        <Route path="/awrchild" element={<AWRChild/>} />
        <Route path="/womanawr" element={<WomanAWR/>} />
        <Route path="/firstaid" element={<FirstAid/>} />
        <Route path="/illawr" element={<IllAWR/>} />
        <Route path="/awrteeth" element={<AWRTeeth/>} />

        <Route path="/doctors" element={<AllDoc/>} />
        <Route path="/awram" element={<AwramDoc/>} />
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
        <Route path="/teeth" element={<TeethDoc/>}/>

        <Route path="teeth/:id" element={<TeethDetail/>}/>
        <Route path="bone/:id" element={<BoneDetail/>}/>
        <Route path="awram/:id" element={<AwramDetail/>}/>
        <Route path="brain/:id" element={<BrainDetail/>}/>
        <Route path="heart/:id" element={<HeartDetail/>}/>
        <Route path="eye/:id" element={<EyeDetail/>}/>
        <Route path="surgry/:id" element={<SurgryDetail/>}/>
        <Route path="speach/:id" element={<SpeachDetail/>}/>
        <Route path="chest/:id" element={<ChestDetail/>}/>
        <Route path="stomch/:id" element={<StomchDetail/>}/>
        <Route path="bute/:id" element={<ButeDetail/>}/>
        <Route path="woman/:id" element={<WomanDetail/>}/>
        <Route path="food/:id" element={<FoodDetail/>}/>
        <Route path="nose/:id" element={<NoseDetail/>}/>
        <Route path="child/:id" element={<ChildDetail/>}/>
        <Route path="urologist/:id" element={<UrologistDetail/>}/>
        <Route path="gland/:id" element={<GlandsDetail/>}/>
        <Route path="nutural/:id" element={<NuturlDetail/>}/>
        <Route path="psychological/:id" element={<PsycholoDetail/>}/>




        <Route path="/bmr" element={<Calculator/>} />
        <Route path="/foodclc" element={<FoodList/>} />
        <Route path="/company" element={<Company/>} />
        <Route path="/centers" element={<Centers/>} />
        <Route path="/pharmacies" element={<Pharmacies/>} />
        <Route path="/labs" element={<Labs/>} />
        <Route path="/hospital" element={<Hospital/>} />
        <Route path="/arti" element={<ArticlesList/>} />

        <Route path="/legwarn" element={<LefWarn/>} />
        <Route path="/lowar" element={<LowD/>} />
        <Route path="/sugerl" element={<Sugerl/>} />
        <Route path="/stomchar" element={<Stomchar/>} />
        <Route path="/cancer" element={<Cancer/>} />
        <Route path="/stomchrsom" element={<STomASR/>} />
        <Route path="/highd" element={<Highd/>} />
        <Route path="/snstake" element={<StomkDo/>} />
        <Route path="/stomchasb" element={<Stomkasb/>} />
        <Route path="/stomchgrso" element={<Stomkgrs/>} />


        <Route path="/artic" element={<ArticlesList/>} />
        <Route path="/arti2" element={<Arti2/>} />
        <Route path="/arti3" element={<Arti3/>} />

        <Route path="/notifimid" element={<NotifiMED/>} />
        <Route path="/gamehl" element={<HealthGame/>} />


        <Route path="/fawry" element={<Fawry/>} />

      </Routes>
    </div>
  );
}
