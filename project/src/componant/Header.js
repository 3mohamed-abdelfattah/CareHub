import { Link } from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHospital } from '@fortawesome/free-solid-svg-icons'

export default function Header() {


    function HandleLog(){
        window.localStorage.removeItem('email');
        window.location.pathname="/login";
    }

  return (
    <div className="container shadow">
    <nav className="d-flex">
        <div className="b-flex">
        <Link to ="/" className="lol">الدليل الطبي </Link>
        <Link to="/dashboard" className="lol">خدمات</Link>
        <Link to="/dashboard" className="lol">لوحه التحكم</Link>


        </div>



        <div className="d-flex">
            <FontAwesomeIcon icon={faHospital} fade size="2xl" className="nabd" style={{position:"relative",left:"-480px"}}/>
            {!window.localStorage.getItem('email')?
            <><Link to='/register' className="SignDiv-nav">تسجيل</Link>
            <Link to='/login' className="SignDiv-nav">تسجيل دخول</Link>
            </>:<div className="SignDiv-nav" onClick={HandleLog}>تسجيل خروج</div>}
        </div>
    </nav>
    </div>
)}
