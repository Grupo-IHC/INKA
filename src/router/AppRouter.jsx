import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { InkaRoutes } from "../inka/routes/InkaRoutes"
import { useSelector } from "react-redux"

export const AppRouter = () => {

  const {status} = useSelector(state => state.auth);
  localStorage.setItem('authStatus', status);
  const storedAuthStatus = localStorage.getItem('authStatus');
  return (
    <Routes>
      {
        (storedAuthStatus === 'authenticated') 
        ? <Route path="/*" element={<InkaRoutes/>}/>
        : <Route path="/auth/*" element={<AuthRoutes/>}/>   
      }
      <Route path="/*" element={<Navigate to="/auth/login"/>}/>
    </Routes>
  )
}
