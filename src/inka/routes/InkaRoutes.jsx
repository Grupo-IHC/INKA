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
import { ProductPageEdit } from "../pages/ProductsPage/components/ProductPageEdit"
import { WhatsAppContact } from "../components/WhatsAppContact"
import { ShoppingHistoryPage } from "../pages/ShoppingHistoryPage/ShoppingHistoryPage"

export const InkaRoutes = () => {
  
  const {showLogo} = useLocationInicio();

  return (
    <>
      <Navbar/>
      {/* <div className={`min-h-screen ${showLogo ? 'bg-white home pt-[67px] 2xl:pt-[112px]' : 'startPage bg-mobile bg-contain lg:bg-inicio pt-[67px] 2xl:pt-[112px]'}`}> */}
      <div className={`Home flex flex-col ${showLogo ? "pt-[67px] lg:min-h-[calc(100vh-67px-100px)] 2xl:min-h-[calc(100vh-100px-67px)]": ''}`}>
        <Routes>
          <Route path="/" element={<InicioPage/>} />
          <Route path="/explorar" element={<ExplorarPage/>} />
          <Route path="/productos" element={<ProductsPage/>} />
          <Route path="/productos/typeproduct/:id" element={<ProductLayout/>}/>
          <Route path="/productos/:id" element={<ProductPageEdit/>} />
          <Route path="/contactanos" element={<ContactanosPage/>} />
          <Route path="/shopping" element={<ShoppingCart/>} />
          <Route path="/shopping-history" element={<ShoppingHistoryPage/>} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </div>
      <WhatsAppContact/>
      <Footer/>
    </>
  )
}
