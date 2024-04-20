import inkaLogo from '../../shared/assets/inkaLogo.svg';
import shopIcon from '../../shared/assets/shopIcon.svg';
import menuMobile from '../../shared/assets/menuMobile.svg';
import profileIcon from '../../shared/assets/profileIcon.svg';
import closeIcon from '../../shared/assets/closeIcon.svg';
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setValueMenuMobile(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const valueShowProfile = () => {
    setShowProfile(!showProfile)
  }

  const showMenu = () => {
    setValueMenuMobile(!valueMenuMobile);
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 ${(showLogo || valueMenuMobile) ? "bg-black bg-opacity-75" : (isScrolled ? "bg-black bg-opacity-75" : "bg-transparent")}`}>
      <div className={`my-1 mx-3 max-h-[67px] 2xl:mx-auto flex items-center justify-between md:justify-evenly py-3.5 px-[15px] 2xl:px-0 2xl:py-7 relative`}>
        {/* <img src={valueMenuMobile ? closeIcon : menuMobile} alt="mobileLogo" onClick={showMenu} className='lg:hidden' /> */}
        <a className='lg:hidden' onClick={showMenu}>
          <i className="fa-solid fa-bars  text-white text-[24px]"></i>
        </a>
        <img src={inkaLogo} className='w-[100px] sm:ms-6 sm:me-4 lg:mx-0' alt="inkaLogo" />
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
          {showProfile && showAccout()}

        </div>
        <div className='search-box flex items-center w-[500px]  md:w-[560px] lg:w-[560px] xl:w-[530px] me-[50px] md:mx-[40px] lg:ms-0  lg:me-[0px] xl:me-[50px]'>
            <input 
              className='search-input h-[35px] w-[100%] rounded-[25px] px-4'
              type="text" 
              placeholder='Buscar producto'/>
            <a
             className='search-btn flex justify-center items-center bg-[#000] h-[35px] w-[55px] mx-2  rounded-[10px] cursor-pointer'>
              <i className="fa-solid fa-magnifying-glass text-white text-[24px]"></i>
            </a>
          </div>
        {/* hidden */}
        <div className='flex items-center 2xl:flex 2xl:gap-x-10 sm:mx-4 lg:mx-0'>
          <div className='mx-[14px]'>
            <NavLink
              to={"/shopping"}
              className='none text-white py-[15px] w-full flex justify-center border-b-2 lg:p-0 lg:border-0 lg:w-auto relative'
              onClick={() => setValueMenuMobile(false)}
            >
              <div className='h-[25px] w-[25px] text-[14px] font-bold rounded-full bg-tertiary absolute flex items-center justify-center top-[-10px] right-[-27px]'>
                {cartTotalQuantity}
              </div>
              <i className="fa-solid fa-cart-shopping text-[25px]"></i>
              {/* <img src={shopIcon} alt="shopIcon" /> */}
            </NavLink>
          </div>
          <div className='ms-[24px]'>
            <a
              alt="profileIcon"
              className='w-[36px] text-white text-center pt-[15px] cursor-pointer lg:p-0 lg:border-0 lg:w-auto'
              onClick={valueShowProfile}>
              <i className="fa-solid fa-user text-[25px]"></i>
            </a>
            {/* <img
              src={profileIcon}
              alt="profileIcon"
              className='cursor-pointer w-[36px] text-center pt-[15px] lg:p-0 lg:border-0 lg:w-auto'
              onClick={valueShowProfile}
            /> */}
          </div>
        </div>
      </div>
    </header>
  )
}
