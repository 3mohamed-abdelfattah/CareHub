import TopBar from "./TopBar"
import SideBar from "./SideBar"
//import Users from "../Users"
//import { Route, Routes } from "react-router-dom"
import { Outlet} from "react-router-dom"

export default function Dashbord() {
  return (
    <div>
        <div>
            <TopBar />
            <div className="content-flex">
            <SideBar />
            <div style={{width:'80%'}}>
              <Outlet />
            </div>
            </div>
        </div>
    </div>
  )
}
