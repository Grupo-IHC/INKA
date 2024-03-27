import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { InkaRoutes } from "../inka/routes/InkaRoutes"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes/>}/>
      <Route path="/*" element={<InkaRoutes/>}/>
    </Routes>
  )
}
