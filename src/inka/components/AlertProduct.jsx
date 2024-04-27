import { useEffect, useState } from "react"

export const AlertProduct = ({ isVisible, onHide }) => {


  useEffect(() => {
    const timer = setTimeout(() => {
      onHide();
    }, 30000);

    return () => clearTimeout(timer);
  }, [isVisible, onHide]);

  return isVisible ? (
    <div className="absolute left-0 right-0 mx-auto flex items-center gap-x-3 bg-green-400 p-[10px] top-[5%] rounded-xl max-w-[fit-content]">
      <i className="fa-solid fa-check text-white"></i>
      <h3 className="text-white" >Producto agregado</h3>
    </div>
  ) : null
}
