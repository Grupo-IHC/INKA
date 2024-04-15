import inkaLogo from '../../shared/assets/inkaLogo.svg';
import shopIcon from '../../shared/assets/shopIcon.svg';
import menuMobile from '../../shared/assets/menuMobile.svg';
import profileIcon from '../../shared/assets/profileIcon.svg';
import closeIcon from '../../shared/assets/closeIcon.svg';
import { NavLink, useNavigate} from 'react-router-dom';
import { useLocationInicio } from '../../hooks/useLocationInicio';
import { useAuthStore } from '../../hooks/useAuthStore';
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const {showLogo, isScrolled, isAuth} = useLocationInicio();

  const {logoutUser, status} = useAuthStore();

  const navigate = useNavigate();

  const [showProfile, setShowProfile] = useState(false);
  const [valueMenuMobile, setValueMenuMobile] = useState(false)

  const logOut =  () => {
    logoutUser();
    navigate("/auth/login") 
  }

  const showAccout = () => {
    return (
      <div className='fixed bg-white absolute top-[79px] right-[21.2%] h-[100px] bg-red-600 p-[15px]'>
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
    <header className={`fixed top-0 left-0 right-0 z-40 ${(showLogo || valueMenuMobile )? 'bg-white' : (isScrolled ? "bg-black bg-opacity-40" : "bg-transparent")}`}>
      <div className={`container mx-auto w-full max-h-[67px] 2xl:max-h-[100px] flex items-center justify-between py-3.5 px-[15px] 2xl:px-0 2xl:py-7 relative`}>
        <img src={inkaLogo} className='w-3/12 md:w-[100px]' alt="inkaLogo" />
        <img src={valueMenuMobile ? closeIcon : menuMobile} alt="mobileLogo" onClick={showMenu} className='lg:hidden' />
        <div className={`${valueMenuMobile ? "flex" : "hidden"} flex-col items-center fixed h-[100vh] w-[100%] bg-[#fff] py-[30px] px-[30px] top-[67px] right-0 z-50 lg:flex lg:static lg:h-[auto] lg:p-0 lg:flex-row lg:w-[80%] lg:justify-between lg:bg-inherit 2xl:justify-center 2xl:gap-x-40`}>
          <NavLink
           to="/" 
           className={({isActive}) => ( isActive ? "font-bold text-tertiary text-[14px] text-center pb-[15px] w-full border-b-2 lg:p-0 lg:border-0 lg:w-auto " :  "font-bold text-[14px] text-center pb-[15px] w-full border-b-2 lg:p-0 lg:border-0 lg:w-auto")}
           onClick={() => setValueMenuMobile(false)}
          >
            INICIO
          </NavLink>
          <NavLink 
            to="/productos" 
            className={({isActive}) => (isActive? "font-bold text-tertiary text-[14px] text-center py-[15px] border-b-2 w-full lg:p-0 lg:border-0 lg:w-auto" : "font-bold text-[14px] text-center py-[15px] border-b-2 w-full lg:p-0 lg:border-0 lg:w-auto")}
            onClick={() => setValueMenuMobile(false)}
          >
            NUESTROS PRODUCTOS
          </NavLink>
          <NavLink
           to="/contactanos" 
           className={({isActive}) => (isActive? "font-bold text-tertiary text-[14px] text-center py-[15px] w-full border-b-2 lg:p-0 lg:border-0 lg:w-auto" :  "font-bold text-[14px] text-center py-[15px] w-full border-b-2 lg:p-0 lg:border-0 lg:w-auto")}
           onClick={() => setValueMenuMobile(false)}
          >
            CONTÁCTANOS
          </NavLink>
          {showProfile && showAccout()}
        </div>
        <div className='hidden 2xl:flex 2xl:gap-x-10'>
            <NavLink
              to={"/shopping"}
              className='py-[15px] w-full flex justify-center border-b-2 lg:p-0 lg:border-0 lg:w-auto' 
              onClick={() => setValueMenuMobile(false)}
            >
              <img src={shopIcon} alt="shopIcon"/>
            </NavLink>
            <img 
              src={profileIcon} 
              alt="profileIcon"
              className='cursor-pointer w-[36px] text-center pt-[15px] lg:p-0 lg:border-0 lg:w-auto'
              onClick={valueShowProfile} 
            />
          </div>
      </div>
    </header>
  )
}
