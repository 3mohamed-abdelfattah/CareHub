import { Link } from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHospital } from '@fortawesome/free-solid-svg-icons'


export default function TopBar() {
  return (
    <div className="d-flex container top-bar shadow">
        <FontAwesomeIcon icon={faHospital} fade size="2xl" className="nabd" />
      <Link to="/" className="lol">الصفحه الرئيسيه</Link>
    </div>
  )
}
