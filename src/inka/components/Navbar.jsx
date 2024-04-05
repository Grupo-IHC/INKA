import inkaLogo from '../../shared/assets/inkaLogo.svg';
import shopIcon from '../../shared/assets/shopIcon.svg';
import profileIcon from '../../shared/assets/profileIcon.svg';
import { NavLink} from 'react-router-dom';
import { useLocationInicio } from '../../hooks/useLocationInicio';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/auth/authSlice';

export const Navbar = () => {
  const {showLogo, isScrolled} = useLocationInicio();

  const dispatch = useDispatch();

  const logoutAccount = () => {
    dispatch(logout());
  }
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-40 max-h-[67px] 2xl:max-h-[112px] ${showLogo ? 'bg-white' : (isScrolled ? "bg-black bg-opacity-40" : "bg-transparent")}`}>
      <div className={`container mx-auto w-full flex items-center justify-center gap-x-10 py-3.5 px-10 2xl:px-0 2xl:py-7`}>
        <img src={inkaLogo} className='w-1/12' alt="inkaLogo" />
        <NavLink
         to="/" 
         className={({isActive}) => (isActive? "font-bold text-tertiary" : "font-bold")}
        >
          INICIO
        </NavLink>
        <NavLink 
          to="/explorar" 
          className={({isActive}) => (isActive? "font-bold text-tertiary" : "font-bold")}
        >
          EXPLORAR
        </NavLink>
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
        <NavLink href="">
          <img src={profileIcon} alt="profileIcon" />
        </NavLink>
        {/* <span
          onClick={logoutAccount}
          className='cursor-pointer font-bold'
        >
          salir
        </span> */}
      </div>
    </header>
  )
}
