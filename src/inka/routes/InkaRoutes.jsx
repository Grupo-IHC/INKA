import { Navigate, Route, Routes} from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { InicioPage } from "../pages/InicioPage/InicioPage"
import { ExplorarPage } from "../pages/ExplorarPage/ExplorarPage"
import { ProductsPage } from "../pages/ProductsPage/ProductsPage"
import { ContactanosPage } from "../pages/ContactanosPage/ContactanosPage"
import { useLocationInicio } from "../../hooks/useLocationInicio"
import { Footer } from "../components/Footer"
import { ProductLayout } from "../pages/ProductsPage/components/ProductLayout"
import { ShoppingCart } from "../pages/ShoppingCart/ShoppingCart"

export const InkaRoutes = () => {
  
  const {showLogo} = useLocationInicio();

  return (
    <>
      <Navbar/>
      <div className={`min-h-screen ${showLogo ? 'bg-white home pt-[67px] 2xl:pt-[112px]' : 'startPage bg-inicio bg-cover bg-no-repeat pt-[67px] 2xl:pt-[112px]'}`}>
        <Routes>
          <Route path="/" element={<InicioPage/>} />
          <Route path="/explorar" element={<ExplorarPage/>} />
          <Route path="/productos" element={<ProductsPage/>} />
          <Route path="/productos/:id" element={<ProductLayout/>} />
          <Route path="/contactanos" element={<ContactanosPage/>} />
          <Route path="/shopping" element={<ShoppingCart/>} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}
