import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
export const useLocationInicio = () => {
  const location = useLocation();
  const [showLogo, setShowLogo] = useState(true);
  const [isAuth, setIsAuth] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    setShowLogo(location.pathname !== '/')
    setIsAuth(location.pathname !== '/auth/login' && location.pathname !== '/auth/register');
  }, [location])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
      setScrollPosition(scrollPosition);
    };

    window.addEventListener('scroll', handleScroll);
 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return {
    showLogo,
    isScrolled,
    scrollPosition,
    isAuth
  }
}
