import "animate.css";
import React, { useEffect } from "react";
import { useState } from "react";

export const ShoppingHistoryPage = () => {
  const [colSpanValue, setColSpanValue] = useState(
    window.innerWidth < 768 ? 3 : 4
  );
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setColSpanValue(window.innerWidth < 768 ? 3 : 4);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

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
          <div className="bg-green-600 px-3 py-3 mb-5 rounded-xl text-sm sm:px-6 md:text-[16px] md:py-4 lg:w-[975px] lg:mx-auto">
            <div className="text-white py-2 flex md:py-3">
              <h3 className="basis-10/12">
                Código de Transacción : <strong>KLA154DA45AS</strong>
              </h3>
              <div className="basis-2/12 flex justify-center items-center">
                <button className="w-12 sm:w-16 md:w-20 m-auto" onClick={toggleVisibility}>
                  <i
                    className={
                      isVisible
                        ? "fa-solid fa-chevron-up"
                        : "fa-solid fa-chevron-down"
                    }
                  ></i>
                </button>
              </div>
            </div>
            {isVisible && (
              <div className="animate__animated animate__fadeInDown">
                <div className="sm:flex sm:items-center sm:flex-row">
                  <div className="sm:basis-2/4 self-center">
                    <h3 className="py-2 text-white md:py-3">
                      Fecha de Compra : 15/02/23
                    </h3>
                    <h3 className="py-2 text-white md:py-3">Tipo de Venta : Delivery</h3>
                  </div>
                  <div className="sm:basis-2/4">
                    <h3 className="py-2 text-white md:py-3">
                      Dirección : AAHH Machu Picchu Mz. X Lote 99 Dpto 1 - Villa
                      El Salvador
                    </h3>
                    <h3 className="py-2 text-white md:py-3">Método de pago : YAPE </h3>
                  </div>
                </div>
                <div className="flex justify-center flex-col py-2 md:py-3">
                  <table className="text-white lg:w-[926px] lg:m-auto">
                    <thead className="">
                      <tr className="bg-red-500">
                        <th className="py-2 font-medium hidden md:block"></th>
                        <th className="w-[35%] py-2 font-semibold md:py-3">
                          <h4>Productos</h4>
                        </th>
                        <th className="py-2 font-semibold md:py-3">
                          <h4>Color</h4>
                        </th>
                        <th className="py-2 font-semibold md:py-3">
                          <h4>Precio</h4>
                        </th>
                        <th className="py-2 font-semibold md:py-3">
                          <h4>Cantidad</h4>
                        </th>
                        <th className="py-2 font-semibold md:py-3">
                          <h4>Importe</h4>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      <tr>
                        <td className="py-2 hidden md:block">
                          <img
                            className="w-24 m-auto"
                            src="src/shared/assets/InicioN1.png"
                            alt=""
                          />
                        </td>
                        <td className="py-2">
                          <h4>Sello Layconsa xd</h4>
                        </td>
                        <td className="py-2">
                          <h4>🔴</h4>
                        </td>
                        <td className="py-2">
                          <h4>S/ 5.8</h4>
                        </td>
                        <td className="py-2">
                          <h4>5</h4>
                        </td>
                        <td className="py-2">
                          <h4>S/ 29</h4>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 hidden md:block">
                          <img
                            className="w-24 m-auto"
                            src="src/shared/assets/InicioN1.png"
                            alt=""
                          />
                        </td>
                        <td className="py-2">
                          <h4>Sello Layconsa xd</h4>
                        </td>
                        <td className="py-2">
                          <h4>🔵</h4>
                        </td>
                        <td className="py-2">
                          <h4>5.8</h4>
                        </td>
                        <td className="py-2">
                          <h4>5</h4>
                        </td>
                        <td className="py-2">
                          <h4>29</h4>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 hidden md:block">
                          <img
                            className="w-24 m-auto"
                            src="src/shared/assets/InicioN1.png"
                            alt=""
                          />
                        </td>
                        <td className="py-2">
                          <h4>Sello Layconsa xd</h4>
                        </td>
                        <td className="py-2">
                          <h4>🟢</h4>
                        </td>
                        <td className="py-2">
                          <h4>5.8</h4>
                        </td>
                        <td className="py-2">
                          <h4>5</h4>
                        </td>
                        <td className="py-2">
                          <h4>29</h4>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 hidden md:block">
                          <img
                            className="w-24 m-auto"
                            src="src/shared/assets/InicioN1.png"
                            alt=""
                          />
                        </td>
                        <td className="py-2">
                          <h4>Sello Layconsa xd</h4>
                        </td>
                        <td className="py-2">
                          <h4>⚫</h4>
                        </td>
                        <td className="py-2">
                          <h4>5.8</h4>
                        </td>
                        <td className="py-2">
                          <h4>5</h4>
                        </td>
                        <td className="py-2">
                          <h4>29</h4>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="font-medium py-2 text-center"
                          rowSpan={4}
                          colSpan={colSpanValue}
                        >
                          <button className="bg-red-600 p-1 rounded-lg">
                            <a
                              href="https://w.app/KzQu4E"
                              target="_blank"
                              className="inline-flex items-center"
                            >
                              <p className="p-2 w-min md:px-3">
                                Descargar Comprobante
                              </p>
                              <i className="fa-solid fa-file-pdf text-lg md:text-xl"></i>
                            </a>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-end font-medium py-2 md:py-3">
                          <h4>Subtotal :</h4>
                        </td>
                        <td className="py-2 md:py-3">
                          <h4>S/ 159</h4>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-end font-medium py-2 md:py-3">
                          <h4>Delivery :</h4>
                        </td>
                        <td className="py-2 md:py-3">
                          <h4>S/ 200</h4>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-end font-medium py-2 md:py-3"> 
                          <h4>Total :</h4>
                        </td>
                        <td className="py-2 md:py-3">
                          <h4>S/ 359</h4>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          <div className="bg-green-600 px-3 py-3 rounded-xl text-sm sm:px-6 md:text-[16px] md:py-4 lg:w-[975px] lg:m-auto">
            <div className="text-white py-2 flex md:py-3">
              <h3 className="basis-10/12">
                Código de Transacción : <strong>KLA154DA45AS</strong>
              </h3>
              <div className="basis-2/12 flex justify-center items-center">
                <button className="w-12 sm:w-16 md:w-20 m-auto" onClick={toggleVisibility}>
                  <i
                    className={
                      isVisible
                        ? "fa-solid fa-chevron-up"
                        : "fa-solid fa-chevron-down"
                    }
                  ></i>
                </button>
              </div>
            </div>
            {isVisible && (
              <div className="animate__animated animate__fadeInDown">
                <div className="sm:flex sm:items-center sm:flex-row">
                  <div className="sm:basis-2/4 self-center">
                    <h3 className="py-2 text-white md:py-3">
                      Fecha de Compra : 15/02/23
                    </h3>
                    <h3 className="py-2 text-white md:py-3">Tipo de Venta : Delivery</h3>
                  </div>
                  <div className="sm:basis-2/4">
                    <h3 className="py-2 text-white md:py-3">
                      Dirección : AAHH Machu Picchu Mz. X Lote 99 Dpto 1 - Villa
                      El Salvador
                    </h3>
                    <h3 className="py-2 text-white md:py-3">Método de pago : YAPE </h3>
                  </div>
                </div>
                <div className="flex justify-center flex-col py-2 md:py-3">
                  <table className="text-white lg:w-[926px] lg:m-auto">
                    <thead className="">
                      <tr className="bg-red-500">
                        <th className="py-2 font-medium hidden md:block"></th>
                        <th className="w-[35%] py-2 font-semibold md:py-3">
                          <h4>Productos</h4>
                        </th>
                        <th className="py-2 font-semibold md:py-3">
                          <h4>Color</h4>
                        </th>
                        <th className="py-2 font-semibold md:py-3">
                          <h4>Precio</h4>
                        </th>
                        <th className="py-2 font-semibold md:py-3">
                          <h4>Cantidad</h4>
                        </th>
                        <th className="py-2 font-semibold md:py-3">
                          <h4>Importe</h4>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      <tr>
                        <td className="py-2 hidden md:block">
                          <img
                            className="w-24 m-auto"
                            src="src/shared/assets/InicioN1.png"
                            alt=""
                          />
                        </td>
                        <td className="py-2">
                          <h4>Sello Layconsa xd</h4>
                        </td>
                        <td className="py-2">
                          <h4>🔴</h4>
                        </td>
                        <td className="py-2">
                          <h4>S/ 5.8</h4>
                        </td>
                        <td className="py-2">
                          <h4>5</h4>
                        </td>
                        <td className="py-2">
                          <h4>S/ 29</h4>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 hidden md:block">
                          <img
                            className="w-24 m-auto"
                            src="src/shared/assets/InicioN1.png"
                            alt=""
                          />
                        </td>
                        <td className="py-2">
                          <h4>Sello Layconsa xd</h4>
                        </td>
                        <td className="py-2">
                          <h4>🔵</h4>
                        </td>
                        <td className="py-2">
                          <h4>5.8</h4>
                        </td>
                        <td className="py-2">
                          <h4>5</h4>
                        </td>
                        <td className="py-2">
                          <h4>29</h4>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 hidden md:block">
                          <img
                            className="w-24 m-auto"
                            src="src/shared/assets/InicioN1.png"
                            alt=""
                          />
                        </td>
                        <td className="py-2">
                          <h4>Sello Layconsa xd</h4>
                        </td>
                        <td className="py-2">
                          <h4>🟢</h4>
                        </td>
                        <td className="py-2">
                          <h4>5.8</h4>
                        </td>
                        <td className="py-2">
                          <h4>5</h4>
                        </td>
                        <td className="py-2">
                          <h4>29</h4>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 hidden md:block">
                          <img
                            className="w-24 m-auto"
                            src="src/shared/assets/InicioN1.png"
                            alt=""
                          />
                        </td>
                        <td className="py-2">
                          <h4>Sello Layconsa xd</h4>
                        </td>
                        <td className="py-2">
                          <h4>⚫</h4>
                        </td>
                        <td className="py-2">
                          <h4>5.8</h4>
                        </td>
                        <td className="py-2">
                          <h4>5</h4>
                        </td>
                        <td className="py-2">
                          <h4>29</h4>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="font-medium py-2 text-center"
                          rowSpan={4}
                          colSpan={colSpanValue}
                        >
                          <button className="bg-red-600 p-1 rounded-lg">
                            <a
                              href="https://w.app/KzQu4E"
                              target="_blank"
                              className="inline-flex items-center"
                            >
                              <p className="p-2 w-min md:px-3">
                                Descargar Comprobante
                              </p>
                              <i className="fa-solid fa-file-pdf text-lg md:text-xl"></i>
                            </a>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-end font-medium py-2 md:py-3">
                          <h4>Subtotal :</h4>
                        </td>
                        <td className="py-2 md:py-3">
                          <h4>S/ 159</h4>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-end font-medium py-2 md:py-3">
                          <h4>Delivery :</h4>
                        </td>
                        <td className="py-2 md:py-3">
                          <h4>S/ 200</h4>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-end font-medium py-2 md:py-3"> 
                          <h4>Total :</h4>
                        </td>
                        <td className="py-2 md:py-3">
                          <h4>S/ 359</h4>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
