import { Routes, Route } from "react-router-dom"
import { HomePage } from "../Pages/HomePage/HomePage"
import { LoginPage } from "../Pages/LoginPage/LoginPage"

export const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/homePage" element={<HomePage/>}/>
            <Route path="/loginPage" element={<LoginPage/>}/>
            <Route path="/RegisterPage"/>
        </Routes>
    )
}