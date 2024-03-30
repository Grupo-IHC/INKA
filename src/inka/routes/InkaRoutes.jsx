import { Navigate, Route, Routes } from "react-router-dom"
import { InkaPage } from "../pages/InkaPage"
import { Navbar } from "../components/Navbar"
import { InicioPage } from "../pages/InicioPage/InicioPage"
import { ExplorarPage } from "../pages/ExplorarPage/ExplorarPage"
import { ProductsPage } from "../pages/ProductsPage/ProductsPage"
import { ContactanosPage } from "../pages/ContactanosPage/ContactanosPage"

export const InkaRoutes = () => {
  return (
    <>
    <Navbar/>
    <div className='home pt-[121px]'>
      <Routes>
        <Route path="/" element={<InicioPage/>} />
        <Route path="/explorar" element={<ExplorarPage/>} />
        <Route path="/productos" element={<ProductsPage/>} />
        <Route path="/contactanos" element={<ContactanosPage/>} />
        <Route path="/*" element={<Navigate to="/"/>} />
      </Routes>
    </div>
    </>
  )
}
