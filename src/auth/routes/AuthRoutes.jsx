import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage} from "../pages"
import { Navbar } from "../../inka/components/Navbar"
import { RestorePasswordPage } from "../pages/RestorePasswordPage"
import { ConfirmPasswordPage } from "../pages/ConfirmPasswordPage"
import { NewPasswordPage } from "../pages/NewPasswordPage"

export const AuthRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={ <LoginPage/> }/>
        <Route path="register" element={ <RegisterPage/> }/>
        <Route path="restore-password" element={ <RestorePasswordPage/> }/>
        <Route path="confirm-password" element={ <ConfirmPasswordPage/> }/>
        <Route path="new-password" element={ <NewPasswordPage/> }/>
        <Route path="/*" element={<Navigate to="/auth/login"/>}/>
      </Routes>
    </>
  )
}
