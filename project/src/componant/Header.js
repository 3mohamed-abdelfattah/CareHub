import { Link } from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHospital } from '@fortawesome/free-solid-svg-icons'
import PG1 from "./Photos/PG1.jpg"


export default function Header() {


    function HandleLog(){
        window.localStorage.removeItem('email');
        window.location.pathname="/login";
    }

  return (
    <div className="d-flex container top-bar shadow" style={{ backgroundImage:`url(${PG1})` }}>
        <FontAwesomeIcon icon={faHospital} fade size="2xl" className="nabd1" />
        <div>
            
        </div>
        <Link to ="/" className="lol">الدليل الطبي </Link>
        <Link to="/dashboard" className="lol">لوحه التحكم</Link>
        <Link to="/dashboard" className="lol">خدمات</Link>
        {!window.localStorage.getItem('email')?
            <><Link to='/register' className="lol">تسجيل</Link>
            <Link to='/login' className="lol">تسجيل دخول</Link>
            </>:<div className="lol" onClick={HandleLog}>تسجيل خروج</div>}

    </div>
)}
