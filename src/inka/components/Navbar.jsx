import inkaLogo from "../../shared/assets/inkaLogo.svg";
import inkaLogoMobile from "../../shared/assets/inkaLogoMobile.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useLocationInicio } from "../../hooks/useLocationInicio";
import { useAuthStore } from "../../hooks/useAuthStore";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const { showLogo, isScrolled, isAuth } = useLocationInicio();

  const { logoutUser, status } = useAuthStore();

  const { cartTotalQuantity } = useSelector((state) => state.shoppingCart);

  const navigate = useNavigate();

  const [showProfile, setShowProfile] = useState(false);
  const [valueMenuMobile, setValueMenuMobile] = useState(false);

  const logOut = () => {
    logoutUser();
    navigate("/auth/login");
  };

  const showAccout = () => {
    return (
      <div className="bg-[#31241e] bg-opacity-85 rounded-xl w-[150px] absolute top-[72px] right-2 h-[auto] flex flex-col p-[15px]">
        {status === "authenticated" ? (
          <>
            <span className="text-white font-bold text-[16px] w-full text-center pb-[15px] border-b-2">¡Hola, Esaul!</span>
            <NavLink className="text-white text-[14px] lg:text-[16px] w-full font-bold text-center py-[15px] border-b-2">Historial</NavLink>
            <NavLink to={"/auth/login"} onClick={logOut} className="text-white text-[14px] lg:text-[16px] w-full font-bold text-center pt-[15px]">Salir</NavLink>
          </>          
        ) : (
          <NavLink to={"/auth/login"} className="text-white text-[14px] lg:text-[16px] font-bold">Iniciar sesion</NavLink>
        )}
      </div>
    );
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setValueMenuMobile(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    console.log(status);
  }, []);

  const valueShowProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40
       ${
        isScrolled || valueMenuMobile || showLogo
          ? "bg-black bg-opacity-75 lg:bg-black lg:bg-opacity-75"
          : "bg-transparent"
      } `}
    >
      <div
        className={`max-h-[67px] flex items-center py-3.5 px-1.5 relative sm:px-2.5 lg:justify-evenly`}
      >
        <a
          className="cursor-pointer lg:hidden"
          onClick={() => setValueMenuMobile(!valueMenuMobile)}
        >
          <i className="fa-solid fa-bars text-white text-[24px]"></i>
        </a>

        <img
          src={inkaLogoMobile}
          alt="InkaLogoMobile"
          className="w-[50px] mx-3 sm:mx-6 sm:w-[55px] lg:mx-0"
        />

        <div
          className={`${
            valueMenuMobile ? "flex" : "hidden"
          } flex-col items-center fixed h-[100vh] w-[100%] bg-black bg-opacity-75 py-[30px] px-[30px] top-[67px] right-0 z-50  lg:flex lg:static lg:h-[auto] lg:p-0 lg:flex-row lg:w-[57%] lg:justify-evenly lg:bg-inherit 2xl:justify-center 2xl:gap-x-32`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-tertiary text-[14px] text-center pb-[15px] w-full border-b-2 lg:p-0 lg:border-0 lg:w-auto "
                : "text-white font-bold text-[14px] text-center pb-[15px] w-full border-b-2 lg:p-0 lg:border-0 lg:w-auto"
            }
            onClick={() => setValueMenuMobile(false)}
          >
            INICIO
          </NavLink>
          <NavLink
            to="/productos"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-tertiary text-[14px] text-center py-[15px] border-b-2 w-full lg:p-0 lg:border-0 lg:w-auto"
                : "text-white font-bold text-[14px] text-center py-[15px] border-b-2 w-full lg:p-0 lg:border-0 lg:w-auto"
            }
            onClick={() => setValueMenuMobile(false)}
          >
            NUESTROS PRODUCTOS
          </NavLink>
          <NavLink
            to="/contactanos"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-tertiary text-[14px] text-center py-[15px] w-full border-b-2 lg:p-0 lg:border-0 lg:w-auto"
                : "text-white font-bold text-[14px] text-center py-[15px] w-full border-b-2 lg:p-0 lg:border-0 lg:w-auto"
            }
            onClick={() => setValueMenuMobile(false)}
          >
            CONTÁCTANOS
          </NavLink>
        </div>
        <div className="search-box flex-1 relative">
          <input
            className="search-input h-[31px] w-[100%] rounded-[30px] text-[13px] px-2 sm:h-[35px] sm:w-[100%] sm:text-[15px] sm:px-4"
            type="text"
            placeholder="Buscar producto"
          />
          <button className="search-btn bg-transparent h-[31px] w-[31px] rounded-[30px] cursor-pointer absolute top-0 right-0 scale-90 sm:h-[35px] sm:w-[35px]">
            <i className="fa-solid fa-magnifying-glass text-black text-[22px] sm:text-[24px]"></i>
          </button>
        </div>
        <div className="flex items-center sm:mx-4">
          <div className="mx-[14px] sm:mx-[14px] lg:mx-[18px]">
            <NavLink
              to={"/shopping"}
              className="none text-white py-[15px] w-full flex justify-center lg:p-0 lg:border-0 lg:w-auto relative"
              onClick={() => setValueMenuMobile(false)}
            >
              <div className="h-[18px] w-[18px] text-[13px] font-bold rounded-full bg-tertiary absolute flex items-center justify-center top-0 right-[-18px] sm:h-[22px] sm:w-[22px] sm:text-[15px] sm:top-[-5px] sm:right-[-24px] lg:top-[-17px] lg:right-[-24px]">
                {cartTotalQuantity}
              </div>
              <i className="fa-solid fa-cart-shopping text-[22px] sm:text-[25px]"></i>
              {/* <img src={shopIcon} alt="shopIcon" /> */}
            </NavLink>
          </div>
          <div className="ms-[11px] sm:ms-[24px]">
            <a
              alt="profileIcon"
              className=" text-white text-center cursor-pointer "
              onClick={valueShowProfile}
            >
              <i className="fa-solid fa-user text-[22px] sm:text-[25px]"></i>
            </a>
          </div>
        </div>
      {showProfile && showAccout()}
      </div>
    </header>
  );
};
