import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage } from "../pages"
import { Navbar } from "../../inka/components/Navbar"

export const AuthRoutes = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="login" element={ <LoginPage/> }/>
        <Route path="register" element={ <RegisterPage/> }/>
        <Route path="/*" element={<Navigate to="/auth/login"/>}/>
      </Routes>
    </>
  )
}
