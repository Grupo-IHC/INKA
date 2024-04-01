import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
export const useLocationInicio = () => {
  const location = useLocation();
  const [showLogo, setShowLogo] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setShowLogo(location.pathname !== '/')
  }, [location])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return {
    showLogo,
    isScrolled
  }
}
