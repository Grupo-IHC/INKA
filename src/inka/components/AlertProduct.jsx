import { useEffect, useState } from "react"

export const AlertProduct = ({ isVisible, onHide }) => {


  useEffect(() => {
    const timer = setTimeout(() => {
      onHide(); 
    }, 4000);

    return () => clearTimeout(timer);
  }, [isVisible, onHide]);

  return isVisible ? (
    <div className="swings fixed top-20 left-[100%] w-[210px]  mx-auto flex items-center gap-x-3 bg-green-400 p-[10px]  rounded-xl ">
      <i className="fa-solid fa-check text-white"></i>
      <h3 className="text-white" >Producto agregado</h3>
    </div>
  ) : null
}
