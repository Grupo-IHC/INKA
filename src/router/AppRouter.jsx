import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { InkaRoutes } from "../inka/routes/InkaRoutes"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { useAuthStore } from "../hooks/useAuthStore"
import { Loader } from "../inka/components/Loader"

export const AppRouter = () => {

  const {status, checkAuthToken} = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, [])

  if (status === 'checking') return <Loader/>

  return (
    <Routes>
        {
          (status === 'authenticated')
          ? <Route path="/*" element={<InkaRoutes/>} />
          : <Route path="/auth/*" element={<AuthRoutes/>} />
        }
        <Route path="/*" element={<Navigate to={'/auth/login'}/>} />
    </Routes>
  )
}
