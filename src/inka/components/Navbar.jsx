import inkaLogo from '../../shared/assets/inkaLogo.svg';
import shopIcon from '../../shared/assets/shopIcon.svg';
import profileIcon from '../../shared/assets/profileIcon.svg';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className='container mx-auto w-full flex items-center justify-between py-3.5'>
        <img src={inkaLogo} alt="inkaLogo" />
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
