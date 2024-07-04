import "animate.css";
import { useEffect } from "react";
import { useState } from "react";
import { useInkaStore } from "../../../hooks/useInkaStore";
import { Loader } from '../../components/Loader'

export const ShoppingHistoryPage = () => {

  const {loading, getHistoryShopping} =useInkaStore();

  const [historyShopping, setHistoryShopping] = useState([]);


  useEffect(() => {
    const fetchHistoryShopping = async() => {
      const data = await getHistoryShopping();
      setHistoryShopping(data);
    };
    fetchHistoryShopping();
  }, []);


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
                  <strong>Código de Transacción :</strong> {item.id}
                </h3>
              </div>
              <div className="animate__animated animate__fadeInDown">
                <div className="sm:flex sm:flex-row">
                  <div className="sm:basis-2/4 self-center">
                    <h3 className="py-2 text-black md:py-3"><strong>Tipo de Venta</strong> : {item.type_delivery}</h3>
                    <h3 className="py-2 text-black md:py-3">
                    <strong>Dirección</strong> : {item.address}
                    </h3>
                  </div>
                  <div className="sm:basis-2/4">
                    <h3 className="py-2 text-black md:py-3"><strong>Método de pago</strong> : {item.method_payment} </h3>
                    <h3 className="py-2 text-black md:py-3">
                    <strong>Cantidad</strong> : {item.quantity}
                    </h3>
                  </div>
                  <div className="sm:basis-2/4">
                    <h3 className="py-2 text-black md:py-3"><strong>Método de pago</strong> : S/ {item.price.toFixed(2)} </h3>
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
