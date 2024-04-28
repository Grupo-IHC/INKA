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
          <div className="bg-green-600 px-3 py-3 rounded-xl">
            <div className="text-xs sm:text-sm  text-white py-2 flex">
              <h3 className="basis-10/12">
                Código de Transacción: <strong>KLA154DA45AS</strong>
              </h3>
              <div className="basis-2/12 flex justify-center items-center">
                <button className="w-12 m-auto" onClick={toggleVisibility}>
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
              <div className="text-xs sm:text-sm animate__animated animate__fadeInDown">
                <div className="sm:flex sm:items-center sm:flex-row">
                  <div className="sm:basis-2/4 self-center">
                    <h3 className="py-2 text-white">
                      Fecha de Compra: 15/02/23
                    </h3>
                    <h3 className="py-2 text-white">Tipo de Venta: Delivery</h3>
                  </div>
                  <div className="sm:basis-2/4">
                    <h3 className="py-2 text-white">
                      Dirección: AAHH Machu Picchu Mz. X Lote 99 Dpto 1 - Villa
                      El Salvador
                    </h3>
                    <h3 className="py-2 text-white">Método de pago: YAPE </h3>
                  </div>
                </div>
                <div className="flex justify-center flex-col py-2">
                  <table className="text-white text-lg table-fixed">
                    <thead className="text-sm ">
                      <tr className="bg-red-500">
                        <th className="py-2 font-medium hidden md:block"></th>
                        <th className="w-[40%] text-sm py-2 font-semibold">
                          Producto
                        </th>
                        <th className="text-sm py-2 font-semibold">Color</th>
                        <th className="text-sm py-2 font-semibold">Precio</th>
                        <th className="text-sm py-2 font-semibold">Cantidad</th>
                        <th className="text-sm py-2 font-semibold">Importe</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm text-center">
                      <tr>
                        <td className="py-2 hidden md:block">
                          <img
                            className="w-24"
                            src="src/shared/assets/InicioN1.png"
                            alt=""
                          />
                        </td>
                        <td className="text-sm py-2">Sello Layconsa xd</td>
                        <td className="text-sm py-2">🏳️‍🌈</td>
                        <td className="text-sm py-2">5.8</td>
                        <td className="text-sm py-2">5</td>
                        <td className="text-sm py-2">29</td>
                      </tr>
                      <tr>
                        <td className="py-2 hidden md:block">
                          <img
                            className="w-24"
                            src="src/shared/assets/InicioN1.png"
                            alt=""
                          />
                        </td>
                        <td className="py-2">Sello Layconsa xd</td>
                        <td className="py-2">🏳️‍🌈</td>
                        <td className="py-2">5.8</td>
                        <td className="py-2">5</td>
                        <td className="py-2">29</td>
                      </tr>
                      <tr>
                        <td className="py-2 hidden md:block">
                          <img
                            className="w-24"
                            src="src/shared/assets/InicioN1.png"
                            alt=""
                          />
                        </td>
                        <td className="py-2">Sello Layconsa xd</td>
                        <td className="py-2">🏳️‍🌈</td>
                        <td className="py-2">5.8</td>
                        <td className="py-2">5</td>
                        <td className="py-2">29</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 hidden md:block">
                          <img
                            className="w-24"
                            src="src/shared/assets/InicioN1.png"
                            alt=""
                          />
                        </td>
                        <td className="py-2">Sello Layconsa xd</td>
                        <td className="py-2">🏳️‍🌈</td>
                        <td className="py-2">5.8</td>
                        <td className="py-2">5</td>
                        <td className="py-2">29</td>
                      </tr>
                      <tr>
                        <td
                          className="font-medium py-1.5 text-center"
                          rowSpan={4}
                          colSpan={colSpanValue}
                        >
                          <button className="bg-red-600 p-1 rounded-lg">
                            <a
                              href="https://w.app/KzQu4E"
                              target="_blank"
                              className="inline-flex items-center"
                            >
                              <p className="text-xs p-2 w-min">
                                Descargar Comprobante
                              </p>
                              <i className="fa-solid fa-file-pdf text-lg"></i>
                            </a>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-end font-medium py-2">
                          Subtotal :{" "}
                        </td>
                        <td className="py-1.5">159</td>
                      </tr>
                      <tr>
                        <td className="text-end font-medium py-2">
                          Delivery :{" "}
                        </td>
                        <td className="py-1.5">200</td>
                      </tr>
                      <tr>
                        <td className="text-end font-medium py-2">Total : </td>
                        <td className="py-1.5">359</td>
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
