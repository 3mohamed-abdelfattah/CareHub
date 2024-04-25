import TopBar from "../AllBars/TopBar"
import SideBar from "../AllBars/SideBar"
import { Outlet } from "react-router-dom"
import React from 'react';
import Footer from "../AllBars/Footer";

export default function Dashbord() {
  return (
    <div>
      <div>
        <TopBar />
        <div className="content-flex">
          <SideBar />
          <div style={{ width: '80%' }}>
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
