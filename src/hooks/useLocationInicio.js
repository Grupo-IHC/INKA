import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
export const useLocationInicio = () => {
  const location = useLocation();
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    setShowLogo(location.pathname !== '/')
  }, [location])

  return {
    showLogo
  }
}
