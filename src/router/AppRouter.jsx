import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { InkaRoutes } from "../inka/routes/InkaRoutes"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { useAuthStore } from "../hooks/useAuthStore"
import { Loader } from "../inka/components/Loader"

export const AppRouter = () => {

  const {status, checkAuthToken} = useAuthStore();

    // useEffect(() => {
    //   checkAuthToken();
    // }, [])

    return (
      <Routes>
          <Route path="/*" element={<InkaRoutes/>} />
          <Route path="/auth/*" element={<AuthRoutes/>} />
      </Routes>
    )
  }
