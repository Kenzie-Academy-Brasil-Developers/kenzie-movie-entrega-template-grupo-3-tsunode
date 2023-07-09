import { Navigate, Outlet } from "react-router-dom"



export const ProtectedRoute = () => {
    const user = localStorage.getItem('@USERID')

    return !user ? <Outlet/> : <Navigate to='/'/>
}