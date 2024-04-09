import inkaLogo from '../../shared/assets/inkaLogo.svg';
import shopIcon from '../../shared/assets/shopIcon.svg';
import profileIcon from '../../shared/assets/profileIcon.svg';
import { NavLink, useNavigate} from 'react-router-dom';
import { useLocationInicio } from '../../hooks/useLocationInicio';
import { useAuthStore } from '../../hooks/useAuthStore';
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const {showLogo, isScrolled} = useLocationInicio();

  const {logoutUser, status} = useAuthStore();

  const navigate = useNavigate();

  const [showProfile, setShowProfile] = useState(false)

  const logOut =  () => {
    logoutUser();
    navigate("/auth/login") 
  }

  const showAccout = () => {
    return (
      <div className='fixed bg-white absolute top-[79px] right-[21.2%] rigth-0 h-[100px] bg-red-600 p-[15px]'>
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
    <header className={`fixed top-0 left-0 right-0 z-40 max-h-[67px] 2xl:max-h-[112px] ${showLogo ? 'bg-white' : (isScrolled ? "bg-black bg-opacity-40" : "bg-transparent")}`}>
      <div className={`container mx-auto w-full flex items-center justify-center gap-x-10 py-3.5 px-10 2xl:px-0 2xl:py-7 relative`}>
        <img src={inkaLogo} className='w-1/12' alt="inkaLogo" />
        <NavLink
         to="/" 
         className={({isActive}) => (isActive? "font-bold text-tertiary" : "font-bold")}
        >
          INICIO
        </NavLink>
        {/* <NavLink 
          to="/explorar" 
          className={({isActive}) => (isActive? "font-bold text-tertiary" : "font-bold")}
        >
          EXPLORAR
        </NavLink> */}
        <NavLink 
          to="/productos" 
          className={({isActive}) => (isActive? "font-bold text-tertiary" : "font-bold")}
        >
          NUESTROS PRODUCTOS
        </NavLink>
        <NavLink
         to="/contactanos" 
         className={({isActive}) => (isActive? "font-bold text-tertiary" : "font-bold")}
        >
          CONTÁCTANOS
        </NavLink>
        <NavLink
          to={"/shopping"}
        >
          <img src={shopIcon} alt="shopIcon" />
        </NavLink>
        <img 
            src={profileIcon} 
            alt="profileIcon"
            className='cursor-pointer'
            onClick={valueShowProfile} 
          />
        {showProfile && showAccout()}
      </div>
    </header>
  )
}
