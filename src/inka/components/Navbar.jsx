import inkaLogo from '../../shared/assets/inkaLogo.svg';
import shopIcon from '../../shared/assets/shopIcon.svg';
import profileIcon from '../../shared/assets/profileIcon.svg';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0">
      <div className='container mx-auto w-full flex items-center justify-between py-3.5'>
        <img src={inkaLogo} alt="inkaLogo" />
          <Link href="" className='font-bold'>INICIO</Link>
          <Link href="" className='font-bold'>EXPLORAR</Link>
          <Link href="" className='font-bold'>NUESTROS PRODUCTOS</Link>
          <Link href="" className='font-bold'>SOBRE NOSOTROS</Link>
          <Link href="" className='font-bold'>CONTÁCTANOS</Link>
          <Link href="">
            <img src={shopIcon} alt="shopIcon" />
          </Link>
          <Link href="">
            <img src={profileIcon} alt="profileIcon" />
          </Link>
      </div>
    </header>
  )
}
