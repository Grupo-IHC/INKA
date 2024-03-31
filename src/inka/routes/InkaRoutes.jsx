import { Navigate, Route, Routes} from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { InicioPage } from "../pages/InicioPage/InicioPage"
import { ExplorarPage } from "../pages/ExplorarPage/ExplorarPage"
import { ProductsPage } from "../pages/ProductsPage/ProductsPage"
import { ContactanosPage } from "../pages/ContactanosPage/ContactanosPage"
import { useLocationInicio } from "../../hooks/useLocationInicio"

export const InkaRoutes = () => {
  
  const {showLogo} = useLocationInicio();

  return (
    <>
    <Navbar/>
    <div className={`${showLogo ? 'bg-white home pt-[121px]' : 'bg-inicio bg-no-repeat bg-center-center bg-cover pt-[67px]'}`}>
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
