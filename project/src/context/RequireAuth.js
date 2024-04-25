import { useContext } from "react"
import { User } from "./UserContext"
import { Navigate, Outlet } from "react-router-dom";
import React from 'react';

export default function RequireAuth() {
    const user = useContext(User);
    console.log(User);
    return user.auth.userDetail ? <Outlet /> : <Navigate to="/login" />;
}
