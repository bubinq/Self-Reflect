import { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"

export const PrivateGuard = () => {
    const {user} = useContext(AuthContext);
    if (!user.createdAt) {
        return <Navigate to="/login"></Navigate>
    } 
    return (
        <Outlet></Outlet>
    )
}