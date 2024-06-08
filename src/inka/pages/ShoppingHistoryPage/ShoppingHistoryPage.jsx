import "animate.css";
import { useEffect } from "react";
import { useState } from "react";
import { useInkaStore } from "../../../hooks/useInkaStore";
import { Loader } from '../../components/Loader'

export const ShoppingHistoryPage = () => {

  const {loading, getHistoryShopping} =useInkaStore();

  const [historyShopping, setHistoryShopping] = useState([]);

  // const [colSpanValue, setColSpanValue] = useState(
  //   window.innerWidth < 768 ? 3 : 4
  // );
  // const [isVisible, setIsVisible] = useState(true);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setColSpanValue(window.innerWidth < 768 ? 3 : 4);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  useEffect(() => {
    const fetchHistoryShopping = async() => {
      const data = await getHistoryShopping();
      setHistoryShopping(data);
    };
    fetchHistoryShopping();
  }, []);

  // const toggleVisibility = () => {
  //   setIsVisible(!isVisible);
  // };

  if(loading) return <Loader/>

  return (
    <>
      <div className="px-4 sm:px-6">
        <div className="py-5 text-2xl sm:py-8  md:text-3xl">
          <h1 className="font-bold animate__animated animate__fadeInDown">
            Mis compras
            <i className="ps-3 md:ps-5 fa-solid fa-bag-shopping"></i>
          </h1>
        </div>
        <div className="flex flex-col">
          {
            historyShopping.length > 0 ? historyShopping.map((item,index) => (
              <div key={index} className="bg-primary px-3 py-3 mb-5 rounded-xl text-sm sm:px-6 md:text-[16px] md:py-4 lg:w-[975px] lg:mx-auto xl:w- [1400px]">
              <div className="text-black py-2 flex md:py-3">
                <h3 className="basis-10/12">
                  Código de Transacción : <strong>{item.id}</strong>
                </h3>
              </div>
              <div className="animate__animated animate__fadeInDown">
                <div className="sm:flex sm:items-center sm:flex-row">
                  <div className="sm:basis-2/4 self-center">
                    <h3 className="py-2 text-black md:py-3">
                      Fecha de Compra : 15/02/23
                    </h3>
                    <h3 className="py-2 text-black md:py-3">Tipo de Venta : {item.type_delivery}</h3>
                  </div>
                  <div className="sm:basis-2/4">
                    <h3 className="py-2 text-black md:py-3">
                      Dirección : {item.address}
                    </h3>
                    <h3 className="py-2 text-black md:py-3">Método de pago : {item.method_payment} </h3>
                  </div>
                </div>
              </div>
            </div>
            )) :
            <h3>No tienes compras</h3>
          }
        </div>
      </div>
    </>
  );
};
