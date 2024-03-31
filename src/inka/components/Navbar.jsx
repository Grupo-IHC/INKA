import inkaLogo from '../../shared/assets/inkaLogo.svg';
import shopIcon from '../../shared/assets/shopIcon.svg';
import profileIcon from '../../shared/assets/profileIcon.svg';
import { NavLink} from 'react-router-dom';
import { useLocationInicio } from '../../hooks/useLocationInicio';

export const Navbar = () => {
  const {showLogo} = useLocationInicio();
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${showLogo ? 'bg-white' : 'bg-transparent'}`}>
      <div className={`container mx-auto w-full flex items-center ${showLogo ? "justify-between" : "justify-center gap-x-14"} py-3.5 px-16 2xl:px-0`}>
        {showLogo && <img src={inkaLogo} alt="inkaLogo" />}
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
        <NavLink href="">
          <img src={shopIcon} alt="shopIcon" />
        </NavLink>
        <NavLink href="">
          <img src={profileIcon} alt="profileIcon" />
        </NavLink>
      </div>
    </header>
  )
}
