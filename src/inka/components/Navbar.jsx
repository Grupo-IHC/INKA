import inkaLogo from '../../shared/assets/inkaLogo.svg';
import inkaLogoMobile from '../../shared/assets/inkaLogoMobile.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { useLocationInicio } from '../../hooks/useLocationInicio';
import { useAuthStore } from '../../hooks/useAuthStore';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const Navbar = () => {
  const { showLogo, isScrolled, isAuth } = useLocationInicio();

  const { logoutUser, status } = useAuthStore();

  const { cartTotalQuantity } = useSelector(state => state.shoppingCart);

  const navigate = useNavigate();

  const [showProfile, setShowProfile] = useState(false);
  const [valueMenuMobile, setValueMenuMobile] = useState(false)

  const logOut = () => {
    logoutUser();
    navigate("/auth/login")
  }

  const showAccout = () => {
    return (
      <div className=' bg-white absolute top-[72px] right-[0%] h-[auto] p-[15px]'>
        {
          (status === "authenticated")
            ? <small
              onClick={logOut}
            >
              Salir
            </small>
            : <NavLink
              to={"/auth/login"}
            >
              Logueate
            </NavLink>
        }
      </div>
    )
  }

  useEffect(() => {
    console.log(status);
  }, [])


  const valueShowProfile = () => {
    setShowProfile(!showProfile)
  }


  return (
    <header className={`fixed top-0 left-0 right-0 z-40 ${(isScrolled || valueMenuMobile) ? "bg-black bg-opacity-75" : "bg-transparent"}`}>
      <div className='max-h-[67px] py-3.5 px-[15px] flex items-center gap-x-6'>
        <div className='flex items-end gap-x-2 w-[20%]'>
          <a className='lg:hidden' onClick={() => setValueMenuMobile(!valueMenuMobile)}>
            <i className="fa-solid fa-bars text-white text-[30px]"></i>
          </a>
          <img src={inkaLogoMobile} alt="InkaLogoMobile" />
        </div>
        <div className={`${valueMenuMobile ? "flex" : "hidden"} flex-col items-center fixed h-[100vh] w-[100%] bg-black bg-opacity-75 py-[30px] px-[30px] top-[67px] right-0 z-50 lg:flex lg:static lg:h-[auto] lg:p-0 lg:flex-row lg:w-[80%] lg:justify-evenly lg:bg-inherit 2xl:justify-center 2xl:gap-x-40`}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "font-bold text-tertiary text-[14px] text-center pb-[15px] w-full border-b-2 lg:p-0 lg:border-0 lg:w-auto " : "text-white font-bold text-[14px] text-center pb-[15px] w-full border-b-2 lg:p-0 lg:border-0 lg:w-auto")}
            onClick={() => setValueMenuMobile(false)}
          >
            INICIO
          </NavLink>
          <NavLink
            to="/productos"
            className={({ isActive }) => (isActive ? "font-bold text-tertiary text-[14px] text-center py-[15px] border-b-2 w-full lg:p-0 lg:border-0 lg:w-auto" : "text-white font-bold text-[14px] text-center py-[15px] border-b-2 w-full lg:p-0 lg:border-0 lg:w-auto")}
            onClick={() => setValueMenuMobile(false)}
          >
            NUESTROS PRODUCTOS
          </NavLink>
          <NavLink
            to="/contactanos"
            className={({ isActive }) => (isActive ? "font-bold text-tertiary text-[14px] text-center py-[15px] w-full border-b-2 lg:p-0 lg:border-0 lg:w-auto" : "text-white font-bold text-[14px] text-center py-[15px] w-full border-b-2 lg:p-0 lg:border-0 lg:w-auto")}
            onClick={() => setValueMenuMobile(false)}
          >
            CONTÁCTANOS
          </NavLink>
          <div className='profile-box py-[15px] w-full text-center'>
            <i className="fa-solid fa-user text-[25px] text-white"></i>
          </div>
          {showProfile && showAccout()}

        </div>
        <div className='flex items-end justify-end gap-x-2 w-[80%]'>
          <div className='search-box relative'>
            <input 
              className='search-input rounded-[25px] pl-[35px] py-[5px] pr-[15px] w-[auto] max-w-[200px]'
              type="text" 
              placeholder='Buscar producto'/>
            <i className="fa-solid fa-magnifying-glass text-gray text-[20px] absolute left-2 top-2"></i>
          </div>
          <div className='cart-box flex items-center'>
            <i className="fa-solid fa-cart-shopping text-[28px] text-white"></i>

            {/* <NavLink
              to={"/shopping"}
              className='text-white relative'
              onClick={() => setValueMenuMobile(false)}
            >
              <div className='h-[25px] w-[25px] text-[14px] font-bold rounded-full bg-tertiary absolute flex items-center justify-center top-[-10px] right-[-27px]'>
                {cartTotalQuantity}
              </div>
              <i className="fa-solid fa-cart-shopping text-[25px]"></i>
            </NavLink> */}
          </div>
        </div>
      </div>
    </header>
  )
}
