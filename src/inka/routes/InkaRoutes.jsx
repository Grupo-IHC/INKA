import { Navigate, Route, Routes } from "react-router-dom"
import { InkaPage } from "../pages/InkaPage"

export const InkaRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<InkaPage/>} />
      <Route path="/*" element={<Navigate to="/"/>} />
    </Routes>
  )
}
